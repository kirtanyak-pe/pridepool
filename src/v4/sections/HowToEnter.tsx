import { useEffect, useRef, useState } from 'react';
import JoinButton from '../components/JoinButton';
import CandleBackdrop from '../components/CandleBackdrop';
import { onLanded } from '../components/landed';
import { ANISH, JOIN_LABEL, LAPTOPS, POOL } from '../content';

/**
 * V4 · How to enter — replaces "The Pool" and "The Bonus".
 * The story: Anish finished World #2 → to celebrate, a ₹1 Crore prize pool → join it, trade, win
 * brokerage credits or one of 20 laptops. Told as a stepper: 01 Join → 02 Trade → 03 Win.
 * - Once the section lands, the steps play on their own (the rail fills, then moves to the next step).
 * - Tapping a step jumps to it and stops the auto-play.
 * id="enter": the hero's ₹1 Cr and 20 Laptops cards and the navbar link land here.
 *
 * TODO (product): the step copy below is a PLACEHOLDER until the product team shares the real steps.
 * TODO (business): final heading. TODO (legal): allocation and winner rules.
 */
const HEADING = 'How to enter & grab the prize';
const STEP_MS = 5000; // how long each step stays before the stepper moves on

type Step = { n: string; tag: string; title: string; body: string; points: string[] };

const STEPS: Step[] = [
  {
    n: '01',
    tag: 'Join',
    title: `Join the ${POOL.amount} pool`,
    body: `Tap “${JOIN_LABEL}” and sign up on Lemonn. It takes a couple of minutes, and your entry is saved straight away.`,
    points: ['Tap the Join button on this page', 'Sign up or log in on the Lemonn app', 'Existing Lemonn users are already in'],
  },
  {
    n: '02',
    tag: 'Trade',
    title: 'Trade while the pool is live',
    body: 'Trade the way you already do. Every trade you place during the campaign counts towards your entry.',
    points: ['Trade on Lemonn during the campaign', 'Brokerage credits from the pool go towards your trades', 'See where you stand on the leaderboard'],
  },
  {
    n: '03',
    tag: 'Win',
    title: 'Win your share',
    body: `When the campaign ends, ${POOL.amount} is shared out as brokerage credits, and ${LAPTOPS.count} laptops go to participants.`,
    points: [`Your share of ${POOL.amount} in brokerage credits`, `${LAPTOPS.count} laptops up for grabs`, 'Winners are announced on Lemonn'],
  },
];

/* ───────── One small visual per step ───────── */

function JoinVisual() {
  // a phone screen showing the result of joining: you're in
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-full max-h-[13rem] w-[7.5rem] flex-col items-center rounded-[1.25rem] border-2 border-white/15 bg-bg/80 px-3 pb-4 pt-3 lg:w-[9.5rem]">
        <span className="h-1 w-8 rounded-full bg-white/15" />
        <img src="lemonn-white.svg" alt="" width="193" height="52" className="mt-3 h-3.5 w-auto opacity-80 lg:h-4" />
        <span className="story-pop mt-auto flex size-10 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-[var(--accent-ink)] shadow-[0_0_1.5rem_rgb(var(--accent-glow-rgb)/0.5)] lg:size-12" style={{ animationDelay: '0.25s' }}>
          ✓
        </span>
        <span className="mt-2 text-center text-[0.75rem] font-extrabold leading-tight text-fg lg:text-[0.875rem]">You’re in the pool</span>
        <span className="mt-0.5 text-center font-mono text-[0.5625rem] font-bold tracking-[0.12em] text-accent lg:text-[0.625rem]">{POOL.amount.toUpperCase()} PRIZE POOL</span>
        <span className="mt-auto" />
      </div>
    </div>
  );
}

function TradeVisual() {
  return <CandleBackdrop className="h-full w-full text-fg" />;
}

function WinVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-3 lg:gap-5">
      <div className="key-cap flex w-[44%] flex-col items-center justify-center rounded-2xl px-2 py-4 text-center">
        <span className="text-[1.25rem] font-extrabold uppercase leading-none tracking-[-0.01em] text-fg lg:text-[1.75rem]">{POOL.short}</span>
        <span className="mt-1.5 text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-fg-subtle lg:text-[0.75rem]">{POOL.label}</span>
      </div>
      <div className="relative w-[44%]">
        <img src="laptop-hd.webp" alt="" width="2800" height="2858" loading="lazy" decoding="async" className="h-auto w-full drop-shadow-[0_1rem_1.5rem_rgba(0,0,0,0.6)]" />
        <span className="absolute -right-1 -top-1 rounded-full bg-gold px-2 py-0.5 text-[0.75rem] font-extrabold text-bg lg:text-sm">×{LAPTOPS.count}</span>
      </div>
    </div>
  );
}

const VISUALS = [JoinVisual, TradeVisual, WinVisual];

