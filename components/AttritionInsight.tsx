'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw, TrendingDown, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Info } from 'lucide-react';

/* ── Types ────────────────────────────────────────────────── */

interface Inputs {
  headcount: number;
  avgSalaryLakh: number;
  attritionRate: number;
  seniorityMix: { entry: number; mid: number; senior: number; lead: number };
  industry: string;
  currency: 'INR' | 'USD';
}

interface Results {
  leaversPerYear: number;
  avgReplacementPct: number;
  costPerLeaver: number;
  totalAnnualCost: number;
  costBreakdown: { label: string; pct: number; amount: number }[];
  cohorts: { label: string; count: number; costEach: number; subtotal: number; tenure: string; note: string }[];
  threeYearCost: number;
  savingsAt5pctReduction: number;
  savingsAt10pctReduction: number;
  band: 'healthy' | 'moderate' | 'high' | 'critical';
}

/* ── Constants ────────────────────────────────────────────── */

const REPLACEMENT_PCT: Record<string, number> = {
  entry: 0.5,
  mid: 1.0,
  senior: 1.5,
  lead: 2.0,
};

const INDUSTRIES = [
  'Technology / SaaS',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail & E-commerce',
  'Professional Services',
  'Hospitality & Facilities',
  'Education',
  'Other',
];

const COST_BREAKDOWN_LABELS = [
  { key: 'recruiting', label: 'Recruiting & Sourcing', pct: 28 },
  { key: 'interview',  label: 'Interview & Selection Time', pct: 12 },
  { key: 'onboarding', label: 'Onboarding & Training', pct: 22 },
  { key: 'ramp',       label: 'Lost Productivity (Ramp)', pct: 38 },
];

function getBand(rate: number): Results['band'] {
  if (rate < 8)  return 'healthy';
  if (rate < 15) return 'moderate';
  if (rate < 25) return 'high';
  return 'critical';
}

