import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { posts } from '@/app/blog/data';

export const metadata: Metadata = {
  title: 'Many biases. One transparent score. — TalentSpotify Blog',
  description:
    'TARA listens to performance conversations and surfaces where bias may be creeping in — before a rating locks. Here is what it listens for, and how a single signal becomes a score you can audit.',
  alternates: { canonical: '/blog/inside-tara-bias-engine' },
  openGraph: {
    title: 'Many biases. One transparent score.',
    description:
      'TARA listens to performance conversations and surfaces where bias may be creeping in — before a rating locks.',
    type: 'article',
  },
};

/* ── Design tokens (matching site palette) ─────────────────── */
const C = {
  forest: '#205C42',
  forestHover: '#17442F',
  highlight: '#2C6B4D',
  sage: '#6E9C81',
  sageDark: '#4E7E62',
  pill: '#E6F1E9',
  pillText: '#205C42',
  body: '#3C4A43',
  muted: '#566A60',
  amber: '#B26A23',
  amberSoft: '#FBEFC9',
  sev0: '#5E8C70',
  sev1: '#86A98F',
  sev2: '#C9923B',
  sev3: '#C56A3A',
  sev4: '#A23B22',
  ink: '#13241B',
  card: '#FFFFFF',
  hairline: 'rgba(19,36,27,.10)',
};

/* ── Shared primitives ─────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p className='mb-4 text-xs font-bold uppercase tracking-[0.18em]' style={{ color: C.sage }}>
      {children}
    </p>
  );
}

function Pill({ children, amber }: { children: string; amber?: boolean }) {
  return (
    <span
      className='inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold'
      style={
        amber
          ? { background: C.amberSoft, color: C.amber }
          : { background: C.pill, color: C.pillText }
      }
    >
      {children}
    </span>
  );
}

function WeightTag({ label }: { label: string }) {
  const isHigh = label.toLowerCase().includes('high');
  const isProtected = label.toLowerCase().includes('protected');
  return (
    <span
      className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider'
      style={
        isProtected
          ? { borderColor: C.amber, color: C.amber, background: C.amberSoft }
          : isHigh
          ? { borderColor: C.sev3, color: C.sev3, background: '#FEF3EE' }
          : { borderColor: C.hairline, color: C.muted, background: '#F5F8F6' }
      }
    >
      {label}
    </span>
  );
}

/* ── Bias card ─────────────────────────────────────────────── */
interface BiasCardProps {
  num: string;
  name: string;
  family: 'Cognitive' | 'Social' | 'Calibration';
  tags: string[];
  whatItIs: string;
  scenario: string;
  soundsLike: string;
  fairerMove: React.ReactNode;
}

