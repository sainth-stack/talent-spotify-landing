"use client";

import { useMemo, useState } from "react";
import { ChevronDown, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";

/* ---------- helpers ---------- */
const inr = (n: number) =>
  "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));

const scenarios = [
  { label: "Conservative", rate: 0.2 },
  { label: "Expected", rate: 0.35 },
  { label: "Aggressive", rate: 0.5 },
];

/* ---------- small UI atoms ---------- */
function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-bold text-brand-dark">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        aria-valuetext={display}
        className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand"
      />
    </div>
  );
}

function AssumptionRow({
  label,
  value,
  onChange,
  suffix,
  step = 0.05,
  source,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  step?: number;
  source?: string;
}) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm text-slate-700">{label}</label>
        <div className="flex shrink-0 items-center gap-1.5">
          <input
            type="number"
            value={value}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            aria-label={label}
            className="w-24 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-right text-sm font-semibold text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          {suffix && <span className="text-xs text-slate-500">{suffix}</span>}
        </div>
      </div>
      {source && <p className="mt-1 text-xs leading-relaxed text-slate-400">{source}</p>}
    </div>
  );
}

/* ---------- main ---------- */
export function RoiCalculator() {
  // Inputs
  const [E, setE] = useState(300);
  const [C, setC] = useState(700000);
  const [A, setA] = useState(15);
  const [N, setN] = useState(2);
  const [reductionRate, setReductionRate] = useState(0.2);

  // Editable assumptions
  const [replacementMultiplier, setReplacementMultiplier] = useState(0.75);
  const [touchpointsPerYear, setTouchpointsPerYear] = useState(6);
  const [hoursPerTouchpoint, setHoursPerTouchpoint] = useState(1);
  const [managerHourlyCost, setManagerHourlyCost] = useState(600);
  const [taraMonthly, setTaraMonthly] = useState(99);

  const [showAssumptions, setShowAssumptions] = useState(false);
  const [exported, setExported] = useState(false);

  const r = useMemo(() => {
    const annualExits = Math.round(E * (A / 100));
    const replacementPerExit = C * replacementMultiplier;
    const biasLossReduced = N * replacementPerExit * reductionRate;
    const managerTimeRecovered = E * touchpointsPerYear * hoursPerTouchpoint * managerHourlyCost;
    const recoverableValue = managerTimeRecovered + biasLossReduced;
    const taraAnnualCost = E * taraMonthly * 12;
    const roiMultipleRaw = recoverableValue / taraAnnualCost;
    const paybackRaw = taraAnnualCost / (recoverableValue / 12);
    const biasExposure = N * replacementPerExit;

    // Honesty rules: ROI rounds DOWN to 1 decimal, payback rounds UP to 0.5 month.
    const roiMultiple = Math.floor(roiMultipleRaw * 10) / 10;
    const paybackMonths = Math.ceil(paybackRaw * 2) / 2;

    return {
      annualExits,
      biasLossReduced,
      managerTimeRecovered,
      recoverableValue,
      taraAnnualCost,
      roiMultiple,
      paybackMonths,
      biasExposure,
    };
  }, [E, C, A, N, reductionRate, replacementMultiplier, touchpointsPerYear, hoursPerTouchpoint, managerHourlyCost, taraMonthly]);

  const pct = Math.round(reductionRate * 100);
  const paybackText =
    r.paybackMonths < 1 ? "under 1 month" : `~${r.paybackMonths} months`;

  async function buildCfoCase() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    const PAGE_W  = 210;
    const MARGIN  = 16;
    const COL     = PAGE_W - MARGIN * 2;
    const LX      = MARGIN + 4;           // label x
    const VX      = PAGE_W - MARGIN - 4;  // value x (right-aligned)
    const ROW_H   = 8;

    // Palette
    const BRAND   = [51, 104, 90]   as [number, number, number];
    const INK     = [16, 24, 22]    as [number, number, number];
    const MUTED   = [100, 116, 105] as [number, number, number];
    const SURFACE = [240, 247, 243] as [number, number, number];
    const WHITE   = [255, 255, 255] as [number, number, number];

    // Currency — use Rs. because Helvetica has no rupee glyph
    const rs = (n: number) =>
      "Rs. " + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));

    // ── HEADER ───────────────────────────────────────────────────
    doc.setFillColor(...BRAND);
    doc.rect(0, 0, PAGE_W, 34, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...WHITE);
    doc.text("TalentSpotify", MARGIN, 13);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("AI Performance Management  |  Bengaluru, India", MARGIN, 20);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("CFO Business Case & ROI Analysis", MARGIN, 29);

    const today = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(today, VX, 29, { align: "right" });

    // ── LAYOUT HELPERS ───────────────────────────────────────────
    let y = 42;

    function gap(mm = 4) { y += mm; }

    function sectionBar(title: string) {
      doc.setFillColor(...BRAND);
      doc.rect(MARGIN, y, COL, 6.5, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(...WHITE);
      doc.text(title, LX, y + 4.5);
      y += 10;
    }

    function dataRow(label: string, value: string, bold = false, tinted = false) {
      if (tinted) {
        doc.setFillColor(...SURFACE);
        doc.rect(MARGIN, y, COL, ROW_H, "F");
      }
      const weight = bold ? "bold" : "normal";
      doc.setFont("helvetica", weight);
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(label, LX, y + 5.5);
      doc.setTextColor(...(bold ? BRAND : INK));
      doc.text(value, VX, y + 5.5, { align: "right" });
      y += ROW_H;
    }

    // ── INPUTS ───────────────────────────────────────────────────
    sectionBar("INPUTS");
    dataRow("Employees",                           String(E),                          false, false);
    dataRow("Average annual CTC",                  rs(C),                              false, true);
    dataRow("Annual attrition",                    `${A}%  (${r.annualExits} exits / yr)`, false, false);
    dataRow("Suspected bias-driven exits",         String(N),                          false, true);
    dataRow("Bias reduction scenario",             `${pct}%  —  ${scenarios.find(s => s.rate === reductionRate)?.label ?? ""}`, false, false);

    gap(6);

    // ── ASSUMPTIONS ──────────────────────────────────────────────
    sectionBar("ASSUMPTIONS");
    dataRow("Replacement cost multiplier",         `${replacementMultiplier}x CTC`,    false, false);
    dataRow("TARA touchpoints / employee / yr",    String(touchpointsPerYear),          false, true);
    dataRow("Manager hours saved / touchpoint",    `${hoursPerTouchpoint} hr`,          false, false);
    dataRow("Loaded manager hourly rate",          rs(managerHourlyCost),               false, true);
    dataRow("TARA Standalone",                     `${rs(taraMonthly)} / emp / mo`,     false, false);

    gap(6);

    // ── KEY RESULTS — 2×2 metric cards ───────────────────────────
    sectionBar("KEY RESULTS");

    const metrics = [
      { label: "Payback period",       value: paybackText,                    note: "to break-even" },
      { label: "Annual ROI",           value: `${r.roiMultiple.toFixed(1)}x`, note: "recoverable / investment" },
      { label: "TARA annual cost",     value: `${rs(r.taraAnnualCost)} / yr`, note: "total platform spend" },
      { label: "Recoverable value",    value: `${rs(r.recoverableValue)} / yr`, note: "manager time + attrition" },
    ];

    const CW = (COL - 5) / 2;
    const CH = 24;
    const startY = y;

    metrics.forEach((m, i) => {
      const mx = MARGIN + (i % 2) * (CW + 5);
      const my = startY + Math.floor(i / 2) * (CH + 4);
      const hero = i === 0;

      doc.setFillColor(...(hero ? BRAND : SURFACE));
      doc.roundedRect(mx, my, CW, CH, 2, 2, "F");

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(...(hero ? ([180, 220, 205] as [number,number,number]) : MUTED));
      doc.text(m.label.toUpperCase(), mx + 5, my + 6);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...(hero ? WHITE : BRAND));
      doc.text(m.value, mx + 5, my + 16);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(6.5);
      doc.setTextColor(...(hero ? ([180, 220, 205] as [number,number,number]) : MUTED));
      doc.text(m.note, mx + 5, my + 21.5);
    });

    y = startY + 2 * (CH + 4) + 6;

    // ── VALUE BREAKDOWN ──────────────────────────────────────────
    sectionBar("RECOVERABLE VALUE BREAKDOWN");
    dataRow("Manager time recovered",              rs(r.managerTimeRecovered),          false, false);
    dataRow("Bias-driven attrition loss reduced",  rs(r.biasLossReduced),               false, true);
    dataRow("Total recoverable value / year",      rs(r.recoverableValue),              true,  false);

    gap(6);

    // ── RISK EXPOSURE ─────────────────────────────────────────────
    sectionBar("CURRENT RISK EXPOSURE");
    dataRow("Annual cost of bias-linked exits",    rs(r.biasExposure),                  true,  false);

    // ── SAVE ─────────────────────────────────────────────────────
    doc.save("TalentSpotify_ROI_Business_Case.pdf");
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* LEFT — inputs */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <h3 className="text-lg font-bold text-slate-900">Your numbers</h3>
        <p className="mt-1 text-sm text-slate-500">Drag the sliders — every result updates live.</p>

        <div className="mt-6 space-y-6">
          <Slider label="Number of employees" value={E} min={50} max={5000} step={10} onChange={setE} display={String(E)} />
          <Slider label="Average annual CTC" value={C} min={300000} max={5000000} step={50000} onChange={setC} display={inr(C)} />
          <Slider label="Annual attrition rate" value={A} min={5} max={40} onChange={setA} display={`${A}%`} />
          <div>
            <Slider
              label="Of your regretted exits last year, how many do you suspect an unfair or biased review contributed to?"
              value={N}
              min={0}
              max={20}
              onChange={setN}
              display={String(N)}
            />
            <p className="mt-2 text-xs text-slate-500">
              That&apos;s {N} of your roughly {r.annualExits} annual exits.
            </p>
          </div>

          {/* Scenario */}
          <div>
            <p className="text-sm font-medium text-slate-700">
              How much of that bias does TARA realistically reduce?
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Bias reduction scenario">
              {scenarios.map((s) => (
                <button
                  key={s.label}
                  role="radio"
                  aria-checked={reductionRate === s.rate}
                  onClick={() => setReductionRate(s.rate)}
                  className={cn(
                    "rounded-lg border px-2 py-2.5 text-center text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                    reductionRate === s.rate
                      ? "border-brand bg-brand text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-brand/50"
                  )}
                >
                  {s.label}
                  <span className="mt-0.5 block text-[11px] font-normal opacity-80">
                    {Math.round(s.rate * 100)}%
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Independent studies put AI-assisted bias reduction around a third.
            </p>
          </div>
        </div>

        {/* Assumptions */}
        <div className="mt-7 rounded-xl border border-slate-200 bg-surface">
          <button
            onClick={() => setShowAssumptions((v) => !v)}
            aria-expanded={showAssumptions}
            className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-semibold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
          >
            View financial assumptions — every number is editable
            <ChevronDown className={cn("h-4 w-4 shrink-0 text-brand transition-transform", showAssumptions && "rotate-180")} aria-hidden="true" />
          </button>
          {showAssumptions && (
            <div className="divide-y divide-slate-200 border-t border-slate-200 px-4">
              <AssumptionRow
                label="Replacement cost multiplier"
                value={replacementMultiplier}
                onChange={setReplacementMultiplier}
                suffix="× CTC"
                source="Benchmarks 0.5–2× annual salary (SHRM/Gallup); we use a conservative 0.75×."
              />
              <AssumptionRow
                label="TARA touchpoints automated / employee / year"
                value={touchpointsPerYear}
                onChange={setTouchpointsPerYear}
                step={1}
                source="OKR setting + quarterly check-ins + review — all run by TARA."
              />
              <AssumptionRow
                label="Manager hours saved per touchpoint"
                value={hoursPerTouchpoint}
                onChange={setHoursPerTouchpoint}
                suffix="hr"
                step={0.5}
                source="TARA runs the conversation and drafts the record."
              />
              <AssumptionRow
                label="Loaded manager cost"
                value={managerHourlyCost}
                onChange={setManagerHourlyCost}
                suffix="/ hour"
                step={50}
              />
              <AssumptionRow
                label="TARA Standalone price"
                value={taraMonthly}
                onChange={setTaraMonthly}
                suffix="/ emp / month"
                step={1}
                source={`Billed annually — ${inr(taraMonthly * 12)} / employee / year.`}
              />
            </div>
          )}
        </div>
      </div>

      {/* RIGHT — results */}
      <div className="flex flex-col gap-4">
        {/* 1. Payback (hero) */}
        <div className="rounded-2xl bg-ink p-7 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Payback period</p>
          <p className="mt-2 text-4xl font-bold md:text-5xl">
            Pays for itself in {paybackText}.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* 2. Investment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Your TARA investment</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{inr(r.taraAnnualCost)}<span className="text-base font-medium text-slate-500"> / year</span></p>
            <p className="mt-1 text-xs text-slate-500">{inr(taraMonthly)} per employee / month, billed annually.</p>
          </div>

          {/* 4. ROI */}
          <div className="rounded-2xl border border-brand/30 bg-brand/5 p-6">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> Return on investment
            </p>
            <p className="mt-2 text-3xl font-bold text-brand-dark">{r.roiMultiple.toFixed(1)}×</p>
            <p className="mt-1 text-xs text-slate-500">recoverable value vs. what TARA costs.</p>
          </div>
        </div>

        {/* 3. Recoverable value with components */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recoverable value / year</p>
          <p className="mt-2 text-3xl font-bold text-fair">{inr(r.recoverableValue)}</p>
          <dl className="mt-4 space-y-2.5 border-t border-slate-100 pt-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-600">Manager time recovered <span className="text-xs text-slate-400">(certain floor)</span></dt>
              <dd className="font-semibold text-slate-900">{inr(r.managerTimeRecovered)}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-600">Bias-driven loss reduced <span className="text-xs text-slate-400">(upside, at {pct}%)</span></dt>
              <dd className="font-semibold text-slate-900">{inr(r.biasLossReduced)}</dd>
            </div>
          </dl>
        </div>

        {/* 5. Insight */}
        <div className="rounded-2xl border border-slate-200 bg-surface p-6">
          <p className="text-sm leading-relaxed text-slate-700">
            TARA runs {touchpointsPerYear} performance conversations per employee a year. The
            manager hours that gives back — plus reducing biased-exit losses by {pct}% —
            recovers <span className="font-semibold text-slate-900">{inr(r.recoverableValue)}</span>,
            about <span className="font-semibold text-slate-900">{r.roiMultiple.toFixed(1)}×</span> what
            TARA costs.
          </p>
        </div>

        {/* 6. At stake (muted) */}
        <p className="flex items-start gap-2 px-1 text-sm text-slate-400">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Your current annual exposure from biased reviews: {inr(r.biasExposure)}.
        </p>

        {/* CTA block */}
        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6">
          <CtaLink href="/#book-demo" variant="primary" size="lg" className="w-full">
            Start a pilot
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CtaLink>
          <p className="mt-2.5 text-center text-xs text-slate-500">
            Try TARA on one team — 50 employees, one 3-month performance period (~₹18,750).
            Keep your current system.
          </p>
          <div id="roi-business-case" className="mt-4 text-center">
            <button
              onClick={buildCfoCase}
              className="text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {exported ? "Downloaded ✓" : "Build CFO Business Case →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
