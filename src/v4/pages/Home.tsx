import { useEffect, useState } from 'react';
import ArenaHero from '../sections/ArenaHero';
import Champion from '../sections/Champion';
import Pool from '../sections/Pool';
import Bonus from '../sections/Bonus';
import Leaderboard from '../leaderboard/Leaderboard';
import Faqs from '../sections/Faqs';
import Footer from '../sections/Footer';

import FinalCall from '../sections/FinalCall';
import Checkpoint from '../components/Checkpoint';
import StickyJoin from '../components/StickyJoin';
import { LAPTOPS, POOL } from '../content';
import Background from '../components/Background';
import Navbar from '../components/Navbar';

// Pause after landing before the hero starts building
const LANDING_HOLD_MS = 500;

/**
 * Redesign V4 — the final version (started as a copy of V3; self-contained: everything it uses lives in src/v4).
 * First screen: reward stage with all three touchpoints visible.
 * Then the three rounds (each ending in a Join checkpoint), the Figma leaderboard,
 * the final call, a short FAQ and a slim footer. The page scales like an image (html.scale-artboard).
 */
export default function Home({ badgeStyle = 'medal' }: { badgeStyle?: 'medal' | 'stamp' }) {
  const [ready, setReady] = useState(false);
  // Gentle section snapping: when a scroll ends near a section's start, it settles there (under the Navbar).
  // Proximity, not mandatory, so the round checkpoints between sections stay reachable.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('snap-y', 'snap-proximity');
    return () => root.classList.remove('snap-y', 'snap-proximity');
  }, []);
  // First fold ↔ second fold act like pages: a scroll that stops between the hero and Round 1
  // always finishes on one of them (the way you were heading), never half and half.
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let settled = window.scrollY;
    let timer = 0;
    const roundOneTop = () => {
      const wrap = document.getElementById('moment')?.parentElement;
      if (!wrap) return null;
      const pad = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      return Math.round(wrap.getBoundingClientRect().top + window.scrollY - pad);
    };
    const onEnd = () => {
      const target = roundOneTop();
      const y = window.scrollY;
      if (target !== null && y > 2 && y < target - 2) {
        window.scrollTo({ top: y > settled ? target : 0, behavior: reduced ? 'auto' : 'smooth' });
        return; // the snap scroll ends here again and records the settled spot
      }
      settled = y;
    };
    const hasScrollEnd = 'onscrollend' in window;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(onEnd, 140);
    };
    if (hasScrollEnd) window.addEventListener('scrollend', onEnd);
    else window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scrollend', onEnd);
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    // Warm the hero images during the hold so they're there when the stage builds
    ['anish.webp', 'laptop-hd.webp'].forEach((src) => (new Image().src = src));
    const t = window.setTimeout(() => setReady(true), LANDING_HOLD_MS);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Background />
        <ArenaHero badgeStyle={badgeStyle} ready={ready} />
        <div aria-hidden="true" className="pointer-events-none relative -z-[5] h-0">
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent sm:h-64" />
        </div>

        {/* Round 1 · The Champion */}
        <div className="snap-start pt-12 lg:pt-20">
          <Champion />
        </div>

        {/* Round 2 · The Pool */}
        <Pool />
        <Checkpoint round={2} name="The Pool" lead={`A ${POOL.amount} pool for India’s traders`} />

        {/* Round 3 · The Bonus */}
        <Bonus />
        <Checkpoint round={3} name="The Bonus" lead={`${LAPTOPS.count} laptops for participants`} />

        <Leaderboard />
        <FinalCall />
        <Faqs />
      </main>
      <Footer />
      {/* Mounts with the hero so it can see the hero's Join button */}
      {ready && <StickyJoin />}
    </>
  );
}
