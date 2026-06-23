"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitCareerApplication, uploadCvToCloudinary } from "@/lib/landing-api";

const inputClasses =
  "h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function CareerApplicationForm({ roleTitle }: { roleTitle?: string }) {
  const [status, setStatus] = useState<"idle" | "uploading" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [cvUrl, setCvUrl] = useState("");
  const [cvName, setCvName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus("uploading");
    setErrorMsg("");
    try {
      const url = await uploadCvToCloudinary(file);
      setCvUrl(url);
      setCvName(file.name);
      setStatus("idle");
    } catch {
      setErrorMsg("CV upload failed. Please try again.");
      setStatus("error");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!cvUrl) {
      setErrorMsg("Please upload your CV before submitting.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    try {
      const result = await submitCareerApplication({
        name: String(fd.get("name") ?? ""),
        linkedinURL: String(fd.get("linkedinURL") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        cvURL: cvUrl,
      });
      if (result.success) {
        setStatus("success");
        e.currentTarget.reset();
        setCvUrl("");
        setCvName("");
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
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Application received</h3>
        <p className="mt-2 text-slate-600">Thank you. Our team will review your application and get back to you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
      <h3 className="text-xl font-semibold text-slate-900">
        {roleTitle ? `Apply: ${roleTitle}` : "General application"}
      </h3>
      <p className="mt-2 text-sm text-slate-600">All fields are required.</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="career-name" className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
          <input id="career-name" name="name" required className={inputClasses} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="career-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
          <input id="career-email" name="email" type="email" required className={inputClasses} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="career-phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
          <input id="career-phone" name="phone" type="tel" required className={inputClasses} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="career-linkedin" className="mb-1.5 block text-sm font-medium text-slate-700">LinkedIn URL</label>
          <input id="career-linkedin" name="linkedinURL" type="url" required defaultValue="https://www.linkedin.com/in/" className={inputClasses} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">CV / Resume (PDF)</label>
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={handleFileChange} />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={status === "uploading" || status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-600 transition hover:border-brand hover:bg-brand/5"
          >
            <Upload className="h-4 w-4" aria-hidden="true" />
            {status === "uploading" ? "Uploading…" : cvName || "Click to upload CV"}
          </button>
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "submitting" || status === "uploading"}>
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </Button>
      {status === "error" && errorMsg && (
        <p className="mt-3 text-sm text-red-600" role="alert">{errorMsg}</p>
      )}
    </form>
  );
}
