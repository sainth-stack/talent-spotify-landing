'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────── */

interface Question {
  id: string;
  text: string;
}

interface Category {
  id: string;
  emoji: string;
  label: string;
  colour: string;        // Tailwind bg colour for accent
  borderColour: string;
  textColour: string;
  questions: Question[];
}

type Rating = 1 | 2 | 3 | 4 | 5;
type Answers = Record<string, Rating>;

interface Band {
  min: number;
  label: string;
  tagline: string;
  description: string;
  recs: string[];
  colour: string;
  border: string;
  text: string;
}

/* ── Data ───────────────────────────────────────────────────── */

const SCALE: { value: Rating; label: string }[] = [
  { value: 1, label: 'Never'     },
  { value: 2, label: 'Rarely'    },
  { value: 3, label: 'Sometimes' },
  { value: 4, label: 'Often'     },
  { value: 5, label: 'Always'    },
];

const CATEGORIES: Category[] = [
  {
    id: 'clarity',
    emoji: '🎯',
    label: 'Clarity & Direction',
    colour: 'bg-amber-100',
    borderColour: 'border-amber-300',
    textColour: 'text-amber-800',
    questions: [
      { id: 'c1', text: 'I set clear goals and OKRs that my team members understand and own.' },
      { id: 'c2', text: 'My team can articulate how their daily work connects to company objectives.' },
      { id: 'c3', text: 'When priorities shift, I communicate the change and the reason quickly.' },
      { id: 'c4', text: 'Each person on my team knows exactly what success looks like in their role.' },
    ],
  },
  {
    id: 'feedback',
    emoji: '💬',
    label: 'Feedback Culture',
    colour: 'bg-sky-100',
    borderColour: 'border-sky-300',
    textColour: 'text-sky-800',
    questions: [
      { id: 'f1', text: 'I give specific, actionable feedback regularly — not just at review time.' },
      { id: 'f2', text: 'I create genuine space for my team to give me upward feedback.' },
      { id: 'f3', text: 'My feedback covers both what is working well and where to grow.' },
      { id: 'f4', text: 'I address performance issues directly and promptly rather than letting them linger.' },
    ],
  },
  {
    id: 'recognition',
    emoji: '🏅',
    label: 'Recognition',
    colour: 'bg-violet-100',
    borderColour: 'border-violet-300',
    textColour: 'text-violet-800',
    questions: [
      { id: 'r1', text: 'I recognise contributions publicly as well as in private conversations.' },
      { id: 'r2', text: 'I celebrate both major milestones and small day-to-day wins.' },
      { id: 'r3', text: 'I make sure credit goes to the people who did the work.' },
      { id: 'r4', text: 'I understand what kind of recognition motivates each person individually.' },
    ],
  },
  {
    id: 'growth',
    emoji: '🌱',
    label: 'Growth & Development',
    colour: 'bg-brand/10',
    borderColour: 'border-brand/30',
    textColour: 'text-brand-dark',
    questions: [
      { id: 'g1', text: 'I invest time understanding each person\'s career aspirations and long-term goals.' },
      { id: 'g2', text: 'I create stretch opportunities that help people grow beyond their current role.' },
      { id: 'g3', text: 'I actively sponsor my team members for visibility and promotion opportunities.' },
      { id: 'g4', text: 'My 1:1s are focused on the person\'s growth — not just task status.' },
    ],
  },
  {
    id: 'trust',
    emoji: '🤝',
    label: 'Trust & Autonomy',
    colour: 'bg-rose-100',
    borderColour: 'border-rose-300',
    textColour: 'text-rose-800',
    questions: [
      { id: 't1', text: 'I trust my team to make decisions without requiring my approval on every detail.' },
      { id: 't2', text: 'My team feels psychologically safe raising problems or disagreeing with me.' },
      { id: 't3', text: 'I protect my team from unnecessary meetings and context-switching.' },
      { id: 't4', text: 'I follow through on the commitments I make to my team.' },
    ],
  },
  {
    id: 'energy',
    emoji: '⚡',
    label: 'Energy & Inspiration',
    colour: 'bg-orange-100',
    borderColour: 'border-orange-300',
    textColour: 'text-orange-800',
    questions: [
      { id: 'e1', text: 'I connect day-to-day work to a larger purpose or mission the team cares about.' },
      { id: 'e2', text: 'My team feels energised and motivated by the way I lead.' },
      { id: 'e3', text: 'I manage my own energy well and do not drain the team with my stress.' },
      { id: 'e4', text: 'I bring resilience and optimism during difficult or uncertain periods.' },
    ],
  },
];

