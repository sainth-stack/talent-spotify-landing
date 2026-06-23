import type { Metadata } from "next";
import {
  Sparkles,
  MapPin,
  Briefcase,
  Brain,
  Globe,
  TrendingUp,
  HeartHandshake,
  BookOpen,
  Shield,
  Users,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { CareerApplicationForm } from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers — TalentSpotify",
  description:
    "Join TalentSpotify and help build the fairness layer for performance decisions. Explore open roles across engineering, AI, product, and growth.",
  alternates: { canonical: "/careers" },
};

const principles = [
  {
    icon: Brain,
    title: "Hard problems, real impact",
    body: "We work on AI bias detection, multilingual NLP, and real-time analysis of human conversations — problems that directly affect how millions of people are evaluated at work.",
  },
  {
    icon: Shield,
    title: "Infrastructure for trust",
    body: "We are not building HR software. We are building the infrastructure for organisational trust — where every review is honest, every goal is clear, and every reward is earned.",
  },
  {
    icon: Users,
    title: "Founder-led, no layers",
    body: "Small team, short feedback loops. You will talk to founders daily, own your work end-to-end, and see the direct results of your decisions in customer outcomes.",
  },
  {
    icon: Globe,
    title: "India-first, globally relevant",
    body: "We are solving for the complexity of Indian workplaces — languages, cultures, hierarchies — and building something the rest of the world will eventually need.",
  },
];

const perks = [
  {
    icon: Zap,
    label: "Hard, meaningful problems",
    desc: "Bias detection, multilingual NLP, voice AI — frontier work with real human stakes.",
  },
  {
    icon: MapPin,
    label: "Remote-first",
    desc: "Bengaluru HQ, India-wide remote. Work where you do your best thinking.",
  },
  {
    icon: TrendingUp,
    label: "Equity & ownership",
    desc: "Meaningful equity for early team members. You build it, you own part of it.",
  },
  {
    icon: BookOpen,
    label: "Learning budget",
    desc: "Annual budget for courses, conferences, and books — no approval bureaucracy.",
  },
  {
    icon: HeartHandshake,
    label: "Health coverage",
    desc: "Comprehensive health insurance for you, your family, and mental health support.",
  },
  {
    icon: Users,
    label: "Direct founder access",
    desc: "No layers, no politics. You will shape the product alongside the people who started it.",
  },
];

const roles = [
  {
    title: "Full-Stack Product Engineer",
    team: "Engineering",
    location: "Remote · India",
    type: "Full-time",
    description:
      "Own features end-to-end across our Next.js + React frontend and Node/Python backend. You will work on the review engine, OKR cascade, and TARA's web interface — code that directly changes how people experience fairness at work.",
    skills: ["React / Next.js", "TypeScript", "Node.js or Python", "PostgreSQL", "REST & WebSocket APIs"],
  },
  {
    title: "AI / ML Engineer — Voice & NLP",
    team: "AI Platform",
    location: "Remote · India",
    type: "Full-time",
    description:
      "Build the intelligence behind TARA: speech-to-text pipelines, multilingual transcript analysis, bias-signal classifiers, and feedback-quality scoring. This is applied AI with a clear fairness mandate.",
    skills: ["Python", "NLP / LLMs", "Speech processing", "MLOps", "Indian languages familiarity a plus"],
  },
  {
    title: "Product Manager — HR Platform",
    team: "Product",
    location: "Bengaluru or Remote",
    type: "Full-time",
    description:
      "Define the roadmap for TalentSpotify's core platform — reviews, OKRs, recognition, and HR analytics. Deep empathy for HR buyers and employees is more important than experience with enterprise software.",
    skills: ["Product strategy", "HR domain knowledge", "Data-informed decision-making", "Customer interviews", "Roadmapping"],
  },
  {
    title: "Growth & Demand Generation",
    team: "Growth",
    location: "Remote · India",
    type: "Full-time",
    description:
      "Drive pipeline for TalentSpotify among India's mid-market CHROs and HR leaders. Own the full funnel — content, outbound, events, partnerships — and build the playbook from the ground up.",
    skills: ["B2B SaaS growth", "HRTech domain", "Content & SEO", "Outbound sequences", "Marketing analytics"],
  },
  {
    title: "Customer Success Lead",
    team: "Customer",
    location: "Bengaluru or Remote",
    type: "Full-time",
    description:
      "Own onboarding, adoption, and renewal for our growing customer base. You are the bridge between customers and product — translating what HR teams need into roadmap input and ensuring every customer sees measurable value.",
    skills: ["SaaS CS", "HR stakeholder management", "Onboarding design", "Data storytelling", "Renewal & expansion"],
  },
];