function BiasCard({ num, name, family, tags, whatItIs, scenario, soundsLike, fairerMove }: BiasCardProps) {
  const familyColour =
    family === 'Social'
      ? { border: C.amber, bg: C.amberSoft, text: C.amber }
      : { border: C.sage, bg: C.pill, text: C.forest };

  return (
    <div
      className='overflow-hidden rounded-2xl'
      style={{ background: C.card, border: `1px solid ${C.hairline}`, boxShadow: '0 14px 40px rgba(20,50,35,.05)' }}
      id={`bias-${num}`}
    >
      {/* Card header */}
      <div className='flex flex-wrap items-center gap-3 border-b px-6 py-4' style={{ borderColor: C.hairline }}>
        <span className='text-xs font-mono font-bold' style={{ color: C.sage }}>{num}</span>
        <span className='font-bold text-slate-900'>{name}</span>
        <span
          className='rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider'
          style={{ borderColor: familyColour.border, background: familyColour.bg, color: familyColour.text }}
        >
          {family}
        </span>
        {tags.map(t => <WeightTag key={t} label={t} />)}
      </div>

      <div className='divide-y px-6 py-5 space-y-0' style={{ '--divider': C.hairline } as React.CSSProperties}>
        {/* What it is */}
        <div className='pb-4'>
          <p className='mb-1.5 text-[10px] font-mono font-bold uppercase tracking-widest' style={{ color: C.sage }}>What it is</p>
          <p className='text-sm leading-relaxed' style={{ color: C.body }}>{whatItIs}</p>
        </div>

        {/* Scenario */}
        <div className='py-4'>
          <p className='mb-1.5 text-[10px] font-mono font-bold uppercase tracking-widest' style={{ color: C.sage }}>Scenario</p>
          <div className='rounded-xl p-4 text-sm leading-relaxed' style={{ background: '#EEF5F1', color: C.body }}>
            {scenario}
          </div>
        </div>

        {/* Sounds like */}
        <div className='py-4'>
          <p className='mb-1.5 text-[10px] font-mono font-bold uppercase tracking-widest' style={{ color: C.sage }}>Sounds like</p>
          <blockquote className='rounded-lg border-l-4 py-2 pl-4 font-mono text-sm italic' style={{ borderColor: C.sage, color: C.muted, background: '#F5F9F6' }}>
            &ldquo;{soundsLike}&rdquo;
          </blockquote>
        </div>

        {/* Fairer move */}
        <div className='pt-4'>
          <p className='mb-1.5 text-[10px] font-mono font-bold uppercase tracking-widest' style={{ color: C.forest }}>The fairer move</p>
          <div className='rounded-xl border-l-4 p-4 text-sm leading-relaxed' style={{ borderColor: C.forest, background: '#EEF5F1', color: C.body }}>
            {fairerMove}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Infographic 1 — Family map ────────────────────────────── */
function FamilyMap() {
  const families = [
    {
      name: 'Cognitive',
      count: 8,
      governs: 'How memory, framing, and mental shortcuts distort the rating',
      biases: ['Recency', 'Primacy', 'Halo Effect', 'Horn Effect', 'Anchoring', 'Confirmation', 'Attribution', 'Central Tendency'],
      amber: false,
    },
    {
      name: 'Social',
      count: 4,
      governs: 'How identity, power, and similarity shape who gets the benefit of the doubt',
      biases: ['Gender / Tone', 'Age', 'Similarity / Affinity', 'Hierarchical / Power'],
      amber: true,
    },
    {
      name: 'Calibration',
      count: 2,
      governs: 'How scale usage drifts when managers avoid the extremes',
      biases: ['Leniency', 'Severity'],
      amber: false,
    },
  ];

  return (
    <figure aria-label='Bias family map showing three families: Cognitive (8 biases), Social (4 biases), Calibration (2 biases)' className='not-prose'>
      <div className='grid gap-4 sm:grid-cols-3'>
        {families.map(f => (
          <div
            key={f.name}
            className='flex flex-col rounded-2xl p-5'
            style={{ background: f.amber ? C.amberSoft : C.pill, border: `1px solid ${f.amber ? C.amber + '40' : C.hairline}` }}
          >
            <div className='flex items-baseline gap-2 mb-1'>
              <span className='text-3xl font-black tabular-nums' style={{ color: f.amber ? C.amber : C.forest }}>{f.count}</span>
              <span className='font-bold text-slate-900'>{f.name}</span>
            </div>
            <p className='text-xs leading-relaxed mb-3' style={{ color: C.muted }}>{f.governs}</p>
            <div className='flex flex-wrap gap-1.5 mt-auto'>
              {f.biases.map(b => (
                <span
                  key={b}
                  className='rounded-full px-2.5 py-1 text-[11px] font-medium'
                  style={f.amber ? { background: '#F9E4C8', color: C.amber } : { background: '#D4EBE0', color: C.forest }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <figcaption className='mt-3 text-center text-xs' style={{ color: C.muted }}>
        Three families, {14} biases, one weighted score.
      </figcaption>
    </figure>
  );
}

/* ── Infographic 2 — Detect vs Decide ─────────────────────── */
function DetectVsDecide() {
  return (
    <figure aria-label='Diagram showing separation between AI detection and system scoring' className='not-prose'>
      <div className='flex flex-col items-center gap-3 sm:flex-row sm:gap-0'>
        {/* Left */}
        <div className='w-full flex-1 rounded-2xl p-5' style={{ background: '#EEF5F1', border: `1px solid ${C.hairline}` }}>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest' style={{ color: C.sage }}>The AI detects</p>
          <ul className='space-y-2 text-sm' style={{ color: C.body }}>
            {['Which bias pattern is present', 'The exact quote triggering the signal', 'A plain-language reason', 'How confident it is'].map(i => (
              <li key={i} className='flex items-start gap-2'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full' style={{ background: C.forest }} />
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Arrow */}
        <div className='flex flex-col items-center justify-center px-2 sm:px-4'>
          <div className='hidden sm:block text-2xl' style={{ color: C.sage }}>→</div>
          <div className='block sm:hidden text-2xl' style={{ color: C.sage }}>↓</div>
          <p className='text-[10px] font-mono font-bold uppercase' style={{ color: C.sage }}>never mixes</p>
        </div>

        {/* Right */}
        <div className='w-full flex-1 rounded-2xl p-5' style={{ background: C.ink, border: `1px solid ${C.forest}40` }}>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest' style={{ color: C.sage }}>The system decides</p>
          <ul className='space-y-2 text-sm text-white/80'>
            {['Aggregate the signals', 'Apply fixed severity weights', 'Normalise to 0–100', 'Route to the right action'].map(i => (
              <li key={i} className='flex items-start gap-2'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full' style={{ background: C.sage }} />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className='mt-4 rounded-xl p-4 text-xs text-center leading-relaxed' style={{ background: '#F5F9F6', color: C.muted }}>
        These two never mix. The AI has no access to your settings — so it cannot produce a score, only the evidence behind one.
      </figcaption>
    </figure>
  );
}

/* ── Score principle card (replaces formula + ingredients) ── */
function ScorePrinciple() {
  return (
    <div
      className='rounded-2xl p-6 md:p-8'
      style={{ background: C.ink }}
      role='note'
      aria-label='How TARA produces a score'
    >
      <p className='mb-2 text-xs font-mono font-bold uppercase tracking-widest' style={{ color: C.sage }}>How the score works</p>
      <p className='text-white/80 text-sm leading-relaxed'>
        Every signal TARA detects is evaluated against multiple factors — including how clearly the bias is present in the language, the inherent risk level of that bias type, and whether it appeared more than once in the conversation. These factors are combined into a single number between 0 and 100.
      </p>
      <div className='mt-5 pt-5 border-t' style={{ borderColor: 'rgba(255,255,255,.12)' }}>
        <p className='text-sm font-bold' style={{ color: C.sage }}>Weighted Bias Score — one number, 0 to 100.</p>
        <p className='text-xs text-white/50 mt-1'>The exact calculation is proprietary and not published. What is published: the evidence behind every flag, and the band it lands in.</p>
      </div>
    </div>
  );
}

/* ── Infographic 5 — Band ladder ───────────────────────────── */
function BandLadder() {
  const bands = [
    { label: 'Low', range: '0–30', action: 'Note for context; no action required', colour: C.sev0 },
    { label: 'Awareness', range: '31–55', action: 'Manager nudge sent before rating closes', colour: C.sev1 },
    { label: 'Coaching', range: '56–75', action: 'Structured debrief with manager', colour: C.sev2 },
    { label: 'HR Review', range: '76–90', action: 'HR partner review before rating is finalised', colour: C.sev3 },
    { label: 'Escalate', range: '91+', action: 'Immediate escalation to senior HR or legal', colour: C.sev4 },
  ];
  const examplePct = 43; // lands in Awareness band (31-55 = positions 31-55 of 100)
  const markerLeft = `${examplePct}%`;

  return (
    <figure aria-label='Five-band severity ladder from Low (0-30) to Escalate (91+). Example score of 43 shown in Awareness band.' className='not-prose'>
      {/* Marker label */}
      <div className='relative mb-1' style={{ paddingLeft: `calc(${markerLeft} - 2px)` }}>
        <span className='absolute text-[11px] font-mono font-bold' style={{ color: C.sev2, left: `calc(${markerLeft} - 28px)` }}>
          example ≈ 43
        </span>
      </div>
      {/* Pointer */}
      <div className='relative h-4 mb-0'>
        <div className='absolute w-0 h-0' style={{
          left: `calc(${markerLeft} - 5px)`,
          top: 0,
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: `8px solid ${C.sev2}`,
        }} />
      </div>
      {/* Horizontal bar */}
      <div className='flex h-8 overflow-hidden rounded-full'>
        {bands.map((b, i) => (
          <div
            key={b.label}
            className='flex items-center justify-center'
            style={{ flex: i === 4 ? 1 : i === 3 ? 1.5 : i === 2 ? 2 : i === 1 ? 2.5 : 3, background: b.colour }}
          >
            <span className='text-[10px] font-bold text-white px-1 truncate'>{b.label}</span>
          </div>
        ))}
      </div>
      {/* Range labels */}
      <div className='flex mt-1'>
        {bands.map((b, i) => (
          <div
            key={b.label}
            className='text-center'
            style={{ flex: i === 4 ? 1 : i === 3 ? 1.5 : i === 2 ? 2 : i === 1 ? 2.5 : 3 }}
          >
            <span className='text-[10px] font-mono' style={{ color: C.muted }}>{b.range}</span>
          </div>
        ))}
      </div>
      {/* Action rows */}
      <div className='mt-4 space-y-2'>
        {bands.map(b => (
          <div key={b.label} className='flex items-start gap-3 rounded-xl px-3 py-2.5' style={{ background: b.colour + '14' }}>
            <span className='h-3 w-3 shrink-0 rounded-full mt-0.5' style={{ background: b.colour }} />
            <span className='text-xs font-semibold' style={{ color: b.colour, minWidth: '90px' }}>{b.label} ({b.range})</span>
            <span className='text-xs' style={{ color: C.body }}>{b.action}</span>
          </div>
        ))}
      </div>
      <figcaption className='mt-3 text-xs text-center' style={{ color: C.muted }}>
        The same score can trigger different actions depending on context — see infographic 6.
      </figcaption>
    </figure>
  );
}

/* ── Infographic 6 — Context adjusts the bar ──────────────── */
function ContextAdjustsBand() {
  const cases = [
    {
      label: 'Standard context',
      score: 60,
      outcome: 'Coaching fires',
      outcomeColour: C.sev2,
      description: 'The same score lands in the Coaching band under standard settings.',
    },
    {
      label: 'Protected-category context',
      score: 60,
      outcome: 'Routes to HR Review',
      outcomeColour: C.sev3,
      description: 'With a protected characteristic detected, the same score routes to HR Review instead.',
    },
  ];

  return (
    <figure aria-label='Two cards showing same score of 60 triggering different outcomes based on context' className='not-prose'>
      <div className='grid gap-4 sm:grid-cols-2'>
        {cases.map(c => (
          <div key={c.label} className='rounded-2xl p-5' style={{ background: C.card, border: `1px solid ${C.hairline}` }}>
            <p className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: C.sage }}>{c.label}</p>
            <div className='flex items-baseline gap-2 mb-4'>
              <span className='text-3xl font-black tabular-nums' style={{ color: C.forest }}>60</span>
              <span className='text-xs font-mono' style={{ color: C.muted }}>WBS — same score</span>
            </div>
            <div className='rounded-lg px-3 py-2.5 text-sm font-semibold' style={{ background: c.outcomeColour + '18', color: c.outcomeColour }}>
              → {c.outcome}
            </div>
            <p className='mt-2 text-xs leading-relaxed' style={{ color: C.muted }}>{c.description}</p>
          </div>
        ))}
      </div>
      <figcaption className='mt-3 text-xs text-center' style={{ color: C.muted }}>
        Context changes the action, not the score. The score is always the same given the same evidence.
      </figcaption>
    </figure>
  );
}

/* ── Infographic 7 — Two floors ───────────────────────────── */
function TwoFloors() {
  const floors = [
    {
      label: 'Protected-category floor',
      icon: '🛡️',
      tagline: 'Only escalates, never downgrades',
      body: 'When a bias touching a protected characteristic (gender, age) is detected, the score can only go up from the floor — not be averaged away by lower signals elsewhere.',
      colour: C.sev3,
      bg: '#FEF3EE',
    },
    {
      label: 'Safety lane',
      icon: '🚨',
      tagline: 'Bypasses scoring entirely',
      body: 'Harmful, demeaning, or dismissive language is not scored as bias. It routes straight to a separate human safety review — a number should never decide whether words crossed a line.',
      colour: C.amber,
      bg: C.amberSoft,
    },
  ];

  return (
    <figure aria-label='Two floor mechanisms: protected-category floor and safety lane' className='not-prose'>
      <div className='grid gap-4 sm:grid-cols-2'>
        {floors.map(f => (
          <div key={f.label} className='rounded-2xl p-5' style={{ background: f.bg, border: `1px solid ${f.colour}30` }}>
            <div className='flex items-center gap-2 mb-3'>
              <span className='text-2xl'>{f.icon}</span>
              <div>
                <p className='font-bold text-slate-900 text-sm'>{f.label}</p>
                <p className='text-xs font-semibold' style={{ color: f.colour }}>↑ {f.tagline}</p>
              </div>
            </div>
            <p className='text-sm leading-relaxed' style={{ color: C.body }}>{f.body}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ── Infographic 8 — Worked example ───────────────────────── */
function WorkedExample() {
  return (
    <figure aria-label='Illustrative worked example showing three bias signals combining into a WBS score of approximately 43, then a protected-category floor raising the outcome to HR Review' className='not-prose'>
      <div className='rounded-2xl overflow-hidden' style={{ border: `1px solid ${C.hairline}` }}>
        {/* Header */}
        <div className='px-5 py-3 flex items-center justify-between' style={{ background: '#F5F9F6' }}>
          <p className='text-xs font-bold uppercase tracking-widest' style={{ color: C.sage }}>Illustrative example · numbers simplified to show the logic</p>
        </div>

        <div className='p-5 space-y-4'>
          {/* Step 1 */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold text-sm text-white' style={{ background: C.forest }}>1</div>
              <div className='mt-1 w-0.5 flex-1 min-h-[40px]' style={{ background: C.hairline }} />
            </div>
            <div className='pb-4'>
              <p className='font-semibold text-slate-900 text-sm mb-2'>Three signals surface</p>
              <div className='space-y-1.5'>
                {[
                  { b: 'Recency Bias', c: 'Clearly present · Mid-severity type', colour: C.sev1 },
                  { b: 'Horn Effect', c: 'Clearly present · High-severity type', colour: C.sev2 },
                  { b: 'Gender / Tone', c: 'Strongly present · Protected · Highest-severity type', colour: C.sev3 },
                ].map(s => (
                  <div key={s.b} className='flex items-center gap-2 rounded-lg px-3 py-2 text-xs' style={{ background: s.colour + '14' }}>
                    <span className='h-2 w-2 rounded-full shrink-0' style={{ background: s.colour }} />
                    <span className='font-semibold' style={{ color: s.colour }}>{s.b}</span>
                    <span style={{ color: C.muted }}>— {s.c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold text-sm text-white' style={{ background: C.forest }}>2</div>
              <div className='mt-1 w-0.5 flex-1 min-h-[40px]' style={{ background: C.hairline }} />
            </div>
            <div className='pb-4'>
              <p className='font-semibold text-slate-900 text-sm mb-2'>Score computed</p>
              <div className='inline-flex items-center gap-3 rounded-xl px-4 py-3' style={{ background: C.sev1 + '18', border: `1px solid ${C.sev1}30` }}>
                <span className='text-2xl font-black tabular-nums' style={{ color: C.sev1 }}>≈ 43</span>
                <div>
                  <p className='text-xs font-bold' style={{ color: C.sev1 }}>WBS · Awareness band</p>
                  <p className='text-xs' style={{ color: C.muted }}>Would normally trigger: manager nudge</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 — floor fires */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <div className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold text-sm text-white' style={{ background: C.sev3 }}>3</div>
            </div>
            <div>
              <p className='font-semibold text-slate-900 text-sm mb-2'>Protected-category floor fires</p>
              <div className='rounded-xl p-4 text-sm' style={{ background: C.amberSoft, border: `1px solid ${C.amber}30` }}>
                <p style={{ color: C.amber }}>
                  <span className='font-bold'>↑ Floor override:</span> Gender / Tone detected at high confidence. Score can only escalate from the protected-category floor — Awareness band is overridden.
                </p>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className='rounded-xl p-4' style={{ background: C.sev3 + '12', border: `1px solid ${C.sev3}30` }}>
            <p className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: C.sev3 }}>Outcome</p>
            <p className='font-semibold text-slate-900 text-sm'>Routed to HR Review — not &lsquo;Awareness.&rsquo;</p>
            <p className='text-xs mt-1' style={{ color: C.muted }}>The floor, not the aggregate score, determined the action.</p>
          </div>
        </div>
      </div>
      <figcaption className='mt-3 text-xs text-center' style={{ color: C.muted }}>
        Illustrative example — numbers simplified to show the logic. Confidence values and weights are representative only.
      </figcaption>
    </figure>
  );
}

/* ── Safety lane callout ───────────────────────────────────── */
function SafetyLaneCallout() {
  return (
    <div
      className='rounded-2xl p-6'
      role='note'
      aria-label='Safety lane: harmful language bypasses scoring'
      style={{ background: C.amberSoft, borderLeft: `4px solid ${C.amber}` }}
    >
      <p className='font-bold mb-2' style={{ color: C.amber }}>
        And one thing TARA does not score: harmful language.
      </p>
      <p className='text-sm leading-relaxed' style={{ color: '#6B4C1A' }}>
        Aggressive, demeaning or dismissive wording is not treated as bias and never touches the score. It routes straight to a separate human safety review. A &ldquo;we should just let him go&rdquo; said mid-review is a people-risk event in its own right — whether or not any bias scored high. A number should never decide whether words crossed a line.
      </p>
    </div>
  );
}

/* ── Pull-quote ────────────────────────────────────────────── */
function PullQuote() {
  return (
    <blockquote
      className='relative rounded-2xl p-8 text-center'
      style={{ background: '#EEF5F1', border: `1px solid ${C.hairline}` }}
    >
      <span className='absolute top-4 left-6 text-5xl font-serif leading-none' style={{ color: C.sage + '60' }}>&ldquo;</span>
      <p className='relative text-lg font-semibold leading-relaxed' style={{ color: C.ink }}>
        The goal isn&apos;t bias-free reviews. There&apos;s no such thing. The goal is fairer reviews — where bias gets caught and named before it hardens into a number.
      </p>
      <span className='mt-3 block text-sm font-medium' style={{ color: C.muted }}>— TalentSpotify</span>
    </blockquote>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function TaraBiasEnginePage() {
  const post = posts.find((p) => p.slug === "inside-tara-bias-engine")!;
  return (
    <>
      <ArticleSchema post={post} />
      <Navbar />
      <main>
        {/* ── 1. Hero ── */}
        <section
          className='relative overflow-hidden'
          style={{ background: 'linear-gradient(160deg, #F3F8F4 0%, #EAF2EC 100%)' }}
          aria-labelledby='hero-heading'
        >
          <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
            <div className='hero-grid absolute inset-0 opacity-40' />
            <div className='absolute -right-40 top-0 h-96 w-96 rounded-full blur-[120px]' style={{ background: C.sage + '20' }} />
          </div>

          <div className='container-site relative py-16 md:py-24'>
            <Link href='/blog' className='inline-flex items-center gap-1.5 text-sm font-medium transition-colors mb-6' style={{ color: C.muted }}>
              <ArrowLeft className='h-4 w-4' aria-hidden='true' />
              Back to Insights
            </Link>

            {/* Eyebrow */}
            <div className='flex flex-wrap items-center gap-3 mb-6'>
              <Pill>Inside TARA · the bias engine</Pill>
              <span className='text-sm' style={{ color: C.muted }}>AI &amp; Bias · 16 min read · 22 June 2026</span>
            </div>

            {/* H1 */}
            <h1 id='hero-heading' className='text-4xl font-black tracking-tight leading-[1.05] text-slate-900 sm:text-5xl md:text-6xl max-w-3xl'>
              Many biases.{' '}
              <span style={{ color: C.highlight }}>One transparent score.</span>
            </h1>

            {/* Lede */}
            <p className='mt-6 max-w-2xl text-lg leading-relaxed' style={{ color: C.body }}>
              TARA listens to performance conversations and surfaces where bias may be creeping in — before a rating locks. Here&apos;s what it listens for, and how a single signal becomes a score you can audit.
            </p>

            {/* Stamp chip */}
            <div className='mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold' style={{ borderColor: C.amber + '60', background: C.amberSoft, color: C.amber }}>
              <span aria-hidden='true'>⚠</span>
              This is a signal, not a verdict.
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className='w-full overflow-hidden' style={{ maxHeight: '420px' }}>
          <Image
            src='/blog/tara-bias-engine-hero.png'
            alt='TARA bias engine — signals flowing into a fairness shield'
            width={1270}
            height={640}
            className='w-full object-cover'
            priority
          />
        </div>

        {/* Main content column */}
        <div className='container-site py-14 md:py-20'>
          <div className='mx-auto max-w-3xl space-y-16'>

            {/* ── 2. Why this exists ── */}
            <section aria-labelledby='why-heading'>
              <SectionLabel>Why this exists</SectionLabel>
              <h2 id='why-heading' className='text-3xl font-bold tracking-tight text-slate-900 mb-6'>
                Bias does its quietest damage in the review
              </h2>

              <div className='space-y-5 text-base leading-[1.85]' style={{ color: C.body }}>
                <p>
                  Performance reviews are the moments where months of work collapse into a number. That number shapes pay, promotion, and — over time — whether an employee stays or leaves. It is also, research consistently shows, one of the most bias-saturated moments in a person&apos;s working life — not because managers are malicious, but because the whole process depends on memory, language, and human judgement operating under pressure.
                </p>
                <p>
                  TARA doesn&apos;t try to eliminate that. Bias is not a bug in human cognition — it is architecture. What TARA does is listen to the conversation as it happens, surface patterns that suggest bias may be shaping the narrative, and hand that signal to a human who can decide what to do with it. The goal is always the same: give the person who matters most — the one being reviewed — a fairer chance.
                </p>
              </div>

              <div className='mt-8'>
                <PullQuote />
              </div>
            </section>

            {/* ── 3. The taxonomy ── */}
            <section aria-labelledby='taxonomy-heading'>
              <h2 id='taxonomy-heading' className='text-3xl font-bold tracking-tight text-slate-900 mb-3'>
                What TARA listens for
              </h2>
              <p className='text-base leading-relaxed mb-8' style={{ color: C.muted }}>
                Biases are grouped into three families by the type of distortion they introduce.
              </p>

              <FamilyMap />

              {/* Family label — Cognitive */}
              <div className='mt-14 mb-6 flex items-center gap-4'>
                <div className='h-px flex-1' style={{ background: C.hairline }} />
                <span className='text-sm font-bold uppercase tracking-widest px-4' style={{ color: C.forest }}>Cognitive — 8 biases</span>
                <div className='h-px flex-1' style={{ background: C.hairline }} />
              </div>

              <div className='space-y-6'>
                <BiasCard
                  num='01'
                  name='Recency Bias'
                  family='Cognitive'
                  tags={['High weight']}
                  whatItIs='The whole review period collapses into its final few weeks. Whatever happened most recently feels the most true — so a strong finish papers over a weak stretch, or one late stumble erases ten strong months.'
                  scenario='Priya shipped three major releases between April and December, then slipped on a December deadline while covering for a sick teammate. In the January review, her manager spends most of the conversation on that one slip. The year&apos;s body of work barely comes up.'
                  soundsLike="She's been a bit shaky lately, honestly."
                  fairerMove={<>Anchor the conversation to evidence spread across the full period, not the last sprint. <strong>TARA flags when the language clusters around recent weeks only.</strong></>}
                />

                <BiasCard
                  num='02'
                  name='Primacy Bias'
                  family='Cognitive'
                  tags={['Medium weight']}
                  whatItIs='The opposite anchor. A first impression — good or bad — sets a frame that later evidence struggles to shift. The opening read quietly becomes the lens for everything after it.'
                  scenario="Arjun fumbled his first month onboarding into a new team. Two quarters later he's one of its most reliable people — but his manager still describes him as 'someone we had to hand-hold early on,' and the rating reflects the rough start more than the steady climb."
                  soundsLike="He took a while to find his feet — that's kind of who he is."
                  fairerMove={<>Separate where they started from where they are now. <strong>Growth across the period is itself a signal worth rating.</strong></>}
                />

                <BiasCard
                  num='03'
                  name='Halo Effect'
                  family='Cognitive'
                  tags={['Medium weight']}
                  whatItIs='One genuine strength spills over into unrelated areas. Because someone is excellent at one visible thing, they get the benefit of the doubt everywhere — without separate evidence.'
                  scenario="Neha is a superb presenter, so leadership assumes her project planning and stakeholder follow-through are just as strong. They're average. Because the polished demos are what everyone sees, the gaps never get named — and never get coached."
                  soundsLike="She's so impressive in the room, she must be on top of everything."
                  fairerMove={<>Rate each competency on its own evidence. <strong>A strength in one area is not proof of strength in another.</strong></>}
                />

                <BiasCard
                  num='04'
                  name='Horn Effect'
                  family='Cognitive'
                  tags={['High weight']}
                  whatItIs='The mirror of the halo. One weakness darkens the entire evaluation, eclipsing the real strengths the person actually has.'
                  scenario="Rohan missed a high-visibility deadline early in the cycle. For the rest of the review, his manager reads even his strong collaboration and mentoring through the lens of 'unreliable,' and marks him down across the board."
                  soundsLike="After that miss, I just can't fully trust his output."
                  fairerMove={<>Contain the weakness to where it actually applies. <strong>A real gap in one area shouldn&apos;t quietly lower unrelated scores.</strong></>}
                />

                <BiasCard
                  num='05'
                  name='Anchoring Bias'
                  family='Cognitive'
                  tags={['Medium weight']}
                  whatItIs="A number or label from before — last cycle's rating, a first guess — becomes the gravitational centre. The review nudges slightly around the anchor instead of starting fresh from this period's evidence."
                  scenario="Last year Sara was a 'meets expectations.' This year she led a turnaround that beat every target, but the conversation keeps circling back to 'she's solid, a 3.' The new evidence inches the old number up a little instead of replacing it."
                  soundsLike="She's always been around a 3, so… maybe a 3-plus?"
                  fairerMove={<>Build this cycle&apos;s rating from this cycle&apos;s evidence first, then check it against history. <strong>Not the other way round.</strong></>}
                />

                <BiasCard
                  num='06'
                  name='Confirmation Bias'
                  family='Cognitive'
                  tags={['Medium weight']}
                  whatItIs="The conclusion comes first; the evidence-gathering then quietly selects for examples that fit it and skips the ones that don't."
                  scenario="A manager has already decided Karan 'isn't leadership material.' In the review, they recall the two times he stayed quiet in a meeting — and never mention the project he led end-to-end last quarter. The story is built to confirm what they already believed."
                  soundsLike="Every example I can think of points the same way."
                  fairerMove={<>Actively go looking for the counter-evidence. <strong>If you can&apos;t find a single example that challenges your read, that&apos;s the warning sign.</strong></>}
                />

                <BiasCard
                  num='07'
                  name='Attribution Bias'
                  family='Cognitive'
                  tags={['Medium weight']}
                  whatItIs="Outcomes get pinned on character instead of circumstance. A miss becomes 'they're not driven' rather than 'the goalposts moved three times' — and the situation that actually shaped the result disappears."
                  scenario="Meera's project slipped because requirements changed twice and a key dependency landed late. Her manager records it as 'struggles with ownership.' The context that caused the delay never makes it into the review."
                  soundsLike="It's a motivation thing with him, I think."
                  fairerMove={<>Ask what the situation demanded before judging the person. <strong>Separate what happened to them from what they chose.</strong></>}
                />

                <BiasCard
                  num='08'
                  name='Central Tendency Bias'
                  family='Cognitive'
                  tags={['Medium weight']}
                  whatItIs='Everyone gets rated into the safe middle. Avoiding the top and the bottom dodges hard conversations — and flattens the real differences between people.'
                  scenario="A manager rates all eight reports between 3.0 and 3.4 to 'keep things fair.' The standout performer and the person genuinely struggling end up looking almost identical on paper — and neither gets what they need."
                  soundsLike="I keep everyone around the middle — it's cleaner."
                  fairerMove={<>Let the evidence push ratings to the edges when it earns them. <strong>Compression isn&apos;t fairness; it&apos;s avoidance.</strong></>}
                />
              </div>

              {/* Social family */}
              <div className='mt-14 mb-6 flex items-center gap-4'>
                <div className='h-px flex-1' style={{ background: C.hairline }} />
                <span className='text-sm font-bold uppercase tracking-widest px-4' style={{ color: C.amber }}>Social — 4 biases</span>
                <div className='h-px flex-1' style={{ background: C.hairline }} />
              </div>

              <div className='space-y-6'>
                <BiasCard
                  num='09'
                  name='Gender / Tone Bias'
                  family='Social'
                  tags={['Protected', 'High-risk']}
                  whatItIs="Assumptions tied to gender shape how the same behaviour is read — praised in one person, penalised in another. Assertive becomes 'aggressive'; warm becomes 'soft.'"
                  scenario="Ananya and a male peer both push back hard in planning meetings. He's described as 'decisive and direct'; she's described as 'abrasive and hard to work with.' The behaviour is identical — only the read differs."
                  soundsLike="She comes across too strong with the team."
                  fairerMove={<>Describe the behaviour and its impact, not the personality — and ask whether the same words would be used for someone else doing the same thing. <strong>A protected characteristic: highest weight, with a hard escalation floor.</strong></>}
                />

                <BiasCard
                  num='10'
                  name='Age Bias'
                  family='Social'
                  tags={['Protected']}
                  whatItIs="Assumptions tied to age, cutting both ways — younger people seen as not-ready-yet, older people as set-in-their-ways. Capability gets read off a birth year instead of the work."
                  scenario="Vikram, 24, delivers a clean client project, but his manager hesitates to staff him on the next one because 'clients won't take him seriously.' A 52-year-old colleague is passed over for a new-tools initiative because 'he won't want to relearn all that.'"
                  soundsLike="He's only 24 — I can't put him in front of the client."
                  fairerMove={<>Point to a specific, recent piece of evidence about this person&apos;s readiness. <strong>Age is not evidence — protected, highest weight, escalation floor.</strong></>}
                />

                <BiasCard
                  num='11'
                  name='Similarity / Affinity Bias'
                  family='Social'
                  tags={['High-risk']}
                  whatItIs="We rate people who remind us of ourselves more generously — same school, same background, same communication style. Comfort gets mistaken for competence."
                  scenario="A manager and one report share an alma mater and an easy rapport. In calibration, that report consistently lands half a point above peers doing comparable work — not because of output, but because the working relationship feels effortless."
                  soundsLike="He just gets it — we think the same way."
                  fairerMove={<>Check whether your highest ratings cluster around the people most like you. <strong>Ease of working together is not a performance dimension.</strong></>}
                />

                <BiasCard
                  num='12'
                  name='Hierarchical / Power Bias'
                  family='Social'
                  tags={['High weight']}
                  whatItIs="Power gaps distort the conversation. Rank substitutes for evidence, or a senior voice flattens a junior one — so the review stops being a two-way exchange."
                  scenario="In a skip-level review, a senior leader's read of an employee goes unchallenged even though the direct manager has more day-to-day evidence to the contrary. Nobody pushes back, and the senior opinion quietly becomes the rating."
                  soundsLike="Let's not overthink this — I've decided how it went."
                  fairerMove={<>Make sure the person closest to the work gets heard. <strong>Seniority should bring more evidence, not just more weight.</strong></>}
                />
              </div>

              {/* Calibration family */}
              <div className='mt-14 mb-6 flex items-center gap-4'>
                <div className='h-px flex-1' style={{ background: C.hairline }} />
                <span className='text-sm font-bold uppercase tracking-widest px-4' style={{ color: C.forest }}>Calibration — 2 biases</span>
                <div className='h-px flex-1' style={{ background: C.hairline }} />
              </div>

              <div className='space-y-6'>
                <BiasCard
                  num='13'
                  name='Leniency Bias'
                  family='Calibration'
                  tags={['Medium weight']}
                  whatItIs="Ratings drift upward to avoid friction. It feels kind, but it quietly denies people the honest signal they need to grow — and erodes the meaning of the scale for everyone else."
                  scenario="A manager who dreads difficult conversations marks a coasting team member a 4. Hearing nothing's wrong, the employee changes nothing — and is blindsided a year later when the gap finally can't be ignored."
                  soundsLike="I'll mark it a 4 — it's easier than getting into it."
                  fairerMove={<>Treat an honest, specific 3 as a gift, not a punishment. <strong>Inflated ratings are a debt that comes due later.</strong></>}
                />

                <BiasCard
                  num='14'
                  name='Severity Bias'
                  family='Calibration'
                  tags={['Medium weight']}
                  whatItIs="The mirror image — a bar set so high almost nobody clears it. Reads as rigour; lands as discouragement, and makes genuinely strong work look mediocre."
                  scenario="A manager who 'doesn't give 5s on principle' rates an exceptional cycle a 3. The employee, having beaten every goal, walks away deflated — and starts quietly looking elsewhere."
                  soundsLike="Nobody on my team gets a 5 — that's just my standard."
                  fairerMove={<>Calibrate to the evidence and the shared scale, not a personal ceiling. <strong>If no one can earn the top, the top isn&apos;t real.</strong></>}
                />
              </div>

              {/* Safety lane */}
              <div className='mt-10'>
                <SafetyLaneCallout />
              </div>
            </section>

            {/* ── 5. How the score works ── */}
            <section aria-labelledby='score-heading'>
              <h2 id='score-heading' className='text-3xl font-bold tracking-tight text-slate-900 mb-3'>
                From signal to score, transparently
              </h2>
              <p className='text-base leading-relaxed mb-10' style={{ color: C.muted }}>
                Every bias TARA detects produces a signal. Signals combine into one auditable number. Here is how.
              </p>

              {/* Infographic 2 */}
              <div className='mb-4'>
                <p className='text-xs font-mono font-bold uppercase tracking-widest mb-3' style={{ color: C.sage }}>Detection and scoring stay separate</p>
                <DetectVsDecide />
              </div>

              {/* Score principle */}
              <div className='mt-10'>
                <ScorePrinciple />
              </div>

              <div className='mt-10 space-y-5 text-base leading-[1.85]' style={{ color: C.body }}>
                <p>
                  The result is a single number from 0 to 100. That number maps to one of five action bands — each with a defined, automatic response.
                </p>
              </div>

              {/* Infographic 5 */}
              <div className='mt-8'>
                <BandLadder />
              </div>

              <div className='mt-10 space-y-5 text-base leading-[1.85]' style={{ color: C.body }}>
                <p>
                  But the score is only half the story. Context determines where the band threshold sits. The same score can land in different bands depending on whether a protected characteristic was involved — because the stakes are different, not because the evidence changed.
                </p>
              </div>

              {/* Infographic 6 */}
              <div className='mt-8'>
                <ContextAdjustsBand />
              </div>

              <div className='mt-10 space-y-5 text-base leading-[1.85]' style={{ color: C.body }}>
                <p>
                  Two hardcoded floors ensure that certain signals can never be underweighted, regardless of how the rest of the conversation scored.
                </p>
              </div>

              {/* Infographic 7 */}
              <div className='mt-8'>
                <TwoFloors />
              </div>

              <div className='mt-10 space-y-5 text-base leading-[1.85]' style={{ color: C.body }}>
                <p>
                  Putting it all together: here is how a real review conversation — with three bias signals and a floor override — resolves into an outcome.
                </p>
              </div>

              {/* Infographic 8 */}
              <div className='mt-8'>
                <WorkedExample />
              </div>
            </section>

            {/* ── 6. The guardrails ── */}
            <section
              aria-labelledby='guardrails-heading'
              className='rounded-2xl px-8 py-10'
              style={{ background: C.ink }}
            >
              <h2 id='guardrails-heading' className='text-2xl font-bold tracking-tight text-white mb-6'>
                Built to be questioned
              </h2>
              <p className='text-sm leading-relaxed mb-8 text-white/65'>
                The score is only trustworthy if the system behind it is. These five rails are not features — they are the conditions under which TARA is allowed to operate.
              </p>
              <ol className='space-y-6'>
                {[
                  {
                    title: 'A signal, never a verdict',
                    body: 'Every output carries it in plain words. TARA points to evidence; it doesn\'t pass judgement on a person.',
                  },
                  {
                    title: 'A human decides, always',
                    body: 'Nothing TARA produces touches an employee record on its own. A person reviews every flag before any action follows.',
                  },
                  {
                    title: 'Protected categories are floored, on by default',
                    body: 'Gender, age and other protected characteristics can\'t be scored away. The escalation floor ships switched on.',
                  },
                  {
                    title: 'Every score is reproducible',
                    body: 'Input → settings → score → action is fully logged and can be replayed on demand. The same evidence always yields the same result.',
                  },
                  {
                    title: 'India-first by design',
                    body: "Built around the principles of India's Digital Personal Data Protection (DPDP) Act, with consent and auditability treated as features, not afterthoughts.",
                  },
                ].map((r, i) => (
                  <li key={r.title} className='flex gap-5'>
                    <span
                      className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white'
                      style={{ background: C.forest }}
                      aria-hidden='true'
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className='font-bold text-white'>{r.title}</p>
                      <p className='mt-1 text-sm leading-relaxed text-white/65'>{r.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </div>

        {/* ── 7. Close / CTA ── */}
        <div style={{ background: C.ink }} className='text-white'>
          <div className='container-site py-16 md:py-20 text-center'>
            <h2 className='text-2xl font-bold tracking-tight md:text-3xl max-w-xl mx-auto'>
              Fairer reviews start with hearing the bias out loud
            </h2>
            <p className='mt-4 text-white/70 max-w-lg mx-auto leading-relaxed'>
              See TARA in a live conversation — real signals, real language, one auditable score.
            </p>
            <a
              href='/#book-demo'
              className='mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
              style={{ background: '#FFFFFF', color: C.ink }}
            >
              See TARA in a live conversation <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </a>
            <p className='mt-6 text-xs max-w-xl mx-auto leading-relaxed' style={{ color: 'rgba(255,255,255,.40)' }}>
              TARA surfaces bias signals to support human judgement. It reduces bias signals; it does not eliminate bias. This is a signal, not a verdict.
            </p>
          </div>
        </div>

        {/* Related posts back-link */}
        <div className='border-t' style={{ borderColor: C.hairline }}>
          <div className='container-site py-8'>
            <div className='mx-auto max-w-3xl'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-sm font-semibold transition'
                style={{ color: C.forest }}
              >
                <ArrowLeft className='h-4 w-4' aria-hidden='true' />
                All Insights
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
