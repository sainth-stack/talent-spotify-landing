import { Briefcase, Users, UserCog, User } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const personas = [
  {
    icon: Users,
    who: "CHROs & HR Heads",
    outcome: "Run defensible, on-time review cycles without chasing anyone.",
    points: ["Fairness and completion dashboards", "Audit-ready calibration records"],
  },
  {
    icon: Briefcase,
    who: "Founders & CEOs",
    outcome: "See whether the company is actually moving on its goals.",
    points: ["Live OKR execution view", "Retention risk before it's a resignation"],
  },
  {
    icon: UserCog,
    who: "Managers",
    outcome: "Give better feedback in a fraction of the time.",
    points: ["Speak reviews to TARA in 60 seconds", "Bias flags before anything ships"],
  },
  {
    icon: User,
    who: "Employees",
    outcome: "Get rated on work, not on who talks the loudest.",
    points: ["Transparent, goal-linked ratings", "Recognition that's visible company-wide"],
  },
];

export function Stakeholders() {
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeading
          eyebrow="Who it's for"
          title="One platform, four people it has to work for"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map(({ icon: Icon, who, outcome, points }) => (
            <article key={who} className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{who}</h3>
              <p className="mt-2 font-medium text-slate-700">{outcome}</p>
              <ul className="mt-3 space-y-2 text-[15px] text-slate-600">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
