import { LAPTOPS, POOL } from '../content';

/**
 * V3 Round 3 · The Bonus — 20 laptops as a loot drop of 20 slots.
 * Winner rules aren't final yet, so they show as a locked "unlocks soon" state
 * instead of three "To be confirmed" boxes.
 * Keeps id="giveaway" so existing links still land here.
 */
function LaptopIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="10.5" rx="1.5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 18.5h20l-1.5 1.5h-17z" fill="currentColor" />
    </svg>
  );
}

export default function Bonus() {
  return (
    <section id="giveaway" aria-labelledby="bonus-heading" className="snap-start arena-container relative pb-20 pt-4 lg:pb-28 lg:pt-8">
      <div data-reveal="true" className="relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
          Round 3 · The Bonus
        </p>
        <h2 id="bonus-heading" className="mx-auto mt-4 text-[clamp(1.875rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-fg [text-shadow:0_0_50px_rgb(var(--glow)/0.45)]">
          + <span className="text-gold">{LAPTOPS.count}</span> laptops up for grabs
        </h2>
        <p className="mx-auto mt-3 max-w-[40ch] text-[0.9375rem] font-medium leading-relaxed text-fg-muted lg:text-lg">
          On top of the {POOL.amount} brokerage credits pool, {LAPTOPS.count} laptops go to participants.
        </p>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-14">
        {/* The prize */}
        <div data-reveal="true" className="relative mx-auto w-full max-w-[22rem] lg:max-w-[28rem]">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(255,201,120,0.38), rgba(255,201,120,0.08) 60%, transparent)' }} />
          <img src="laptop-hd.webp" alt="A laptop showing a market chart" width="2800" height="2858" loading="lazy" decoding="async" className="laptop-float h-auto w-full select-none brightness-110 drop-shadow-[0_2rem_2.5rem_rgba(0,0,0,0.7)]" />
          <span className="absolute right-2 top-4 rounded-full bg-gold px-3 py-1 text-base font-extrabold text-bg shadow-[0_0.25rem_1rem_rgba(0,0,0,0.5)] lg:text-lg">×{LAPTOPS.count}</span>
        </div>

        <div className="mx-auto w-full max-w-[30rem] lg:mx-0">
          {/* Loot drop: one slot per laptop */}
          <div data-reveal="near" className="neu-raised rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.6875rem] font-bold tracking-[0.12em] text-fg-subtle">LOOT DROP</p>
              <p className="font-mono text-[0.6875rem] font-bold tracking-[0.12em] text-gold">{LAPTOPS.count} / {LAPTOPS.count} LEFT</p>
            </div>
            <ul aria-label={`${LAPTOPS.count} laptops to be won`} className="mt-3 grid grid-cols-5 gap-2 lg:gap-2.5">
              {Array.from({ length: LAPTOPS.count }, (_, i) => (
                <li key={i} className="key-cap-sm relative flex aspect-square items-center justify-center rounded-lg text-gold" style={{ '--reveal-delay': `${i * 0.03}s` }}>
                  <span className="block w-[58%]"><LaptopIcon /></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locked rules */}
          <div data-reveal="near" className="mt-3 flex items-start gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 lg:p-5">
            <span className="neu-inset flex size-11 shrink-0 items-center justify-center rounded-xl text-fg-muted">
              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="7" width="10" height="7" rx="1.5" />
                <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
              </svg>
            </span>
            <div>
              <p className="font-mono text-[0.625rem] font-bold tracking-[0.16em] text-fg-subtle">RULES UNLOCK SOON</p>
              <p className="mt-1 text-[0.9375rem] font-semibold leading-snug text-fg">How winners are picked, who can win and when results are out will be in the campaign terms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
