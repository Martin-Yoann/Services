import { SITE, OFFICES } from "@/app/data/site";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType?: string;
  message: string;
  termsAccepted?: boolean;
  assentEvidence?: string;
  linkedin?: string;
  function?: string;
}

export const RECEIPT_IMAGE_CID = "receipt-architecture@happyglobalservice.com";

const baseUrl = `https://${SITE.domain}`;
const inquiryLabels: Record<string, string> = {
  hiring: "Hiring Inquiry", advisory: "Talent Advisory", partnership: "Partnership",
  candidate: "Candidate Inquiry", general: "General Inquiry",
};
const labelFor = (data: ContactFormData) => inquiryLabels[data.inquiryType || "general"] || "General Inquiry";
const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const lines = (s: string) => escapeHtml(s).replace(/\n/g, "<br>");
const link = (href: string, text: string) => `<a href="${escapeHtml(href)}" style="color:#a54735;text-decoration:underline;word-break:break-word;">${escapeHtml(text)}</a>`;
const button = (href: string, text: string) => `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0;"><tr><td bgcolor="#b9513d" style="border-radius:8px;mso-padding-alt:14px 22px;"><a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 22px;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;">${escapeHtml(text)}</a></td></tr></table>`;
const field = (name: string, value: string) => `<tr><th scope="row" style="width:30%;padding:12px 12px 12px 0;text-align:left;vertical-align:top;border-bottom:1px solid #e3e9e6;font-size:12px;color:#52635e;">${escapeHtml(name)}</th><td style="padding:12px 0;border-bottom:1px solid #e3e9e6;word-break:break-word;">${value}</td></tr>`;

