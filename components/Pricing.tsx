"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

const inr = (n: number) =>
  "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));

// All three plans price per employee / month, billed annually by default,
// with a monthly/annual toggle. TARA Standalone is the hero.
const plans = [
  {
    name: "TARA Standalone",
    badge: "Recommended for teams already on an HRMS",
    tagline: "Add fairness to the system you already use.",
    monthly: 125,
    annual: 99,
    note: "Works alongside your existing HRMS — no rip-and-replace.",
    features: [
      "TARA voice agent runs OKR setting, check-ins & bias-detected reviews",
      "Flags bias signals live, before the rating is locked",
      "Fairness score + evidence trail on every review",
      "Includes 150 voice minutes per employee per year for review-cycle conversations and check-ins, then ₹7/min",
      "Minimum 50 employees",
    ],
    hero: true,
    muted: false,
    primaryCta: "Start a pilot",
    secondaryCta: "Book a demo",
  },
  {
    name: "TARA on TalentSpotify",
    tagline: "Run your whole performance cycle in one place.",
    monthly: 185,
    annual: 149,
    features: [
      "Everything in Platform",
      "TARA AI voice reviews, OKR setting & check-ins",
      "Calibration & fairness dashboards",
      "Includes 150 voice minutes per employee per year for review-cycle conversations and check-ins, then ₹7/min",
    ],
    hero: false,
    muted: false,
    primaryCta: "Book a demo",
  },
  {
    name: "Platform",
    tagline: "Run fair, on-time reviews.",
    monthly: 95,
    annual: 76,
    features: [
      "OKR & goal setting",
      "Performance reviews",
      "Fairness scoring",
      "Recognition feed",
      "Email & WhatsApp support",
    ],
    hero: false,
    muted: true,
    primaryCta: "Book a demo",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");
  const [employees, setEmployees] = useState(300);
  const team = Math.max(1, employees || 0);

  return (
    <section id="pricing" className="section scroll-mt-16 bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Pricing"
          title="Start where you already are."
          subtitle="Most teams add TARA to the HRMS they already run. Per-employee pricing, in INR. No rip-and-replace."
        />

        {/* Monthly / annual toggle (applies to all three plans) */}
        <div className="mb-10 flex items-center justify-center">
          <div
            role="radiogroup"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-surface p-1"
          >
            {(["monthly", "annual"] as Billing[]).map((b) => (
              <button
                key={b}
                role="radio"
                aria-checked={billing === b}
                onClick={() => setBilling(b)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                  billing === b ? "bg-brand text-white" : "text-slate-600 hover:text-slate-900"
                )}
              >
                {b}
                {b === "annual" && (
                  <span className={cn("ml-1.5 text-xs", billing === b ? "text-white/80" : "text-brand-dark")}>
                    save
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Single headcount input — drives the live annual-total line on each card */}
        <div className="mb-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-surface px-5 py-4 sm:flex-row">
          <label htmlFor="team-size" className="text-sm font-semibold text-slate-700">
            How many employees?
          </label>
          <input
            id="team-size"
            type="number"
            min={1}
            max={100000}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="h-11 w-28 rounded-lg border border-slate-300 bg-white px-3 text-center text-lg font-bold text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          <span className="text-sm text-slate-500">We&apos;ll show your team&apos;s yearly total on each plan.</span>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === "annual" ? plan.annual : plan.monthly;
            const alt = billing === "annual" ? plan.monthly : plan.annual;
            const annualTotal = team * price * 12;
            return (
              <article
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl bg-white p-7",
                  plan.hero
                    ? "border-2 border-brand shadow-xl lg:-mt-2"
                    : plan.muted
                      ? "border border-slate-200 lg:mt-2"
                      : "border border-slate-300"
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 w-[92%] -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-center text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                )}
                <h3
                  className={cn(
                    "text-lg font-bold",
                    plan.hero ? "mt-2 text-slate-900" : plan.muted ? "text-slate-700" : "text-slate-900"
                  )}
                >
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-dark">{plan.tagline}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">₹{price}</span>
                  <span className="ml-2 text-sm text-slate-500">/ employee / month</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {billing === "annual"
                    ? `billed annually · ₹${alt}/mo billed monthly`
                    : `billed monthly · ₹${alt}/mo on annual`}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  ≈ <span className="font-semibold text-slate-700">{inr(annualTotal)}</span>/year for your team
                </p>
                {plan.note && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.note}</p>
                )}
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fair" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.hero ? (
                  <div className="mt-7 flex flex-col gap-2.5">
                    <CtaLink href="/#book-demo" variant="primary" className="w-full">
                      {plan.primaryCta}
                    </CtaLink>
                    <CtaLink href="/#book-demo" variant="outline" className="w-full">
                      {plan.secondaryCta}
                    </CtaLink>
                  </div>
                ) : (
                  <CtaLink href="/#book-demo" variant="outline" className="mt-7 w-full">
                    {plan.primaryCta}
                  </CtaLink>
                )}
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          500+ employees or a custom HRMS integration?{" "}
          <a href="/#contact-sales" className="font-semibold text-brand underline-offset-4 hover:underline">
            Contact Sales
          </a>{" "}
          for GCC / enterprise pricing.
        </p>
      </div>
    </section>
  );
}
