"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  category: string;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: "Strategy & Alignment",
    text: "How clearly does your leadership team communicate company priorities for the next quarter?",
    options: [
      { label: "No formal communication of priorities exists", score: 0 },
      { label: "Priorities are shared verbally but not documented", score: 1 },
      { label: "Priorities are documented but not widely understood", score: 2 },
      { label: "Priorities are shared and most managers understand them", score: 3 },
      { label: "Priorities cascade clearly from leadership to every team", score: 4 },
    ],
  },
  {
    id: 2,
    category: "Strategy & Alignment",
    text: "How well do individual employee goals connect to company objectives today?",
    options: [
      { label: "There is no visible connection between individual and company goals", score: 0 },
      { label: "Some teams link goals informally on their own", score: 1 },
      { label: "About half of teams have goals linked to company objectives", score: 2 },
      { label: "Most teams have goals linked to company objectives", score: 3 },
      { label: "Every employee can see how their work connects to company strategy", score: 4 },
    ],
  },
  {
    id: 3,
    category: "Execution & Tracking",
    text: "How often does your organisation formally review goal progress?",
    options: [
      { label: "Rarely or never — goals are set and forgotten", score: 0 },
      { label: "Once a year during annual review season", score: 1 },
      { label: "Quarterly, at best", score: 2 },
      { label: "Monthly check-ins across most teams", score: 3 },
      { label: "Weekly or bi-weekly structured reviews are the norm", score: 4 },
    ],
  },
  {
    id: 4,
    category: "Execution & Tracking",
    text: "Can employees track their own progress on goals at any time — without asking their manager?",
    options: [
      { label: "No — employees have no visibility into their goals", score: 0 },
      { label: "Employees rely on managers to know where they stand", score: 1 },
      { label: "Some employees track progress in personal spreadsheets", score: 2 },
      { label: "Most employees have access to goal tracking tools", score: 3 },
      { label: "All employees have real-time, self-serve visibility into their goals", score: 4 },
    ],
  },
  {
    id: 5,
    category: "People & Culture",
    text: "How confident are your managers in running structured performance conversations?",
    options: [
      { label: "Not confident — performance conversations are informal or avoided", score: 0 },
      { label: "Slightly confident — some structure but highly inconsistent", score: 1 },
      { label: "Moderately confident — basic conversations happen most of the time", score: 2 },
      { label: "Confident — most managers follow a consistent structure", score: 3 },
      { label: "Very confident — all managers conduct structured, evidence-led reviews", score: 4 },
    ],
  },
  {
    id: 6,
    category: "People & Culture",
    text: "When a goal is missed, what typically happens in your organisation?",
    options: [
      { label: "Nothing formal — missed goals are rarely discussed", score: 0 },
      { label: "The manager has a brief, unstructured conversation", score: 1 },
      { label: "The team discusses what went wrong at the next meeting", score: 2 },
      { label: "Root cause is identified and documented", score: 3 },
      { label: "We run a structured retrospective and update future goals based on learnings", score: 4 },
    ],
  },
  {
    id: 7,
    category: "Process & Technology",
    text: "How do you currently track OKRs and performance goals?",
    options: [
      { label: "We don't track goals formally", score: 0 },
      { label: "Spreadsheets or shared documents", score: 1 },
      { label: "Email and general project management tools", score: 2 },
      { label: "A basic HR or goal-tracking tool", score: 3 },
      { label: "A dedicated OKR or performance management platform", score: 4 },
    ],
  },
  {
    id: 8,
    category: "Process & Technology",
    text: "How would you describe your organisation's culture around goal-setting?",
    options: [
      { label: "Goals are set once and rarely referenced afterward", score: 0 },
      { label: "Some teams take goals seriously — others don't", score: 1 },
      { label: "Goals are mostly taken seriously but applied inconsistently", score: 2 },
      { label: "Most of the organisation is genuinely goal-driven", score: 3 },
      { label: "Goals are at the heart of how we work and measure every outcome", score: 4 },
    ],
  },
];

