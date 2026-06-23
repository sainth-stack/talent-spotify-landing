import { ClipboardCheck, Target, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const modules = [
  {
    icon: ClipboardCheck,
    name: "Perform",
    outcome: "Reviews that finish on time and hold up to scrutiny.",
    points: ["Review cycles & calibration", "Fairness scoring on every review", "Promotion & comp-ready reports"],
  },
  {
    icon: Target,
    name: "Align",
    outcome: "Company goals your teams can actually see and move.",
    points: ["Weighted OKRs with quarterly tracking & approvals", "TARA drafts & updates OKRs in conversation", "Goal-to-review traceability"],
  },
  {
    icon: HeartHandshake,
    name: "Recognise",
    outcome: "Recognition that reaches people before resignation letters do.",
    points: ["Reward points, redemption & leaderboards", "Engagement pulse surveys", "Retention risk signals"],
  },
];

export function ProductModules() {
  return (
    <section id="product" className="section scroll-mt-16 bg-surface">
      <div className="container-site">
        <SectionHeading
          eyebrow="The platform"
          title="Three modules. One source of truth for performance."
          subtitle="Each module works alone. Together — with tasks, attendance and leave built in — they connect goals, reviews and recognition into one fair system of record."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {modules.map(({ icon: Icon, name, outcome, points }) => (
            <article
              key={name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light">
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-slate-900">{name}</h3>
              <p className="mt-2 font-medium text-slate-700">{outcome}</p>
              <ul className="mt-4 space-y-2.5 text-slate-600">
                {points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="/#book-demo"
                className="mt-6 text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                See it in a demo →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