const TOTAL_QUESTIONS = CATEGORIES.reduce((s, c) => s + c.questions.length, 0); // 24

const BANDS: Band[] = [
  {
    min: 0,
    label: 'Spark Starter',
    tagline: 'Your leadership journey is just beginning.',
    description: 'Every great manager starts here. The fact that you are measuring is the first step. Pick one or two areas below and build deliberately.',
    recs: [
      'Block 30 minutes weekly for structured 1:1s with each team member.',
      'Start an OKR habit: write one clear goal per person for the next 4 weeks.',
      'Ask your team one question this week: "What could I do differently to support you better?"',
      'Read "The Making of a Manager" by Julie Zhuo — a practical guide for new leaders.',
    ],
    colour: 'bg-slate-50',
    border: 'border-slate-300',
    text: 'text-slate-700',
  },
  {
    min: 31,
    label: 'Kindling',
    tagline: 'Foundations are forming — keep building the habits.',
    description: 'You have some strong instincts but your practices are inconsistent. Consistency is the difference between a good intention and a trusted manager.',
    recs: [
      'Systematise your feedback: schedule a 15-minute weekly check-in for each person.',
      'Create a recognition ritual — a weekly team shoutout in your team channel or standup.',
      'Write down each person\'s top career goal and revisit it every quarter.',
      'Ask your team to rate you anonymously on the areas where you scored lowest.',
    ],
    colour: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'text-amber-800',
  },
  {
    min: 56,
    label: 'Warming Up',
    tagline: 'Good momentum — a few focused areas will unlock the next level.',
    description: 'You are doing well overall. The gap between good and great managers is usually one or two blind spots consistently addressed.',
    recs: [
      'Review your lowest-scoring category and create a 30-day habit plan for it.',
      'Invite one trusted team member to give you candid feedback on your leadership style.',
      'Move your 1:1 agendas from task updates to growth and development conversations.',
      'Pilot an OKR cycle with your team: set 1 objective, 2 key results, review in 4 weeks.',
    ],
    colour: 'bg-sky-50',
    border: 'border-sky-300',
    text: 'text-sky-800',
  },
  {
    min: 76,
    label: 'Bright Spark',
    tagline: 'Strong leadership with measurable team impact.',
    description: 'You are a manager people want to work for. Your team likely performs above average because they feel clarity, trust, and genuine support.',
    recs: [
      'Start mentoring another manager — teaching compounds your own leadership.',
      'Run a team-level retro on your culture: what is working, what should change?',
      'Identify your highest-potential team member and create a visible growth plan together.',
      'Introduce 360-degree feedback for yourself — great leaders stay calibrated.',
    ],
    colour: 'bg-brand/5',
    border: 'border-brand/30',
    text: 'text-brand-dark',
  },
  {
    min: 90,
    label: 'Ignition',
    tagline: 'You ignite the people around you.',
    description: 'You are operating at the level of the managers people remember for their entire careers. The opportunity now is scale: how do you spread this culture across the organisation?',
    recs: [
      'Build a manager development programme: share what works with other team leads.',
      'Sponsor two people on your team for promotions in the next 6 months.',
      'Contribute to your company\'s manager onboarding — codify what great management looks like.',
      'Consider what your legacy as a leader will be — and write it down.',
    ],
    colour: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'text-amber-800',
  },
];