function frame(title: string, preview: string, body: string, hero = false): string {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#f2f5f3;color:#263b34;font-family:Arial,Helvetica,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f2f5f3"><tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #dfe7e2;">
<tr><td bgcolor="#0a2f2a" style="padding:28px 24px;border-bottom:4px solid #d96c57;"><a href="${baseUrl}" style="font-size:23px;font-weight:bold;color:#ffffff;text-decoration:none;">HAPPY GLOBAL</a><p style="margin:8px 0 0;color:#c6d8d0;font-size:11px;letter-spacing:2px;">GLOBAL TALENT SOLUTIONS</p></td></tr>
${hero ? `<tr><td style="padding:0;background:#0a2f2a;"><img src="cid:${RECEIPT_IMAGE_CID}" width="600" height="240" alt="Modern glass buildings against a blue sky" style="display:block;width:100%;max-width:600px;height:auto;border:0;"></td></tr>` : ""}
<tr><td style="padding:28px 24px;font-size:14px;line-height:1.75;word-break:break-word;"><h1 style="margin:0 0 22px;font-size:26px;line-height:1.25;color:#0a2f2a;">${escapeHtml(title)}</h1>${body}</td></tr>
<tr><td bgcolor="#f6f8f6" style="padding:22px 24px;font-size:12px;line-height:1.8;color:#52635e;"><strong>Happy Global Inc.</strong><br>${escapeHtml(OFFICES[0].detail)}<br>${link(`mailto:${SITE.email}`, SITE.email)} · ${link("tel:+16698713588", SITE.phone)}<br>${link(`${baseUrl}/contact`, "Contact us")} · ${link(`${baseUrl}/privacy-policy`, "Privacy Policy")} · ${link(`${baseUrl}/terms-of-service`, "Terms of Service")}</td></tr>
</table></td></tr></table></body></html>`;
}

export function adminEmailHtml(data: ContactFormData): string {
  const fields = field("Inquiry type", escapeHtml(labelFor(data))) + field("Full name", escapeHtml(data.name))
    + field("Email", link(`mailto:${data.email}`, data.email))
    + (data.company ? field("Company", escapeHtml(data.company)) : "")
    + (data.phone ? field("Phone", link(`tel:${data.phone.replace(/[^+0-9]/g, "")}`, data.phone)) : "")
    + (data.linkedin ? field("Professional profile", escapeHtml(data.linkedin)) : "")
    + (data.function ? field("Target function", escapeHtml(data.function)) : "");
  return frame("New website inquiry", `${labelFor(data)} from ${data.name}`, `
<p style="margin:0 0 18px;">A new ${escapeHtml(labelFor(data).toLowerCase())} was submitted through the website. Reply to this email to contact the sender directly.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;line-height:1.6;">${fields}</table>
<h2 style="margin:26px 0 10px;font-size:17px;">Message</h2><div style="padding:16px;background:#f2f6f3;border-left:3px solid #d96c57;word-break:break-word;">${lines(data.message)}</div>
${button(`mailto:${data.email}?subject=${encodeURIComponent(`Re: Your ${labelFor(data)} — Happy Global`)}`, "Reply to sender")}
<p style="font-size:12px;color:#52635e;">Candidate information is confidential. Share it only with authorized colleagues.</p>
${data.assentEvidence ? `<h2 style="margin:28px 0 10px;font-size:15px;">Assent record</h2><p style="font-size:11px;line-height:1.7;color:#52635e;word-break:break-word;">${lines(data.assentEvidence)}</p>` : ""}`);
}

export function autoReplyHtml(data: ContactFormData): string {
  const candidate = data.inquiryType === "candidate";
  return frame("Thank you for getting in touch", "We have received your message. Typically Respond Within 24 Hrs.", `
<p>Hello ${escapeHtml(data.name.trim().split(/\s+/)[0] || data.name)},</p>
<p>Thank you for contacting Happy Global. Your ${candidate ? "candidate inquiry" : "message"} has been received and is ready for our team to review.</p>
<p style="margin:22px 0;padding:14px 16px;background:#f2f6f3;border-left:3px solid #d96c57;"><strong>Typically Respond Within 24 Hrs</strong><br><span style="font-size:12px;color:#52635e;">Response times may vary with time zones, weekends and holidays.</span></p>
<h2 style="font-size:17px;margin:24px 0 10px;">What happens next</h2>
<p>${candidate ? "A consultant will review your interests and contact you if further information or a relevant conversation is appropriate. Submitting this form registers your interest; it is not an application to a specific vacancy. We never charge candidates any fee." : "Our team will review your inquiry and route it to the appropriate consultant. Where further discussion is useful, we will contact you to agree on next steps."}</p>
<p>To add information, simply reply to this email. Please do not send identity documents, financial details or other sensitive information by email or through the website form.</p>
${button(`mailto:${SITE.email}?subject=${encodeURIComponent("Follow-up to my website inquiry")}`, "Email our team")}
<p>${link(`${baseUrl}/contact`, "Visit our Contact page")} for contact details and office information.</p>
<p style="font-size:12px;color:#52635e;margin-top:26px;">This is an automatic acknowledgment of your message, not a confirmation of a client engagement, interview or placement. If you did not submit an inquiry, please let us know at ${link(`mailto:${SITE.email}`, SITE.email)}.</p>`, true);
}

export function adminEmailText(data: ContactFormData): string {
  return ["New website inquiry", `Inquiry type: ${labelFor(data)}`, `Name: ${data.name}`, `Email: ${data.email}`, data.company && `Company: ${data.company}`, data.phone && `Phone: ${data.phone}`, data.linkedin && `Professional profile: ${data.linkedin}`, data.function && `Target function: ${data.function}`, "", "Message:", data.message, "", "Reply directly to this email to contact the sender.", data.assentEvidence && `Assent record:\n${data.assentEvidence}`].filter(value => value !== undefined).join("\n");
}

export function autoReplyText(data: ContactFormData): string {
  return [`Hello ${data.name},`, "Thank you for contacting Happy Global. We have received your message.", "Typically Respond Within 24 Hrs. Response times may vary with time zones, weekends and holidays.", data.inquiryType === "candidate" ? "A consultant will review your interests. This is not an application to a specific vacancy. We never charge candidates any fee." : "Our team will review your inquiry and contact you to agree on next steps where appropriate.", "Reply to this email to add information. Please do not send identity documents, financial details or other sensitive information.", `Email: ${SITE.email}`, `Contact: ${baseUrl}/contact`, `Privacy Policy: ${baseUrl}/privacy-policy`, `Terms of Service: ${baseUrl}/terms-of-service`, "This automatic acknowledgment does not confirm a client engagement, interview or placement.", `Happy Global Inc. | ${OFFICES[0].detail}`].join("\n\n");
}
