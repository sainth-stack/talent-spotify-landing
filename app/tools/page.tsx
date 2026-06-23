import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckSquare, Calculator, Gamepad2, PenLine, Zap, TrendingDown, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free HR Tools — TalentSpotify",
  description:
    "Free tools for HR leaders: OKR readiness assessments, ROI calculators, and more — built by TalentSpotify.",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    icon: CheckSquare,
    badge: "Assessment",
    title: "OKR Readiness Check",
    description:
      "8 questions. 2 minutes. Find out if your organisation is ready to implement OKRs — and get a personalised score with actionable recommendations.",
    href: "/tools/okr-readiness",
    cta: "Take the Assessment",
    meta: "8 questions · Free · No sign-up",
  },
  {
    icon: Calculator,
    badge: "Calculator",
    title: "ROI Calculator",
    description:
      "See the financial case for fair performance management. Input your headcount, attrition rate, and hiring costs to get a custom ROI estimate.",
    href: "/roi-calculator",
    cta: "Calculate Your ROI",
    meta: "Instant results · Free · No sign-up",
  },
  {
    icon: Gamepad2,
    badge: "Learning Game",
    title: "OKR Learning Adventure",
    description:
      "Choose a scenario and practise classifying Objectives, Key Results, and Tasks through real-world examples. Earn badges as you master the OKR framework.",
    href: "/tools/okr-learning",
    cta: "Start Learning",
    meta: "4 scenarios · Free · No sign-up",
  },
  {
    icon: PenLine,
    badge: "AI Studio",
    title: "AI Feedback Studio",
    description:
      "Paste any performance feedback draft. TARA scans for bias, vague language, and missing impact — then suggests a polished, SBI-structured rewrite in seconds.",
    href: "/tools/feedback-studio",
    cta: "Analyse My Feedback",
    meta: "Instant results · Free · No sign-up",
  },
  {
    icon: Zap,
    badge: "Self-Assessment",
    title: "Manager Spark Index",
    description:
      "24 questions across 6 management dimensions: Clarity, Feedback, Recognition, Growth, Trust, and Energy. Get your Spark Index score and a personalised action plan.",
    href: "/tools/manager-spark",
    cta: "Find My Spark Score",
    meta: "24 questions · ~5 min · Free · No sign-up",
  },
  {
    icon: TrendingDown,
    badge: "Cost Calculator",
    title: "Attrition Insight",
    description:
      "Enter your headcount, salary, and attrition rate to see the true cost of turnover — broken down by cohort, with a personalised retention playbook matched to your risk level.",
    href: "/tools/attrition-insight",
    cta: "Calculate Attrition Cost",
    meta: "Instant results · Free · No sign-up",
  },
  {
    icon: ShieldAlert,
    badge: "Risk Assessment",
    title: "AI Risk Navigator",
    description:
      "20 questions across 5 dimensions: automation exposure, bias & fairness, data privacy, compliance, and workforce readiness. Get your AI risk score and a personalised mitigation playbook.",
    href: "/tools/ai-risk-navigator",
    cta: "Assess My AI Risk",
    meta: "20 questions · ~4 min · Free · No sign-up",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
            <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[130px]" />
          </div>
          <div className="container-site relative py-20 md:py-28">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Free HR Tools
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Tools built for{" "}
              <span className="gradient-text-light">HR leaders who mean it</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Free, instant, no sign-up required. Practical tools to assess your
              readiness, calculate ROI, and build the case for fairer performance
              management.
            </p>
          </div>
        </section>

        {/* Tool cards */}
        <section className="bg-surface">
          <div className="container-site py-14 md:py-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools.map(({ icon: Icon, badge, title, description, href, cta, meta }) => (
                <div
                  key={href}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-xs font-semibold text-brand-dark">
                      {badge}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{description}</p>
                  <p className="mt-4 text-xs text-slate-400">{meta}</p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
                  >
                    {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-100 bg-white">
          <div className="container-site flex flex-col items-center gap-4 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-slate-600">
              Want to see TalentSpotify in action with your team?
            </p>
            <a
              href="/#book-demo"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
