"use client";

import { useState, useRef } from "react";
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  RotateCcw,
  Info,
  Wand2,
} from "lucide-react";

// ── Bias / quality analysis ────────────────────────────────────

interface Issue {
  word: string;
  type: "bias" | "vague" | "absolute" | "missing-impact" | "weak";
  suggestion: string;
}

const BIAS_WORDS: Record<string, string> = {
  emotional:    "describe the specific behaviour instead",
  aggressive:   "describe the specific behaviour — e.g. 'spoke over colleagues in three meetings'",
  attitude:     "name the observable behaviour, not a personality trait",
  lazy:         "describe the specific gap — e.g. 'missed 4 of 6 deadlines last quarter'",
  difficult:    "specify what made collaboration challenging",
  bossy:        "describe the leadership behaviour you observed",
  abrasive:     "describe the specific interaction or communication style observed",
  opinionated:  "describe how their input affects team decisions",
  loud:         "specify the communication behaviour",
  quiet:        "specify the participation pattern you observed",
  unprofessional: "describe the specific conduct",
  dramatic:     "describe the specific behaviour",
  hysterical:   "describe the specific behaviour",
  irrational:   "describe the reasoning gap you observed",
  over:         "avoid loaded terms — describe the exact behaviour",
};

const VAGUE_WORDS: Record<string, string> = {
  "good work":      "specify what was good and what impact it had",
  "great job":      "describe the specific outcome or behaviour",
  "needs improvement": "specify which skill, by how much, and by when",
  "could be better":   "name the exact gap and what 'better' looks like",
  "not meeting expectations": "state which expectation and the measurable gap",
  "does well":      "describe the specific behaviour and its outcome",
  "sometimes":      "give a specific example or frequency",
  "kind of":        "be direct — remove hedging language",
  "a bit":          "quantify or give a specific example",
  "often":          "give a specific frequency or example",
  "rarely":         "give a specific frequency or example",
  "always communicates": "give a specific example of the communication",
  "never":          "avoid absolutes — give a specific example",
  "always":         "avoid absolutes — give a specific example",
  "everyone knows": "remove — subjective and unverifiable",
  "clearly":        "remove — subjective and can feel dismissive",
  "obviously":      "remove — can feel condescending",
};

const ABSOLUTE_WORDS = ["always", "never", "everyone", "no one", "constantly", "all the time", "not once"];

function analyzeText(text: string): {
  score: number;
  issues: Issue[];
  sbiScore: { situation: boolean; behavior: boolean; impact: boolean };
  wordCount: number;
} {
  const lower = text.toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  const issues: Issue[] = [];
  const found = new Set<string>();

  // Bias check
  for (const [word, suggestion] of Object.entries(BIAS_WORDS)) {
    if (lower.includes(word) && !found.has(word)) {
      found.add(word);
      issues.push({ word, type: "bias", suggestion });
    }
  }

  // Vague check
  for (const [phrase, suggestion] of Object.entries(VAGUE_WORDS)) {
    if (lower.includes(phrase) && !found.has(phrase)) {
      found.add(phrase);
      issues.push({ word: phrase, type: "vague", suggestion });
    }
  }

  // Absolute language
  for (const word of ABSOLUTE_WORDS) {
    if (lower.includes(word) && !found.has(word) && !VAGUE_WORDS[word]) {
      found.add(word);
      issues.push({ word, type: "absolute", suggestion: `Avoid absolutes — give a specific example or frequency instead of "${word}"` });
    }
  }

  // Weak / passive voice signals
  const weakPatterns = [
    { re: /\bseems? to\b/i,      suggestion: "Be direct — describe what you observed, not what you infer" },
    { re: /\bappears? to\b/i,    suggestion: "Be direct — describe the specific behaviour you observed" },
    { re: /\btries? to\b/i,      suggestion: "Describe the actual behaviour or outcome, not the attempt" },
    { re: /\bshould try\b/i,     suggestion: "State the specific action you'd like to see" },
    { re: /\bit would be nice\b/i, suggestion: "State it as a clear expectation" },
    { re: /\bI feel like\b/i,    suggestion: "Ground feedback in observation, not feeling — 'I observed…'" },
    { re: /\bI think\b/i,        suggestion: "Ground feedback in observation — 'In Q2, I observed…'" },
    { re: /\bmaybe\b/i,          suggestion: "Be direct with your recommendation" },
    { re: /\bperhaps\b/i,        suggestion: "Be direct with your recommendation" },
  ];
  for (const { re, suggestion } of weakPatterns) {
    const m = text.match(re);
    if (m && !found.has(m[0].toLowerCase())) {
      found.add(m[0].toLowerCase());
      issues.push({ word: m[0], type: "weak", suggestion });
    }
  }

  // SBI framework detection
  const situationSignals = /\b(in|during|when|at|on|last|this|q[1-4]|quarter|sprint|project|meeting|call|review|presentation)\b/i;
  const behaviorSignals  = /\b(said|did|delivered|presented|completed|missed|communicated|responded|led|handled|escalated|wrote|built|shipped|resolved)\b/i;
  const impactSignals    = /\b(result|impact|effect|led to|which meant|because|so that|enabling|allowed|prevented|improved|increased|decreased|saved|cost|revenue|team|customer)\b/i;

  const sbiScore = {
    situation: situationSignals.test(text),
    behavior:  behaviorSignals.test(text),
    impact:    impactSignals.test(text),
  };

  if (!sbiScore.impact) {
    issues.push({ word: "[no impact statement]", type: "missing-impact", suggestion: "Add the impact: what result did this behaviour produce for the team, project, or customer?" });
  }

  // Quality score (0–100)
  let score = 100;
  score -= issues.filter((i) => i.type === "bias").length * 20;
  score -= issues.filter((i) => i.type === "vague").length * 10;
  score -= issues.filter((i) => i.type === "absolute").length * 8;
  score -= issues.filter((i) => i.type === "weak").length * 5;
  score -= issues.filter((i) => i.type === "missing-impact").length * 15;

  // Bonus for SBI completeness
  const sbiBonus = Object.values(sbiScore).filter(Boolean).length * 5;
  score += sbiBonus;

  // Length penalty for very short feedback
  if (words.length < 20) score -= 20;
  if (words.length < 10) score -= 20;

  score = Math.max(0, Math.min(100, score));

  return { score, issues, sbiScore, wordCount: words.length };
}