const BAND_META: Record<Results['band'], { label: string; colour: string; border: string; text: string; icon: string }> = {
  healthy:  { label: 'Healthy',  colour: 'bg-brand/5',   border: 'border-brand/20',   text: 'text-brand-dark',  icon: '✅' },
  moderate: { label: 'Moderate', colour: 'bg-amber-50',  border: 'border-amber-300',  text: 'text-amber-800',  icon: '⚠️' },
  high:     { label: 'High',     colour: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-800', icon: '🔴' },
  critical: { label: 'Critical', colour: 'bg-red-50',    border: 'border-red-300',    text: 'text-red-800',    icon: '🚨' },
};

const PLAYBOOKS: Record<Results['band'], { title: string; actions: string[] }> = {
  healthy: {
    title: 'Retention Focus: Protect your top performers',
    actions: [
      'Conduct bi-annual stay interviews with high performers — ask what would make them leave.',
      'Review compensation against market benchmarks annually; correct gaps proactively.',
      'Create visible career ladders with clear promotion criteria for each level.',
      'Recognise tenure milestones publicly — loyalty is often underthanked.',
    ],
  },
  moderate: {
    title: 'Proactive Engagement: Close gaps before they widen',
    actions: [
      'Run a pulse survey this quarter — identify the top 3 dissatisfiers driving exit intent.',
      'Audit manager effectiveness across teams; attrition is often concentrated under specific managers.',
      'Introduce structured 90-day check-ins and 6-month growth conversations.',
      'Review flexibility policies — remote, hybrid, or hours flexibility often moves the needle.',
    ],
  },
  high: {
    title: 'Urgent Intervention: Structural changes needed now',
    actions: [
      'Conduct exit interview analysis immediately — identify the top 2-3 themes and present to leadership.',
      'Benchmark your total compensation (salary + benefits + equity) against competitors.',
      'Review role clarity and workload — burnout and unclear ownership are top high-attrition drivers.',
      'Set a 90-day attrition reduction target and assign an owner with executive sponsorship.',
    ],
  },
  critical: {
    title: 'Crisis Response: Escalate to leadership today',
    actions: [
      'Declare a retention emergency at leadership level — present the financial cost using this analysis.',
      'Immediately identify your highest-risk employees (high performers, key roles) and intervene directly.',
      'Audit your compensation for immediate out-of-band salary corrections where needed.',
      'Commission an independent culture assessment — the problem is almost certainly systemic.',
    ],
  },
};

/* ── Calculations ─────────────────────────────────────────── */

function calculate(inputs: Inputs): Results {
  const { headcount, avgSalaryLakh, attritionRate, seniorityMix } = inputs;

  const salaryInLakh = avgSalaryLakh;
  const leaversPerYear = Math.round(headcount * (attritionRate / 100));

  // Weighted replacement % based on seniority mix
  const total = seniorityMix.entry + seniorityMix.mid + seniorityMix.senior + seniorityMix.lead;
  const avgReplacementPct =
    (seniorityMix.entry * REPLACEMENT_PCT.entry +
      seniorityMix.mid * REPLACEMENT_PCT.mid +
      seniorityMix.senior * REPLACEMENT_PCT.senior +
      seniorityMix.lead * REPLACEMENT_PCT.lead) /
    (total || 1);

  const costPerLeaver = salaryInLakh * avgReplacementPct; // in lakhs
  const totalAnnualCost = leaversPerYear * costPerLeaver;

  const costBreakdown = COST_BREAKDOWN_LABELS.map((item) => ({
    label: item.label,
    pct: item.pct,
    amount: (totalAnnualCost * item.pct) / 100,
  }));

  // Cohort analysis — employees leaving at different tenure points
  const cohortDist = [
    { label: '0-3 months',  pct: 0.15, costMult: 0.4,  tenure: '< 3 months',  note: 'Onboarding costs wasted; productivity never realised' },
    { label: '3-12 months', pct: 0.30, costMult: 0.9,  tenure: '3-12 months', note: 'Peak replacement cost — training invested, not yet fully productive' },
    { label: '1-2 years',   pct: 0.30, costMult: 1.1,  tenure: '1-2 years',   note: 'Full replacement cost + institutional knowledge loss premium' },
    { label: '2-5 years',   pct: 0.18, costMult: 1.3,  tenure: '2-5 years',   note: 'Highest cost — deep knowledge, network, and relationships lost' },
    { label: '5+ years',    pct: 0.07, costMult: 1.6,  tenure: '5+ years',    note: 'Critical: culture carrier and institutional memory permanently lost' },
  ];

  const cohorts = cohortDist.map((c) => {
    const count = Math.round(leaversPerYear * c.pct);
    const costEach = costPerLeaver * c.costMult;
    return { label: c.label, count, costEach, subtotal: count * costEach, tenure: c.tenure, note: c.note };
  });

  const threeYearCost = totalAnnualCost * 3.2; // compounding effect

  const savingsAt5pctReduction = totalAnnualCost * 0.05 * (costPerLeaver / totalAnnualCost * leaversPerYear > 0 ? 1 : 0.05);
  const reducedLeavers5 = Math.round(headcount * Math.max(0, (attritionRate - attritionRate * 0.05) / 100));
  const reducedLeavers10 = Math.round(headcount * Math.max(0, (attritionRate - attritionRate * 0.1) / 100));

  return {
    leaversPerYear,
    avgReplacementPct,
    costPerLeaver,
    totalAnnualCost,
    costBreakdown,
    cohorts,
    threeYearCost,
    savingsAt5pctReduction: (leaversPerYear - reducedLeavers5) * costPerLeaver,
    savingsAt10pctReduction: (leaversPerYear - reducedLeavers10) * costPerLeaver,
    band: getBand(attritionRate),
  };
}

/* ── Formatting ───────────────────────────────────────────── */

function fmtCrore(val: number, currency: 'INR' | 'USD'): string {
  if (currency === 'USD') {
    const usd = val * 12000; // approx 1 lakh INR = 1200 USD; 1 crore = 12000 USD... actually let's just use lakhs
    // Keep in lakhs for USD too, just change symbol
  }
  if (val >= 100) return `${(val / 100).toFixed(2)} Cr`;
  if (val >= 1)   return `${val.toFixed(2)} L`;
  return `${(val * 100).toFixed(0)}K`;
}

function fmtINR(lakh: number): string {
  if (lakh >= 100) return `₹${(lakh / 100).toFixed(2)} Cr`;
  if (lakh >= 1)   return `₹${lakh.toFixed(2)} L`;
  return `₹${(lakh * 100000).toLocaleString('en-IN')}`;
}

/* ── UI helpers ───────────────────────────────────────────── */

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
      {hint && <p className="mb-1.5 text-xs text-slate-400">{hint}</p>}
      {children}
    </div>
  );
}

function NumberInput({ value, onChange, min, max, step, prefix, suffix }: {
  value: number; onChange: (v: number) => void;
  min?: number; max?: number; step?: number; prefix?: string; suffix?: string;
}) {
  return (
    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 overflow-hidden focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
      {prefix && <span className="px-3 text-sm font-medium text-slate-500 border-r border-slate-200 bg-white">{prefix}</span>}
      <input
        type="number" value={value} min={min} max={max} step={step ?? 1}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-800 outline-none"
      />
      {suffix && <span className="px-3 text-sm text-slate-400">{suffix}</span>}
    </div>
  );
}

