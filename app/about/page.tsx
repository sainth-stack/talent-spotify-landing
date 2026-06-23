import type { Metadata } from "next";
import {
  Scale,
  ShieldCheck,
  HandHeart,
  MessagesSquare,
  Sparkles,
  Award,
  Landmark,
  Newspaper,
  Trophy,
  Building2,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "About TalentSpotify — The Fairness Layer for Performance Decisions",
  description:
    "TalentSpotify helps growing companies run OKRs, performance reviews, and recognition where every decision is consistent, explainable, and backed by evidence. Founder-led, India-first, GCC-ready.",
  alternates: { canonical: "/about" },
};

// CTA route map: the brief's /request-demo and /tara-ai live as homepage
// sections in this single-page build, so they resolve via /#book-demo and /#tara.
const DEMO_HREF = "/#book-demo";
const TARA_HREF = "/#tara";

const values = [
  {
    icon: Scale,
    title: "Evidence over opinion",
    body: "Decisions backed by goals, conversations, and outcomes — not recall or personal preference.",
  },
  {
    icon: ShieldCheck,
    title: "Fairness by design",
    body: "Bias signals are surfaced before a decision closes — not investigated after.",
  },
  {
    icon: HandHeart,
    title: "Human judgment, always",
    body: "AI supports managers and HR. It never makes the call. Every signal is reviewed by a human before action is taken.",
  },
  {
    icon: MessagesSquare,
    title: "Every voice counts",
    body: "Employees are heard in their own language — across 22 Indian languages and English.",
  },
];

const founders = [
  {
    photo: "/team/aneel.jpg",
    name: "Aneel Kumar Bonu",
    title: "Founder & CEO",
    bio: "Driving product vision, customer outcomes, and the future of fair performance systems.",
  },
  {
    photo: "/team/prashanth.jpg",
    name: "Prashanth",
    title: "Co-founder",
    bio: "Building secure, scalable AI systems that transform people decisions into measurable business outcomes.",
  },
];

const visionCards = [
  {
    title: "Fairer reviews",
    body: "AI-assisted calibration that surfaces bias signals before each review cycle closes — so HR can act before a decision is finalised.",
  },
  {
    title: "Recognition that lands",
    body: "Recognition tied to leaderboard points, company values, and measurable contribution — not subjective opinion.",
  },
  {
    title: "Early risk intelligence",
    body: "Retention risk signals that help leaders identify at-risk employees before engagement becomes attrition.",
  },
];

const badges = [
  { icon: Landmark, label: "STPI Seed Funded" },
  { icon: Award, label: "Best Engagement Product · National HR Awards 2024" },
  { icon: Newspaper, label: "Startup of the Year · HackerNoon 2024" },
  { icon: Trophy, label: "Top Karnataka Startup · EIILM 2025" },
  { icon: Building2, label: "STPI Next Gen" },
  { icon: Trophy, label: "AI-EI Case Study Winner" },
];

