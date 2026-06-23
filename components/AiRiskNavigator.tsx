'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, RotateCcw, ShieldCheck, ShieldAlert } from 'lucide-react';

/* ── Types ────────────────────────────────────────────────── */

interface Question { id: string; text: string }
interface Category {
  id: string;
  emoji: string;
  label: string;
  colour: string;
  accent: string;
  questions: Question[];
}
interface Band { min: number; label: string; tagline: string; description: string; colour: string; border: string; textColour: string; icon: string }

/* ── Data ─────────────────────────────────────────────────── */

const CATEGORIES: Category[] = [
  {
    id: 'automation',
    emoji: '🤖',
    label: 'Automation Exposure',
    colour: 'bg-blue-50',
    accent: 'bg-blue-500',
    questions: [
      { id: 'a1', text: 'We have mapped which specific tasks across our key roles are automatable by current AI tools.' },
      { id: 'a2', text: 'We actively monitor AI capability developments that could affect our role structure within the next 2 years.' },
      { id: 'a3', text: 'Our core value-creating roles involve significant judgement, creativity, or relationship management — not just information processing.' },
      { id: 'a4', text: 'We have a documented strategy for how we will adapt roles as AI automates portions of existing work.' },
    ],
  },
  {
    id: 'data',
    emoji: '🔒',
    label: 'Data & Privacy',
    colour: 'bg-violet-50',
    accent: 'bg-violet-500',
    questions: [
      { id: 'd1', text: 'We have a clear data governance policy that covers how AI tools process employee and candidate data.' },
      { id: 'd2', text: 'Employees and candidates are explicitly informed about how AI systems use their personal data.' },
      { id: 'd3', text: 'We conduct privacy impact assessments (PIA) before deploying any new AI HR tool.' },
      { id: 'd4', text: 'Employee data fed into AI tools is minimised, anonymised, or pseudonymised where possible.' },
    ],
  },
  {
    id: 'bias',
    emoji: '⚖️',
    label: 'Bias & Fairness',
    colour: 'bg-amber-50',
    accent: 'bg-amber-500',
    questions: [
      { id: 'b1', text: 'Our AI-assisted hiring or performance tools have been audited for demographic bias in the past 12 months.' },
      { id: 'b2', text: 'All consequential AI-influenced decisions (hiring, performance ratings, promotions) are reviewed and approved by a human.' },
      { id: 'b3', text: 'We track disparate impact across protected groups (gender, ethnicity, age) for AI-assisted processes.' },
      { id: 'b4', text: 'The training data used in our AI tools has been reviewed for representation across the demographics in our workforce.' },
    ],
  },
  {
    id: 'compliance',
    emoji: '📋',
    label: 'Compliance & Governance',
    colour: 'bg-rose-50',
    accent: 'bg-rose-500',
    questions: [
      { id: 'c1', text: 'We have a formal AI ethics or responsible AI policy that applies to all HR and people-management tools.' },
      { id: 'c2', text: 'AI tool procurement decisions are reviewed by legal or compliance before sign-off.' },
      { id: 'c3', text: 'We can clearly explain any AI-influenced decision to an employee or regulator if challenged.' },
      { id: 'c4', text: 'We are actively tracking relevant AI regulations (EU AI Act, DPDPA, EEOC guidance) and assessing their impact on our practices.' },
    ],
  },
  {
    id: 'workforce',
    emoji: '👥',
    label: 'Workforce Readiness',
    colour: 'bg-brand/10',
    accent: 'bg-brand',
    questions: [
      { id: 'w1', text: 'Our AI strategy and its implications for roles has been clearly communicated to all employees.' },
      { id: 'w2', text: 'We offer reskilling or upskilling programmes specifically for employees in roles with high automation exposure.' },
      { id: 'w3', text: 'Managers have received training on responsible and fair use of AI tools in people decisions.' },
      { id: 'w4', text: 'There is a clear, accessible process for employees to question or contest AI-influenced decisions about them.' },
    ],
  },
];

const SCALE = [
  { value: 1, label: 'Not at all' },
  { value: 2, label: 'Barely' },
  { value: 3, label: 'Partially' },
  { value: 4, label: 'Mostly' },
  { value: 5, label: 'Fully' },
];

