"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Target,
  BarChart3,
  CheckSquare,
  Sparkles,
} from "lucide-react";

type AnswerType = "objective" | "key-result" | "task";

interface Question {
  statement: string;
  correctType: AnswerType;
  explanation: string;
}

interface Scenario {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  cardBg: string;
  cardBorder: string;
  questions: Question[];
}

interface Badge {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const ALL_BADGES: Badge[] = [
  { id: "explorer", emoji: "🧩", title: "OKR Explorer",  description: "Completed your first scenario" },
  { id: "perfect",  emoji: "⭐", title: "Perfect Score", description: "Scored 100% on a scenario" },
  { id: "champion", emoji: "🏆", title: "OKR Champion",  description: "Completed all 4 scenarios" },
  { id: "comeback", emoji: "🔥", title: "Comeback Kid",  description: "Retried a scenario and improved your score" },
  { id: "streak",   emoji: "⚡", title: "Streak Master", description: "Got 5 correct answers in a row" },
];

const SCENARIOS: Scenario[] = [
  {
    id: "personal",
    emoji: "🏃",
    title: "Personal Goal",
    subtitle: "You want to run a marathon",
    cardBg: "bg-amber-50",
    cardBorder: "border-amber-200",
    questions: [
      {
        statement: "Run a marathon by December",
        correctType: "objective",
        explanation:
          "This is an Objective — qualitative, aspirational, and directional. It tells you WHERE you want to go, not how to measure getting there.",
      },
      {
        statement: "Run at least 25 km per week for 12 consecutive weeks",
        correctType: "key-result",
        explanation:
          "This is a Key Result — specific, measurable, and time-bound. It tells you HOW you will measure progress toward the Objective.",
      },
      {
        statement: "Download a marathon training plan app today",
        correctType: "task",
        explanation:
          "This is a Task — a specific, executable action. Tasks are the day-to-day activities that support Key Results.",
      },
    ],
  },
  {
    id: "startup",
    emoji: "🚀",
    title: "Startup Growth",
    subtitle: "TalentSpotify wants to increase product adoption",
    cardBg: "bg-sky-50",
    cardBorder: "border-sky-200",
    questions: [
      {
        statement:
          "Become the most-used performance management tool for Indian mid-market companies",
        correctType: "objective",
        explanation:
          "This is an Objective — aspirational and directional. It does not contain a number and cannot be ticked off. It sets the ambition for the quarter.",
      },
      {
        statement: "Grow monthly active users from 500 to 2,000 by end of Q3",
        correctType: "key-result",
        explanation:
          "This is a Key Result — it has a clear start point (500), end point (2,000), and deadline (Q3). It is measurable and tells you whether the Objective was achieved.",
      },
      {
        statement: "Reduce average customer onboarding time from 14 days to 5 days",
        correctType: "key-result",
        explanation:
          "This is a Key Result — it measures a specific operational metric with a clear improvement target directly affecting adoption.",
      },
      {
        statement:
          "Send personalised onboarding email sequences to all new sign-ups within 24 hours",
        correctType: "task",
        explanation:
          "This is a Task — a specific, repeatable action the team executes. Tasks support Key Results but are not outcomes themselves.",
      },
      {
        statement: "Record and publish 3 in-app tutorial videos for core product features",
        correctType: "task",
        explanation:
          "This is a Task — publishing videos is an action, not an outcome. The outcome (improved activation rate) would be a Key Result; creating the videos is the Task that enables it.",
      },
    ],
  },
  {
    id: "hr",
    emoji: "👤",
    title: "HR & Employee Engagement",
    subtitle: "HR team wants to improve employee engagement",
    cardBg: "bg-brand/5",
    cardBorder: "border-brand/20",
    questions: [
      {
        statement:
          "Build a workplace where every employee feels genuinely heard and valued",
        correctType: "objective",
        explanation:
          "This is an Objective — a qualitative aspiration. You cannot put a single number on it, but you can measure progress through Key Results.",
      },
      {
        statement: "Increase employee NPS from 22 to 50 by December",
        correctType: "key-result",
        explanation:
          "This is a Key Result — eNPS is a measurable metric. Moving from 22 to 50 with a deadline is a specific, time-bound outcome.",
      },
      {
        statement:
          "Run monthly all-hands recognition events naming top performers for the next 6 months",
        correctType: "task",
        explanation:
          "This is a Task — it describes a recurring, executable activity. The impact on eNPS (a Key Result) is what matters; the events are the mechanism to get there.",
      },
    ],
  },
  {
    id: "marketing",
    emoji: "📢",
    title: "Marketing Campaign",
    subtitle: "TalentSpotify is launching a new feature",
    cardBg: "bg-violet-50",
    cardBorder: "border-violet-200",
    questions: [
      {
        statement: "Make TARA the most talked-about AI review tool in India",
        correctType: "objective",
        explanation:
          "This is an Objective — 'most talked-about' is qualitative and aspirational. It sets the ambition without prescribing how to measure it.",
      },
      {
        statement:
          "Generate 1,000 qualified demo requests through the TARA launch campaign",
        correctType: "key-result",
        explanation:
          "This is a Key Result — 1,000 qualified demo requests is a specific, measurable outcome you can track and confirm.",
      },
      {
        statement:
          "Achieve a 25% average email open rate across the 5-email TARA launch sequence",
        correctType: "key-result",
        explanation:
          "This is a Key Result — a 25% open rate is a measurable metric with a clear target. It is an outcome, not an activity.",
      },
      {
        statement:
          "Write and schedule 10 LinkedIn posts about the TARA feature launch over 4 weeks",
        correctType: "task",
        explanation:
          "This is a Task — writing and scheduling posts is an executable activity. The impact on reach or demo requests (Key Results) is what matters.",
      },
    ],
  },
];

const TYPE_META: Record<
  AnswerType,
  {
    label: string;
    Icon: React.ElementType;
    bg: string;
    border: string;
    text: string;
    selBg: string;
    selBorder: string;
  }
> = {
  objective: {
    label: "Objective",
    Icon: Target,
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    selBg: "bg-amber-100",
    selBorder: "border-amber-500",
  },
  "key-result": {
    label: "Key Result",
    Icon: BarChart3,
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-700",
    selBg: "bg-sky-100",
    selBorder: "border-sky-500",
  },
  task: {
    label: "Task",
    Icon: CheckSquare,
    bg: "bg-brand/5",
    border: "border-brand/20",
    text: "text-brand-dark",
    selBg: "bg-brand/10",
    selBorder: "border-brand",
  },
};

const ANSWER_TYPES: AnswerType[] = ["objective", "key-result", "task"];

function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => i);
  const colors = ["#33685A", "#A3C4B7", "#6FB199", "#2A554A", "#F59E0B", "#3B82F6", "#8B5CF6"];
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((i) => (
        <span
          key={i}
          className="absolute h-2.5 w-1.5 rounded-sm"
          style={{
            left: `${(i / pieces.length) * 100}%`,
            top: "-12px",
            background: colors[i % colors.length],
            transform: `rotate(${i * 23}deg)`,
            animation: `confettiFall ${1.2 + (i % 5) * 0.3}s ease-in ${(i % 8) * 0.15}s both`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0)    rotate(0deg);   opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}

type Screen =
  | { name: "scenarios" }
  | {
      name: "quiz";
      scenarioId: string;
      questionIndex: number;
      answers: AnswerType[];
      submitted: boolean;
      streak: number;
    }
  | {
      name: "results";
      scenarioId: string;
      answers: AnswerType[];
      newBadges: string[];
    }
  | { name: "badges"; prevScreen: Screen };

export function OkrLearning() {
  const [screen, setScreen] = useState<Screen>({ name: "scenarios" });
  const [badgeIds, setBadgeIds] = useState<string[]>([]);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [bestScores, setBestScores] = useState<Record<string, number>>({});
  const [globalStreak, setGlobalStreak] = useState(0);
  // pendingAnswer must be at top level — hooks cannot be inside conditionals
  const [pendingAnswer, setPendingAnswer] = useState<AnswerType | null>(null);

  function startScenario(id: string) {
    setPendingAnswer(null);
    setScreen({ name: "quiz", scenarioId: id, questionIndex: 0, answers: [], submitted: false, streak: globalStreak });
  }

  function handleSubmit() {
    if (screen.name !== "quiz" || !pendingAnswer) return;
    const scenario = SCENARIOS.find((s) => s.id === screen.scenarioId)!;
    const correct = pendingAnswer === scenario.questions[screen.questionIndex].correctType;
    const newStreak = correct ? screen.streak + 1 : 0;
    setGlobalStreak(newStreak);
    setScreen({ ...screen, answers: [...screen.answers, pendingAnswer], submitted: true, streak: newStreak });
  }

  function handleNext() {
    if (screen.name !== "quiz") return;
    const scenario = SCENARIOS.find((s) => s.id === screen.scenarioId)!;
    const next = screen.questionIndex + 1;

    if (next < scenario.questions.length) {
      setPendingAnswer(null);
      setScreen({ ...screen, questionIndex: next, submitted: false });
      return;
    }

    // Final question — compute results
    const allAnswers = screen.answers;
    const score = allAnswers.filter((a, i) => a === scenario.questions[i].correctType).length;
    const pct = Math.round((score / scenario.questions.length) * 100);
    const earned: string[] = [];

    const wasCompleted = completedIds.includes(screen.scenarioId);
    if (!wasCompleted) earned.push("explorer");
    if (pct === 100) earned.push("perfect");
    if (wasCompleted && pct > (bestScores[screen.scenarioId] ?? 0)) earned.push("comeback");

    const newCompleted = wasCompleted ? completedIds : [...completedIds, screen.scenarioId];
    if (newCompleted.length === SCENARIOS.length && !badgeIds.includes("champion")) earned.push("champion");
    if (screen.streak >= 5 && !badgeIds.includes("streak")) earned.push("streak");

    const fresh = earned.filter((b) => !badgeIds.includes(b));
    setCompletedIds(newCompleted);
    setBestScores((prev) => ({ ...prev, [screen.scenarioId]: Math.max(prev[screen.scenarioId] ?? 0, pct) }));
    setBadgeIds((prev) => [...new Set([...prev, ...fresh])]);
    setScreen({ name: "results", scenarioId: screen.scenarioId, answers: allAnswers, newBadges: fresh });
  }

  // ── Badges screen ──────────────────────────────────────────────
  if (screen.name === "badges") {
    return (
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => setScreen(screen.prevScreen)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h2 className="mt-6 text-2xl font-bold text-slate-900">My Badges</h2>
        <p className="mt-1 text-slate-500">{badgeIds.length} of {ALL_BADGES.length} earned</p>
        <div className="mt-6 space-y-3">
          {ALL_BADGES.map((b) => {
            const earned = badgeIds.includes(b.id);
            return (
              <div
                key={b.id}
                className={`flex items-center gap-4 rounded-xl border p-4 transition ${
                  earned ? "border-brand/20 bg-brand/5" : "border-slate-200 bg-slate-50 opacity-50"
                }`}
              >
                <span className={`text-2xl ${earned ? "" : "grayscale"}`}>{b.emoji}</span>
                <div>
                  <p className={`font-semibold ${earned ? "text-slate-900" : "text-slate-500"}`}>{b.title}</p>
                  <p className="text-sm text-slate-500">{b.description}</p>
                </div>
                {earned && <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-brand" />}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Scenarios screen ───────────────────────────────────────────
  if (screen.name === "scenarios") {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <div />
          <button
            onClick={() => setScreen({ name: "badges", prevScreen: screen })}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-surface"
          >
            <Trophy className="h-4 w-4 text-amber-500" />
            My Badges
            {badgeIds.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                {badgeIds.length}
              </span>
            )}
          </button>
        </div>

        <div className="mt-8 text-center">
          <span className="text-5xl" role="img" aria-label="target">🎯</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose Your Adventure
          </h1>
          <p className="mt-3 mx-auto max-w-lg text-lg text-slate-600">
            Select a scenario to practise classifying Objectives, Key Results, and Tasks.
            Each scenario has its own unique challenge!
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SCENARIOS.map((s) => {
            const done = completedIds.includes(s.id);
            const best = bestScores[s.id];
            return (
              <div key={s.id} className={`rounded-2xl border p-6 ${s.cardBg} ${s.cardBorder}`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl" role="img" aria-label={s.title}>{s.emoji}</span>
                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                    {s.questions.length} questions
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{s.subtitle}</p>
                {done && best !== undefined && (
                  <p className="mt-2 text-xs font-semibold text-brand">
                    Best: {best}% {best === 100 ? "⭐" : ""}
                  </p>
                )}
                <button
                  onClick={() => startScenario(s.id)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  {done ? "▶ Replay Scenario" : "▶ Start Scenario"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-700">🎓 Quick reminder before you start</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
            {([
              { Icon: Target,      iconBg: "bg-amber-50",   iconColor: "text-amber-600", label: "Objective",  desc: "Qualitative & aspirational — where you want to go" },
              { Icon: BarChart3,   iconBg: "bg-sky-50",     iconColor: "text-sky-600",   label: "Key Result", desc: "Quantitative & measurable — how you track progress" },
              { Icon: CheckSquare, iconBg: "bg-brand/5",    iconColor: "text-brand",     label: "Task",       desc: "Specific action — what you do day-to-day" },
            ] as const).map(({ Icon, iconBg, iconColor, label, desc }) => (
              <div key={label} className="flex gap-2">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
                  <Icon className={`h-3 w-3 ${iconColor}`} />
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{label}</p>
                  <p className="text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz screen ────────────────────────────────────────────────
  if (screen.name === "quiz") {
    const scenario = SCENARIOS.find((s) => s.id === screen.scenarioId)!;
    const q = scenario.questions[screen.questionIndex];
    const total = scenario.questions.length;
    const progressPct = ((screen.questionIndex + (screen.submitted ? 1 : 0)) / total) * 100;
    const submittedAnswer = screen.submitted ? screen.answers[screen.questionIndex] : null;
    const isCorrect = submittedAnswer === q.correctType;

    return (
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setScreen({ name: "scenarios" })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Scenarios
          </button>
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="text-xl">{scenario.emoji}</span> {scenario.title}
          </span>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">
              Question {screen.questionIndex + 1} of {total}
            </span>
            <span className="font-semibold text-brand">{Math.round(progressPct)}% Complete</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-brand transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm text-slate-400">{scenario.subtitle}</p>
          <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
            &ldquo;{q.statement}&rdquo;
          </h2>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            What type of statement is this?
          </p>

          <div className="mt-4 space-y-3">
            {ANSWER_TYPES.map((type) => {
              const m = TYPE_META[type];
              const Icon = m.Icon;
              const isSelected = screen.submitted ? submittedAnswer === type : pendingAnswer === type;
              const showCorrect = screen.submitted && type === q.correctType;
              const showWrong = screen.submitted && submittedAnswer === type && type !== q.correctType;

              return (
                <button
                  key={type}
                  disabled={screen.submitted}
                  onClick={() => !screen.submitted && setPendingAnswer(type)}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                    showCorrect
                      ? "border-brand bg-brand/5"
                      : showWrong
                      ? "border-red-400 bg-red-50"
                      : isSelected
                      ? `${m.selBg} ${m.selBorder}`
                      : `border ${m.bg} ${m.border} enabled:hover:brightness-95`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${m.bg}`}>
                      <Icon className={`h-4 w-4 ${m.text}`} />
                    </span>
                    <span className={`font-semibold ${m.text}`}>{m.label}</span>
                    {showCorrect && <CheckCircle2 className="ml-auto h-5 w-5 text-brand" />}
                    {showWrong && <XCircle className="ml-auto h-5 w-5 text-red-500" />}
                  </div>
                </button>
              );
            })}
          </div>

          {!screen.submitted && (
            <button
              onClick={handleSubmit}
              disabled={!pendingAnswer}
              className="mt-5 w-full rounded-xl bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Answer
            </button>
          )}

          {screen.submitted && (
            <div
              className={`mt-5 rounded-xl border p-4 ${
                isCorrect ? "border-brand/20 bg-brand/5" : "border-red-200 bg-red-50"
              }`}
            >
              <p className={`text-sm font-bold ${isCorrect ? "text-brand-dark" : "text-red-700"}`}>
                {isCorrect
                  ? "✓ Correct!"
                  : `✗ Not quite — the right answer is ${TYPE_META[q.correctType].label}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{q.explanation}</p>
            </div>
          )}
        </div>

        {screen.submitted && (
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {screen.questionIndex + 1 < total ? "Next Question" : "See Results"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-slate-400">
          <span className="text-brand">🎯 TARA says:</span>{" "}
          {screen.submitted
            ? isCorrect
              ? "Excellent thinking! Keep it up."
              : "Don't worry — every mistake is a learning moment."
            : "Think: is this a direction, a measurement, or an action?"}
        </p>
      </div>
    );
  }

  // ── Results screen ─────────────────────────────────────────────
  const scenario = SCENARIOS.find((s) => s.id === screen.scenarioId)!;
  const correct = screen.answers.filter((a, i) => a === scenario.questions[i].correctType).length;
  const total = scenario.questions.length;
  const pct = Math.round((correct / total) * 100);

  const countType = (t: AnswerType) =>
    screen.answers.filter((a, i) => scenario.questions[i].correctType === t && a === t).length;
  const totalType = (t: AnswerType) =>
    scenario.questions.filter((q) => q.correctType === t).length;

  return (
    <>
      {pct === 100 && <Confetti />}
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-5xl" role="img" aria-label="score">
          {pct === 100 ? "🌟" : pct >= 60 ? "👍" : "💪"}
        </span>
        <h2 className="mt-4 text-5xl font-bold text-brand">{correct}/{total}</h2>
        <p className="text-slate-500">Questions Correct</p>
        <p className="mt-1 text-3xl font-bold text-slate-900">{pct}%</p>

        <div
          className={`mt-4 inline-block rounded-2xl border px-5 py-2 text-base font-semibold ${
            pct === 100
              ? "border-brand/20 bg-brand/5 text-brand-dark"
              : pct >= 60
              ? "border-sky-200 bg-sky-50 text-sky-700"
              : "border-amber-200 bg-amber-50 text-amber-700"
          }`}
        >
          {pct === 100
            ? "Perfect! You're an OKR Master! 🏆"
            : pct >= 60
            ? "Great work — you're getting there!"
            : "Keep practising — OKRs take time to master!"}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {([
            { type: "objective" as AnswerType,  label: "Objectives",  bg: "bg-amber-50", text: "text-amber-700" },
            { type: "key-result" as AnswerType, label: "Key Results", bg: "bg-sky-50",   text: "text-sky-700" },
            { type: "task" as AnswerType,        label: "Tasks",       bg: "bg-brand/5",  text: "text-brand-dark" },
          ]).map(({ type, label, bg, text }) => (
            <div key={type} className={`rounded-xl border border-slate-200 ${bg} p-4`}>
              <p className={`text-2xl font-bold ${text}`}>{countType(type)}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
              <p className="text-xs text-slate-400">of {totalType(type)}</p>
            </div>
          ))}
        </div>

        {screen.newBadges.length > 0 && (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left">
            <p className="font-bold text-amber-800">🏆 New Badges Earned!</p>
            <div className="mt-3 space-y-2">
              {screen.newBadges.map((id) => {
                const b = ALL_BADGES.find((x) => x.id === id)!;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-3 rounded-xl border border-amber-200 bg-white px-4 py-3"
                  >
                    <span className="text-2xl">{b.emoji}</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{b.title}</p>
                      <p className="text-xs text-slate-500">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setScreen({ name: "scenarios" })}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            <Sparkles className="h-4 w-4" /> Try Another Scenario
          </button>
          <button
            onClick={() => startScenario(screen.scenarioId)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" /> Retry
          </button>
          <button
            onClick={() => setScreen({ name: "badges", prevScreen: screen })}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Trophy className="h-4 w-4 text-amber-500" /> My Badges ({badgeIds.length})
          </button>
        </div>
      </div>
    </>
  );
}
