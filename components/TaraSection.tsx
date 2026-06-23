"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Languages,
  RefreshCw,
  Users,
  ShieldAlert,
  Target,
  Mic,
  Check,
} from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";

const waveHeights = [8, 14, 22, 12, 26, 18, 10, 24, 16, 8];

/* Stage 1 — automatic goal setting from the job description */
function GoalMock() {
  return (
    <div className="rounded-2xl border border-brand/15 bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Goal-setting conversation
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden="true">
        {["English", "हिंदी", "తెలుగు", "தமிழ்", "ಕನ್ನಡ"].map((l) => (
          <span
            key={l}
            className="rounded-full border border-slate-300 bg-white px-2.5 py-0.5 text-xs text-slate-600"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-brand/20 bg-white p-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
          <Target className="h-3.5 w-3.5" aria-hidden="true" /> Created automatically from the JD
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-900">
          Objective · Ship reliable releases every sprint
        </p>
        <ul className="mt-2 space-y-1 text-xs text-slate-600">
          <li>KR1 · Cut escaped defects to &lt;2 per release</li>
          <li>KR2 · Automate 80% of regression suite</li>
        </ul>
        <p className="mt-2.5 border-t border-slate-100 pt-2 text-xs text-slate-500">
          Action plan · 4 steps drafted and assigned
        </p>
      </div>
    </div>
  );
}

/* Stage 2 — check-in with sharp follow-ups, auto-update */
function CheckinMock() {
  return (
    <div className="rounded-2xl border border-brand/15 bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Monthly OKR check-in
      </p>
      <div className="mt-3 rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-4 py-3">
        <p className="text-xs font-semibold text-brand-dark">TARA</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          You said the regression suite is &ldquo;mostly done&rdquo; — but only 3 of 8
          modules are automated. What&apos;s blocking the other five?
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
        <span className="text-xs text-slate-600">KR2 · Regression automation</span>
        <span className="text-xs font-semibold text-slate-900">
          40% → <span className="text-brand-dark">55%</span>
        </span>
      </div>
      <p className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500">
        <RefreshCw className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        Updated in the system automatically after the call
      </p>
    </div>
  );
}

/* Stage 3 — review conversation, bias detected live */
function ReviewMock() {
  return (
    <div className="rounded-2xl border border-brand/15 bg-surface p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Combined review · Manager + Employee
        </p>
        <div className="flex h-6 items-end gap-[2.5px]" aria-hidden="true">
          {waveHeights.map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-brand motion-safe:animate-wave"
              style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
      </div>

      {/* 1 · Listen — transcript */}
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
        1 · Listen
      </p>
      <div className="mt-1.5 flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3">
        <Mic className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-slate-700">
          <span className="font-semibold text-slate-900">Manager:</span> &ldquo;She
          is reliable, but I don&apos;t think she is leadership material yet.&rdquo;
        </p>
      </div>

      {/* 2 · Detect — bias flag */}
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-amber-600">
        2 · Detect
      </p>
      <div className="mt-1.5 rounded-xl border border-amber-300 bg-amber-50 p-3">
        <p className="text-xs leading-relaxed text-slate-700">
          <span className="font-semibold text-amber-800">Vague feedback flagged.</span>{" "}
          Ask for evidence linked to goals, outcomes, and observed behaviour.
        </p>
      </div>

      {/* 3 · Score & 4 · Recommend */}
      <div className="mt-3 grid grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-brand/20 bg-white p-3">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            3 · Score
          </p>
          <p className="text-2xl font-bold text-brand">94</p>
          <p className="text-[10px] text-slate-500">Low risk*</p>
        </div>
        <div className="border-l border-slate-100 pl-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            4 · Recommend
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-700">
            Add measurable examples before the final rating.
          </p>
        </div>
      </div>
      <p className="mt-2 text-[10px] text-slate-400">
        *Low risk after evidence is added. Bias flags are recommendations, not decisions.
      </p>
    </div>
  );
}

/* Stage 4 — HR case with actions incl. false positive */
function HrMock() {
  return (
    <div className="rounded-2xl border border-brand/15 bg-surface p-5">
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
        <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" /> Bias case raised to HR
      </p>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
        Halo bias pattern in R. Mehta&apos;s appraisal of 2 reports. Evidence
        attached: transcript excerpts + rating spread.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2" aria-hidden="true">
        <span className="rounded-lg bg-brand px-3 py-2 text-center text-xs font-semibold text-white">
          Counsel manager
        </span>
        <span className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-700">
          Request redo
        </span>
        <span className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-700">
          Recommend coaching
        </span>
        <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-xs font-medium text-slate-500">
          Mark false positive
        </span>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Review locked until HR decides · SLA tracked · HR holds the final word.
      </p>
    </div>
  );
}

const stages = [
  {
    icon: Languages,
    tab: "Set goals",
    hint: "Auto OKRs from the job description",
    title: "TARA sets the goals. The employee just talks.",
    body: "TARA opens the conversation in whichever language the employee is comfortable in. It already knows their job description — so it drafts the objectives, key results and action plan, and creates them in the system automatically. No one has to learn how to “write good OKRs.”",
    mock: <GoalMock />,
  },
  {
    icon: RefreshCw,
    tab: "Check in",
    hint: "Sharp spoken progress updates",
    title: "Check-ins that ask the sharp questions.",
    body: "At every check-in, TARA asks how each objective is moving. The employee speaks; TARA follows up — first gently, then sharply when the numbers don't add up — and updates the OKRs in the system on its own.",
    mock: <CheckinMock />,
  },
  {
    icon: Users,
    tab: "Review",
    hint: "Transcribe · analyze · flag gaps · recommend actions",
    title: "Review Analysis — post-conversation fairness check.",
    body: "After the review conversation ends, TARA analyzes the transcript for vague feedback, missing evidence, bias patterns, and rating inconsistencies.",
    mock: <ReviewMock />,
  },
  {
    icon: ShieldAlert,
    tab: "HR oversight",
    hint: "Humans hold the final word",
    title: "Fairness concern found? HR reviews the evidence and decides.",
    body: "When TARA surfaces a fairness concern, HR receives the transcript evidence, rating spread, and recommended next action. HR can confirm, override, request more evidence, or ask for a review redo. Human judgment remains final.",
    mock: <HrMock />,
  },
];

const AUTOPLAY_MS = 7000;

export function TaraSection() {
  const [active, setActive] = useState(0);
  const [engaged, setEngaged] = useState(false);

  // Auto-advance until the visitor interacts; skip for reduced-motion users.
  useEffect(() => {
    if (engaged) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [engaged]);

  function select(i: number) {
    setActive(i);
    setEngaged(true);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select((active + 1) % stages.length);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select((active - 1 + stages.length) % stages.length);
    }
  }

  const stage = stages[active];

  return (
    <section id="tara" className="section scroll-mt-16 bg-ink text-white">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-light">
            TARA · AI voice agent
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Meet TARA. It turns performance conversations into fair, evidence-backed decisions.
          </h2>
          <p className="mt-4 text-lg text-white/85">
            From voice-led goal setting to post-review fairness analysis, TARA helps HR create a clear evidence trail across the performance cycle.
          </p>
        </div>

        {/* Connected horizontal stepper — completed nodes turn into checks,
            the rail fills toward the next stage while auto-playing */}
        <div
          role="tablist"
          aria-label="How TARA works, in four stages"
          onKeyDown={onKeyDown}
          className="mx-auto flex max-w-4xl items-start"
        >
          {stages.map(({ icon: Icon, tab, hint }, i) => (
            <Fragment key={tab}>
              {i > 0 && (
                <div
                  className="mt-[26px] h-1 flex-1 overflow-hidden rounded-full bg-white/15 sm:mt-[30px]"
                  aria-hidden="true"
                >
                  {i <= active ? (
                    <div className="h-full w-full bg-brand-light" />
                  ) : i === active + 1 && !engaged ? (
                    <div
                      key={active}
                      className="h-full bg-brand-light motion-safe:animate-progress"
                    />
                  ) : null}
                </div>
              )}
              <button
                role="tab"
                id={`tara-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`tara-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => select(i)}
                className="group flex w-[72px] flex-col items-center text-center focus-visible:outline-none sm:w-28 md:w-36"
              >
                <span
                  className={cn(
                    "flex h-[52px] w-[52px] items-center justify-center rounded-full text-lg font-bold transition-all duration-300 sm:h-[60px] sm:w-[60px]",
                    i < active && "bg-brand-light text-ink",
                    i === active &&
                      "scale-110 bg-white text-brand-dark shadow-[0_0_0_6px_rgba(255,255,255,0.2)]",
                    i > active &&
                      "border-2 border-white/25 bg-white/5 text-white/70 group-hover:border-white/50 group-hover:bg-white/10"
                  )}
                >
                  {i < active ? (
                    <Check className="h-6 w-6" aria-hidden="true" />
                  ) : i === active ? (
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={cn(
                    "mt-3 text-xs font-semibold leading-tight sm:text-sm",
                    i === active ? "text-white" : "text-white/60 group-hover:text-white/90"
                  )}
                >
                  {tab}
                </span>
                <span
                  className={cn(
                    "mt-1 hidden text-xs leading-tight md:block",
                    i === active ? "text-white/70" : "text-white/40"
                  )}
                >
                  {hint}
                </span>
              </button>
            </Fragment>
          ))}
        </div>

        {/* Stage panel — solid white for maximum readability */}
        <div
          role="tabpanel"
          id={`tara-panel-${active}`}
          aria-labelledby={`tara-tab-${active}`}
          className="mt-8 rounded-2xl bg-white p-6 shadow-2xl md:mt-10 md:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div key={`text-${active}`} className="motion-safe:animate-panel-in">
              <h3 className="text-xl font-bold leading-snug text-slate-900 md:text-2xl">
                {stage.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">{stage.body}</p>
            </div>
            <div
              key={`mock-${active}`}
              className="motion-safe:animate-panel-in lg:min-h-[280px]"
              style={{ animationDelay: "120ms" }}
            >
              {stage.mock}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-xl md:flex-row md:justify-between">
          <dl className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
            <div>
              <dt className="text-sm text-slate-500">Time per review</dt>
              <dd className="text-3xl font-bold text-slate-900">60 sec</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Manager satisfaction</dt>
              <dd className="text-3xl font-bold text-slate-900">92%</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Human oversight</dt>
              <dd className="text-3xl font-bold text-slate-900">Always</dd>
            </div>
          </dl>
          <CtaLink href="/#book-demo" variant="primary" size="lg">
            Watch TARA in Action
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
