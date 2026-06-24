"use client";

import { useRef, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/ui/cta-link";
import { submitRequestDemo } from "@/lib/landing-api";

const inputClasses =
  "h-12 w-full rounded-lg border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/55 focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light";

// Off-screen honeypot — visible to bots, never to humans (not display:none, so
// bots that skip hidden fields still fill it). No tab stop, no autofill.
const honeypotStyle: React.CSSProperties = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  overflow: "hidden",
};

const DEFAULT_ERROR =
  "Something went wrong. Please try again or email us directly at contact@talentspotify.com.";

export function DemoCta() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState(DEFAULT_ERROR);
  // Timestamp the form was rendered — used by the server's sub-2s bot trap.
  const renderedAt = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(form).entries());

    // Client-side bot trap (legacy landing had no server-side check here)
    if (Date.now() - renderedAt.current < 2000) {
      setErrorMsg("Please try again.");
      setStatus("error");
      return;
    }
    if (typeof data.company_website === "string" && data.company_website.trim() !== "") {
      setStatus("success");
      return;
    }

    try {
      const result = await submitRequestDemo({
        fullName: String(data.fullName ?? ""),
        workEmail: String(data.workEmail ?? ""),
        phone: String(data.phone ?? ""),
        companySize: String(data.companySize ?? ""),
      });
      if (result.success) {
        setStatus("success");
        form.reset();
        return;
      }
      setErrorMsg(result.message ?? DEFAULT_ERROR);
      setStatus("error");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : DEFAULT_ERROR);
      setStatus("error");
    }
  }

  return (
    <section id="book-demo" className="section scroll-mt-16 bg-ink text-white" data-contact-sales="true"><span id="contact-sales" className="sr-only" aria-hidden="true" />
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            See a fairer review cycle in 30 minutes.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            We&apos;ll walk through your current review process, show TARA handle a
            real conversation, and leave you with a fairness benchmark for your
            company size. No deck, no pressure.
          </p>
          <ul className="mt-7 space-y-3 text-white/85">
            {[
              "Watch TARA turn a spoken review into a scored write-up",
              "See fairness flags on real (anonymised) review language",
              "Get rollout and pricing mapped to your headcount",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <CtaLink
            href="https://wa.me/918247716036"
            variant="outline-dark"
            className="mt-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Prefer WhatsApp? Message us
          </CtaLink>
        </div>

        <div className="rounded-2xl border border-white/10 bg-ink-soft p-7 md:p-8">
          {status === "success" ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center" role="status">
              <CheckCircle2 className="h-12 w-12 text-brand-light" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Request received</h3>
              <p className="mt-2 text-white/85">
                Thanks. We received your request and will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h3 className="text-xl font-semibold">Request your demo</h3>

              {/* Honeypot — off-screen, no tab stop; bots fill it, humans never see it. */}
              <div style={honeypotStyle} aria-hidden="true">
                <label htmlFor="company_website">Company website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-white/85">
                  Full name
                </label>
                <input id="fullName" name="fullName" required autoComplete="name" minLength={2} maxLength={100} className={inputClasses} placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="workEmail" className="mb-1.5 block text-sm font-medium text-white/85">
                  Work email
                </label>
                <input id="workEmail" name="workEmail" type="email" required autoComplete="email" maxLength={150} className={inputClasses} placeholder="you@company.com" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/85">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" maxLength={30} className={inputClasses} placeholder="+91" />
                </div>
                <div>
                  <label htmlFor="companySize" className="mb-1.5 block text-sm font-medium text-white/85">
                    Company size
                  </label>
                  <select id="companySize" name="companySize" required className={inputClasses} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="<50 employees">Under 50 employees</option>
                    <option value="50-200 employees">50 – 200 employees</option>
                    <option value="200-1000 employees">200 – 1000 employees</option>
                    <option value="1000+ employees">1000+ employees</option>
                  </select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Request Demo"}
              </Button>
              {status === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMsg}
                </p>
              )}
              <p className="text-xs text-white/55">
                No spam, no resellers. Your details go only to the TalentSpotify team.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
