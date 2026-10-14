import { useCallback, useEffect, useState } from 'react';
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
import { onLanded } from '../components/landed';

/** Sections the page snaps to, in page order */
const SNAP_SECTIONS = ['hero', 'moment', 'basis', 'giveaway', 'leaderboard', 'join', 'faqs'];

// Safety net: scrolling unlocks after this even if the hero intro never reports back
const INTRO_LOCK_MAX_MS = 10000;

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
  // Section snapping, one rule for the whole page: when a scroll stops and ⅓ of the section
  // you're heading into is visible (below the Navbar), it settles on that section; otherwise it
  // settles back. A section plus its Join checkpoint can be taller than the screen (e.g. the
  // leaderboard): inside those you scroll freely, so nothing is ever unreachable.
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let settled = window.scrollY;
    let timer = 0;

    /** Scroll positions where each section sits just below the Navbar (the hero sits at 0) */
    const snapPoints = () => {
      const nav = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      const points = SNAP_SECTIONS.map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)
        .map((el) => Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - nav)));
      return { nav, points };
    };

    const onEnd = () => {
      const y = window.scrollY;
      const { nav, points } = snapPoints();
      const view = window.innerHeight - nav; // the visible area below the Navbar
      const third = view / 3;
      const maxY = root.scrollHeight - window.innerHeight;
      let i = 0;
      for (let k = 0; k < points.length; k++) if (points[k] <= y + 1) i = k;
      const cur = points[i];
      const next = points[i + 1] ?? null;
      const blockEnd = Math.min(next ?? maxY + window.innerHeight, maxY + view);
      const long = blockEnd - cur > view + 2; // section (+ checkpoint) taller than the screen
      const goingDown = y > settled;
      let target: number | null = null;

      if (Math.abs(y - cur) <= 1) target = null; // already on a section
      else if (goingDown) {
        // the next section is ⅓ visible → go to it; otherwise settle back (unless reading a long block)
        if (next !== null && y + view - next >= third) target = next;
        else if (!long) target = cur;
      } else {
        // scrolling up: ⅓ of the section above is back on screen → go to it; otherwise back down
        const revealed = (next ?? blockEnd) - y; // how much of the upper section is visible
        if (!long) target = Math.min(revealed, view) >= third || next === null ? cur : next;
        else if (next !== null && y > next - view && revealed < third) target = next;
      }

      if (target !== null && Math.abs(target - y) > 1) {
        window.scrollTo({ top: Math.min(target, maxY), behavior: reduced ? 'auto' : 'smooth' });
        return; // the snap scroll ends here again and records the settled spot
      }
      settled = y;
    };

    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(onEnd, 140);
    };
    const hasScrollEnd = 'onscrollend' in window;
    if (hasScrollEnd) window.addEventListener('scrollend', onEnd);
    else window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scrollend', onEnd);
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, []);
  // Each section's reveal / count-up animations wait until it has landed (see components/landed.ts):
  // the fold gets data-landed, and index.css holds its animations until then.
  useEffect(() => {
    const stops = Array.from(document.querySelectorAll<HTMLElement>('main .fold')).map((el) =>
      onLanded(el, () => el.setAttribute('data-landed', '')),
    );
    return () => stops.forEach((stop) => stop());
  }, []);
  // In-page links (#section) scroll smoothly. index.html has a <base href> for the assets, which
  // would otherwise turn "#basis" into a page load (dropping ?v=…). "#" alone is the Join placeholder.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href')!.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (id && !el) return;
      e.preventDefault();
      el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  // Hold the page on the hero until its intro has played (title → badge → card stamps → last shine), so the
  // story isn't scrolled past half-built. Only when the page opens at the top; never longer than
  // INTRO_LOCK_MAX_MS. Blocks wheel / touch / keyboard scrolling (no overflow:hidden, so no layout shift);
  // links in the navbar still work.
  const [introDone, setIntroDone] = useState(false);
  const onIntroDone = useCallback(() => setIntroDone(true), []);
  useEffect(() => {
    if (introDone || window.scrollY > 10) return;
    const block = (e: Event) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      if ([' ', 'PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', 'End', 'Home'].includes(e.key) && !(e.target as Element)?.closest?.('input, textarea, [contenteditable]')) e.preventDefault();
    };
    window.addEventListener('wheel', block, { passive: false });
    window.addEventListener('touchmove', block, { passive: false });
    window.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => setIntroDone(true), INTRO_LOCK_MAX_MS);
    return () => {
      window.removeEventListener('wheel', block);
      window.removeEventListener('touchmove', block);
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, [introDone]);
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
        <ArenaHero badgeStyle={badgeStyle} ready={ready} onIntroDone={onIntroDone} />

        {/* Round 1 · The Champion */}
        <Champion />

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