const MAX_SCORE = questions.length * 4;

interface Band {
  label: string;
  range: [number, number];
  tagline: string;
  color: string;
  bg: string;
  border: string;
  recommendations: string[];
}

const bands: Band[] = [
  {
    label: "Starting Out",
    range: [0, 8],
    tagline: "Your OKR journey begins here.",
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-200",
    recommendations: [
      "Start by getting your leadership team aligned on 3–5 company priorities for the next 90 days. OKRs without strategic clarity become box-ticking exercises.",
      "Introduce a simple goal structure (Objective + 2–3 Key Results) for just one team as a pilot before rolling out organisation-wide.",
      "Build a monthly review habit before you invest in tooling — cadence matters more than software at this stage.",
      "TalentSpotify's OKR Cascade Engine can help you move from zero to structured in one quarter.",
    ],
  },
  {
    label: "Building Foundations",
    range: [9, 16],
    tagline: "Momentum is building — close the gaps.",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    recommendations: [
      "Your biggest opportunity is connecting individual goals to company strategy. Employees who can't see the link between their daily work and company objectives disengage fast.",
      "Invest in manager training — consistent, structured conversations are the engine that makes OKRs real. Without them, goal-tracking stays administrative.",
      "Move from spreadsheets to a shared tool so goal visibility is democratised — not dependent on who remembered to update the sheet.",
      "Consider a quarterly OKR review cycle as your next milestone before moving to monthly or weekly cadences.",
    ],
  },
  {
    label: "Getting There",
    range: [17, 24],
    tagline: "Strong foundations — tighten the execution.",
    color: "text-sky-700",
    bg: "bg-sky-50",
    border: "border-sky-200",
    recommendations: [
      "The gaps at this stage are typically in consistency — some teams are strong, others are lagging. Standardise your OKR process across all departments.",
      "Invest in tooling that gives every employee real-time self-serve visibility into their goals. Managers shouldn't be the bottleneck for goal awareness.",
      "Add structured retrospectives when goals are missed — the learning loop is what separates high-performing OKR organisations from ones that just track numbers.",
      "You're ready for AI-assisted review conversations to add a fairness and bias-detection layer on top of your strong goal infrastructure.",
    ],
  },
  {
    label: "OKR Ready",
    range: [25, 32],
    tagline: "Best-in-class OKR maturity.",
    color: "text-brand-dark",
    bg: "bg-brand/5",
    border: "border-brand/20",
    recommendations: [
      "You're operating at a high level. The next frontier is adding AI-assisted performance conversations to make your review quality as strong as your goal-setting.",
      "Focus on reducing bias in how goal achievement is evaluated — structured OKRs are powerful, but how managers interpret performance against those goals still carries risk.",
      "Scale what's working to your most complex workforce segments — field teams, distributed employees, multilingual contexts — where consistent OKR execution is hardest.",
      "TalentSpotify's TARA AI can add a bias-detection and fairness layer on top of your mature OKR infrastructure.",
    ],
  },
];

function getBand(score: number): Band {
  return bands.find((b) => score >= b.range[0] && score <= b.range[1]) ?? bands[0];
}

function ScoreRing({ pct }: { pct: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
      <circle cx="70" cy="70" r={r} fill="none" stroke="#E2E8F0" strokeWidth="12" />
      <circle
        cx="70"
        cy="70"
        r={r}
        fill="none"
        stroke="#33685A"
        strokeWidth="12"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1s ease" }}
      />
    </svg>
  );
}

