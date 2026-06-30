import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Minus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "TalentSpotify vs Darwinbox (2026) — AI Performance Review Comparison",
  description:
    "Detailed comparison of TalentSpotify and Darwinbox for performance reviews, OKRs, and AI bias detection. See which platform fits Indian mid-market teams better.",
  alternates: { canonical: "/compare/talentspotify-vs-darwinbox" },
};

type CellValue = "yes" | "no" | "partial" | string;

interface Row {
  feature: string;
  ts: CellValue;
  competitor: CellValue;
}

const rows: Row[] = [
  { feature: "AI voice agent for performance conversations", ts: "yes", competitor: "no" },
  { feature: "Real-time bias detection (14 bias types)", ts: "yes", competitor: "no" },
  { feature: "Fairness score + evidence trail per review", ts: "yes", competitor: "no" },
  { feature: "OKR setting & continuous check-ins", ts: "yes", competitor: "yes" },
  { feature: "Performance reviews", ts: "yes", competitor: "yes" },
  { feature: "Recognition & rewards", ts: "yes", competitor: "yes" },
  { feature: "Payroll & core HRMS", ts: "no", competitor: "yes" },
  { feature: "Recruitment / ATS", ts: "no", competitor: "yes" },
  { feature: "INR per-employee pricing", ts: "yes", competitor: "partial" },
  { feature: "DPDPA & GDPR compliance", ts: "yes", competitor: "partial" },
  { feature: "Minimum team size", ts: "50 employees", competitor: "500+ employees" },
  { feature: "Implementation timeline", ts: "2–4 weeks", competitor: "3–6 months" },
  { feature: "Multilingual support (Indian languages)", ts: "yes", competitor: "partial" },
];

const faqs = [
  {
    q: "Is TalentSpotify a replacement for Darwinbox?",
    a: "Not necessarily. TalentSpotify is purpose-built for performance management with AI bias detection. If you already use Darwinbox for payroll and core HR, the TARA Standalone plan layers TalentSpotify on top without replacing your existing HRMS.",
  },
  {
    q: "How does TalentSpotify's pricing compare to Darwinbox?",
    a: "TalentSpotify starts at ₹76/employee/month (billed annually) with no minimum commitment beyond 50 employees. Darwinbox is typically quoted for enterprise-scale deployments of 500+ employees. TalentSpotify publishes its pricing openly at talentspotify.com/#pricing.",
  },
  {
    q: "Does TalentSpotify work alongside Darwinbox?",
    a: "Yes. The TARA Standalone plan (₹99/employee/month) is designed to add AI voice reviews and bias detection on top of whatever HRMS you already run, including Darwinbox — no rip-and-replace required.",
  },
  {
    q: "Which platform is better for mid-market Indian companies?",
    a: "TalentSpotify is optimised for Indian mid-market companies (50–2,000 employees) with transparent INR pricing, DPDPA compliance, and a 2–4 week implementation timeline. Darwinbox is better suited to large enterprises that need a full HRMS suite alongside performance management.",
  },
];

function Cell({ value }: { value: CellValue }) {
  if (value === "yes") return <Check className="mx-auto h-5 w-5 text-fair" aria-label="Yes" />;
  if (value === "no") return <X className="mx-auto h-5 w-5 text-rose-400" aria-label="No" />;
  if (value === "partial") return <Minus className="mx-auto h-5 w-5 text-amber-400" aria-label="Partial" />;
  return <span className="text-sm text-slate-600">{value}</span>;
}

const SITE = "https://www.talentspotify.com";

export default function VsDarwinboxPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE}/compare` },
      { "@type": "ListItem", position: 3, name: "TalentSpotify vs Darwinbox", item: `${SITE}/compare/talentspotify-vs-darwinbox` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="border-b border-slate-100 bg-gradient-to-b from-surface to-white">
          <div className="container-site py-14 md:py-20">
            <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-brand">Compare</Link>
              <span>/</span>
              <span className="text-slate-600">vs Darwinbox</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Comparison · 2026</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              TalentSpotify vs Darwinbox
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              AI bias detection and fairness-first performance reviews for Indian mid-market teams —
              compared to a broad enterprise HRMS suite.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              * TalentSpotify is not affiliated with Darwinbox. Darwinbox feature claims are based on publicly
              available documentation as of June 2026.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="container-site py-14">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-surface">
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand">TalentSpotify</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-500">Darwinbox</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ feature, ts, competitor }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-6 py-4 text-slate-700">{feature}</td>
                    <td className="px-6 py-4 text-center"><Cell value={ts} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={competitor} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Choose X if */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand bg-white p-7">
              <h2 className="text-lg font-bold text-slate-900">Choose TalentSpotify if…</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Your team is 50–2,000 employees and you want fast implementation (2–4 weeks)",
                  "You want AI that detects bias live during review conversations, before ratings are locked",
                  "You're adding performance management on top of an existing HRMS without replacing it",
                  "You need transparent INR pricing and DPDPA compliance out of the box",
                  "Fairness and evidence-led reviews are a strategic priority",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-fair" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-lg font-bold text-slate-900">Choose Darwinbox if…</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "You need a full HRMS suite: payroll, recruitment, and core HR in one platform",
                  "Your organisation has 500+ employees and a dedicated HRIS implementation team",
                  "You need enterprise-grade integrations across all HR functions",
                  "Performance management is one part of a broader HRMS consolidation project",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-slate-100">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900">
                    {q}
                    <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-slate-400 transition group-open:rotate-[270deg]" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-ink p-10 text-center text-white">
            <h2 className="text-2xl font-bold">See TalentSpotify for yourself</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Book a 30-minute walkthrough and see how TARA's AI bias detection works on a real performance review conversation.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaLink href="/#book-demo" variant="primary">
                Book a demo
              </CtaLink>
              <CtaLink href="/compare/talentspotify-vs-lattice" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Also compare vs Lattice <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