// ── Enhanced version generator ─────────────────────────────────

function buildEnhanced(text: string, tone: string): string {
  if (!text.trim()) return "";

  // Apply simple token replacements to clean common issues
  const replacements: [RegExp, string][] = [
    [/\bI feel like\b/gi,      "I observed that"],
    [/\bI think\b/gi,          "Based on my observation,"],
    [/\bseems? to\b/gi,        ""],
    [/\bappears? to\b/gi,      ""],
    [/\bkind of\b/gi,          ""],
    [/\ba bit\b/gi,            ""],
    [/\bmaybe\b/gi,            "I recommend"],
    [/\bperhaps\b/gi,          "I recommend"],
    [/\bit would be nice\b/gi, "I expect"],
    [/\bshould try to\b/gi,    "should"],
    [/\btries? to\b/gi,        ""],
    [/\bgood work\b/gi,        "strong contribution"],
    [/\bgreat job\b/gi,        "impactful work"],
    [/\bneeds improvement\b/gi,"has a clear development opportunity"],
    [/\bcould be better\b/gi,  "has room to grow"],
    [/\bobviously\b/gi,        ""],
    [/\bclearly\b/gi,          ""],
    [/\beveryone knows\b/gi,   "it's evident"],
    [/\bunprofessional\b/gi,   "[describe the specific conduct]"],
    [/\battitude\b/gi,         "[describe the specific behaviour]"],
    [/\blazy\b/gi,             "[describe the specific performance gap]"],
    [/\bdifficult\b/gi,        "[describe the specific collaboration challenge]"],
    [/\bagressive\b/gi,        "[describe the specific communication behaviour]"],
    [/\bemotional\b/gi,        "[describe the specific reaction you observed]"],
  ];

  let enhanced = text;
  for (const [pattern, replacement] of replacements) {
    enhanced = enhanced.replace(pattern, replacement);
  }

  // Collapse double spaces
  enhanced = enhanced.replace(/  +/g, " ").replace(/ \./g, ".").trim();

  // Tone prefix
  const tonePrefix: Record<string, string> = {
    developmental: "**Development-focused rewrite:**\n\n",
    direct:        "**Direct & specific rewrite:**\n\n",
    balanced:      "**Balanced rewrite:**\n\n",
    coaching:      "**Coaching-style rewrite:**\n\n",
  };

  // SBI scaffold suggestion
  const scaffold = `\n\n---\n**Suggested SBI structure to complete:**\n• **Situation:** [When / in which project or meeting…]\n• **Behaviour:** [What specifically they did or said…]\n• **Impact:** [What result this produced for the team / project / customer…]`;

  const { sbiScore } = analyzeText(text);
  const missingSBI = !Object.values(sbiScore).every(Boolean);

  return (tonePrefix[tone] ?? "") + enhanced + (missingSBI ? scaffold : "");
}

// ── Subcomponents ──────────────────────────────────────────────