function getBand(score: number): Band {
  return [...BANDS].reverse().find((b) => score >= b.min) ?? BANDS[0];
}

function categoryScore(cat: Category, answers: Answers): number {
  const total = cat.questions.reduce((s, q) => s + (answers[q.id] ?? 0), 0);
  const max = cat.questions.length * 5;
  return Math.round((total / max) * 100);
}

function overallScore(answers: Answers): number {
  const total = Object.values(answers).reduce((s, v) => s + v, 0);
  const max = TOTAL_QUESTIONS * 5;
  return Math.round((total / max) * 100);
}

/* ── Sub-components ─────────────────────────────────────────── */

function ScoreRing({ score }: { score: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  const band = getBand(score);
  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#E2E8F0" strokeWidth="12" />
        <circle
          cx="70" cy="70" r={r} fill="none"
          stroke="#33685A" strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 70 70)"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
        <text x="70" y="66" textAnchor="middle" fontSize="28" fontWeight="700" fill="#1F4A3E">{score}</text>
        <text x="70" y="84" textAnchor="middle" fontSize="11" fill="#64748B">out of 100</text>
      </svg>
      <span className={`mt-2 rounded-full border px-4 py-1 text-sm font-bold ${band.border} ${band.colour} ${band.text}`}>
        {band.label}
      </span>
    </div>
  );
}