export default function HowToEnter() {
  const ref = useRef<HTMLElement>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [active, setActive] = useState(0);
  const [landed, setLanded] = useState(false);
  const [auto, setAuto] = useState(!reduced); // stops for good once someone picks a step

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return onLanded(el, () => setLanded(true));
  }, []);

  // Auto-play: move on every STEP_MS (loops back to step 1 after the last one)
  useEffect(() => {
    if (!landed || !auto) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % STEPS.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [landed, auto, active]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const step = STEPS[active];
  const Visual = VISUALS[active];

  return (
    <section ref={ref} id="enter" aria-labelledby="enter-heading" className="fold snap-start arena-container relative py-10 lg:py-12">
      <div data-reveal="true" className="relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
          How to enter
        </p>
        <h2
          id="enter-heading"
          className="mx-auto mt-4 max-w-[20ch] text-balance text-[clamp(1.875rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-fg [text-shadow:0_0_50px_rgb(var(--glow)/0.45)]"
        >
          {HEADING}
        </h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-pretty text-[0.9375rem] font-medium leading-relaxed text-fg-muted lg:text-lg">
          To celebrate {ANISH.name.split(' ')[0]}’s World {ANISH.rank} finish: join the pool, trade, and win your share of {POOL.amount} or one of {LAPTOPS.count} laptops.
        </p>
      </div>

      <div data-reveal="near" className="relative mx-auto mt-8 w-full max-w-4xl lg:mt-10" style={{ '--reveal-delay': '0.1s' }}>
        {/* Stepper rail: three steps, the active one fills while it plays */}
        <div role="tablist" aria-label="Steps to enter" className="grid grid-cols-3 gap-2 lg:gap-4">
          {STEPS.map((s, i) => {
            const done = i < active;
            const isActive = i === active;
            return (
              <button
                key={s.n}
                type="button"
                role="tab"
                id={`enter-tab-${i}`}
                aria-selected={isActive}
                aria-controls="enter-panel"
                onClick={() => pick(i)}
                className="group flex min-h-12 flex-col gap-2.5 text-left"
              >
                {/* progress bar */}
                <span aria-hidden="true" className="relative block h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <span
                    key={isActive ? `${active}-${auto && landed}` : 'idle'}
                    className={`absolute inset-y-0 left-0 rounded-full bg-accent ${isActive && auto && landed ? 'step-fill' : ''}`}
                    style={{
                      width: done || (isActive && !(auto && landed)) ? '100%' : isActive ? undefined : '0%',
                      animationDuration: `${STEP_MS}ms`,
                    }}
                  />
                </span>
                <span className="flex items-center gap-2 lg:gap-3">
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-lg font-mono text-[0.75rem] font-extrabold transition-colors duration-300 lg:size-9 lg:text-[0.875rem] ${isActive ? 'key-cap-sm text-accent' : done ? 'bg-accent/15 text-accent' : 'bg-white/[0.06] text-fg-subtle group-hover:text-fg-muted'}`}
                  >
                    {done ? '✓' : s.n}
                  </span>
                  <span className={`font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 lg:text-[0.8125rem] ${isActive ? 'text-fg' : 'text-fg-subtle group-hover:text-fg-muted'}`}>
                    {s.tag}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* The active step, in detail */}
        <div id="enter-panel" role="tabpanel" aria-labelledby={`enter-tab-${active}`} className="neu-raised mt-5 overflow-hidden rounded-2xl lg:mt-6">
          <div key={active} className="step-in grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="p-5 lg:p-8">
              <p className="font-mono text-[0.625rem] font-bold tracking-[0.16em] text-success lg:text-[0.6875rem]">
                ▲ STEP {step.n} OF 0{STEPS.length}
              </p>
              <h3 className="mt-1.5 text-[1.375rem] font-extrabold leading-tight tracking-[-0.02em] text-fg lg:text-[1.75rem]">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted lg:text-base">{step.body}</p>
              <ul className="mt-4 space-y-2">
                {step.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.875rem] font-semibold text-fg lg:text-[0.9375rem]">
                    <span aria-hidden="true" className="mt-[0.4em] size-1.5 shrink-0 rotate-45 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div aria-hidden="true" className="relative h-44 border-t border-white/[0.07] bg-white/[0.02] p-4 lg:h-auto lg:min-h-[15rem] lg:border-l lg:border-t-0 lg:p-6">
              <Visual />
            </div>
          </div>
        </div>
      </div>

      <div data-reveal="near" className="mt-6 text-center" style={{ '--reveal-delay': '0.2s' }}>
        <JoinButton location="steps" />
        <p className="mx-auto mt-3 max-w-[46ch] text-xs text-fg-subtle">
          Steps are indicative. Allocation, eligibility and how winners are picked will be in the final campaign terms.
        </p>
      </div>
    </section>
  );
}
