import Odometer from '../components/Odometer';
import { POOL } from '../content';

/**
 * V3 Round 2 · The Pool — what ₹1 Crore in brokerage credits means, as a 3-step trade flow.
 * Keeps id="basis" so existing links to #basis still land here.
 * TODO (business/legal): confirm step copy and allocation rules before launch.
 */
const STEPS = [
  { n: '01', tag: 'JOIN', title: 'Join the pool', body: 'One tap on “Join the ₹1 Crore Pool”. No form, no OTP on this page.' },
  { n: '02', tag: 'TRADE', title: 'Trade on Lemonn', body: 'Trade the way you already do. Existing Lemonn users are in automatically.' },
  { n: '03', tag: 'SAVE', title: 'Credits on brokerage', body: 'Brokerage credits from the pool go towards your trades.' },
];

const STATS = [
  { k: 'POOL', v: '₹1,00,00,000' },
  { k: 'TYPE', v: 'Brokerage credits' },
  { k: 'BONUS', v: '20 laptops' },
  { k: 'PARTNER', v: 'Booming Bulls' },
];

export default function Pool() {
  return (
    <section id="basis" aria-labelledby="pool-heading" className="fold snap-start arena-container relative py-10 lg:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] max-w-full -translate-x-1/2 opacity-60 blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--color-violet-deep), transparent)' }}
      />

      <div data-reveal="true" className="relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
          Round 2 · The Pool
        </p>
        <h2 id="pool-heading" className="mx-auto mt-4 max-w-[20ch] text-balance text-[clamp(1.875rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-fg [text-shadow:0_0_50px_rgb(var(--glow)/0.45)]">
          {POOL.amount} in brokerage credits
        </h2>
        <p className="mx-auto mt-3 max-w-[40ch] text-pretty text-[0.9375rem] font-medium leading-relaxed text-fg-muted lg:text-lg">
          A pool for India’s traders, celebrating Anish’s World #2 finish. Here’s how it works.
        </p>
      </div>

      {/* Terminal-style stat strip */}
      <div data-reveal="near" className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:mt-12">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.07] lg:grid-cols-4 lg:divide-y-0">
          {STATS.map((s) => (
            <div key={s.k} className="px-4 py-3.5 lg:px-6 lg:py-5">
              <p className="font-mono text-[0.625rem] font-bold tracking-[0.12em] text-fg-subtle lg:text-[0.75rem]">
                {s.k} <span className="text-success">▲</span>
              </p>
              <p className="mt-1 font-mono text-[0.875rem] font-bold leading-tight text-fg lg:text-[1.25rem]">
                {s.k === 'POOL' ? <Odometer text={s.v} label={POOL.amount} /> : s.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3-step flow */}
      <ol className="relative mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-3 lg:gap-5">
        {STEPS.map((step, i) => (
          <li key={step.n} data-reveal="near" style={{ '--reveal-delay': `${0.08 * i}s` }} className="neu-raised relative flex gap-4 rounded-2xl p-5 lg:flex-col lg:gap-5 lg:p-7">
            <span className="key-cap-sm flex size-12 shrink-0 items-center justify-center rounded-xl font-mono text-base font-extrabold text-accent lg:size-14 lg:text-lg">
              {step.n}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[0.625rem] font-bold tracking-[0.16em] text-success">▲ {step.tag}</p>
              <h3 className="mt-1 text-lg font-extrabold tracking-[-0.02em] text-fg lg:text-xl">{step.title}</h3>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-fg-muted lg:text-[0.9375rem]">{step.body}</p>
            </div>
            {i < STEPS.length - 1 && (
              <span aria-hidden="true" className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-fg-subtle lg:block">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-4 max-w-5xl text-center text-xs text-fg-subtle">Allocation and eligibility rules will be in the final campaign terms.</p>
    </section>
  );
}
