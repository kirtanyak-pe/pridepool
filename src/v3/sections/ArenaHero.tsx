import type { ReactNode } from 'react';
import JoinButton from '../../v2/components/JoinButton';
import TickerTape from '../../v2/components/TickerTape';
import CandleBackdrop from '../../v2/components/CandleBackdrop';
import Odometer from '../../v2/components/Odometer';
import { ANCHORS, ANISH, LAPTOPS, POOL } from '../../v2/content';

/**
 * V3 first screen: a reward stage where ALL three touchpoints are visible at once.
 *   ₹1 Crore → the scoreboard headline (rolls up on load)
 *   Anish    → on the centre pedestal, with his World #2 medal on the left pedestal
 *   Laptops  → on the right pedestal, ×20
 * Animation only builds the scene; once built, nothing disappears — a visitor who looks
 * away during loading still sees everything. Sized in rem on a 390×844 / 1440×900 canvas
 * (see html.scale-artboard in index.css), so it scales like an image on any screen.
 */

function Pedestal({
  href,
  item,
  value,
  label,
  className,
  delay,
}: {
  href: string;
  item: ReactNode;
  value: string;
  label: string;
  className: string;
  delay: string;
}) {
  return (
    <a href={href} className={`pedestal-rise group relative flex flex-col items-center justify-end ${className}`} style={{ animationDelay: delay }}>
      <div className="relative z-10 flex w-full flex-1 items-end justify-center">{item}</div>
      {/* Pedestal block: 3D key, accent rim on top */}
      <div className="key-cap relative mt-2 flex w-full flex-col items-center justify-center rounded-xl px-1.5 py-2.5 text-center lg:rounded-2xl lg:py-4">
        <span aria-hidden="true" className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <span className="text-[1.125rem] font-extrabold leading-none tracking-[-0.02em] text-fg lg:text-[1.75rem]">{value}</span>
        <span className="mt-1 text-[0.5625rem] font-bold uppercase leading-tight tracking-[0.14em] text-fg-subtle lg:text-[0.75rem]">{label}</span>
      </div>
    </a>
  );
}

function Medal() {
  return (
    <div
      className="story-stamp flex aspect-square w-[4.75rem] flex-col items-center justify-center rounded-full border border-white/60 text-bg shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_0_rgba(0,0,0,0.18),0_5px_0_#8f8fa3,0_14px_24px_-6px_rgba(0,0,0,0.8)] lg:w-[8.5rem]"
      style={{ background: 'radial-gradient(circle at 35% 28%, #ffffff 0%, var(--color-silver) 45%, #a9a9bd 100%)', animationDelay: '1s' }}
    >
      <span className="text-[0.5rem] font-extrabold uppercase leading-none tracking-[0.18em] opacity-70 lg:text-[0.875rem]">World</span>
      <span className="mt-0.5 text-[1.75rem] font-extrabold leading-none tracking-[-0.04em] lg:text-[3.25rem]">{ANISH.rank}</span>
    </div>
  );
}

function Laptop() {
  return (
    <div className="story-pop relative" style={{ animationDelay: '1.15s' }}>
      {/* Warm spotlight so the dark laptop reads on the dark stage */}
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(255,201,120,0.45), rgba(255,201,120,0.12) 55%, transparent)' }} />
      <img
        src="laptop-hd.webp"
        alt=""
        width="2800"
        height="2858"
        decoding="async"
        className="laptop-float w-[7.25rem] select-none brightness-125 drop-shadow-[0_0_1rem_rgba(255,201,120,0.35)] lg:w-[12.5rem]"
      />
      <span className="story-pop absolute -right-1 -top-1 rounded-full bg-gold px-2 py-0.5 text-[0.75rem] font-extrabold text-bg shadow-[0_0.25rem_0.75rem_rgba(0,0,0,0.5)] lg:px-3 lg:text-[1.125rem]" style={{ animationDelay: '1.5s' }}>
        ×{LAPTOPS.count}
      </span>
    </div>
  );
}

function Anish() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="hero-figure-rim pointer-events-none absolute -inset-x-[35%] -top-[8%] bottom-[5%] -z-10" />
      <img
        src="anish.webp"
        alt={ANISH.name}
        width="629"
        height="904"
        decoding="async"
        fetchPriority="high"
        className="arena-enter h-[17.5rem] w-auto max-w-none select-none lg:h-[31rem]"
        style={{ '--e-delay': '0.55s', maskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)' }}
      />
    </div>
  );
}

function Headline({ align }: { align: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="arena-enter inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-accent lg:px-4 lg:py-1.5 lg:text-[0.8125rem]" style={{ '--e-delay': '0.05s' }}>
        <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
        The Pride Pool
      </p>
      <p className="mt-2.5 text-[2.875rem] font-extrabold tracking-[-0.04em] text-white [text-shadow:0_0_3.75rem_rgb(var(--glow)/0.55)] lg:mt-4 lg:text-[5.75rem]">
        <Odometer text="₹1,00,00,000" label={POOL.amount} />
      </p>
      <p className="arena-enter mt-1.5 inline-flex items-center gap-1.5 font-mono text-[0.75rem] font-bold uppercase tracking-[0.08em] text-success lg:mt-2 lg:text-[1rem]" style={{ '--e-delay': '0.3s' }}>
        <span aria-hidden="true">▲</span> Brokerage credits for India’s traders
      </p>
    </div>
  );
}

