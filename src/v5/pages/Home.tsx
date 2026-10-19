import { useCallback, useEffect, useState } from 'react';
import ArenaHero from '../sections/ArenaHero';
import Champion from '../sections/Champion';
import HowToEnter from '../sections/HowToEnter';
import Leaderboard from '../leaderboard/Leaderboard';
import Faqs from '../sections/Faqs';
import Footer from '../sections/Footer';

import FinalCall from '../sections/FinalCall';
import StickyJoin from '../components/StickyJoin';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import CandleCursor from '../components/CandleCursor';
import { onLanded } from '../components/landed';

// The video cover loads once the intro is done or the page is scrolled, and at most this long after opening
const INTRO_WAIT_MAX_MS = 6000;

// Pause after landing before the hero starts building
const LANDING_HOLD_MS = 150;
// Slow networks: the longest the intro waits for the hero photo + font after the hold
const LANDING_WAIT_MAX_MS = 1500;

// The candle cursor needs a mouse (or trackpad); not in Windows high-contrast mode, which keeps the system cursor
const HAS_MOUSE =
  typeof window !== 'undefined' &&
  window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches &&
  !window.matchMedia('(forced-colors: active)').matches;

/**
 * V5 — V4 plus the product team's edits on the live site (pridepool.in); self-contained in src/v5.
 * First screen: reward stage with all three touchpoints visible and the Existing / New user buttons.
 * Then the live leaderboard, the champion's moment, how to enter, the final call, the FAQ and the footer.
 * Free scrolling (no section snapping, no hero scroll lock). The page scales like an image (html.scale-artboard).
 */
export default function Home({ badgeStyle = 'medal' }: { badgeStyle?: 'medal' | 'stamp' }) {
  const [ready, setReady] = useState(false);
  // V5-only style differences in the shared index.css hang off html.v5-live (quicker reveals, leaderboard entrance…)
  useEffect(() => {
    document.documentElement.classList.add('v5-live');
    return () => document.documentElement.classList.remove('v5-live');
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
  // would otherwise turn "#enter" into a page load (dropping ?v=…). "#" alone is the Join placeholder.
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
  // The video cover waits until the hero intro is done or the visitor has scrolled (at most 6s)
  const [introDone, setIntroDone] = useState(false);
  const onIntroDone = useCallback(() => setIntroDone(true), []);
  useEffect(() => {
    if (introDone) return;
    const onScroll = () => {
      if (window.scrollY > 10) setIntroDone(true);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = window.setTimeout(() => setIntroDone(true), INTRO_WAIT_MAX_MS);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(t);
    };
  }, [introDone]);
  useEffect(() => {
    // Warm the hero images during the hold. The intro starts after the hold once Anish's photo is decoded and the
    // title font is in (on a normal connection both are ready within the hold, so nothing changes); on a slow
    // network it waits for them, at most LANDING_WAIT_MAX_MS longer, so the photo never pops in after its own fade.
    let alive = true;
    const photo = new Image();
    photo.src = 'anish.webp';
    new Image().src = 'laptop-800.webp';
    const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));
    const assets = Promise.all([
      photo.decode().catch(() => undefined),
      document.fonts?.load('800 1em Manrope').catch(() => undefined),
    ]);
    Promise.race([Promise.all([wait(LANDING_HOLD_MS), assets]), wait(LANDING_HOLD_MS + LANDING_WAIT_MAX_MS)]).then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Background />
        <ArenaHero badgeStyle={badgeStyle} ready={ready} onIntroDone={onIntroDone} />
        <Leaderboard />

        {/* The Champion */}
        <Champion coverReady={introDone} />

        {/* How to enter: the steps to join the pool and grab the prize */}
        <HowToEnter />

        <FinalCall />
        <Faqs />
      </main>
      <Footer />
      {/* Mounts with the hero so it can see the hero's Join button */}
      {ready && <StickyJoin />}
      {HAS_MOUSE && <CandleCursor />}
    </>
  );
}
