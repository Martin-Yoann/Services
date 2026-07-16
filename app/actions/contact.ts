"use server";

/* ── Contact form Server Action ──
   In production: connect to Resend, SendGrid, or your CRM API.
   Currently logs to console and returns success. Replace the body with
   your actual email/webhook integration. */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType?: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ActionResult> {
  // Server-side validation
  if (!data.name || !data.email || !data.message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  // ── TODO: Replace with real email/webhook integration ──
  // Example with Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "website@happyglobalservice.com",
  //     to: "info@happyglobalservice.com",
  //     subject: `New inquiry from ${data.name} — ${data.inquiryType || "General"}`,
  //     html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
  //   });

  console.log("[Contact Form Submission]", JSON.stringify(data, null, 2));

  return {
    success: true,
    message:
      "Thank you! We've received your inquiry and will respond within 24 hours.",
  };
}

export async function submitCandidateForm(
  data: ContactFormData & { linkedin?: string; resumeUrl?: string },
): Promise<ActionResult> {
  if (!data.name || !data.email) {
    return { success: false, message: "Please provide your name and email." };
  }

  console.log("[Candidate Form Submission]", JSON.stringify(data, null, 2));

  return {
    success: true,
    message:
      "Thank you for your interest. A consultant will reach out to you confidentially within 48 hours.",
  };
}
