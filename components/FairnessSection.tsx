import { CheckCircle2, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/ui/cta-link";

const checks = [
  "Every review scored against bias thresholds your company defines",
  "Gender, halo and recency bias flagged with the exact phrase",
  "Suggested fairer rewrites managers can accept in one click",
  "Calibration dashboards HR can defend in a promotion committee",
];

export function FairnessSection() {
  return (
    <section id="fairness" className="section scroll-mt-16 bg-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Bias detection"
            title="Fairness you can measure, not promise."
            subtitle="Most platforms talk about fairness in their values page. TalentSpotify puts a number on it — for every single review."
          />
          <ul className="space-y-4">
            {checks.map((c) => (
              <li key={c} className="flex gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl border border-brand/15 bg-surface p-5 text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-900">Signals, not verdicts — DPDP-aligned by design.</strong>{" "}
            Every session starts with recorded consent. Every flag shows its
            reasoning and requires human review. Voice recordings auto-delete in
            7 days; transcripts sit in an encrypted audit log for 3 years.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="/#book-demo" variant="primary">
              Get a sample fairness report
            </CtaLink>
            <p className="text-sm text-slate-500">
              We&apos;ll run one of your (anonymised) reviews through TARA in the demo.
            </p>
          </div>
        </div>

        {/* Fairness report mock */}
        <div
          className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          role="img"
          aria-label="Illustration: a fairness report showing gender bias in reviews reduced from 12% to 2% over two cycles"
        >
          <p className="text-sm font-semibold text-slate-900">Fairness report · Last 2 cycles</p>
          <div className="mt-5 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Gender bias in reviews — before</span>
                <span className="font-semibold text-slate-900">12%</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 w-[48%] rounded-full bg-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">After 2 cycles on TalentSpotify</span>
                <span className="font-semibold text-fair">2%</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 w-[8%] rounded-full bg-fair" />
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Flagged phrase
            </p>
            <p className="mt-2 text-sm italic text-slate-600">
              &ldquo;She&apos;s great but can be emotional under pressure&rdquo;
            </p>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold text-fair">Rewrite:</span>{" "}
              &ldquo;Maintains delivery under pressure; escalations could be earlier&rdquo;
            </p>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Result from a 240-employee customer · verified across 2+ review cycles
          </p>
        </div>
      </div>
    </section>
  );
}
