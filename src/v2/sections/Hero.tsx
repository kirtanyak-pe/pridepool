import JoinButton from '../components/JoinButton';
import { ANCHORS, ANISH, LAPTOPS, POOL } from '../content';

/**
 * Redesign hero: a one-screen "trailer" for the three touchpoints
 * (Anish → ₹1 Crore pool → 20 laptops), with the Join button above the fold on a phone.
 */

// A few static sparks around the stage (they drift on desktop; CSS keeps them still on phones).
const PARTICLES = [
  { left: '12%', top: '18%', size: 2.4, color: 'var(--color-violet)', d: '14s', delay: '0s', o: 0.6 },
  { left: '84%', top: '14%', size: 2, color: 'var(--color-gold-bright)', d: '11s', delay: '2.4s', o: 0.85 },
  { left: '70%', top: '42%', size: 2.6, color: 'var(--color-violet)', d: '16s', delay: '5s', o: 0.5 },
  { left: '22%', top: '46%', size: 1.8, color: 'var(--color-gold-bright)', d: '12s', delay: '7s', o: 0.75 },
  { left: '92%', top: '58%', size: 2.2, color: 'var(--color-gold-bright)', d: '13s', delay: '3.6s', o: 0.7 },
  { left: '6%', top: '64%', size: 2.8, color: 'var(--color-violet)', d: '18s', delay: '9s', o: 0.45 },
];

/** Silver "#2" medal pinned to Anish — ties his result to the leaderboard podium style. */
function RankMedal({ className = '' }: { className?: string }) {
  return (
    <div
      className={`arena-enter absolute z-10 flex flex-col items-center ${className}`}
      style={{ '--e-delay': '0.55s' }}
      aria-label={`${ANISH.rankLabel} ${ANISH.rank}`}
    >
      <div aria-hidden="true" className="arena-halo absolute inset-0 -z-10 rounded-full bg-silver/40 blur-xl" />
      <div
        className="flex aspect-square w-full flex-col items-center justify-center rounded-full border border-white/60 text-bg shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_0_rgba(0,0,0,0.18),0_5px_0_#8f8fa3,0_14px_24px_-6px_rgba(0,0,0,0.8)]"
        style={{ background: 'radial-gradient(circle at 35% 28%, #ffffff 0%, var(--color-silver) 45%, #a9a9bd 100%)' }}
      >
        <span aria-hidden="true" className="text-[0.5625rem] font-extrabold uppercase leading-none tracking-[0.18em] opacity-70">
          World
        </span>
        <span aria-hidden="true" className="mt-0.5 text-[1.75rem] font-extrabold leading-none tracking-[-0.04em] lg:text-[2.25rem]">
          {ANISH.rank}
        </span>
      </div>
    </div>
  );
}

