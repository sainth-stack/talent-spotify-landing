import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Minus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "TalentSpotify vs Lattice (2026) — Performance Management Comparison",
  description:
    "Comparing TalentSpotify and Lattice for performance reviews and OKRs. INR pricing, DPDPA compliance, and AI bias detection vs a US-headquartered people management platform.",
  alternates: { canonical: "/compare/talentspotify-vs-lattice" },
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
  { feature: "Engagement surveys", ts: "no", competitor: "yes" },
  { feature: "Career development paths", ts: "no", competitor: "yes" },
  { feature: "INR per-employee pricing", ts: "yes", competitor: "no" },
  { feature: "DPDPA compliance (India)", ts: "yes", competitor: "no" },
  { feature: "GDPR compliance", ts: "yes", competitor: "yes" },
  { feature: "India-first multilingual support", ts: "yes", competitor: "partial" },
  { feature: "Minimum team size", ts: "50 employees", competitor: "No published minimum" },
  { feature: "Implementation timeline", ts: "2–4 weeks", competitor: "4–8 weeks" },
];

const faqs = [
  {
    q: "How does TalentSpotify pricing compare to Lattice?",
    a: "TalentSpotify is priced in INR, starting at ₹76/employee/month (billed annually). Lattice is priced in USD and typically requires a per-module subscription that adds up significantly for Indian teams paying in USD. TalentSpotify publishes all three pricing tiers openly at talentspotify.com/#pricing.",
  },
  {
    q: "Is TalentSpotify suitable for teams already using Lattice?",
    a: "Yes. Teams looking to replace Lattice or supplement it with stronger AI bias detection and India-specific compliance can migrate to TalentSpotify. The TARA Standalone plan can also run alongside other tools without a full rip-and-replace.",
  },
  {
    q: "Does Lattice offer AI bias detection like TARA?",
    a: "As of June 2026, Lattice does not offer an AI voice agent that detects bias live during performance conversations. TalentSpotify's TARA is purpose-built for this: it listens to the review conversation in real time and flags bias signals across 14 bias types before the rating is locked.",
  },
  {
    q: "Which is better for Indian mid-market companies?",
    a: "TalentSpotify is built specifically for Indian mid-market companies (50–2,000 employees): INR pricing, DPDPA compliance, multilingual support, and a 2–4 week implementation. Lattice is a US product with USD pricing, which adds currency risk and compliance gaps for Indian data residency requirements.",
  },
];

function Cell({ value }: { value: CellValue }) {
  if (value === "yes") return <Check className="mx-auto h-5 w-5 text-fair" aria-label="Yes" />;
  if (value === "no") return <X className="mx-auto h-5 w-5 text-rose-400" aria-label="No" />;
  if (value === "partial") return <Minus className="mx-auto h-5 w-5 text-amber-400" aria-label="Partial" />;
  return <span className="text-sm text-slate-600">{value}</span>;
}

const SITE = "https://www.talentspotify.com";

export default function VsLatticePage() {
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
      { "@type": "ListItem", position: 3, name: "TalentSpotify vs Lattice", item: `${SITE}/compare/talentspotify-vs-lattice` },
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
              <span className="text-slate-600">vs Lattice</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Comparison · 2026</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              TalentSpotify vs Lattice
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              INR pricing, DPDPA compliance, and live AI bias detection built for Indian mid-market teams —
              compared to a US-headquartered people management platform.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              * TalentSpotify is not affiliated with Lattice. Lattice feature claims are based on publicly
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
                  <th className="px-6 py-4 text-center font-semibold text-slate-500">Lattice</th>
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
                  "You're an Indian mid-market company (50–2,000 employees) that wants INR pricing with no USD exposure",
                  "DPDPA compliance and Indian data residency are non-negotiable",
                  "You want AI that detects bias in real time during the review conversation itself",
                  "You need to go live in weeks, not months",
                  "You want transparent, publicly listed pricing before ever speaking to sales",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-fair" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-lg font-bold text-slate-900">Choose Lattice if…</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "You're a global or US-headquartered company already standardised on a US HR stack",
                  "You need engagement surveys and career development modules in the same platform",
                  "USD pricing is not a constraint and you have a US-based HR operations team",
                  "Indian data compliance requirements are not a primary consideration",
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
              Book a 30-minute walkthrough and see how TARA detects bias live during a real performance review conversation.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaLink href="/#book-demo" variant="primary">
                Book a demo
              </CtaLink>
              <CtaLink href="/compare/talentspotify-vs-darwinbox" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Also compare vs Darwinbox <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
