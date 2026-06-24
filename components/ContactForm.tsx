"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitContactUs } from "@/lib/landing-api";

const inputClasses =
  "h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

const textareaClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");
    const fd = new FormData(form);
    try {
      const result = await submitContactUs({
        name: String(fd.get("name") ?? ""),
        subject: String(fd.get("subject") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        message: String(fd.get("message") ?? ""),
      });
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(result.message ?? "Something went wrong.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Message sent</h3>
        <p className="mt-2 text-slate-600">We received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
          <input id="contact-name" name="name" required className={inputClasses} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
          <input id="contact-email" name="email" type="email" required className={inputClasses} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
          <input id="contact-phone" name="phone" type="tel" required className={inputClasses} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-slate-700">Subject</label>
          <input id="contact-subject" name="subject" required className={inputClasses} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="contact-message" name="message" required rows={5} className={textareaClasses} />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
      {status === "error" && errorMsg && (
        <p className="mt-3 text-sm text-red-600" role="alert">{errorMsg}</p>
      )}
    </form>
  );
}
