import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';
const loadBuiltin = createRequire(import.meta.url);

function loadAction(env = { ZOHO_EMAIL: "smtp-account@example.com", ZOHO_APP_PASSWORD: "test-only" }) {
  const transports = [];
  const messages = [];
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const source = fs.readFileSync(file, 'utf8');
    const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
    const compiledModule = { exports: {} };
    const imports = (name) => {
      if (name === 'nodemailer') return { createTransport: (config) => { transports.push(config); return { verify: async () => {}, sendMail: async (message) => messages.push(message) }; } };
      if (name === 'next/headers') return { headers: async () => new Headers({ 'user-agent': 'Compliance test' }) };
      if (name.startsWith('@/')) return load(name.replace('@/', '') + '.ts');
      return loadBuiltin(name);
    };
    const context = { module: compiledModule, exports: compiledModule.exports, require: imports, console, process: { env, cwd: () => process.cwd() } };
    vm.runInNewContext(js, context, { filename: file });
    cache.set(file, compiledModule.exports);
    return compiledModule.exports;
  }
  return { action: load('app/actions/contact.ts'), messages, transports };
}
const valid = { name: 'QA <script>', email: 'qa@example.com', company: 'QA', inquiryType: 'hiring', message: 'Test only', termsAccepted: true };

test('contact rejects missing or string assent without sending email', async () => {
  for (const termsAccepted of [undefined, false, 'true']) {
    const { action, messages } = loadAction();
    assert.equal((await action.submitContactForm({ ...valid, termsAccepted })).success, false);
    assert.equal(messages.length, 0);
  }
});
test('company is mandatory for hiring but optional for candidate inquiry', async () => {
  const { action, messages } = loadAction();
  assert.equal((await action.submitContactForm({ ...valid, company: '' })).success, false);
  assert.equal((await action.submitContactForm({ ...valid, company: '', inquiryType: 'candidate' })).success, true);
  assert.equal(messages.length, 2);
});
test('candidate rejects missing assent and invalid email', async () => {
  const { action, messages } = loadAction();
  assert.equal((await action.submitCandidateForm({ ...valid, termsAccepted: false })).success, false);
  assert.equal((await action.submitCandidateForm({ ...valid, email: 'bad' })).success, false);
  assert.equal(messages.length, 0);
});
test('contact records server assent snapshot and routes notification/replies to Support', async () => {
  const { action, messages } = loadAction();
  assert.equal((await action.submitContactForm({ ...valid, assentEvidence: 'FORGED' })).success, true);
  assert.equal(messages[0].to, 'Support@happyglobalservice.com');
  assert.match(messages[0].html, /Submission ID:/);
  assert.match(messages[0].html, /Accepted at \(UTC\):/);
  assert.match(messages[0].html, /I have read and agree to the Terms of Service/);
  assert.match(messages[0].html, /yolanda-2026-09-04-import-2026-10-30-v1/);
  assert.match(messages[0].html, /Page: \/contact/);
  assert.match(messages[0].html, /QA &lt;script&gt;/);
  assert.doesNotMatch(messages[0].html, /FORGED/);
  assert.equal(messages[1].replyTo, 'Support@happyglobalservice.com');
  assert.equal(messages[0].from.address, 'Support@happyglobalservice.com');
  assert.equal(messages[1].from.address, 'Support@happyglobalservice.com');
  assert.doesNotMatch(messages[1].html, /500\+|95%|30d|echo\.yang/);
});
test('candidate notification retains profile and actual source page', async () => {
  const { action, messages } = loadAction();
  assert.equal((await action.submitCandidateForm({ ...valid, linkedin: 'https://example.com/profile', function: 'cto' })).success, true);
  assert.match(messages[0].html, /https:\/\/example.com\/profile/);
  assert.match(messages[0].html, /Target function/);
  assert.match(messages[0].html, /Page: \/for-candidates/);
  assert.match(messages[0].html, /professional profile link/);
});


test('SMTP supports supplied provider settings with required STARTTLS on port 587', async () => {
  const { action, transports, messages } = loadAction({ SMTP_HOST: 'smtp.example.com', SMTP_PORT: '587', SMTP_SECURE: 'false', SMTP_USER: 'support@example.com', SMTP_PASSWORD: 'test-only' });
  assert.equal((await action.submitContactForm({ ...valid })).success, true);
  assert.equal(transports[0].host, 'smtp.example.com');
  assert.equal(transports[0].port, 587);
  assert.equal(transports[0].secure, false);
  assert.equal(transports[0].requireTLS, true);
  assert.equal(messages.length, 2);
});

test('missing credentials or invalid SMTP settings never report successful delivery', async () => {
  for (const env of [{}, { SMTP_USER: 'test', SMTP_PASSWORD: 'test', SMTP_PORT: 'invalid' }]) {
    const { action, messages, transports } = loadAction(env);
    assert.equal((await action.submitContactForm({ ...valid })).success, false);
    assert.equal(messages.length, 0);
    assert.equal(transports.length, 0);
  }
});


test('receipts provide safe email actions, legal links and plain text with candidate-specific guidance', async () => {
  const { action, messages } = loadAction();
  await action.submitCandidateForm({ ...valid, message: '<img src=x onerror=alert(1)>' });
  assert.match(messages[0].html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(messages[0].html, /Reply to sender/);
  assert.match(messages[0].text, /Assent record:/);
  assert.match(messages[1].html, /href="mailto:Support@happyglobalservice.com/);
  assert.match(messages[1].html, /https:\/\/happyglobalservice.com\/contact/);
  assert.match(messages[1].html, /https:\/\/happyglobalservice.com\/privacy-policy/);
  assert.match(messages[1].text, /We never charge candidates any fee/);
  assert.doesNotMatch(messages[1].html, /tailored proposal|<img src=x|onerror=alert/);
});


test('receipt embeds local JPEG as matching CID MIME part without remote image requests', async () => {
  const { action, messages } = loadAction();
  assert.equal((await action.submitContactForm({ ...valid })).success, true);
  const receipt = messages[1];
  const image = receipt.attachments[0];
  assert.match(receipt.html, new RegExp('src="cid:' + image.cid + '"'));
  assert.doesNotMatch(receipt.html, /src="https?:/);
  assert.equal(image.contentDisposition, 'inline');
  assert.equal(image.contentType, 'image/jpeg');
  assert.equal(image.content[0], 0xff);
  assert.equal(image.content[1], 0xd8);
  const nodemailer = loadBuiltin('nodemailer');
  const transport = nodemailer.createTransport({ streamTransport: true, buffer: true });
  const result = await transport.sendMail(receipt);
  const mime = result.message.toString();
  assert.match(mime, /multipart\/related/);
  assert.ok(mime.includes('Content-ID: <' + image.cid + '>'));
  assert.match(mime, /Content-Disposition: inline/);
  assert.match(mime, /Content-Type: image\/jpeg/);
});