const ISSUE_COLORS: Record<Issue["type"], { bg: string; text: string; label: string }> = {
  bias:           { bg: "bg-red-50",    text: "text-red-700",   label: "Bias risk" },
  vague:          { bg: "bg-amber-50",  text: "text-amber-700", label: "Vague" },
  absolute:       { bg: "bg-orange-50", text: "text-orange-700",label: "Absolute language" },
  "missing-impact": { bg: "bg-violet-50", text: "text-violet-700", label: "Missing impact" },
  weak:           { bg: "bg-sky-50",    text: "text-sky-700",   label: "Weak phrasing" },
};

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 75 ? "text-brand border-brand/30 bg-brand/5"
    : score >= 50 ? "text-amber-700 border-amber-300 bg-amber-50"
    : "text-red-700 border-red-300 bg-red-50";
  const label =
    score >= 75 ? "Strong"
    : score >= 50 ? "Needs work"
    : "Significant issues";

  return (
    <div className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3 ${color}`}>
      <span className="text-4xl font-bold">{score}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide opacity-70">Feedback Quality</p>
        <p className="text-sm font-bold">{label}</p>
      </div>
    </div>
  );
}

function SBIBadge({ label, ok }: { label: string; ok: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        ok
          ? "border-brand/20 bg-brand/5 text-brand-dark"
          : "border-slate-200 bg-slate-50 text-slate-400"
      }`}
    >
      {ok ? <CheckCircle2 className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
      {label}
    </span>
  );
}

const TONES = [
  { id: "balanced",      label: "Balanced",      desc: "Fair and professional" },
  { id: "developmental", label: "Developmental", desc: "Growth-focused" },
  { id: "direct",        label: "Direct",        desc: "Clear and specific" },
  { id: "coaching",      label: "Coaching",      desc: "Question-led" },
];

const EXAMPLE_DRAFTS = [
  {
    label: "Vague positive",
    text: "Alex always does great work and has a good attitude. The team really likes working with them. They should maybe try to be a bit more proactive sometimes.",
  },
  {
    label: "Bias risk",
    text: "Jordan is very emotional and has a difficult attitude in meetings. They are sometimes aggressive when challenged and seem irrational under pressure.",
  },
  {
    label: "Missing impact",
    text: "Sam delivered the Q3 customer report on time and presented clearly to the leadership team.",
  },
];

// ── Main component ─────────────────────────────────────────────

