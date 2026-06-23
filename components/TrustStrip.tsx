import { Award, Landmark, Newspaper, Trophy, Sparkles, Languages, ShieldCheck } from "lucide-react";

const marks = [
  { icon: Landmark, label: "STPI Seed Funded" },
  { icon: Award, label: "Best Engagement Product · National HR Awards 2024" },
  { icon: Newspaper, label: "Startup of the Year · HackerNoon 2024" },
  { icon: Trophy, label: "Top Karnataka Startup · EIILM 2025" },
];

const positioning = [
  { icon: Sparkles, label: "India-first AI performance platform" },
  { icon: Languages, label: "Multilingual review conversations" },
  { icon: ShieldCheck, label: "DPDPA-aware review workflows" },
];

export function TrustStrip() {
  return (
    <section aria-label="Recognition and adoption" className="border-b border-brand/10 bg-surface">
      <div className="container-site flex flex-col gap-5 py-8">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {marks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-base font-medium text-slate-700">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <p className="shrink-0 text-base font-semibold text-slate-800">
            Trusted by mid-market HR teams across India &amp; GCC
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-brand/10 pt-5">
          {positioning.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
