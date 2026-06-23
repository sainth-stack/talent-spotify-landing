import {
  UserCheck,
  Users,
  ClipboardList,
  Flag,
  Database,
  Lock,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const principles = [
  {
    icon: UserCheck,
    title: "Consent before recording",
    body: "Every review session starts with explicit employee consent before any conversation is captured.",
  },
  {
    icon: Users,
    title: "Human-in-the-loop decisions",
    body: "TARA surfaces signals; managers and HR make every final rating and decision.",
  },
  {
    icon: ClipboardList,
    title: "HR override & audit trail",
    body: "HR can override or dismiss any flag, and every override is logged for audit.",
  },
  {
    icon: Flag,
    title: "Flags are recommendations",
    body: "Bias flags are guidance to improve a review — never automated verdicts on a person.",
  },
  {
    icon: Database,
    title: "Data-retention controls",
    body: "Configurable retention windows — voice recordings can auto-delete while transcripts stay in an audit log.",
  },
  {
    icon: Lock,
    title: "Encryption-ready architecture",
    body: "AES-256 at rest, TLS 1.3 in transit, role-based access across the platform.",
  },
  {
    icon: ShieldCheck,
    title: "DPDPA-aware workflows",
    body: "Consent, purpose, and retention designed around India's data protection expectations.",
  },
  {
    icon: Globe,
    title: "UAE/GCC governance-ready",
    body: "Built to extend to GCC data-governance needs for companies operating across regions.",
  },
];

export function ResponsibleAi() {
  return (
    <section id="responsible-ai" className="section scroll-mt-16 bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Responsible AI"
          title="Built for responsible AI in performance reviews"
          subtitle="The scariest part of AI in HR is letting a model judge people. TalentSpotify is built so it never does — the AI assists, your people decide."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-surface p-6"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          We describe our data-handling practices in plain language and avoid
          unverified certification claims. Talk to us for current compliance
          documentation.
        </p>
      </div>
    </section>
  );
}