export default function ArenaHero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative isolate flex h-[52.75rem] flex-col overflow-hidden lg:h-[56.25rem]">
      <h1 id="hero-heading" className="sr-only">
        {POOL.amount} Pride Pool: Lemonn × Booming Bulls, celebrating {ANISH.name}, World {ANISH.rank}, with {LAPTOPS.count} laptops to win
      </h1>

      {/* Stage lighting + trading chart */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'linear-gradient(var(--color-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-violet) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
            maskImage: 'radial-gradient(ellipse 85% 65% at 50% 55%, #000 10%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 55%, #000 10%, transparent 75%)',
          }}
        />
        <div className="arena-halo absolute left-1/2 top-[58%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl lg:left-[68%] lg:top-[55%] lg:h-[48rem] lg:w-[48rem]" style={{ background: 'radial-gradient(closest-side, rgb(var(--glow-deep)/0.6), transparent)' }} />
        <CandleBackdrop className="absolute inset-x-0 bottom-[16%] h-[38%] w-full text-fg opacity-35 lg:bottom-[6%] lg:h-[60%]" />
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-b from-transparent via-bg/70 to-bg" />
      </div>

      {/* Top bar */}
      <div className="arena-container flex h-16 shrink-0 items-center lg:h-20">
        <div className="flex items-center gap-3 lg:gap-4">
          <img alt="Lemonn" width="193" height="52" decoding="async" className="h-5 w-auto lg:h-7" src="lemonn-white.svg" />
          <span aria-hidden="true" className="text-xl font-light leading-none text-fg-muted lg:text-2xl">×</span>
          <span className="flex h-8 w-24 items-center justify-center rounded-lg bg-white px-1.5 lg:h-11 lg:w-36">
            <img alt="Booming Bulls Academy" width="2170" height="725" decoding="async" className="h-full w-full object-contain" src="bomming-bulls-icon.webp" />
          </span>
        </div>
      </div>
      <TickerTape />

      <div className="arena-container flex min-h-0 flex-1 flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Desktop: headline column with the Join button */}
        <div className="hidden w-[36rem] shrink-0 lg:block">
          <Headline align="left" />
          <p className="arena-enter mt-6 max-w-[30rem] text-[1.25rem] font-medium leading-relaxed text-fg-muted" style={{ '--e-delay': '0.4s' }}>
            Celebrating <strong className="font-bold text-fg">{ANISH.name}</strong>, India’s World {ANISH.rank} at the {ANISH.event}, with {POOL.amount} in brokerage credits and {LAPTOPS.count} laptops.
          </p>
          <div className="arena-enter mt-10" style={{ '--e-delay': '0.6s' }}>
            <JoinButton location="hero" />
            <p className="mt-4 flex items-center gap-2 text-[1rem] font-semibold text-fg-muted">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_2px_rgba(61,214,140,0.5)]" />
              Already on Lemonn? You’re already in.
            </p>
          </div>
        </div>

        {/* Mobile: headline on top */}
        <div className="shrink-0 pt-5 lg:hidden">
          <Headline align="center" />
        </div>

        {/* The reward stage — everything stays on screen */}
        <div className="relative mx-auto flex min-h-0 w-full max-w-[22rem] flex-1 items-end justify-center gap-1.5 pb-2 pt-3 lg:h-[44rem] lg:max-w-none lg:flex-1 lg:gap-4 lg:pb-12 lg:pt-0">
          <Pedestal href={ANCHORS.champion} item={<Medal />} value={ANISH.rank} label={ANISH.rankLabel} className="w-[6.25rem] lg:w-[11.5rem]" delay="0.35s" />
          <Pedestal
            href={ANCHORS.champion}
            item={<Anish />}
            value="Anish"
            label={`World ${ANISH.rank} trader`}
            className="w-[8.75rem] lg:w-[15rem]"
            delay="0.2s"
          />
          <Pedestal href={ANCHORS.laptops} item={<Laptop />} value={`${LAPTOPS.count}`} label="Laptops to win" className="w-[6.25rem] lg:w-[11.5rem]" delay="0.5s" />
        </div>

        {/* Mobile: Join never leaves the first screen */}
        <div className="arena-enter shrink-0 pb-6 text-center lg:hidden" style={{ '--e-delay': '0.6s', paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}>
          <JoinButton location="hero" className="mx-auto max-w-[26rem]" />
          <p className="mt-3 flex items-center justify-center gap-2 text-[0.8125rem] font-semibold text-fg-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_2px_rgba(61,214,140,0.5)]" />
            Already on Lemonn? You’re already in.
          </p>
        </div>
      </div>
    </section>
  );
}
