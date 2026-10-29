"use server";

import { randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { ASSENT_TEXT, LEGAL_VERSION, CONTACT_NOTICE, CANDIDATE_NOTICE } from "@/app/data/legal";
import nodemailer from "nodemailer";
import { adminEmailHtml, autoReplyHtml } from "@/app/email/templates";
import type { ContactFormData } from "@/app/email/templates";

/* ── Zoho SMTP config ── */
const SMTP_CONFIG = {
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
} as const;

const ADMIN_EMAIL = "Support@happyglobalservice.com";

interface ActionResult {
  success: boolean;
  message: string;
}

async function sendEmails(data: ContactFormData) {
  const user = process.env.ZOHO_EMAIL;
  const pass = process.env.ZOHO_APP_PASSWORD;

  if (!pass || !user) {
    throw new Error("SMTP password not configured. Set ZOHO_EMAIL and ZOHO_APP_PASSWORD in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    ...SMTP_CONFIG,
    auth: { user, pass },
  });

  // Verify connection before sending
  await transporter.verify();

  // 1) Admin notification
  await transporter.sendMail({
    from: { name: "Happy Global Inc.", address: ADMIN_EMAIL },
    to: ADMIN_EMAIL,
    replyTo: data.email,
    subject: `New inquiry from ${data.name} — ${data.inquiryType || "General"}`,
    html: adminEmailHtml(data),
  });

  // 2) Auto-reply to inquirer
  await transporter.sendMail({
    from: { name: "Happy Global Inc.", address: ADMIN_EMAIL },
    to: data.email,
    replyTo: ADMIN_EMAIL,
    subject: "We've received your inquiry — Happy Global",
    html: autoReplyHtml(data),
  });
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ActionResult> {
  if (!data.name || !data.email || !data.message || (data.inquiryType !== "candidate" && !data.company)) {
    return { success: false, message: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  if (data.termsAccepted !== true) {
    return { success: false, message: "Please agree to the Terms of Service and acknowledge the Privacy Policy." };
  }
  const requestHeaders = await headers();
  data.assentEvidence = [
    `Submission ID: ${randomUUID()}`,
    `Accepted at (UTC): ${new Date().toISOString()}`,
    `Terms version: ${LEGAL_VERSION}`,
    `Privacy version: ${LEGAL_VERSION}`,
    `Assent: ${ASSENT_TEXT}`,
    `Notice: ${CONTACT_NOTICE}`,
    "Terms accepted: true",
    "Page: /contact",
    `User agent: ${requestHeaders.get("user-agent") || "Unknown"}`,
  ].join("\n");
  try {
    await sendEmails(data);
    return {
      success: true,
      message:
        "Thank you! We've received your inquiry. Typically Respond Within 24 Hrs.",
    };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[Contact Form Error]", msg);

    // Surface meaningful errors for debugging
    if (msg.includes("Invalid login") || msg.includes("535")) {
      return {
        success: false,
        message:
          "Email is temporarily unavailable. Please contact Support@happyglobalservice.com.",
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
        "Something went wrong. Please email us directly at Support@happyglobalservice.com.",
    };
  }
}

export async function submitCandidateForm(
  data: ContactFormData & { linkedin?: string; resumeUrl?: string },
): Promise<ActionResult> {
  data.inquiryType = "candidate";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, message: "Please provide a valid email address." };
  }
  if (!data.name || !data.email || !data.message) {
    return { success: false, message: "Please provide your name and email." };
  }

  if (data.termsAccepted !== true) {
    return { success: false, message: "Please agree to the Terms of Service and acknowledge the Privacy Policy." };
  }
  const requestHeaders = await headers();
  data.assentEvidence = [
    `Submission ID: ${randomUUID()}`,
    `Accepted at (UTC): ${new Date().toISOString()}`,
    `Terms version: ${LEGAL_VERSION}`,
    `Privacy version: ${LEGAL_VERSION}`,
    `Assent: ${ASSENT_TEXT}`,
    `Notice: ${CANDIDATE_NOTICE}`,
    "Terms accepted: true",
    "Page: /for-candidates",
    `User agent: ${requestHeaders.get("user-agent") || "Unknown"}`,
  ].join("\n");
  try {
    await sendEmails(data);
    return {
      success: true,
      message:
        "Thank you for your interest. Typically Respond Within 24 Hrs.",
    };
  } catch (error: unknown) {
    console.error("[Candidate Form Error]", error instanceof Error ? error.message : String(error));
    return {
      success: false,
      message: "Something went wrong. Please email us directly.",
    };
  }
}