/** One "loot slot" tile — each previews a touchpoint and jumps to its section. */
function Slot({ href, value, label, valueClass, delay }: { href: string; value: string; label: string; valueClass: string; delay: string }) {
  return (
    <a
      href={href}
      className="key-cap-sm arena-enter relative flex min-h-[4.75rem] flex-col items-center justify-center rounded-xl px-1.5 py-3 text-center lg:min-h-[5.5rem] lg:items-start lg:px-4 lg:text-left"
      style={{ '--e-delay': delay }}
    >
      <span className={`text-[1.375rem] font-extrabold leading-none tracking-[-0.03em] tabular-nums lg:text-[1.75rem] ${valueClass}`}>{value}</span>
      <span className="mt-1.5 text-[0.625rem] font-bold uppercase leading-tight tracking-[0.14em] text-fg-subtle lg:text-[0.6875rem]">{label}</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative isolate overflow-hidden lg:min-h-svh">
      {/* ── Stage lighting ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'linear-gradient(var(--color-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-violet) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, #000 10%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, #000 10%, transparent 75%)',
          }}
        />
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="arena-particle absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: '0 0 8px 1.5px rgba(231,182,242,0.6)',
              '--p-duration': p.d,
              '--p-delay': p.delay,
              '--p-opacity': p.o,
            }}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      {/* ── Top bar: partner lockup (right side stays clear) ── */}
      <div className="arena-container flex h-16 items-center lg:h-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <img alt="Lemonn" width="193" height="52" decoding="async" className="h-5 w-auto sm:h-6" src="lemonn-white.svg" />
          <span aria-hidden="true" className="text-xl font-light leading-none text-fg-muted">×</span>
          <span className="flex h-8 w-24 items-center justify-center rounded-lg bg-white px-1.5 sm:h-9 sm:w-28">
            <img alt="Booming Bulls Academy" width="2170" height="725" decoding="async" className="h-full w-full object-contain" src="bomming-bulls-icon.webp" />
          </span>
        </div>
      </div>

      <div className="arena-container grid grid-cols-1 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-end lg:gap-12 lg:pb-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)]">
        {/* ── Anish (first on phones, right on desktop) ── */}
        <div className="relative mx-auto w-[min(17.5rem,72vw,34svh)] lg:order-2 lg:w-[min(100%,calc((100svh-5rem)*0.696))] lg:justify-self-center">
          <div aria-hidden="true" className="hero-figure-rim pointer-events-none absolute -inset-x-[30%] -top-[6%] bottom-[10%] -z-10" />
          <img
            alt={ANISH.name}
            width="629"
            height="904"
            decoding="async"
            fetchPriority="high"
            className="arena-enter relative h-auto w-full select-none"
            style={{
              '--e-delay': '0.1s',
              maskImage: 'linear-gradient(to bottom, #000 58%, transparent 92%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 58%, transparent 92%)',
            }}
            src="anish.webp"
          />
          <RankMedal className="left-[-14%] top-[34%] w-[4.5rem] lg:left-[-6%] lg:top-[30%] lg:w-[6rem]" />
        </div>

        {/* ── Copy + CTA ── */}
        <div className="relative z-10 -mt-24 text-center sm:-mt-28 lg:order-1 lg:mt-0 lg:self-center lg:pb-16 lg:text-left">
          <h1 id="hero-heading" className="arena-enter font-extrabold tracking-[-0.045em]" style={{ '--e-delay': '0.2s' }}>
            <span className="arena-reveal block text-[clamp(3.5rem,16vw,8rem)] leading-[0.9] text-white [text-shadow:0_0_60px_rgba(177,69,201,0.55),0_4px_24px_rgba(1,4,13,0.9)]" style={{ '--r-delay': '0.25s' }}>
              {POOL.amount}
            </span>
            <span className="arena-reveal mt-1 block pb-[0.12em] text-[clamp(1.5rem,7vw,3.25rem)] uppercase leading-none tracking-[0.02em] text-grad-silver" style={{ '--r-delay': '0.45s' }}>
              Pride Pool
            </span>
          </h1>

          <p className="arena-enter mx-auto mt-3 max-w-[34ch] text-pretty text-[0.9375rem] font-medium leading-snug text-fg-muted lg:mx-0 lg:mt-5 lg:text-lg" style={{ '--e-delay': '0.3s' }}>
            Celebrating <strong className="font-bold text-fg">{ANISH.name}</strong>, India’s World {ANISH.rank} at the {ANISH.event}.
          </p>

          {/* Three touchpoints, in story order */}
          <div className="mx-auto mt-5 grid max-w-[26rem] grid-cols-3 gap-2.5 lg:mx-0 lg:mt-7 lg:max-w-[30rem] lg:gap-3">
            <Slot href={ANCHORS.champion} value={ANISH.rank} label={ANISH.rankLabel} valueClass="text-grad-silver" delay="0.36s" />
            <Slot href={ANCHORS.pool} value={POOL.short} label={POOL.label} valueClass="text-fg" delay="0.42s" />
            <Slot href={ANCHORS.laptops} value={String(LAPTOPS.count)} label={LAPTOPS.label} valueClass="text-gold" delay="0.48s" />
          </div>

          <div className="arena-enter mt-6 lg:mt-8" style={{ '--e-delay': '0.54s' }}>
            <JoinButton location="hero" className="mx-auto max-w-[26rem] lg:mx-0" />
            <p className="mt-3.5 flex items-center justify-center gap-2 text-[0.8125rem] font-semibold text-fg-muted lg:justify-start lg:text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_2px_rgba(61,214,140,0.5)]" />
              Already on Lemonn? You’re already in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
