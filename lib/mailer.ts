import nodemailer, { type Transporter } from "nodemailer";

/**
 * Microsoft 365 SMTP transporter, configured entirely from environment
 * variables. Server-side only — never import this into client components.
 *
 * Port 587 + SMTP_SECURE=false uses STARTTLS (requireTLS forces it).
 */
let cached: Transporter | null = null;

export function getTransporter(): Transporter {
  if (cached) return cached;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    // Surfaced only in server logs — never returned to the browser.
    throw new Error("SMTP is not configured (missing SMTP_HOST / SMTP_USER / SMTP_PASS).");
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true"; // false for 587 STARTTLS

  cached = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
  });

  return cached;
}

export const mailEnv = {
  from: () =>
    process.env.SMTP_FROM ??
    `TalentSpotify Website <${process.env.SMTP_USER ?? "contact@talentspotify.com"}>`,
  // Recipient is fixed from the environment — the client can never set it.
  leadTo: () => process.env.DEMO_LEAD_TO ?? process.env.SMTP_USER ?? "contact@talentspotify.com",
  sendAutoReply: () => process.env.SEND_AUTO_REPLY === "true",
};
