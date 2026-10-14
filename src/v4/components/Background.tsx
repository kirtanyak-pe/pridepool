import { useEffect, useRef } from 'react';
import CandleBackdrop from './CandleBackdrop';

/**
 * The page background: the hero's stage (grid, green halo, trading chart, edge fades),
 * fixed to the screen. Every section, the hero included, scrolls over it; nothing in it moves.
 *
 * Only its darkness changes with scroll (--stage-p: 0 on the hero → 1 one screen down):
 * - the desktop scrim behind the hero headline fades out (later sections are centred)
 * - a dim layer fades in, so the chart and halo sit back behind text-heavy sections
 */
export default function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      el.style.setProperty('--stage-p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg" style={{ '--stage-p': 0 } as React.CSSProperties}>
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
      {/* Candles: behind the stage on phones; desktop keeps them on the right only, away from the text and Join button */}
      <CandleBackdrop
        className="absolute inset-x-0 bottom-[16%] h-[38%] w-full text-fg opacity-35 lg:bottom-[6%] lg:left-auto lg:h-[60%] lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent,#000_30%)]"
      />
      {/* Desktop: dark scrim behind the hero's headline column; fades out as the hero scrolls away */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[62%] lg:block"
        style={{
          opacity: 'calc(1 - var(--stage-p))',
          background: 'linear-gradient(to right, var(--color-bg) 0%, color-mix(in srgb, var(--color-bg) 90%, transparent) 45%, color-mix(in srgb, var(--color-bg) 55%, transparent) 72%, transparent 100%)',
        }}
      />
      {/* Dims the stage behind the sections after the hero */}
      <div className="absolute inset-0 bg-bg" style={{ opacity: 'calc(var(--stage-p) * 0.45)' }} />
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-b from-transparent via-bg/70 to-bg" />
    </div>
  );
}
