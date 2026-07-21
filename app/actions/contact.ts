"use server";

import nodemailer from "nodemailer";
import { adminEmailHtml, autoReplyHtml } from "@/app/email/templates";
import type { ContactFormData } from "@/app/email/templates";

/* ── Zoho SMTP config ── */
const SMTP_CONFIG = {
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  // Zoho cert chain may not be trusted by all CA bundles
  tls: { rejectUnauthorized: false },
} as const;

const ADMIN_EMAIL = "echo.yang@happyglobalservice.com";

interface ActionResult {
  success: boolean;
  message: string;
}

async function sendEmails(data: ContactFormData) {
  const user = process.env.ZOHO_EMAIL || "echo.yang@happyglobalservice.com";
  const pass = process.env.ZOHO_APP_PASSWORD;

  if (!pass) {
    throw new Error("SMTP password not configured. Set ZOHO_APP_PASSWORD in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    ...SMTP_CONFIG,
    auth: { user, pass },
  });

  // Verify connection before sending
  await transporter.verify();

  // 1) Admin notification
  await transporter.sendMail({
    from: user,
    to: ADMIN_EMAIL,
    replyTo: data.email,
    subject: `New inquiry from ${data.name} — ${data.inquiryType || "General"}`,
    html: adminEmailHtml(data),
  });

  // 2) Auto-reply to inquirer
  await transporter.sendMail({
    from: user,
    to: data.email,
    subject: "We've received your inquiry — Happy Global",
    html: autoReplyHtml(data),
  });
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ActionResult> {
  if (!data.name || !data.email || !data.message) {
    return { success: false, message: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  try {
    await sendEmails(data);
    return {
      success: true,
      message:
        "Thank you! We've received your inquiry and will respond within 24 hours.",
    };
  } catch (error: any) {
    const msg = error?.message || String(error);
    console.error("[Contact Form Error]", msg);

    // Surface meaningful errors for debugging
    if (msg.includes("Invalid login") || msg.includes("535")) {
      return {
        success: false,
        message:
          "Email authentication failed. Please check ZOHO_APP_PASSWORD.",
      };
    }
    if (msg.includes("SMTP password not configured")) {
      return {
        success: false,
        message: "Email system not configured. Please contact the administrator.",
      };
    }
    if (msg.includes("connect") || msg.includes("ETIMEDOUT") || msg.includes("ENOTFOUND")) {
      return {
        success: false,
        message: "Unable to reach mail server. Please try again or email us directly.",
      };
    }

    return {
      success: false,
      message:
        "Something went wrong. Please email us directly at echo.yang@happyglobalservice.com.",
    };
  }
}

export async function submitCandidateForm(
  data: ContactFormData & { linkedin?: string; resumeUrl?: string },
): Promise<ActionResult> {
  if (!data.name || !data.email) {
    return { success: false, message: "Please provide your name and email." };
  }

  try {
    await sendEmails(data);
    return {
      success: true,
      message:
        "Thank you for your interest. A consultant will reach out to you confidentially within 48 hours.",
    };
  } catch (error: any) {
    console.error("[Candidate Form Error]", error?.message || error);
    return {
      success: false,
      message: "Something went wrong. Please email us directly.",
    };
  }
}
