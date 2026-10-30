import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';
const loadBuiltin = createRequire(import.meta.url);

function loadAction() {
  const messages = [];
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const source = fs.readFileSync(file, 'utf8');
    const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
    const compiledModule = { exports: {} };
    const imports = (name) => {
      if (name === 'nodemailer') return { createTransport: () => ({ verify: async () => {}, sendMail: async (message) => messages.push(message) }) };
      if (name === 'next/headers') return { headers: async () => new Headers({ 'user-agent': 'Compliance test' }) };
      if (name.startsWith('@/')) return load(name.replace('@/', '') + '.ts');
      return loadBuiltin(name);
    };
    const context = { module: compiledModule, exports: compiledModule.exports, require: imports, console, process: { env: { ZOHO_EMAIL: 'smtp-account@example.com', ZOHO_APP_PASSWORD: 'test-only' } } };
    vm.runInNewContext(js, context, { filename: file });
    cache.set(file, compiledModule.exports);
    return compiledModule.exports;
  }
  return { action: load('app/actions/contact.ts'), messages };
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
  assert.match(messages[0].html, /2026-01-01-site-update-2026-10-30-r3/);
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
