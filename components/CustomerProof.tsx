import { SectionHeading } from "@/components/SectionHeading";

const cases = [
  {
    sector: "IT Services · 400+ employees",
    metric: "58%",
    metricLabel: "shorter review cycles",
    quote:
      "Reviews used to take us six weeks of chasing. Now managers speak to TARA and the cycle closes in days — with better write-ups than we ever got from forms.",
    role: "CHRO",
    source: "Customer cycle data — verify before publishing",
  },
  {
    sector: "Social Enterprise · 250+ employees",
    metric: "91.1%",
    metricLabel: "core team retention, distributed field workforce",
    quote:
      "Our extension officers update OKRs from the field in their own language. Leadership finally sees ground-level progress without a single WhatsApp message.",
    role: "Operations Lead",
    source: "From customer case study",
  },
  {
    sector: "SaaS · 250+ employees",
    metric: "2 wks",
    metricLabel: "OKR rollout (down from 4 months)",
    quote:
      "We'd failed at OKRs twice with spreadsheets. TalentSpotify made goals visible to everyone, and our reviews finally measure against them.",
    role: "Co-founder & CEO",
    source: "Customer cycle data — verify before publishing",
  },
];

export function CustomerProof() {
  return (
    <section id="customers" className="section scroll-mt-16 bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Customer proof"
          title="Results from real review cycles, not just HR dashboards"
          subtitle="What TalentSpotify customers see after their first full performance cycle."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map(({ sector, metric, metricLabel, quote, role }) => (
            <figure
              key={sector}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <p className="text-4xl font-bold text-brand">{metric}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{metricLabel}</p>
              <blockquote className="mt-5 flex-1 leading-relaxed text-slate-700">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm">
                <span className="font-semibold text-slate-900">{role}</span>
                <span className="block text-slate-500">{sector}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/case-study"
            className="text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            Read the full case study →
          </a>
        </div>
      </div>
    </section>
  );
}
