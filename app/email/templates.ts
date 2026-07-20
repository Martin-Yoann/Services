/* ── Email templates for Happy Global contact form ── */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType?: string;
  message: string;
}

const inquiryLabels: Record<string, string> = {
  hiring: "Hiring Inquiry",
  advisory: "Talent Advisory",
  partnership: "Partnership",
  candidate: "Candidate Inquiry",
  general: "General Inquiry",
};

/** ── Admin notification: sent to echo.yang@happyglobalservice.com ── */
export function adminEmailHtml(data: ContactFormData): string {
  const label = inquiryLabels[data.inquiryType || "general"] || data.inquiryType;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f7f8f6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(10,47,42,0.06), 0 8px 32px rgba(10,47,42,0.05); }
    .header { background: linear-gradient(135deg, #0a2f2a, #2d8a7a); padding: 32px 30px; }
    .header h1 { margin: 0; font-family: 'Inter Tight', 'Inter', sans-serif; font-size: 22px; font-weight: 700; color: #fff; }
    .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.6); }
    .body { padding: 30px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #5b6675; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0a2f2a; line-height: 1.5; word-break: break-word; }
    .badge { display: inline-block; background: rgba(217,108,87,0.1); color: #D96C57; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; }
    .divider { border: none; border-top: 1px solid #d8e1ea; margin: 24px 0; }
    .footer { padding: 0 30px 30px; }
    .footer p { font-size: 11px; color: #9aa0ab; line-height: 1.6; margin: 0; }
    .footer a { color: #D96C57; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <h1>New Inquiry</h1>
        <p>Submitted via happyglobalservice.com</p>
      </div>
      <div class="body">
        <div class="field">
          <div class="field-label">Inquiry Type</div>
          <div><span class="badge">${label}</span></div>
        </div>
        <div class="field">
          <div class="field-label">Name</div>
          <div class="field-value">${escapeHtml(data.name)}</div>
        </div>
        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color:#D96C57">${escapeHtml(data.email)}</a></div>
        </div>
        ${data.company ? `<div class="field"><div class="field-label">Company</div><div class="field-value">${escapeHtml(data.company)}</div></div>` : ""}
        ${data.phone ? `<div class="field"><div class="field-label">Phone</div><div class="field-value">${escapeHtml(data.phone)}</div></div>` : ""}
        <hr class="divider">
        <div class="field">
          <div class="field-label">Message</div>
          <div class="field-value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
        </div>
      </div>
      <div class="footer">
        <p>Sent from <a href="https://www.happyglobalservice.com">happyglobalservice.com</a> contact form.<br>Reply directly to this email to respond to ${escapeHtml(data.name)}.</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/** ── Auto-reply: sent to the inquirer ── */
export function autoReplyHtml(data: ContactFormData): string {
  const firstName = data.name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f7f8f6; color: #333; }
    .container { max-width: 540px; margin: 0 auto; padding: 40px 20px; }
    .card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(10,47,42,0.06), 0 8px 32px rgba(10,47,42,0.05); }
    .header { background: linear-gradient(135deg, #0a2f2a, #2d8a7a); padding: 32px 30px; text-align: center; }
    .header .logo { font-size: 28px; font-family: 'Inter Tight', 'Inter', sans-serif; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
    .header .tagline { margin-top: 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.25em; color: rgba(255,255,255,0.5); }
    .body { padding: 32px 28px; }
    .body h2 { margin: 0 0 12px; font-family: 'Inter Tight', 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #0a2f2a; }
    .body p { font-size: 14px; line-height: 1.7; color: #5b6675; margin: 0 0 16px; }
    .body .accent { color: #D96C57; font-weight: 600; }
    .stats { display: flex; gap: 24px; margin: 28px 0; padding: 20px 0; border-top: 1px solid #d8e1ea; border-bottom: 1px solid #d8e1ea; }
    .stat { text-align: center; }
    .stat-value { font-family: 'Inter Tight', 'Inter', sans-serif; font-size: 22px; font-weight: 800; color: #D96C57; }
    .stat-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: #9aa0ab; margin-top: 2px; }
    .footer { background: #f7f8f6; padding: 24px 28px; }
    .footer p { font-size: 11px; color: #9aa0ab; line-height: 1.6; margin: 0; }
    .footer a { color: #D96C57; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <div class="logo">Happy Global</div>
        <div class="tagline">Global Talent Solutions</div>
      </div>
      <div class="body">
        <h2>Hello ${escapeHtml(firstName)},</h2>
        <p>Thank you for reaching out to <span class="accent">Happy Global</span>. We&rsquo;ve received your inquiry and a member of our team will review it and respond within <strong>24 hours</strong>.</p>
        <p>In the meantime, here&rsquo;s what you can expect:</p>
        <ul style="padding-left:20px;margin:0 0 16px;font-size:14px;line-height:1.7;color:#5b6675;">
          <li>A consultant will reach out to schedule an initial discovery call</li>
          <li>We&rsquo;ll discuss your specific talent needs and market landscape</li>
          <li>You&rsquo;ll receive a tailored proposal within 2-3 business days</li>
        </ul>
        <div class="stats">
          <div class="stat">
            <div class="stat-value">500+</div>
            <div class="stat-label">Placements /yr</div>
          </div>
          <div class="stat">
            <div class="stat-value">30d</div>
            <div class="stat-label">Avg. Time-to-Hire</div>
          </div>
          <div class="stat">
            <div class="stat-value">95%</div>
            <div class="stat-label">Retention Rate</div>
          </div>
        </div>
        <p style="font-size:13px;color:#9aa0ab;">If you need to reach us sooner, reply directly to this email or call <a href="tel:+16698713588" style="color:#D96C57">+1 669 871 3588</a>.</p>
      </div>
      <div class="footer">
        <p><strong>Happy Global</strong> &mdash; Dallas, TX &bull; San Jose, CA &bull; Shanghai, CN</p>
        <p style="margin-top:6px;"><a href="https://www.happyglobalservice.com">happyglobalservice.com</a> &bull; <a href="mailto:echo.yang@happyglobalservice.com">echo.yang@happyglobalservice.com</a></p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
