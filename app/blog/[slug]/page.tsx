import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  TrendingUp,
  Brain,
  BookOpen,
  ShieldCheck,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts, type Category, type ContentBlock } from "@/app/blog/data";

type Props = { params: Promise<{ slug: string }> };

// Slugs with a dedicated bespoke page.tsx are excluded here so the [slug]
// catch-all doesn't pre-render a stub version alongside the real one.
const BESPOKE_SLUGS = new Set(["inside-tara-bias-engine"]);

export async function generateStaticParams() {
  return posts
    .filter((p) => !BESPOKE_SLUGS.has(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — TalentSpotify Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

const categoryMeta: Record<
  Category,
  { icon: React.ElementType; bg: string; text: string; border: string }
> = {
  Performance:   { icon: TrendingUp,  bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "AI & Bias":   { icon: Brain,       bg: "bg-brand/5",   text: "text-brand-dark", border: "border-brand/20" },
  OKRs:          { icon: BookOpen,    bg: "bg-sky-50",    text: "text-sky-700",    border: "border-sky-200" },
  Compliance:    { icon: ShieldCheck, bg: "bg-amber-50",  text: "text-amber-700",  border: "border-amber-200" },
  Recognition:   { icon: Award,       bg: "bg-rose-50",   text: "text-rose-700",   border: "border-rose-200" },
  "GCC & Global":{ icon: Globe,       bg: "bg-teal-50",   text: "text-teal-700",   border: "border-teal-200" },
};

function CategoryBadge({ category }: { category: Category }) {
  const meta = categoryMeta[category];
  const Icon = meta.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${meta.bg} ${meta.text} ${meta.border}`}>
      <Icon className="h-3 w-3" aria-hidden="true" />
      {category}
    </span>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-900">
          {block.content as string}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          {block.content as string}
        </h3>
      );
    case "p":
      return (
        <p className="mt-5 leading-[1.8] text-slate-700">
          {block.content as string}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-3 pl-1">
          {(block.content as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3 pl-1">
          {(block.content as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <blockquote className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-6">
          <p className="text-base font-medium leading-relaxed text-brand-dark">
            {block.content as string}
          </p>
        </blockquote>
      );
    case "stat":
      return (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-ink p-6 text-center">
          <p className="text-sm font-medium leading-relaxed text-white/80">
            {block.content as string}
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <div className="border-b border-slate-100 bg-gradient-to-b from-surface to-white">
          <div className="container-site py-12 md:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Insights
            </Link>
            <div className="mt-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <CategoryBadge category={post.category} />
                <span className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.readTime} min read
                </span>
                <span className="text-sm text-slate-400">{post.date}</span>
              </div>
              <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        {/* ── Article body ── */}
        <div className="container-site py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <article>
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>

            {/* ── Related posts ── */}
            {related.length > 0 && (
              <div className="mt-16 border-t border-slate-100 pt-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                  More in {post.category}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand/30 hover:shadow-sm"
                    >
                      <p className="font-semibold leading-snug text-slate-900 group-hover:text-brand-dark">
                        {r.title}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        {r.date} · {r.readTime} min read
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── Back link ── */}
            <div className="mt-12 border-t border-slate-100 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All Insights
              </Link>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="border-t border-slate-100 bg-ink text-white">
          <div className="container-site py-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              See these principles in action
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              TalentSpotify applies evidence-led performance management, AI bias detection, and structured OKR cascades to your real workforce — in India and the GCC.
            </p>
            <a
              href="/#book-demo"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
            >
              Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
