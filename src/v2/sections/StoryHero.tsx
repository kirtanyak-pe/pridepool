import { useEffect, useRef, useState } from 'react';
import JoinButton from '../components/JoinButton';
import TickerTape from '../components/TickerTape';
import Odometer from '../components/Odometer';
import CandleBackdrop from '../components/CandleBackdrop';
import { ANCHORS, ANISH, LAPTOPS, POOL } from '../content';

/**
 * Story-mode hero: the first screen plays like an Instagram story / game trailer.
 * Scenes: Anish → ₹1 Crore → 20 laptops → "all rewards" summary (stays on screen).
 * Tap right/left to skip, hold to pause. The Join button never moves.
 * Most visitors never scroll past the second screen, so every touchpoint lands here.
 */

const SCENES = [
  { id: 'champion', label: 'The Champion', ms: 3600 },
  { id: 'pool', label: 'The Pool', ms: 3600 },
  { id: 'laptops', label: 'The Bonus', ms: 3600 },
  { id: 'all', label: 'All rewards', ms: 0 }, // last scene stays
] as const;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Scene 1: Anish, with the silver medal stamping on ── */
function ChampionScene() {
  return (
    <div className="flex h-full flex-col items-center justify-end text-center">
      <div className="relative mx-auto h-[min(22rem,40svh)] aspect-[629/904]">
        <div aria-hidden="true" className="hero-figure-rim pointer-events-none absolute -inset-x-[30%] -top-[6%] bottom-[10%] -z-10" />
        <img
          src="anish.webp"
          alt={ANISH.name}
          width="629"
          height="904"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full select-none object-contain"
          style={{ maskImage: 'linear-gradient(to bottom, #000 60%, transparent 96%)', WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 96%)' }}
        />
        <div
          className="story-stamp absolute -left-[18%] top-[30%] flex aspect-square w-[5.25rem] flex-col items-center justify-center rounded-full border border-white/60 text-bg shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_0_rgba(0,0,0,0.18),0_5px_0_#8f8fa3,0_14px_24px_-6px_rgba(0,0,0,0.8)]"
          style={{ background: 'radial-gradient(circle at 35% 28%, #ffffff 0%, var(--color-silver) 45%, #a9a9bd 100%)' }}
        >
          <span className="text-[0.5625rem] font-extrabold uppercase leading-none tracking-[0.18em] opacity-70">World</span>
          <span className="mt-0.5 text-[2rem] font-extrabold leading-none tracking-[-0.04em]">{ANISH.rank}</span>
        </div>
      </div>
      <h2 className="-mt-6 text-[clamp(1.875rem,8.5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-fg [text-shadow:0_4px_24px_rgba(1,4,13,0.9)]">
        India’s World {ANISH.rank} trader
      </h2>
      <p className="mt-2 max-w-[30ch] text-[0.9375rem] font-medium leading-snug text-fg-muted">
        {ANISH.name}, one minute from the title at the {ANISH.event}.
      </p>
    </div>
  );
}

/* ── Scene 2: ₹1 Crore rolling up like a slot machine, credit coins rising ── */

const COINS = [
  { left: '2%', bottom: '4%', ms: '3.1s', delay: '0s' },
  { left: '14%', bottom: '-4%', ms: '3.6s', delay: '0.9s' },
  { left: '84%', bottom: '0%', ms: '3.3s', delay: '0.4s' },
  { left: '92%', bottom: '10%', ms: '3.8s', delay: '1.5s' },
  { left: '6%', bottom: '30%', ms: '2.9s', delay: '1.2s' },
  { left: '86%', bottom: '34%', ms: '3.4s', delay: '2s' },
];

function PoolScene() {
  return (
    <div className="relative isolate flex h-full flex-col items-center justify-center text-center">
      {COINS.map((c, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="story-coin key-cap-sm absolute -z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-accent"
          style={{ left: c.left, bottom: c.bottom, '--c-ms': c.ms, '--c-delay': c.delay }}
        >
          ₹
        </span>
      ))}
      <p className="inline-flex items-center gap-2 rounded-md border border-success/30 bg-success/10 px-2 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-success">
        <span aria-hidden="true">▲</span> Brokerage credits pool
      </p>
      <p className="mt-3 text-[clamp(2.75rem,13.5vw,6rem)] font-extrabold tracking-[-0.04em] text-white [text-shadow:0_0_60px_rgb(var(--glow)/0.55)]">
        <Odometer text="₹1,00,00,000" label={POOL.amount} />
      </p>
      <h2 className="mt-4 text-[clamp(1.5rem,6.5vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em] text-fg">
        {POOL.amount} for India’s traders
      </h2>
      <p className="mt-2 max-w-[30ch] text-[0.9375rem] font-medium leading-snug text-fg-muted">
        Celebrating Anish’s run with brokerage credits on Lemonn.
      </p>
    </div>
  );
}

/* ── Scene 3: 20 laptops dropping in one by one ── */
function LaptopIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="10.5" rx="1.5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 18.5h20l-1.5 1.5h-17z" fill="currentColor" />
    </svg>
  );
}