function MixSlider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-xs text-slate-600">{label}</span>
      <input
        type="range" min={0} max={100} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 accent-brand h-1.5"
      />
      <span className="w-8 text-right text-xs font-bold text-brand-dark">{value}%</span>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */

const DEFAULT_INPUTS: Inputs = {
  headcount: 200,
  avgSalaryLakh: 12,
  attritionRate: 18,
  seniorityMix: { entry: 30, mid: 45, senior: 18, lead: 7 },
  industry: 'Technology / SaaS',
  currency: 'INR',
};

export function AttritionInsight() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [results, setResults] = useState<Results | null>(null);
  const [openCohort, setOpenCohort] = useState(false);

  const mixTotal = inputs.seniorityMix.entry + inputs.seniorityMix.mid + inputs.seniorityMix.senior + inputs.seniorityMix.lead;
  const mixValid = mixTotal === 100;

  function set<K extends keyof Inputs>(key: K, value: Inputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }));
    setResults(null);
  }

  function setMix(key: keyof Inputs['seniorityMix'], value: number) {
    setInputs((prev) => ({ ...prev, seniorityMix: { ...prev.seniorityMix, [key]: value } }));
    setResults(null);
  }

  function handleCalculate() {
    setResults(calculate(inputs));
    setTimeout(() => document.getElementById('attrition-results')?.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  const band = results ? BAND_META[results.band] : null;
  const playbook = results ? PLAYBOOKS[results.band] : null;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-5xl" role="img" aria-label="attrition">📉</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Attrition Insight
        </h1>
        <p className="mt-3 mx-auto max-w-xl text-lg text-slate-600">
          Calculate the true cost of employee attrition by cohort, see where the money goes, and get a personalised retention playbook.
        </p>
      </div>

      {/* Input form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 space-y-6">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Your Organisation</p>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Total headcount">
            <NumberInput value={inputs.headcount} onChange={(v) => set('headcount', v)} min={1} max={100000} />
          </Field>

          <Field label="Average annual salary" hint="Gross CTC per employee">
            <NumberInput value={inputs.avgSalaryLakh} onChange={(v) => set('avgSalaryLakh', v)} min={1} max={5000} step={0.5} prefix="₹" suffix="Lakhs" />
          </Field>

          <Field label="Current attrition rate" hint="Annual voluntary + involuntary">
            <NumberInput value={inputs.attritionRate} onChange={(v) => set('attritionRate', Math.min(100, Math.max(0, v)))} min={0} max={100} step={0.5} suffix="%" />
          </Field>

          <Field label="Industry">
            <select
              value={inputs.industry}
              onChange={(e) => set('industry', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            >
              {INDUSTRIES.map((ind) => <option key={ind}>{ind}</option>)}
            </select>
          </Field>
        </div>

        {/* Seniority mix */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-700">Seniority mix</p>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold border ${mixValid ? 'bg-brand/5 border-brand/20 text-brand-dark' : 'bg-red-50 border-red-200 text-red-700'}`}>
              {mixTotal}% {mixValid ? '' : '— must equal 100%'}
            </span>
          </div>
          <div className="space-y-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <MixSlider label="Entry / IC" value={inputs.seniorityMix.entry} onChange={(v) => setMix('entry', v)} />
            <MixSlider label="Mid-level" value={inputs.seniorityMix.mid} onChange={(v) => setMix('mid', v)} />
            <MixSlider label="Senior IC" value={inputs.seniorityMix.senior} onChange={(v) => setMix('senior', v)} />
            <MixSlider label="Lead / Mgr" value={inputs.seniorityMix.lead} onChange={(v) => setMix('lead', v)} />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Replacement costs: Entry 50% · Mid 100% · Senior 150% · Lead / Manager 200% of annual salary
          </p>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!mixValid || inputs.headcount < 1 || inputs.attritionRate <= 0}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Calculate Attrition Cost <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Results */}
      {results && band && playbook && (
        <div id="attrition-results" className="mt-8 space-y-5">

          {/* Band badge */}
          <div className={`flex items-center gap-4 rounded-2xl border p-5 ${band.border} ${band.colour}`}>
            <span className="text-4xl">{band.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <p className={`text-lg font-bold ${band.text}`}>{band.label} Attrition</p>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${band.border} ${band.text}`}>{inputs.attritionRate}%</span>
              </div>
              <p className="mt-0.5 text-sm text-slate-600">
                {results.leaversPerYear} employees leaving per year out of {inputs.headcount.toLocaleString('en-IN')} headcount
              </p>
            </div>
          </div>

          {/* Cost headline cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Annual attrition cost',    value: fmtINR(results.totalAnnualCost),    sub: 'total this year',          accent: 'text-red-700' },
              { label: 'Cost per leaver',           value: fmtINR(results.costPerLeaver),       sub: `${Math.round(results.avgReplacementPct * 100)}% of salary`, accent: 'text-slate-800' },
              { label: '3-year cumulative cost',    value: fmtINR(results.threeYearCost),       sub: 'at current rate',          accent: 'text-orange-700' },
              { label: 'Save with 10% reduction',   value: fmtINR(results.savingsAt10pctReduction), sub: 'if you cut attrition 10%', accent: 'text-brand-dark' },
            ].map((card) => (
              <div key={card.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className={`text-xl font-bold tabular-nums ${card.accent}`}>{card.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{card.label}</p>
                <p className="text-xs text-slate-400">{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Cost breakdown */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Where the money goes</p>
            <div className="space-y-3">
              {results.costBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <span className="text-slate-700">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">{item.pct}%</span>
                      <span className="font-semibold text-slate-900 tabular-nums w-20 text-right">{fmtINR(item.amount)}</span>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-brand transition-all duration-700" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cohort table */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenCohort((v) => !v)}
              className="flex w-full items-center justify-between p-6"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Cost by tenure cohort</p>
                <p className="mt-0.5 text-sm text-slate-500">When employees leave determines how much it actually costs</p>
              </div>
              {openCohort ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
            </button>

            {openCohort && (
              <div className="border-t border-slate-100 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-xs text-slate-500">
                      <th className="px-5 py-3 text-left font-semibold">Tenure</th>
                      <th className="px-5 py-3 text-right font-semibold">Leavers</th>
                      <th className="px-5 py-3 text-right font-semibold">Cost each</th>
                      <th className="px-5 py-3 text-right font-semibold">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {results.cohorts.map((c) => (
                      <tr key={c.label} className="hover:bg-slate-50/50">
                        <td className="px-5 py-3">
                          <p className="font-medium text-slate-800">{c.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{c.note}</p>
                        </td>
                        <td className="px-5 py-3 text-right tabular-nums text-slate-700">{c.count}</td>
                        <td className="px-5 py-3 text-right tabular-nums text-slate-700">{fmtINR(c.costEach)}</td>
                        <td className="px-5 py-3 text-right tabular-nums font-semibold text-slate-900">{fmtINR(c.subtotal)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* What-if savings */}
          <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-4">Retention ROI — what if you reduced attrition?</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Reduce by 5%', saving: results.savingsAt5pctReduction, newRate: Math.max(0, inputs.attritionRate * 0.95) },
                { label: 'Reduce by 10%', saving: results.savingsAt10pctReduction, newRate: Math.max(0, inputs.attritionRate * 0.90) },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-brand/20 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                  <p className="mt-1 text-2xl font-bold text-brand tabular-nums">{fmtINR(item.saving)}</p>
                  <p className="text-xs text-slate-500">saved per year at {item.newRate.toFixed(1)}% attrition</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2 text-sm text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <span>A 10% reduction in attrition costs far less than the saving. Structured 1:1s, fair OKRs, and recognition programmes typically return 5-15x their cost in reduced turnover.</span>
            </div>
          </div>

          {/* Retention playbook */}
          <div className={`rounded-2xl border p-6 ${band.border} ${band.colour}`}>
            <p className={`text-sm font-bold uppercase tracking-widest ${band.text} mb-1`}>Retention Playbook</p>
            <p className={`text-base font-bold ${band.text} mb-4`}>{playbook.title}</p>
            <div className="space-y-3">
              {playbook.actions.map((action, i) => (
                <div key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${band.border} ${band.colour} ${band.text}`}>{i + 1}</span>
                  {action}
                </div>
              ))}
            </div>
          </div>

          {/* Industry benchmark note */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm text-slate-500">
            <p className="font-semibold text-slate-700 mb-1">📊 Industry benchmarks for {inputs.industry}</p>
            <p>
              Healthy attrition sits between <strong className="text-slate-800">8-12%</strong> for most industries.
              Technology and SaaS companies often see <strong className="text-slate-800">12-18%</strong>.
              If you are significantly above your sector average, the gap is costing you compounding amounts each year — the 3-year figure above tells that story.
            </p>
          </div>

          {/* Reset */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => { setResults(null); setInputs(DEFAULT_INPUTS); }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
            <a
              href="/#contact-sales"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              See how TalentSpotify reduces attrition <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
