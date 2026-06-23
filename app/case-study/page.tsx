import type { Metadata } from "next";
import {
  EyeOff,
  Smartphone,
  MessagesSquare,
  TrendingUp,
  Sprout,
  Cpu,
  Mic,
  HeartHandshake,
  ArrowRight,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Social Enterprise × TalentSpotify — Case Study",
  description:
    "How TalentSpotify helped a social enterprise manage 250+ employees across a distributed organic cotton supply chain — with 91.1% core retention and field operations above sector average.",
};

const challenges = [
  {
    icon: EyeOff,
    title: "Goal Alignment Was Invisible",
    body: "Field employees had no structured way to link daily work to organisational OKRs. Leadership had no real-time visibility into ground-level progress.",
  },
  {
    icon: Smartphone,
    title: "Desktop-Only Tools Failed in the Field",
    body: "Existing performance tools required desktop access — impractical for extension officers working across remote farm sites.",
  },
  {
    icon: MessagesSquare,
    title: "Fragmented Communication",
    body: "Teams relied on WhatsApp groups and spreadsheets. No unified data layer. No audit trail. Cross-geography visibility was impossible.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Expansion Outpaced Infrastructure",
    body: "The supply chain expanded into EU markets (Netherlands). Existing people management systems could not scale to a multi-country, multi-entity structure.",
  },
];

const platform = {
  icon: Cpu,
  label: "Platform",
  items: [
    ["OKR Cascade Engine", "Goals set at leadership level cascade to individual field employees in one click"],
    ["Mobile-First Interface", "Built for extension officers in the field, not office workers"],
    ["Live Dashboards", "Real-time task and OKR progress visible to managers across all geographies"],
    ["TARA AI", "Voice-based AI agent for manager-employee review conversations that surfaces bias signals"],
  ],
};

const implementation = {
  icon: HeartHandshake,
  label: "Implementation",
  items: [
    ["On-Ground Training", "Facilitators trained field employees in person across rural sites"],
    ["Regional Language Support", "Interface adapted for Telugu and local language use"],
    ["Purpose-Led OKRs", "Goals framed around social mission outcomes, not just productivity metrics"],
    ["Non-Monetary Recognition", "Rewards system using extra leave, handwritten letters, certificates, and public monthly appreciation events"],
  ],
};

const stats = [
  { value: "250+", label: "Employees managed on TalentSpotify" },
  { value: "91.1%", label: "Retention rate — core & HQ functions" },
  { value: "74.1%", label: "Retention rate — field operations workforce" },
  { value: "85", label: "Employees with 2+ years active tenure on platform" },
  { value: "4", label: "Legal entities tracked across India and Netherlands" },
];

const steps = [
  {
    icon: Sprout,
    title: "Seed to OKR",
    body: "When the enterprise issues seeds to farmers, the corresponding field employee OKRs are activated. Every supply chain stage — cultivation, ginning, spinning, export — has a mapped objective.",
  },
  {
    icon: Smartphone,
    title: "Daily Field Updates",
    body: "Extension officers update task progress from mobile devices in the field. Managers see real-time completion rates across all geographies without a single WhatsApp message.",
  },
  {
    icon: HeartHandshake,
    title: "Rewards That Mean Something",
    body: "Employees earn recognition points redeemable for extra leave days, certificates, and handwritten letters. Monthly public appreciation events recognise top performers by name.",
  },
  {
    icon: Mic,
    title: "TARA AI Review Layer",
    body: "Managers conduct performance conversations through TARA AI. The system flags cognitive and behavioural biases in real time — ensuring fair, consistent reviews for every field employee.",
  },
];

const taraTags = ["Voice-First Input", "Multilingual", "Auto OKR Sync", "Bias Detection"];

const clientTags = [
  "Social Enterprise",
  "250+ Employees",
  "Andhra Pradesh, India + Netherlands",
];

function SolutionColumn({
  icon: Icon,
  label,
  items,
}: {
  icon: typeof Cpu;
  label: string;
  items: string[][];
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </span>
      <ul className="mt-6 space-y-5">
        {items.map(([title, body]) => (
          <li key={title} className="flex gap-3">
            <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="mt-1 text-slate-600">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1 — Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[130px]" />
            <div className="hero-grid absolute inset-0" />
          </div>
          <div className="container-site relative py-20 text-center md:py-28">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Social Enterprise Case Study
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              Where Purpose Meets <span className="gradient-text-light">Performance</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              How an organic cotton social enterprise manages 250+ field
              employees across rural Andhra Pradesh — with OKRs, gamified
              rewards, and AI-powered review conversations.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {clientTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2 — About the social enterprise */}
        <section className="section bg-white">
          <div className="container-site max-w-3xl">
            <SectionHeading align="left" eyebrow="The client" title="About the Social Enterprise" />
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                This social enterprise operates a fully traceable, chemical-free
                organic cotton supply chain across rural agency areas in Andhra
                Pradesh. It issues organic cotton seeds to smallholder farmers,
                deploys field employees to manage cultivation with zero chemical
                inputs, and purchases the harvest at fair prices.
              </p>
              <p>
                The raw cotton is then processed through ginning and spinning into
                finished fabric — exported to global brands including Hugo Boss and
                supplied to KLM Airlines. Post-sale proceeds are partially
                reinvested into farmer community development programs, completing a
                circular social impact loop.
              </p>
              <p>
                Their workforce is distributed, multilingual, and primarily
                field-based — operating across remote geographies where desktop
                tools are not viable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — The Challenge */}
        <section className="section bg-surface">
          <div className="container-site">
            <SectionHeading eyebrow="The challenge" title="What They Were Up Against" />
            <div className="grid gap-6 md:grid-cols-2">
              {challenges.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — The Solution */}
        <section className="section bg-white">
          <div className="container-site">
            <SectionHeading
              eyebrow="The solution"
              title="AI Power + Human Wisdom"
              subtitle="A mobile-first platform, rolled out the way a distributed field workforce actually adopts technology."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <SolutionColumn {...platform} />
              <SolutionColumn {...implementation} />
            </div>
          </div>
        </section>

        {/* Section 5 — Measurable Outcomes */}
        <section className="section bg-ink text-white">
          <div className="container-site">
            <SectionHeading dark eyebrow="The outcomes" title="Results That Matter" />
            <dl className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
                >
                  <dd className="text-4xl font-bold gradient-text">{value}</dd>
                  <dt className="mt-2 text-sm leading-snug text-white/70">{label}</dt>
                </div>
              ))}
            </dl>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/55">
              Field operations retention of 74.1% is above the Indian NGO/social
              enterprise sector average of 40–60% for distributed field workforces.
            </p>
          </div>
        </section>

        {/* Section 6 — How It Works in Practice */}
        <section className="section bg-surface">
          <div className="container-site">
            <SectionHeading eyebrow="In practice" title="From Farm to Dashboard" />
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                      {i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 7 — Coming Next (TARA callout) */}
        <section className="section bg-white">
          <div className="container-site">
            <div className="mx-auto max-w-3xl rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center md:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark">
                <Mic className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                TARA — Talent AI Review Assistant
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Voice-first multilingual performance reviews with automatic OKR
                sync — designed for frontline workers who speak, not type.
                Currently piloting with field teams.
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                {taraTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-brand/25 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-dark"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 — CTA */}
        <section className="section bg-ink text-white">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Managing a Distributed Workforce?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              See how TalentSpotify works for field teams, social enterprises, and
              multi-geography operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CtaLink href="/#book-demo" variant="primary" size="lg">
                Book a Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink href="/#pricing" variant="outline-dark" size="lg">
                View Pricing
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
