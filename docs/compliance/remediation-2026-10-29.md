# Website compliance remediation record

Date: 2026-10-29 (Asia/Shanghai). Target branch: dev. Production branch: main.

## Baseline and legal document history

Baseline commit: d97d527606753d2fcb06f5396b377014908b45eb. Remote annotated backup tag: backup/pre-compliance-2026-10-29.

Original legal page source is archived verbatim in baseline-2026-10-29/. Both pages previously displayed an effective date of January 1, 2026. This development revision retains that date, displays a separate website revision date of October 29, 2026, and identifies the changed scope. The version identifier used in form receipts is 2026-01-01-contact-update-2026-10-29.

## Implemented

1. Removed homepage corporate logo wall and the homepage client testimonial/case carousel; removed all client/candidate quotation displays and testimonial data.
2. Replaced all meetsocial/Pexels hotlinked artwork with original, locally hosted geometric SVGs. Inter/Inter Tight are bundled locally with their OFL licenses. See asset-register.md.
3. Removed public replacement and twelve-month guarantees, including service descriptions, methodology comparison, FAQ, case highlights, SEO and the conflicting Terms section. Retained the Terms disclaimer of guaranteed outcomes. Applied the requested Long-Term Partnership text verbatim.
4. Updated legal/contact identity to Happy Global Inc., official Support mailbox, registered Richardson address; preserved the baseline and displayed revision dates. Full approved replacement legal texts are still outstanding.
5. Unified public marketing metric panels around 20+ Enterprise Clients, 15+ Years Experience and 10+ Markets Covered where requested. Removed other quantitative panels, team placement badges and generic social-profile links. Updated America wording and 45-day executive-search FAQ.
6. Corrected three-location presentation with Richardson registered address, remote San Jose relations and Shanghai local partner disclosure.
7. Added collection notices and required, initially unticked Terms assent/Privacy acknowledgement on Contact and Candidate forms. Company is optional for candidate inquiries and required for other inquiry types, including server validation. Server rejects missing assent and invalid email.
8. Submission notification includes server-generated UUID and UTC timestamp, Terms/Privacy versions, complete displayed notice and assent snapshot, checkbox state, source page path and user agent. No separate consent database has been introduced; receipt retention depends on the configured Support mailbox.
9. Homepage Get in Touch now routes to the actual Contact form. The previous modal only simulated success and did not send the inquiry.
10. Updated response wording and email template metrics; administrative notifications go to Support and both outbound message types use Support as sender and automatic replies use Support as reply-to. SMTP authentication uses explicitly configured ZOHO_EMAIL rather than assuming Support can authenticate; the SMTP account must be authorized to send as Support.

## Source interpretation and outstanding items

The supplied HappyGlobalService_Website Compliance Review (1).docx, dated 4 Sep 2026, describes itself as an internal working review. It includes recommendations, not complete revised Privacy Policy or Terms text. User checklist controls where wording differs (Happy Global Inc.; Typically Respond Within 24 Hrs).

- Approved full Privacy Policy and Terms are not present. Do not represent these limited source edits as publication of the approved full replacements.
- Review section 1.3 recommends an arbitration sentence referring to Terms section 19; the existing Terms have no such section. Current assent uses the recommended first sentence only. Add the arbitration sentence only together with approved matching Terms.
- Mainland China separate consent and the Appendix C recipient-information anchor need the missing approved Appendix C, Chinese recipient disclosures, and a reliable deployment-specific country signal. Not implemented with guessed disclosures or browser-language geolocation.
- Review requests fuller receipt retention (including IP-derived country and full page URL). Current mail receipts record the source path and user agent; country and an independent retention store are outstanding.
- Support mailbox creation, inbound/outbound delivery verification, responsible owner and monitoring/rights-request triage require mail administrator action. Local code/build validation cannot establish that the mailbox exists or is monitored. No live emails were sent as part of testing.
- Retained public metric values are specified by the user; underlying business substantiation must be retained by the business.
- Broader report recommendations (AI crawler/TDM policy, cookie policy wording, jurisdiction representatives, licensing, sanctions screening, partner agreements and translated legal documents) are not implemented by this code change and require their respective inputs/decisions.
- No production deployment or merge into main is part of this delivery. Pushing dev does not itself establish that hosting has a preview deployment configured.

## Verification

See validation-results.md for executed checks and remaining limitations.
