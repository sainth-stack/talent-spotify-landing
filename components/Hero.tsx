"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, Target, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";

const waveHeights = [8, 16, 26, 36, 24, 40, 30, 16, 34, 22, 12, 28, 18, 8];

const capabilities = [
  "Fairness-scores every review",
  "60-second spoken reviews",
  "OKRs set & updated by TARA",
];

// SVG dial: r=26, circumference ≈ 163.4; 94% score → offset ≈ 9.8
function FairnessDial() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 shrink-0" aria-hidden="true">
      <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="6" />
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke="#4C9D82"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="163.4"
        strokeDashoffset="9.8"
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="38" textAnchor="middle" fill="#0F172A" fontSize="19" fontWeight="700">
        94
      </text>
    </svg>
  );
}

/** TARA's identity: a calm, breathing voice orb with orbiting light particles. */
function TaraOrb() {
  return (
    <div className="relative flex aspect-square w-[72%] items-center justify-center">
      {/* expanding pulse rings */}
      <div className="absolute inset-0 rounded-full border-2 border-brand/25 motion-safe:animate-pulse-ring" aria-hidden="true" />
      <div
        className="absolute inset-0 rounded-full border border-brand/15 motion-safe:animate-pulse-ring"
        style={{ animationDelay: "1.6s" }}
        aria-hidden="true"
      />

      {/* rotating light arc */}
      <div
        className="absolute -inset-4 rounded-full motion-safe:animate-spin-slow"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(94,150,130,0.4) 10%, transparent 28%, rgba(163,196,183,0.3) 52%, transparent 70%, rgba(94,150,130,0.3) 90%, transparent 100%)",
          maskImage: "radial-gradient(closest-side, transparent 84%, black 86%)",
          WebkitMaskImage: "radial-gradient(closest-side, transparent 84%, black 86%)",
        }}
        aria-hidden="true"
      />

      {/* orbiting particles — two rings, opposite directions */}
      <div className="absolute -inset-7 motion-safe:animate-orbit" aria-hidden="true">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -ml-1 rounded-full bg-brand shadow-[0_0_12px_rgba(51,104,90,0.8)]" />
        <span className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5 rounded-full bg-brand-light shadow-[0_0_10px_rgba(163,196,183,0.9)]" />
      </div>
      <div
        className="absolute -inset-12 motion-safe:animate-orbit"
        style={{ animationDirection: "reverse", animationDuration: "38s" }}
        aria-hidden="true"
      >
        <span className="absolute right-0 top-1/2 h-2 w-2 rounded-full bg-fair shadow-[0_0_12px_rgba(111,177,153,0.8)]" />
        <span className="absolute bottom-0 left-[22%] h-1.5 w-1.5 rounded-full bg-brand-light/80 shadow-[0_0_8px_rgba(163,196,183,0.8)]" />
      </div>

      {/* the orb */}
      <div
        className="relative flex h-full w-full flex-col items-center justify-center rounded-full motion-safe:animate-breathe"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #EAF3EE 0%, #B7D2C5 24%, #6FA08D 50%, #3E6B5C 76%, #2A4A40 96%)",
          boxShadow:
            "0 24px 80px rgba(62,107,92,0.32), inset 0 -26px 56px rgba(20,40,34,0.35), inset 0 14px 40px rgba(255,255,255,0.5)",
        }}
      >
        {/* specular highlight */}
        <div
          className="absolute left-[16%] top-[10%] h-[26%] w-[38%] rounded-full bg-white/45 blur-xl"
          aria-hidden="true"
        />
        <div className="flex h-10 items-end gap-[4px]" aria-hidden="true">
          {waveHeights.map((h, i) => (
            <span
              key={i}
              className="w-[4px] rounded-full bg-white/90 motion-safe:animate-wave"
              style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
        <p className="mt-4 text-2xl font-bold tracking-[0.25em] text-white">TARA</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-white motion-safe:animate-pulse" aria-hidden="true" />
          AI voice agent · listening
        </p>
      </div>
    </div>
  );
}

/** Depth factors per floating card for the cursor parallax. */
const parallax = (factor: number): React.CSSProperties => ({
  transform: `translate3d(calc(var(--mx, 0) * ${factor}px), calc(var(--my, 0) * ${factor}px), 0)`,
  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
});

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  // Cursor parallax: orb drifts toward the pointer, cards drift away (depth).
  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white text-slate-900">
      {/* Backdrop: soft tints + grid */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="absolute -bottom-56 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-brand-light/25 blur-[130px]" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="container-site relative grid items-center gap-16 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand-dark motion-safe:animate-fade-up"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            AI bias detection for performance reviews
          </p>
          <h1
            className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl xl:text-[3.6rem] motion-safe:animate-fade-up"
            style={{ animationDelay: "90ms" }}
          >
            Catch bias before it{" "}
            <span className="gradient-text-light">decides someone&apos;s career.</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 motion-safe:animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            TalentSpotify helps growing companies run fairer performance reviews
            with TARA, an AI voice agent that captures review conversations,
            flags bias signals, and turns goals, feedback, and recognition into
            evidence.
          </p>
          <ul
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 motion-safe:animate-fade-up"
            style={{ animationDelay: "270ms" }}
          >
            {capabilities.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <div
            className="mt-9 flex flex-wrap items-center gap-4 motion-safe:animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <CtaLink href="/#book-demo" variant="primary" size="lg">
              Request Demo
            </CtaLink>
            <CtaLink href="/#tara" variant="outline" size="lg">
              Watch TARA in Action
            </CtaLink>
          </div>
          <p
            className="mt-4 text-sm font-medium text-slate-500 motion-safe:animate-fade-up"
            style={{ animationDelay: "440ms" }}
          >
            Built for India mid-market teams. UAE/GCC-ready.
          </p>
          <a
            href="/roi-calculator"
            className="mt-3 inline-block text-sm font-medium text-slate-500 underline-offset-4 hover:text-slate-900 hover:underline motion-safe:animate-fade-up"
            style={{ animationDelay: "520ms" }}
          >
            Or calculate your ROI →
          </a>
        </div>

        {/* TARA orb with orbiting result cards — parallax follows the cursor */}
        <div
          ref={visualRef}
          className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center"
          role="img"
          aria-label="Illustration: TARA, an AI voice agent shown as a calm glowing orb, listens to a review, flags a biased phrase, rewrites it, assigns a fairness score of 94, and updates an OKR from the conversation"
        >
          <div style={parallax(16)} className="flex h-full w-full items-center justify-center">
            <TaraOrb />
          </div>

          {/* transcript + bias flag card */}
          <div className="absolute -top-2 left-0 hidden sm:block md:-left-2" style={parallax(-26)}>
            <div className="w-60 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl motion-safe:animate-float">
              <p className="text-[13px] leading-relaxed text-slate-600">
                &ldquo;…ahead of plan,{" "}
                <span className="rounded bg-amber-100 px-1 text-amber-800">
                  but she missed that one deadline
                </span>
                …&rdquo;
              </p>
              <p className="mt-2.5 flex items-center gap-1.5 border-t border-slate-100 pt-2.5 text-xs font-semibold text-amber-700">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> Recency bias flagged
              </p>
              <p className="mt-1 text-xs leading-relaxed text-brand-dark">
                Rewritten before the review ships.
              </p>
            </div>
          </div>

          {/* fairness score card */}
          <div
            className="absolute -top-2 right-0 sm:bottom-24 sm:top-auto md:-right-4"
            style={parallax(-18)}
          >
            <div
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl motion-safe:animate-float"
              style={{ animationDelay: "1.1s" }}
            >
              <FairnessDial />
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" /> Fairness score
                </p>
                <p className="mt-0.5 text-xs text-slate-500">No signals above your threshold</p>
              </div>
            </div>
          </div>

          {/* OKR update chip */}
          <div className="absolute bottom-1 left-1/2 -ml-32" style={parallax(-22)}>
            <div
              className="w-64 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl motion-safe:animate-float"
              style={{ animationDelay: "2.2s" }}
            >
              <p className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
                <Target className="h-3.5 w-3.5" aria-hidden="true" /> OKR updated from this conversation
              </p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-1.5 flex-1 rounded-full bg-slate-100">
                  <div className="h-1.5 w-[40%] rounded-full bg-brand" />
                </div>
                <span className="text-xs font-semibold text-slate-900">8 / 20 accounts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
