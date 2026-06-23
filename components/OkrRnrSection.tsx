import { SectionHeading } from "@/components/SectionHeading";

const cascade = [
  { level: "Company", goal: "Grow ARR 40% with NRR above 110%", progress: 72 },
  { level: "Team · Sales", goal: "Close 18 mid-market logos this quarter", progress: 64 },
  { level: "Individual · Arjun", goal: "Build GCC pipeline of 25 qualified accounts", progress: 80 },
];

const recognitions = [
  { medal: "🥇", name: "Meera", pts: "1,240", caption: "Closed the quarter's biggest renewal", tag: "Customer First" },
  { medal: "🥈", name: "Dev team", pts: "980", caption: "Shipped payroll integration 2 weeks early", tag: "Ship It" },
  { medal: "🥉", name: "Ravi", pts: "860", caption: "Mentored 3 new joiners through onboarding", tag: "Grow Together" },
];

export function OkrRnrSection() {
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeading
          eyebrow="OKRs + Recognition"
          title="Goals people can see. Wins people can feel."
          subtitle="Alignment and recognition run in the same place reviews happen — so performance conversations always have live context."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* OKR cascade mock */}
          <div
            className="rounded-2xl border border-slate-200 bg-white p-7"
            role="img"
            aria-label="Illustration: OKRs cascading from company to team to individual with live progress"
          >
            <p className="text-sm font-semibold text-slate-900">Live OKR cascade</p>
            <div className="mt-5 space-y-4">
              {cascade.map(({ level, goal, progress }, i) => (
                <div key={level} className="rounded-xl border border-slate-200 p-4" style={{ marginLeft: i * 16 }}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{level}</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">{goal}</p>
                  <div className="mt-2.5 flex items-center gap-3">
                    <div className="h-2 flex-1 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-brand" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{progress}%</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-600">
              <strong className="text-slate-900">85% adoption in Q1</strong> — one customer
              cut their OKR rollout from 4 months to 2 weeks.
            </p>
          </div>

          {/* Recognition feed mock */}
          <div
            className="rounded-2xl border border-slate-200 bg-white p-7"
            role="img"
            aria-label="Illustration: a recognition leaderboard ranked by points with company-value tags"
          >
            <p className="text-sm font-semibold text-slate-900">Recognition leaderboard</p>
            <ul className="mt-5 space-y-4">
              {recognitions.map(({ medal, name, pts, caption, tag }) => (
                <li key={name} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-lg" aria-hidden="true">
                    {medal}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{name} — {pts} pts</p>
                    <p className="text-xs text-slate-500">{caption}</p>
                    <span className="mt-1.5 inline-block rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand-dark">
                      {tag}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-600">
              Recognition tied to company values feeds engagement scores —
              customers report a <strong className="text-slate-900">70% engagement lift</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