function CategoryBar({ cat, answers, open, onToggle }: {
  cat: Category;
  answers: Answers;
  open: boolean;
  onToggle: () => void;
}) {
  const score = categoryScore(cat, answers);
  return (
    <div className={`rounded-xl border ${cat.borderColour} bg-white overflow-hidden`}>
      <button onClick={onToggle} className="flex w-full items-center gap-3 p-4">
        <span className="text-xl">{cat.emoji}</span>
        <div className="flex-1 text-left">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">{cat.label}</p>
            <p className={`text-sm font-bold ${cat.textColour}`}>{score}%</p>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-brand transition-all duration-700"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-slate-400" /> : <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />}
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 pb-4 pt-3 space-y-2">
          {cat.questions.map((q) => {
            const val = answers[q.id] ?? 0;
            const label = SCALE.find((s) => s.value === val)?.label ?? '';
            return (
              <div key={q.id} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex-1 text-slate-600">{q.text}</span>
                <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${cat.borderColour} ${cat.colour} ${cat.textColour}`}>{label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */

type Screen = 'intro' | 'quiz' | 'results';

export function ManagerSparkIndex() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [catIndex, setCatIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [openCat, setOpenCat] = useState<string | null>(null);

  const currentCat = CATEGORIES[catIndex];
  const answeredInCat = currentCat?.questions.filter((q) => answers[q.id]).length ?? 0;
  const catComplete = answeredInCat === (currentCat?.questions.length ?? 0);

  const totalAnswered = Object.keys(answers).length;
  const progressPct = Math.round((totalAnswered / TOTAL_QUESTIONS) * 100);

  function handleAnswer(qId: string, val: Rating) {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  }

  function handleNext() {
    if (catIndex < CATEGORIES.length - 1) {
      setCatIndex((i) => i + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setScreen('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleBack() {
    if (catIndex > 0) {
      setCatIndex((i) => i - 1);
    } else {
      setScreen('intro');
    }
  }

  function handleReset() {
    setScreen('intro');
    setCatIndex(0);
    setAnswers({});
    setOpenCat(null);
  }

  /* ── Intro ── */
  if (screen === 'intro') {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-5xl" role="img" aria-label="spark">⚡</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Manager Spark Index
        </h1>
        <p className="mt-3 mx-auto max-w-lg text-lg text-slate-600">
          A 24-question self-assessment across six dimensions of great management.
          Get your personal Spark Index score and a prioritised action plan.
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className={`flex items-center gap-3 rounded-xl border ${cat.borderColour} ${cat.colour} px-4 py-3`}>
              <span className="text-2xl">{cat.emoji}</span>
              <div>
                <p className={`text-sm font-semibold ${cat.textColour}`}>{cat.label}</p>
                <p className="text-xs text-slate-500">4 questions</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span>24 questions</span>
          <span>·</span>
          <span>~5 minutes</span>
          <span>·</span>
          <span>Free · No sign-up</span>
        </div>

        <button
          onClick={() => setScreen('quiz')}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
        >
          Start Assessment <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  /* ── Results ── */
  if (screen === 'results') {
    const score = overallScore(answers);
    const band = getBand(score);

    return (
      <div className="mx-auto max-w-2xl">
        {/* Score hero */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <ScoreRing score={score} />
          <h2 className="mt-5 text-2xl font-bold text-slate-900">{band.tagline}</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">{band.description}</p>
        </div>

        {/* Recommendations */}
        <div className={`mt-5 rounded-2xl border p-6 ${band.border} ${band.colour}`}>
          <p className={`text-sm font-semibold uppercase tracking-wider ${band.text}`}>Your action plan</p>
          <ul className="mt-3 space-y-2.5">
            {band.recs.map((rec, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${band.border} ${band.colour} ${band.text}`}>{i + 1}</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>

        {/* Category breakdown */}
        <div className="mt-5">
          <p className="mb-3 text-sm font-semibold text-slate-700">Score by dimension</p>
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <CategoryBar
                key={cat.id}
                cat={cat}
                answers={answers}
                open={openCat === cat.id}
                onToggle={() => setOpenCat(openCat === cat.id ? null : cat.id)}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" /> Retake Assessment
          </button>
          <a
            href="/#contact-sales"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            See how TalentSpotify helps managers <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  /* ── Quiz ── */
  return (
    <div className="mx-auto max-w-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" />
          {catIndex === 0 ? 'Back' : CATEGORIES[catIndex - 1].label}
        </button>
        <span className="text-sm font-semibold text-slate-500">
          {catIndex + 1} / {CATEGORIES.length}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="mb-1.5 flex justify-between text-xs text-slate-400">
          <span>{totalAnswered} of {TOTAL_QUESTIONS} answered</span>
          <span className="font-semibold text-brand">{progressPct}% complete</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Category header */}
      <div className={`mt-6 flex items-center gap-3 rounded-2xl border ${currentCat.borderColour} ${currentCat.colour} p-5`}>
        <span className="text-4xl">{currentCat.emoji}</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Dimension {catIndex + 1} of {CATEGORIES.length}</p>
          <p className={`text-xl font-bold ${currentCat.textColour}`}>{currentCat.label}</p>
        </div>
      </div>

      {/* Questions */}
      <div className="mt-5 space-y-5">
        {currentCat.questions.map((q, qi) => {
          const selected = answers[q.id];
          return (
            <div key={q.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                <span className="mr-2 text-slate-400">Q{catIndex * 4 + qi + 1}.</span>
                {q.text}
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {SCALE.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(q.id, value)}
                    className={`flex flex-col items-center gap-1 rounded-xl border-2 p-2 text-center transition ${
                      selected === value
                        ? `${currentCat.borderColour} ${currentCat.colour} ${currentCat.textColour}`
                        : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-lg font-bold">{value}</span>
                    <span className="text-[10px] font-medium leading-tight">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleNext}
          disabled={!catComplete}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {catIndex < CATEGORIES.length - 1 ? (
            <>{CATEGORIES[catIndex + 1].label} <ArrowRight className="h-4 w-4" /></>
          ) : (
            <>See My Score <ArrowRight className="h-4 w-4" /></>
          )}
        </button>
      </div>

      {!catComplete && (
        <p className="mt-3 text-center text-xs text-slate-400">
          Answer all {currentCat.questions.length} questions to continue
        </p>
      )}
    </div>
  );
}
