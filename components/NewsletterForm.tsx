"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitEmailSignup } from "@/lib/landing-api";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "");
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
      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
        <Check className="h-4 w-4 text-brand-light" aria-hidden="true" />
        You&rsquo;re subscribed — watch your inbox.
      </div>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="blog-email" className="sr-only">
        Email address
      </label>
      <input
        id="blog-email"
        name="email"
        type="email"
        required
        placeholder="Work email address"
        className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-light focus:bg-white/15 sm:w-72"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface disabled:opacity-60"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}{" "}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      {status === "error" && errorMsg && (
        <p className="w-full text-center text-sm text-red-300 sm:col-span-2" role="alert">{errorMsg}</p>
      )}
    </form>
  );
}
