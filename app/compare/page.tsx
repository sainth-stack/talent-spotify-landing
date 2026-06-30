import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TalentSpotify vs Alternatives — Performance Review Software Comparison",
  description:
    "See how TalentSpotify compares to Darwinbox, Lattice, and other performance management platforms for Indian mid-market companies.",
  alternates: { canonical: "/compare" },
};

const comparisons = [
  {
    href: "/compare/talentspotify-vs-darwinbox",
    competitor: "Darwinbox",
    summary:
      "TalentSpotify vs Darwinbox — AI bias detection and fairness scoring for mid-market teams vs a broad enterprise HRMS suite.",
    tags: ["Enterprise HRMS", "India", "Performance"],
  },
  {
    href: "/compare/talentspotify-vs-lattice",
    competitor: "Lattice",
    summary:
      "TalentSpotify vs Lattice — INR pricing, DPDPA compliance, and TARA AI vs a US-headquartered people management platform.",
    tags: ["US Platform", "USD Pricing", "Performance"],
  },
];

export default function ComparePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.talentspotify.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.talentspotify.com/compare" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <div className="border-b border-slate-100 bg-gradient-to-b from-surface to-white">
          <div className="container-site py-14 md:py-20">
            <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand">Home</Link>
              <span>/</span>
              <span className="text-slate-600">Compare</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              TalentSpotify vs Alternatives
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              How does TalentSpotify stack up against other performance management platforms?
              We break down the differences so HR leaders can make an informed decision.
            </p>
          </div>
        </div>

        <div className="container-site py-14">
          <div className="grid gap-6 md:grid-cols-2">
            {comparisons.map(({ href, competitor, summary, tags }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-brand-dark">
                  TalentSpotify vs {competitor}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{summary}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand">
                  See full comparison <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-ink p-10 text-center text-white">
            <h2 className="text-2xl font-bold">Still deciding? Talk to us.</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              We'll walk you through how TalentSpotify compares to the platform you're currently using — no sales pressure.
            </p>
            <a
              href="/#book-demo"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
            >
              Book a 30-min walkthrough <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