function LaptopsScene() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <img
        src="laptop-hd.webp"
        alt=""
        width="2800"
        height="2858"
        decoding="async"
        className="laptop-float h-[min(12rem,22svh)] w-auto select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)]"
      />
      <h2 className="mt-3 text-[clamp(1.875rem,8.5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-fg">
        + <span className="text-gold">{LAPTOPS.count}</span> laptops to win
      </h2>
      <ul aria-label={`${LAPTOPS.count} laptops`} className="mt-5 grid grid-cols-10 gap-1.5">
        {Array.from({ length: LAPTOPS.count }, (_, i) => (
          <li key={i} className="story-pop h-6 w-6 text-gold" style={{ animationDelay: `${350 + i * 55}ms` }}>
            <LaptopIcon />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.9375rem] font-medium text-fg-muted">On top of the {POOL.amount} pool.</p>
    </div>
  );
}

/* ── Scene 4: everything at once (stays until the visitor taps back) ── */
function AllScene() {
  const tiles = [
    { href: ANCHORS.champion, value: ANISH.rank, label: ANISH.rankLabel, cls: 'text-grad-silver' },
    { href: ANCHORS.pool, value: POOL.short, label: POOL.label, cls: 'text-fg' },
    { href: ANCHORS.laptops, value: String(LAPTOPS.count), label: LAPTOPS.label, cls: 'text-gold' },
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-accent">All rewards unlocked</p>
      <p className="mt-3 font-extrabold tracking-[-0.045em]">
        <span className="block text-[clamp(3rem,14vw,6.5rem)] leading-[0.9] text-white [text-shadow:0_0_60px_rgb(var(--glow)/0.55)]">{POOL.amount}</span>
        <span className="mt-1 block pb-[0.12em] text-[clamp(1.5rem,7vw,3rem)] uppercase leading-none tracking-[0.02em] text-grad-silver">Pride Pool</span>
      </p>
      <div className="mt-6 grid w-full max-w-[24rem] grid-cols-3 gap-2.5">
        {tiles.map((t, i) => (
          <a
            key={t.label}
            href={t.href}
            className="story-pop key-cap-sm relative flex min-h-[5rem] flex-col items-center justify-center rounded-xl px-1.5 py-3"
            style={{ animationDelay: `${200 + i * 140}ms` }}
          >
            <span aria-hidden="true" className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[0.625rem] font-extrabold text-[var(--accent-ink)]">✓</span>
            <span className={`text-[1.375rem] font-extrabold leading-none tracking-[-0.03em] ${t.cls}`}>{t.value}</span>
            <span className="mt-1.5 text-[0.625rem] font-bold uppercase leading-tight tracking-[0.14em] text-fg-subtle">{t.label}</span>
          </a>
        ))}
      </div>
      <p className="mt-4 max-w-[30ch] text-balance text-[0.9375rem] font-medium leading-snug text-fg-muted">
        Celebrating {ANISH.name}, India’s World {ANISH.rank} trader.
      </p>
    </div>
  );
}

const SCENE_VIEWS = { champion: ChampionScene, pool: PoolScene, laptops: LaptopsScene, all: AllScene };