function RoleCard({ role }: { role: typeof roles[0] }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
            {role.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
              {role.team}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {role.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>{role.type}</span>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark">
          {role.team}
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-slate-600">{role.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {s}
          </span>
        ))}
      </div>

      <a
        href="#apply"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Apply now <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </article>
  );
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-ink to-brand-dark text-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0 opacity-10" />
            <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand/30 blur-[140px]" />
            <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-fair/20 blur-[120px]" />
          </div>
          <div className="container-site relative py-24 md:py-32">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/90">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Careers at TalentSpotify
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Build the future{" "}
              <span className="gradient-text">of fair work.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/75">
              A small team solving a large problem — making every performance review honest, every goal clear, and every reward deserved.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-surface"
              >
                View open roles <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Send a general application
              </a>
            </div>
          </div>
        </section>

        {/* ── WHY WE EXIST ── */}
        <section className="section bg-white">
          <div className="container-site">
            <SectionHeading
              eyebrow="Why we exist"
              title="We are building the infrastructure for organisational trust"
              subtitle="Not another HR tool. A system that makes every performance conversation honest, every rating explainable, and every decision auditable — before it closes."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIFE AT TALENTSPOTIFY ── */}
        <section className="section bg-ink text-white">
          <div className="container-site">
            <SectionHeading
              eyebrow="Life at TalentSpotify"
              title="What working here actually looks like"
              subtitle="We are early. That means ownership, ambiguity, and real stakes — and it means the work you do this week ships to real customers next week."
              dark
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-brand-light/30 hover:bg-white/8"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20">
                    <Icon className="h-5 w-5 text-brand-light" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-white">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="section bg-surface">
          <div className="container-site">
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="How we work"
                title="Principles we actually follow"
              />
              <div className="mt-2 space-y-5">
                {[
                  {
                    heading: "Customers before metrics",
                    text: "We measure success by whether customers run fairer reviews — not by dashboard numbers. Every feature ships because a real HR leader asked for it.",
                  },
                  {
                    heading: "Write before you speak",
                    text: "Decisions get documented. Context travels asynchronously. Meetings are for hard conversations, not status updates.",
                  },
                  {
                    heading: "Ship fast, learn faster",
                    text: "We prefer a working feature in front of a customer over a polished prototype in a slide deck. Feedback loops are short.",
                  },
                  {
                    heading: "Disagree and commit — or escalate early",
                    text: "We debate hard in private and move fast in public. If you disagree, say so clearly. Once a decision is made, everyone pulls in the same direction.",
                  },
                  {
                    heading: "Own your growth",
                    text: "We invest in learning and create space for it. But growth at TalentSpotify comes from taking on hard things, not waiting to be assigned them.",
                  },
                ].map(({ heading, text }) => (
                  <div
                    key={heading}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="font-semibold text-slate-900">{heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OPEN ROLES ── */}
        <section id="open-roles" className="section scroll-mt-20 bg-white">
          <div className="container-site">
            <SectionHeading
              eyebrow="Open roles"
              title="Find your place on the team"
              subtitle="We hire for high ownership, strong opinions, and genuine curiosity about fairness in the workplace. Not for pedigree."
            />
            <div className="space-y-5">
              {roles.map((role) => (
                <RoleCard key={role.title} role={role} />
              ))}
            </div>

            {/* No role that fits */}
            <div className="mt-12 rounded-2xl border border-dashed border-brand/30 bg-brand/5 p-8 text-center">
              <p className="text-lg font-semibold text-slate-800">
                Don&apos;t see a role that fits?
              </p>
              <p className="mt-2 text-slate-600">
                We sometimes hire ahead of a specific role for the right person. Tell us who you are and what you want to build.
              </p>
              <a
                href="#apply"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                Send a general application <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ── APPLICATION FORM ── */}
        <section id="apply" className="section scroll-mt-20 bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="Apply"
              title="Submit your application"
              subtitle="Upload your CV and we'll be in touch if there's a fit."
            />
            <div className="mx-auto max-w-xl">
              <CareerApplicationForm />
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <div className="border-t border-slate-100 bg-surface">
          <div className="container-site flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-slate-600">
              Questions about working at TalentSpotify?{" "}
              <a
                href="mailto:contact@talentspotify.com"
                className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark"
              >
                contact@talentspotify.com
              </a>
            </p>
            <a
              href="/#book-demo"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              See the product
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
