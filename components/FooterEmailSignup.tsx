"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitEmailSignup } from "@/lib/landing-api";

/** Footer newsletter — same API as legacy Footer.js emailsignup. */
export function FooterEmailSignup() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");
    const email = String(new FormData(form).get("email") ?? "");
    try {
      const result = await submitEmailSignup(email);
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(result.message ?? "Subscription failed.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Subscription failed.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-4 inline-flex items-center gap-2 text-sm text-brand-light">
        <Check className="h-4 w-4" aria-hidden="true" />
        Subscribed successfully.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-brand-light sm:max-w-xs"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      {status === "error" && errorMsg && (
        <p className="text-xs text-red-300 sm:basis-full" role="alert">{errorMsg}</p>
      )}
    </form>
  );
}
