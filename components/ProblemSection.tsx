import { Scale, Hourglass, Compass, Gift, FileWarning } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  {
    icon: Scale,
    title: "Bias decides who gets promoted",
    body: "Unstructured reviews favour the loudest voice in the room, not the strongest contributor.",
    impact: "Your best performers stall and leave.",
  },
  {
    icon: Hourglass,
    title: "Review cycles drag for weeks",
    body: "Managers postpone write-ups and HR chases forms until the feedback is already stale.",
    impact: "Decisions slip and trust in the process erodes.",
  },
  {
    icon: Compass,
    title: "OKRs live in silos",
    body: "Goals are set in slide decks in January and disconnected from the work by March.",
    impact: "Teams optimise the wrong things all quarter.",
  },
  {
    icon: Gift,
    title: "Recognition arrives too late",
    body: "Good work gets noticed at appraisal time, months after it actually happened.",
    impact: "Engagement and retention quietly slip.",
  },
  {
    icon: FileWarning,
    title: "HR lacks evidence during disputes",
    body: "When a rating is challenged, there is no record of what was actually said or agreed.",
    impact: "Every disagreement becomes a fairness and legal risk.",
  },
];

export function ProblemSection() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="The problem"
          title="Why performance reviews break as companies grow"
          subtitle="You're too big for spreadsheets and gut feel, too lean for an enterprise HR suite. That gap is where good people get reviewed badly."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, body, impact }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{body}</p>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-medium text-slate-800">
                <span className="text-brand-dark">Business impact:</span> {impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