const BANDS: Band[] = [
  {
    min: 80,
    label: 'AI-Ready',
    tagline: 'Strong governance, low risk exposure.',
    description: 'Your organisation has strong foundations for responsible AI adoption. Continue auditing and stay ahead of regulatory changes.',
    colour: 'bg-brand/5',
    border: 'border-brand/30',
    textColour: 'text-brand-dark',
    icon: '✅',
  },
  {
    min: 60,
    label: 'Developing',
    tagline: 'Good progress, but gaps remain.',
    description: 'You have made progress but several risk areas need attention. Prioritise bias audits and governance documentation.',
    colour: 'bg-amber-50',
    border: 'border-amber-300',
    textColour: 'text-amber-800',
    icon: '⚠️',
  },
  {
    min: 40,
    label: 'Exposed',
    tagline: 'Material risk — action required.',
    description: 'Significant gaps exist across multiple dimensions. Without action, your organisation is exposed to regulatory, reputational, and fairness risks.',
    colour: 'bg-orange-50',
    border: 'border-orange-300',
    textColour: 'text-orange-800',
    icon: '🔴',
  },
  {
    min: 0,
    label: 'High Risk',
    tagline: 'Urgent — escalate to leadership.',
    description: 'Critical preparedness gaps exist. AI-related risk is not being managed, and the organisation may already be exposed to legal and ethical liability.',
    colour: 'bg-red-50',
    border: 'border-red-300',
    textColour: 'text-red-800',
    icon: '🚨',
  },
];

const PLAYBOOKS: Record<string, string[]> = {
  automation: [
    'Commission a task-level automation audit for your top 10 roles using publicly available AI exposure frameworks (e.g., O*NET, McKinsey).',
    'Create a role evolution roadmap — for each high-exposure role, define what the human contribution looks like in 3 years.',
    'Establish a quarterly review of AI capability advances relevant to your industry.',
    'Share your automation exposure findings with leadership and HR to align on a workforce planning response.',
  ],
  data: [
    'Draft or update a People Data Governance Policy that explicitly covers AI-processed data.',
    'Add AI data usage disclosures to your employment contracts, privacy notices, and onboarding materials.',
    'Implement a PIA template for AI tool procurement and make it a mandatory gate before go-live.',
    'Audit your current HR AI tools: what data do they ingest, where is it stored, and who has access?',
  ],
  bias: [
    'Commission a third-party bias audit of your highest-impact AI tools (hiring screening, performance calibration).',
    'Implement a human-in-the-loop policy: no AI-generated score or recommendation results in a final decision without human review.',
    'Add disparate impact reporting to your HR analytics dashboard — track outcomes by gender, age, and ethnicity monthly.',
    'Review training data sources for your AI tools — ask vendors for demographic representation reports.',
  ],
  compliance: [
    'Draft a Responsible AI policy covering procurement criteria, acceptable use, and employee rights.',
    'Build an AI register — a central log of every AI tool used in people decisions, with risk classification.',
    'Assign a compliance owner responsible for tracking the EU AI Act, DPDPA, and relevant EEOC guidance.',
    'Conduct a mock regulatory audit: test whether you can explain and justify 5 recent AI-influenced decisions.',
  ],
  workforce: [
    'Run an all-hands communication on your AI strategy — what it means for roles, and your commitment to reskilling.',
    'Partner with L&D to create an AI literacy programme for all employees, and a deeper reskilling track for high-exposure roles.',
    'Train every people manager on responsible AI use, bias risks, and when to override AI recommendations.',
    'Publish a clear appeals process: employees should know exactly how to challenge any AI-influenced decision about them.',
  ],
};

/* ── Utilities ────────────────────────────────────────────── */

function getBand(score: number): Band {
  return BANDS.find((b) => score >= b.min) ?? BANDS[BANDS.length - 1];
}

function getRiskLevel(categoryScore: number): { label: string; colour: string } {
  if (categoryScore >= 80) return { label: 'Low Risk', colour: 'text-brand-dark' };
  if (categoryScore >= 60) return { label: 'Moderate', colour: 'text-amber-700' };
  if (categoryScore >= 40) return { label: 'High Risk', colour: 'text-orange-700' };
  return { label: 'Critical', colour: 'text-red-700' };
}