export default function StoryHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // pause button / hold
  const [offscreen, setOffscreen] = useState(false);
  const [reduced] = useState(prefersReducedMotion);
  const sectionRef = useRef<HTMLElement>(null);
  const holdTimer = useRef<number>(0);
  const held = useRef(false);

  const last = SCENES.length - 1;
  const scene = SCENES[index];
  const running = !paused && !offscreen && !reduced;
  const Scene = SCENE_VIEWS[scene.id];

  // Don't play while the hero is scrolled out of view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const go = (i: number) => setIndex(Math.max(0, Math.min(last, i)));

  // Stories controls: tap right/left half to skip, press and hold to pause.
  const onPointerDown = () => {
    held.current = false;
    holdTimer.current = window.setTimeout(() => {
      held.current = true;
      setPaused(true);
    }, 220);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    window.clearTimeout(holdTimer.current);
    if (held.current) {
      setPaused(false);
      return;
    }
    if ((e.target as HTMLElement).closest('a, button')) return; // let links and buttons work
    const { left, width } = e.currentTarget.getBoundingClientRect();
    go(e.clientX - left < width / 3 ? index - 1 : index + 1);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-roledescription="carousel"
      aria-label="The Pride Pool in four scenes"
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      {/* Stage lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'linear-gradient(var(--color-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-violet) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 10%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 10%, transparent 75%)',
          }}
        />
        <div className="absolute left-1/2 top-[38%] h-[28rem] w-[28rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgb(var(--glow-deep)/0.55), transparent)' }} />
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        {/* Trading chart climbing to ₹1 Cr behind the stage */}
        <CandleBackdrop
          className="absolute inset-x-0 bottom-[17%] h-[42%] w-full text-fg opacity-40"
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-bg/80 to-bg" />
      </div>

      <h1 className="sr-only">{POOL.amount} Pride Pool: Lemonn × Booming Bulls, celebrating {ANISH.name}, World {ANISH.rank}</h1>

      {/* Top bar: partner lockup */}
      <div className="arena-container flex h-16 shrink-0 items-center">
        <div className="flex items-center gap-3">
          <img alt="Lemonn" width="193" height="52" decoding="async" className="h-5 w-auto" src="lemonn-white.svg" />
          <span aria-hidden="true" className="text-xl font-light leading-none text-fg-muted">×</span>
          <span className="flex h-8 w-24 items-center justify-center rounded-lg bg-white px-1.5">
            <img alt="Booming Bulls Academy" width="2170" height="725" decoding="async" className="h-full w-full object-contain" src="bomming-bulls-icon.webp" />
          </span>
        </div>
      </div>

      <TickerTape />

      <div className="arena-container flex min-h-0 flex-1 flex-col pt-3">
        <div className="mx-auto flex w-full max-w-[30rem] flex-1 flex-col">
          {/* Progress bars + pause */}
          <div className="flex items-center gap-2">
            <div className="flex flex-1 gap-1.5">
              {SCENES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Scene ${i + 1}: ${s.label}`}
                  aria-current={i === index ? 'step' : undefined}
                  className="flex h-6 flex-1 items-center"
                >
                  <span className="relative block h-1 w-full overflow-hidden rounded-full bg-white/15">
                    {(i < index || (i === index && (i === last || reduced))) && <span className="absolute inset-y-0 left-0 w-full rounded-full bg-accent" />}
                    {i === index && i !== last && !reduced && (
                      <span
                        key={index}
                        className="story-progress absolute inset-y-0 left-0 rounded-full bg-accent"
                        style={{ '--story-ms': `${s.ms}ms`, animationPlayState: running ? 'running' : 'paused' }}
                        onAnimationEnd={() => go(index + 1)}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            {!reduced && index !== last && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Play' : 'Pause'}
                className="-mr-2 flex h-11 w-11 items-center justify-center text-fg-muted hover:text-fg"
              >
                {paused ? (
                  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor" /></svg>
                ) : (
                  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 2.5h2.6v11H4zM9.4 2.5H12v11H9.4z" fill="currentColor" /></svg>
                )}
              </button>
            )}
          </div>
          <p className="mt-1 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-fg-subtle" aria-live="polite">
            {String(index + 1).padStart(2, '0')} · {scene.label}
          </p>

          {/* Stage: tap to skip, hold to pause */}
          <div
            className="relative min-h-[22rem] flex-1 select-none py-4"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={() => {
              window.clearTimeout(holdTimer.current);
              if (held.current) setPaused(false);
            }}
          >
            <div key={scene.id} className="story-scene h-full">
              <Scene />
            </div>
          </div>
        </div>
      </div>

      {/* Join never moves */}
      <div className="arena-container shrink-0 pb-6" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}>
        <div className="mx-auto max-w-[26rem] text-center">
          <JoinButton location="hero" />
          <p className="mt-3 flex items-center justify-center gap-2 text-[0.8125rem] font-semibold text-fg-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_2px_rgba(61,214,140,0.5)]" />
            Already on Lemonn? You’re already in.
          </p>
        </div>
      </div>
    </section>
  );
}
