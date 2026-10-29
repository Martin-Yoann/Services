# Validation results

Date: 2026-10-29. Validation runs against the dev working tree.

- `npx tsc --noEmit`: passed.
- `npm run build`: passed; 21 static outputs generated, including 18 page routes plus metadata/error routes.
- `node --test tests/contact-compliance.test.mjs`: 5 passed, 0 failed. Tests use mock SMTP and send no live emails. Covers server-side assent enforcement, conditional company requirement, candidate email validation, Support sender/recipient/reply-to, server-generated assent evidence and candidate profile delivery.
- Chromium production-build checks: 15 principal page routes returned HTTP 200; no browser page errors or external resource requests observed. No tested old guarantee, old mailbox, logo-wall title or removed 500+/95% metrics in rendered text.
- Responsive checks: 7 principal routes at 375x812 had no horizontal overflow. Desktop checks used 1440x1000.
- Contact form: initially unchecked; invalid without assent, valid after assent; Company optional for Candidate Inquiry.
- Visual inspection: mobile contact assent and desktop Talent Advisory. Fixed the advisory section to retain its original two-column desktop structure with the three revised metrics on the right.
- `npx eslint app --no-cache`: 2 existing errors in unchanged app/components/Navigation.tsx (react-hooks/set-state-in-effect at lines 54 and 106), plus 4 existing warnings for image tags and an unused Insights import. Changed files have no remaining lint errors. Whole-project lint is not a clean pass.
- `git diff --check`: passed.

Limits: mailbox existence, Support send-as authorization, real delivery, mailbox retention/monitoring, approved full legal documents, China separate consent and a hosted dev preview remain unverified or pending as detailed in remediation-2026-10-29.md. No production deployment was performed.