/* ── Sub-components ───────────────────────────────────────── */

function ScoreRing({ score, band }: { score: number; band: Band }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  const colour = score >= 80 ? '#33685A' : score >= 60 ? '#d97706' : score >= 40 ? '#ea580c' : '#dc2626';

  return (
    <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e2e8f0" strokeWidth="12" />
        <circle
          cx="70" cy="70" r={r} fill="none"
          stroke={colour} strokeWidth="12"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold tabular-nums" style={{ color: colour }}>{score}</span>
        <span className="text-xs font-semibold text-slate-500">/ 100</span>
      </div>
    </div>
  );
}

function CategoryBar({ cat, score, answers }: { cat: Category; score: number; answers: Record<string, number>; }) {
  const [open, setOpen] = useState(false);
  const risk = getRiskLevel(score);

  return (
    <div className={`rounded-xl border border-slate-100 overflow-hidden`}>
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50">
        <span className="text-xl">{cat.emoji}</span>
        <span className="flex-1 text-left text-sm font-semibold text-slate-800">{cat.label}</span>
        <span className={`text-xs font-bold ${risk.colour}`}>{risk.label}</span>
        <div className="w-24 mx-3">
          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className={`h-full rounded-full ${cat.accent}`} style={{ width: `${score}%`, transition: 'width 0.8s ease' }} />
          </div>
        </div>
        <span className="w-8 text-right text-sm font-bold tabular-nums text-slate-700">{score}</span>
      </button>
      {open && (
        <div className={`border-t border-slate-100 px-4 py-3 space-y-2 ${cat.colour}`}>
          {cat.questions.map((q) => (
            <div key={q.id} className="flex items-start gap-3 text-xs text-slate-600">
              <span className="mt-0.5 shrink-0 font-bold text-slate-400">{answers[q.id] ?? 0}/5</span>
              <span>{q.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */

type Screen = 'intro' | 'quiz' | 'results';

export function AiRiskNavigator() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [catIdx, setCatIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [openPlaybooks, setOpenPlaybooks] = useState<Record<string, boolean>>({});

  const cat = CATEGORIES[catIdx];
  const catAnswers = cat.questions.map((q) => answers[q.id] ?? 0);
  const catComplete = catAnswers.every((v) => v > 0);

  function setAnswer(id: string, val: number) {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  }

  function nextCat() {
    if (catIdx < CATEGORIES.length - 1) {
      setCatIdx((i) => i + 1);
    } else {
      setScreen('results');
    }
  }

  function prevCat() {
    if (catIdx > 0) setCatIdx((i) => i - 1);
    else setScreen('intro');
  }

  // Score calculation
  const maxPerCat = 4 * 5; // 4 questions × max 5
  const catScores: Record<string, number> = {};
  CATEGORIES.forEach((c) => {
    const sum = c.questions.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
    catScores[c.id] = Math.round((sum / maxPerCat) * 100);
  });
  const totalAnswered = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxTotal = CATEGORIES.length * maxPerCat;
  const overallScore = Math.round((totalAnswered / maxTotal) * 100);
  const band = getBand(overallScore);

  // Weakest dimensions for priority playbook
  const sortedCats = [...CATEGORIES].sort((a, b) => (catScores[a.id] ?? 0) - (catScores[b.id] ?? 0));

  if (screen === 'intro') {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-6xl">🛡️</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          AI Risk Navigator
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          20 questions across 5 dimensions. Understand your organisation&apos;s AI risk exposure — from automation threats to bias, data privacy, and regulatory readiness — and get a personalised mitigation playbook.
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <div key={c.id} className={`flex items-center gap-3 rounded-xl border border-slate-100 p-4 ${c.colour}`}>
              <span className="text-2xl">{c.emoji}</span>
              <div>
                <p className="text-sm font-bold text-slate-800">{c.label}</p>
                <p className="text-xs text-slate-500">4 questions</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-400">20 questions &middot; ~4 min &middot; Free &middot; No sign-up</p>

        <button
          onClick={() => setScreen('quiz')}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
        >
          Start Assessment <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (screen === 'quiz') {
    const progress = ((catIdx * 4 + catAnswers.filter((v) => v > 0).length) / 20) * 100;

    return (
      <div className="mx-auto max-w-2xl">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2 text-xs text-slate-500">
            <span>Dimension {catIdx + 1} of {CATEGORIES.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Category header */}
        <div className={`flex items-center gap-4 rounded-2xl border border-slate-100 p-5 mb-5 ${cat.colour}`}>
          <span className="text-4xl">{cat.emoji}</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Dimension {catIdx + 1}</p>
            <p className="text-xl font-bold text-slate-900">{cat.label}</p>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-5">
          {cat.questions.map((q, qi) => (
            <div key={q.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold leading-snug text-slate-800 mb-4">
                <span className="text-slate-400 mr-2">{qi + 1}.</span>{q.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {SCALE.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setAnswer(q.id, s.value)}
                    className={`flex-1 min-w-[80px] rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                      answers[q.id] === s.value
                        ? 'border-brand bg-brand text-white shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-brand/40 hover:bg-brand/5'
                    }`}
                  >
                    <span className="block text-center text-base">{s.value}</span>
                    <span className="block text-center">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={prevCat}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <button
            onClick={nextCat}
            disabled={!catComplete}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            {catIdx < CATEGORIES.length - 1 ? 'Next Dimension' : 'See My Risk Score'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      {/* Score hero */}
      <div className={`rounded-2xl border p-6 ${band.border} ${band.colour}`}>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <ScoreRing score={overallScore} band={band} />
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Your AI Risk Score</p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-3xl">{band.icon}</span>
              <p className={`text-2xl font-bold ${band.textColour}`}>{band.label}</p>
            </div>
            <p className={`mt-1 font-semibold ${band.textColour}`}>{band.tagline}</p>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">{band.description}</p>
          </div>
        </div>
      </div>

      {/* Dimension breakdown */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Risk by Dimension</p>
        <div className="space-y-2">
          {CATEGORIES.map((c) => (
            <CategoryBar key={c.id} cat={c} score={catScores[c.id] ?? 0} answers={answers} />
          ))}
        </div>
      </div>

      {/* Priority mitigation playbook */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Mitigation Playbook</p>
        <p className="text-xs text-slate-500 mb-4">Dimensions ordered by risk — weakest first</p>
        <div className="space-y-3">
          {sortedCats.map((c, idx) => {
            const isOpen = openPlaybooks[c.id] ?? false;
            const score = catScores[c.id] ?? 0;
            const risk = getRiskLevel(score);
            return (
              <div key={c.id} className={`rounded-xl border border-slate-100 overflow-hidden ${c.colour}`}>
                <button
                  onClick={() => setOpenPlaybooks((prev) => ({ ...prev, [c.id]: !isOpen }))}
                  className="flex w-full items-center gap-3 px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600">{idx + 1}</span>
                  <span className="text-xl">{c.emoji}</span>
                  <span className="flex-1 text-left text-sm font-bold text-slate-800">{c.label}</span>
                  <span className={`text-xs font-bold ${risk.colour}`}>{score}/100</span>
                  <span className="text-xs text-slate-400 ml-1">{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-white px-4 py-4 space-y-3">
                    {PLAYBOOKS[c.id].map((action, i) => (
                      <div key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold border border-slate-200 bg-slate-50 text-slate-600`}>{i + 1}</span>
                        {action}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scale reference */}
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-semibold text-slate-700 mb-2">Score guide</p>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
          {[{ r: '80-100', l: '✅ AI-Ready' }, { r: '60-79', l: '⚠️ Developing' }, { r: '40-59', l: '🔴 Exposed' }, { r: '0-39', l: '🚨 High Risk' }].map((g) => (
            <div key={g.r}><span className="font-bold text-slate-600">{g.r}</span> — {g.l}</div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => { setScreen('intro'); setCatIdx(0); setAnswers({}); setOpenPlaybooks({}); }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <RotateCcw className="h-4 w-4" /> Retake
        </button>
        <a
          href="/#contact-sales"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Talk to TalentSpotify about AI governance <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
