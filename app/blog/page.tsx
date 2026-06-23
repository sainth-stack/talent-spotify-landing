import type { Metadata } from "next";
import {
  ArrowRight,
  Clock,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Brain,
  Globe,
  Award,
  Sparkles,
  Mic,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsletterForm } from "@/components/NewsletterForm";
import { posts, type Category } from "@/app/blog/data";

export const metadata: Metadata = {
  title: "Insights & Research — TalentSpotify Blog",
  description:
    "Thought leadership on fair performance management, AI bias detection, OKRs, DPDPA compliance, and building high-trust workplaces — from the TalentSpotify research team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights & Research — TalentSpotify Blog",
    description:
      "Research-backed perspectives on fairer performance reviews, OKRs, recognition, and the future of HR in India and GCC.",
    type: "website",
  },
};

const categoryMeta: Record<
  Category,
  { icon: React.ElementType; bg: string; text: string; border: string }
> = {
  Performance:    { icon: TrendingUp,  bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "AI & Bias":    { icon: Brain,       bg: "bg-brand/5",   text: "text-brand-dark", border: "border-brand/20" },
  OKRs:           { icon: BookOpen,    bg: "bg-sky-50",    text: "text-sky-700",    border: "border-sky-200" },
  Compliance:     { icon: ShieldCheck, bg: "bg-amber-50",  text: "text-amber-700",  border: "border-amber-200" },
  Recognition:    { icon: Award,       bg: "bg-rose-50",   text: "text-rose-700",   border: "border-rose-200" },
  "GCC & Global": { icon: Globe,       bg: "bg-teal-50",   text: "text-teal-700",   border: "border-teal-200" },
};

const categories: Array<{ label: string; value: Category | "All" }> = [
  { label: "All Insights", value: "All" },
  { label: "Performance", value: "Performance" },
  { label: "AI & Bias", value: "AI & Bias" },
  { label: "OKRs", value: "OKRs" },
  { label: "Compliance", value: "Compliance" },
  { label: "Recognition", value: "Recognition" },
  { label: "GCC & Global", value: "GCC & Global" },
];

function CategoryBadge({ category }: { category: Category }) {
  const meta = categoryMeta[category];
  const Icon = meta.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${meta.bg} ${meta.text} ${meta.border}`}
    >
      <Icon className="h-3 w-3" aria-hidden="true" />
      {category}
    </span>
  );
}

function PostMeta({ date, readTime }: { date: string; readTime: number }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      <span>{date}</span>
      <span>·</span>
      <span className="flex items-center gap-1">
        <Clock className="h-3 w-3" aria-hidden="true" />
        {readTime} min read
      </span>
    </div>
  );
}

const featured = posts.find((p) => p.featured)!;
const grid = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
            <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-[130px]" />
            <div className="absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-violet-100/50 blur-[100px]" />
          </div>
          <div className="container-site relative py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-dark">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Insights & Research
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                The thinking behind{" "}
                <span className="gradient-text-light">fairer workplaces</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Research, field findings, and practical guides on performance management, AI bias detection, OKRs, recognition, and DPDPA compliance — written for HR leaders building high-trust organisations in India and the GCC.
              </p>
            </div>

            {/* Category pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map(({ label, value }) => {
                const isAll = value === "All";
                return (
                  <span
                    key={value}
                    className={`cursor-default select-none rounded-full border px-4 py-1.5 text-sm font-medium ${
                      isAll
                        ? "border-brand bg-brand text-white"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Featured Post ── */}
        <section className="container-site py-14 md:py-20">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              {/* Visual panel — `relative` is required for the Next.js Image fill prop */}
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-gradient-to-br from-ink to-brand-dark p-8 lg:min-h-[420px] lg:p-10">
                {featured.cover ? (
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0" aria-hidden="true">
                    <div className="hero-grid absolute inset-0 opacity-20" />
                    <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute -top-10 left-10 h-48 w-48 rounded-full bg-brand-light/10 blur-3xl" />
                  </div>
                )}
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                    <TrendingUp className="h-3 w-3" /> Featured
                  </span>
                </div>
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featured.readTime} min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Content panel */}
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div>
                  <CategoryBadge category={featured.category} />
                  <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-slate-900 group-hover:text-brand-dark lg:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">{featured.excerpt}</p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 font-semibold text-brand transition group-hover:gap-3">
                    Read the full article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Article Grid ── */}
        <section className="bg-surface">
          <div className="container-site py-14 md:py-20">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Latest Insights</h2>
              <span className="text-sm text-slate-500">{grid.length} articles</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CategoryBadge category={post.category} />
                  <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-slate-900 group-hover:text-brand-dark">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <PostMeta date={post.date} readTime={post.readTime} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="section bg-ink text-white">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand">
                <Mail className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
                Get insights in your inbox
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Research-backed articles on fair performance management, AI bias detection, OKRs, and DPDPA compliance — delivered fortnightly. No noise.
              </p>
              <NewsletterForm />
              <p className="mt-4 text-xs text-white/40">
                Fortnightly. No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

        {/* ── TARA Callout ── */}
        <section className="border-t border-slate-100 bg-white">
          <div className="container-site py-14">
            <div className="mx-auto max-w-4xl rounded-2xl border border-brand/20 bg-surface p-8 md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark">
                    <Mic className="h-3 w-3" aria-hidden="true" /> See It In Action
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    Everything you read here, TARA does live in your review conversations.
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    AI-assisted performance conversations with real-time bias detection, multilingual support, and automatic OKR sync — designed for the Indian and GCC workforce.
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="/#book-demo"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
                  >
                    Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