// Lightweight reuse of the homepage TARA orb motif (existing animation classes).
function TaraOrb() {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center"
      role="img"
      aria-label="TARA — TalentSpotify's AI voice agent, shown as a calm glowing orb"
    >
      <div className="absolute inset-0 rounded-full border-2 border-brand/25 motion-safe:animate-pulse-ring" aria-hidden="true" />
      <div
        className="relative flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full motion-safe:animate-breathe"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #EAF3EE 0%, #B7D2C5 24%, #6FA08D 50%, #3E6B5C 76%, #2A4A40 96%)",
          boxShadow:
            "0 24px 80px rgba(62,107,92,0.32), inset 0 -26px 56px rgba(20,40,34,0.35), inset 0 14px 40px rgba(255,255,255,0.5)",
        }}
      >
        <p className="text-2xl font-bold tracking-[0.25em] text-white">TARA</p>
        <p className="mt-1 text-xs font-medium text-white/85">AI voice agent</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* SECTION 1 — Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[130px]" />
            <div className="hero-grid absolute inset-0" />
          </div>
          <div className="container-site relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-dark">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> About Us
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                Building the fairness layer for{" "}
                <span className="gradient-text-light">performance decisions</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                TalentSpotify helps growing companies run OKRs, performance
                reviews, and recognition where every decision is consistent,
                explainable, and backed by evidence — not memory or manager
                opinion alone.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CtaLink href={DEMO_HREF} variant="primary" size="lg">
                  Request Demo
                </CtaLink>
                <CtaLink href={TARA_HREF} variant="outline" size="lg">
                  Explore TARA
                </CtaLink>
              </div>
            </div>
            <TaraOrb />
          </div>
        </section>

        {/* SECTION 2 — Belief strip */}
        <section className="bg-ink py-20 text-center text-white md:py-24">
          <div className="container-site">
            <p className="mx-auto max-w-3xl text-2xl font-bold leading-snug tracking-tight md:text-3xl">
              We are not building another HR system. We are building the
              infrastructure for organisational trust.
            </p>
          </div>
        </section>

        {/* SECTION 3 — Founding story */}
        <section className="section bg-white">
          <div className="container-site grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading align="left" eyebrow="Our story" title="Why TalentSpotify exists" />
              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  Performance reviews shape careers, pay, and trust — yet in most
                  companies the decision is made in a 30-minute conversation, from
                  memory, once a year. Managers are handed forms, not support.
                  Employees rarely know how they are being judged. And HR is
                  expected to guarantee fairness on ratings it cannot see the
                  evidence behind. For fast-growing, distributed, multilingual
                  teams, these gaps only widen.
                </p>
                <p>
                  We built TalentSpotify to close them. By combining OKRs,
                  structured review conversations, recognition, and AI-assisted
                  bias analysis, we help companies move from opinion-led reviews to
                  evidence-led talent decisions — built for India-first teams,
                  ready for GCC expansion.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-surface p-8">
              <p className="text-sm font-semibold text-slate-900">How TARA works</p>
              <p className="mt-3 leading-relaxed text-slate-600">
                TARA joins the review conversation, captures it live, analyses the
                transcript for bias signals, and surfaces findings before ratings
                are finalised — giving HR a human-reviewed evidence trail before
                any decision closes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Leadership */}
        <section className="section bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="Leadership"
              title="Founder-led, with deep HRTech and enterprise product expertise"
              subtitle="Built by founders who understand performance systems, people decisions, and scalable AI infrastructure."
            />
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {founders.map(({ photo, name, title, bio }) => (
                <article key={name} className="rounded-2xl border border-slate-200 bg-white p-7 text-center">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-slate-200">
                    <Image
                      src={photo}
                      alt={name}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-dark">{title}</p>
                  <p className="mt-3 leading-relaxed text-slate-600">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Values */}
        <section className="section bg-white">
          <div className="container-site">
            <SectionHeading title="The values behind every product decision" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{body}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-slate-500">
              Trusted by growing companies across IT, SaaS, manufacturing,
              hospitality, and social enterprises.
            </p>
          </div>
        </section>

        {/* SECTION 6 — Vision */}
        <section className="section bg-ink text-white">
          <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-light">
                Our vision
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The future of talent decisions, built on fairness and trust
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/85">
                <p>
                  In the next decade, every company will need talent decisions
                  powered by evidence, fairness, and real business outcomes.
                </p>
                <p>
                  We envision a future where performance reviews surface bias
                  signals before they influence a decision, rewards reflect
                  measurable contribution, and leaders can act on retention risk
                  before it becomes attrition.
                </p>
                <p>
                  TalentSpotify exists to help companies make better people
                  decisions that improve retention, trust, and business
                  performance.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {visionCards.map(({ title, body }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-ink-soft p-6">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — Recognition & Backing */}
        <section aria-label="Recognition & Backing" className="border-y border-brand/10 bg-surface">
          <div className="container-site py-12">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-brand">
              Recognition &amp; Backing
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {badges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Icon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 8 — Final CTA */}
        <section className="section bg-ink text-white">
          <div className="container-site text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              Ready to make performance decisions fairer, clearer, and easier to
              trust?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              TalentSpotify helps HR leaders move from scattered performance
              processes to evidence-led talent decisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CtaLink href={DEMO_HREF} variant="primary" size="lg">
                Book a Demo
              </CtaLink>
              <CtaLink href={TARA_HREF} variant="outline-dark" size="lg">
                See How TARA Works
              </CtaLink>
            </div>
            <p className="mt-5 text-sm text-white/60">
              Built for India-first mid-market teams. GCC-ready.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