export function FeedbackStudio() {
  const [draft, setDraft] = useState("");
  const [tone, setTone] = useState("balanced");
  const [result, setResult] = useState<ReturnType<typeof analyzeText> | null>(null);
  const [enhanced, setEnhanced] = useState("");
  const [showEnhanced, setShowEnhanced] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showIssues, setShowIssues] = useState(true);
  const resultRef = useRef<HTMLDivElement>(null);

  function handleAnalyze() {
    if (!draft.trim()) return;
    const analysis = analyzeText(draft);
    const enh = buildEnhanced(draft, tone);
    setResult(analysis);
    setEnhanced(enh);
    setShowEnhanced(false);
    setShowIssues(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  function handleReset() {
    setDraft("");
    setResult(null);
    setEnhanced("");
  }

  function handleCopy() {
    navigator.clipboard.writeText(enhanced.replace(/\*\*/g, "").replace(/^.*rewrite:\*\*\n\n/, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-5xl" role="img" aria-label="feedback">✍️</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          AI Feedback Studio
        </h1>
        <p className="mt-3 mx-auto max-w-xl text-lg text-slate-600">
          Paste any performance feedback draft. TARA will scan for bias, vague language,
          and missing impact — then suggest a polished, SBI-structured rewrite.
        </p>
      </div>

      {/* Input card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex items-center justify-between">
          <label htmlFor="draft" className="text-sm font-semibold text-slate-700">
            Your draft feedback
          </label>
          <div className="flex gap-2">
            {EXAMPLE_DRAFTS.map((ex) => (
              <button
                key={ex.label}
                onClick={() => { setDraft(ex.text); setResult(null); }}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 transition hover:bg-surface hover:text-brand"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
        <textarea
          id="draft"
          value={draft}
          onChange={(e) => { setDraft(e.target.value); setResult(null); }}
          placeholder="Paste or type your feedback here… e.g. 'Alex always does great work but sometimes has an attitude in meetings.'"
          rows={6}
          className="mt-3 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
        <div className="mt-1 text-right text-xs text-slate-400">
          {draft.split(/\s+/).filter(Boolean).length} words
        </div>

        {/* Tone selector */}
        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold text-slate-700">Rewrite tone</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TONES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTone(t.id)}
                className={`rounded-xl border p-3 text-left transition ${
                  tone === t.id
                    ? "border-brand bg-brand/5"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <p className={`text-sm font-semibold ${tone === t.id ? "text-brand-dark" : "text-slate-800"}`}>
                  {t.label}
                </p>
                <p className="text-xs text-slate-500">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleAnalyze}
            disabled={!draft.trim()}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Sparkles className="h-4 w-4" />
            Analyse &amp; Enhance
          </button>
          {draft && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {result && (
        <div ref={resultRef} className="mt-8 space-y-5">
          {/* Score + SBI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <ScoreBadge score={result.score} />
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  SBI Framework Coverage
                </p>
                <div className="flex gap-2">
                  <SBIBadge label="Situation" ok={result.sbiScore.situation} />
                  <SBIBadge label="Behaviour" ok={result.sbiScore.behavior} />
                  <SBIBadge label="Impact"    ok={result.sbiScore.impact} />
                </div>
              </div>
            </div>

            {!Object.values(result.sbiScore).every(Boolean) && (
              <div className="mt-4 flex gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>
                  Great feedback uses the <strong>SBI model</strong>: describe the{" "}
                  <strong>Situation</strong> (when/where), the <strong>Behaviour</strong> (what
                  they said or did), and the <strong>Impact</strong> (what result it produced).
                  Missing elements are marked above.
                </span>
              </div>
            )}
          </div>

          {/* Issues */}
          {result.issues.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <button
                className="flex w-full items-center justify-between"
                onClick={() => setShowIssues((v) => !v)}
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="font-semibold text-slate-900">
                    {result.issues.length} issue{result.issues.length !== 1 ? "s" : ""} found
                  </span>
                </div>
                {showIssues ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
              </button>

              {showIssues && (
                <div className="mt-4 space-y-3">
                  {result.issues.map((issue, i) => {
                    const meta = ISSUE_COLORS[issue.type];
                    return (
                      <div key={i} className={`rounded-xl border p-4 ${meta.bg}`}>
                        <div className="flex items-start gap-3">
                          <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${meta.text} border-current/20`}>
                            {meta.label}
                          </span>
                          <div>
                            <p className={`font-semibold ${meta.text}`}>
                              &ldquo;{issue.word}&rdquo;
                            </p>
                            <p className="mt-0.5 text-sm text-slate-700">{issue.suggestion}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {result.issues.length === 0 && (
            <div className="flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-5">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm font-semibold text-brand-dark">
                No major issues detected — your draft looks solid. Review the SBI breakdown above and use the enhanced version as a final polish.
              </p>
            </div>
          )}

          {/* Enhanced version */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <button
              className="flex w-full items-center justify-between"
              onClick={() => setShowEnhanced((v) => !v)}
            >
              <div className="flex items-center gap-2">
                <Wand2 className="h-4 w-4 text-brand" />
                <span className="font-semibold text-slate-900">Enhanced rewrite</span>
                <span className="rounded-full border border-brand/20 bg-brand/5 px-2 py-0.5 text-xs font-semibold text-brand-dark">
                  {TONES.find((t) => t.id === tone)?.label}
                </span>
              </div>
              {showEnhanced ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
            </button>

            {showEnhanced && (
              <div className="mt-4">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
                    {enhanced
                      .replace(/\*\*(.*?)\*\*/g, "$1")
                      .replace(/^.*rewrite:\n\n/, "")}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <Info className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    Placeholders in [brackets] require your specific observations. The SBI scaffold at the end guides what to add.
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Copied!" : "Copy to clipboard"}
                </button>
              </div>
            )}

            {!showEnhanced && (
              <button
                onClick={() => setShowEnhanced(true)}
                className="mt-4 w-full rounded-xl border border-dashed border-brand/30 bg-brand/5 py-3 text-sm font-semibold text-brand transition hover:bg-brand/10"
              >
                View enhanced version →
              </button>
            )}
          </div>

          {/* SBI guide */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-700">📖 SBI Framework quick guide</p>
            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
              <div className="flex gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">S</span>
                <div>
                  <p className="font-semibold text-slate-800">Situation</p>
                  <p className="text-slate-500">Set the context — when and where did this happen?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">B</span>
                <div>
                  <p className="font-semibold text-slate-800">Behaviour</p>
                  <p className="text-slate-500">Name the observable action — what did they specifically say or do?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand-dark">I</span>
                <div>
                  <p className="font-semibold text-slate-800">Impact</p>
                  <p className="text-slate-500">State the result — what did that behaviour produce for the team or customer?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty state hint */}
      {!result && (
        <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 text-center text-sm text-slate-400">
          <p>Paste a feedback draft above and click <strong className="text-slate-600">Analyse &amp; Enhance</strong> to see a quality score, bias flags, and an improved rewrite.</p>
        </div>
      )}
    </div>
  );
}