export function OkrAssessment() {
  const [step, setStep] = useState<"intro" | "questions" | "results">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const totalScore = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const pct = Math.round((totalScore / MAX_SCORE) * 100);
  const band = getBand(totalScore);

  const q = questions[current];
  const answered = answers[current] !== null;
  const allAnswered = answers.every((a) => a !== null);

  function select(score: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = score;
      return next;
    });
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setStep("results");
    }
  }

  function back() {
    if (current > 0) setCurrent((c) => c - 1);
    else setStep("intro");
  }

  function restart() {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setStep("intro");
  }

  /* ── Intro ── */
  if (step === "intro") {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white text-2xl font-bold shadow-lg">
          OKR
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Is Your Organisation Ready for OKRs?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Answer 8 questions about your current goal-setting, review culture, and organisational alignment. Get an instant readiness score and personalised recommendations.
        </p>
        <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
          {[
            { stat: "8", label: "Questions" },
            { stat: "2 min", label: "To complete" },
            { stat: "Free", label: "No sign-up needed" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-brand">{stat}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setStep("questions")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark"
        >
          Start the Assessment <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
        <p className="mt-4 text-sm text-slate-400">Takes about 2 minutes. Completely free.</p>
      </div>
    );
  }

  /* ── Results ── */
  if (step === "results") {
    return (
      <div className="mx-auto max-w-2xl">
        {/* Score */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <ScoreRing pct={pct} />
            <div className="absolute text-center">
              <p className="text-3xl font-bold text-slate-900">{pct}%</p>
              <p className="text-xs font-medium text-slate-400">Readiness</p>
            </div>
          </div>
          <div className={`mt-4 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold ${band.color} ${band.bg} ${band.border}`}>
            {band.label}
          </div>
          <p className="mt-2 text-lg font-semibold text-slate-800">{band.tagline}</p>
          <p className="mt-2 text-sm text-slate-500">
            Your score: {totalScore} / {MAX_SCORE}
          </p>
        </div>

        {/* Recommendations */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900">Your personalised recommendations</h2>
          <ul className="mt-5 space-y-4">
            {band.recommendations.map((rec, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <p className="leading-relaxed text-slate-700">{rec}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Score breakdown */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Score breakdown by area</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "Strategy & Alignment", qs: [0, 1] },
              { label: "Execution & Tracking", qs: [2, 3] },
              { label: "People & Culture", qs: [4, 5] },
              { label: "Process & Technology", qs: [6, 7] },
            ].map(({ label, qs }) => {
              const areaScore = qs.reduce((s, i) => s + (answers[i] ?? 0), 0);
              const areaPct = Math.round((areaScore / 8) * 100);
              return (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">{label}</span>
                    <span className="text-slate-500">{areaScore}/8</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-700"
                      style={{ width: `${areaPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#book-demo"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Book a Demo with TalentSpotify <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            onClick={restart}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Retake
          </button>
        </div>
      </div>
    );
  }

  /* ── Questions ── */
  const progressPct = ((current + 1) / questions.length) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-brand uppercase tracking-wider text-xs">{q.category}</span>
          <span className="text-slate-400">{current + 1} of {questions.length}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
        {q.text}
      </h2>

      {/* Options */}
      <div className="mt-6 space-y-3">
        {q.options.map((opt) => {
          const selected = answers[current] === opt.score;
          return (
            <button
              key={opt.score}
              onClick={() => select(opt.score)}
              className={`w-full rounded-xl border p-4 text-left text-sm leading-relaxed transition-all ${
                selected
                  ? "border-brand bg-brand/5 font-semibold text-brand-dark shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand/40 hover:bg-surface"
              }`}
            >
              <span className={`mr-3 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                selected ? "border-brand bg-brand text-white" : "border-slate-300 text-slate-400"
              }`}>
                {opt.score + 1}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={back}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <button
          onClick={next}
          disabled={!answered}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {current === questions.length - 1 ? "See My Results" : "Next"}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Step dots */}
      <div className="mt-6 flex justify-center gap-1.5">
        {questions.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-6 bg-brand" : answers[i] !== null ? "w-2 bg-brand/40" : "w-2 bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
