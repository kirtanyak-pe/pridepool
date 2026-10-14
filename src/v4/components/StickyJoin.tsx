import { useEffect, useState } from 'react';
import JoinButton from './JoinButton';
import { LAPTOPS, POOL } from '../content';

function Corner({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute h-4 w-4 border-accent/55 ${className}`} />;
}

/**
 * The floating Join button: a full-width bar on phones, a card on desktop.
 *
 * Rule: only one Join button on screen at a time. It appears whenever no in-page Join button
 * (hero, round checkpoints, final call) is in view, and stays away over the footer
 * and anything marked data-sticky-avoid.
 */
export default function StickyJoin() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const watched = [
      ...document.querySelectorAll('[data-cta-inpage]'),
      // Content the floating button must never cover (e.g. the V3 leaderboard table)
      ...document.querySelectorAll('[data-sticky-avoid]'),
      document.getElementById('footer'),
    ].filter((el): el is Element => el !== null);
    if (!watched.length) return;

    const onScreen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });
    watched.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <aside aria-label="Join the pool" aria-hidden={!visible} inert={!visible}>
      {/* Phones: full-width bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-arena-out motion-reduce:transition-none md:hidden ${visible ? 'translate-y-0' : 'translate-y-[calc(100%+1.5rem)]'}`}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-full h-6 bg-gradient-to-t from-bg to-transparent" />
        <div className="border-t border-white/10 bg-bg/95 px-4 pt-3" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}>
          <JoinButton size="bar" location="sticky" inPage={false} />
        </div>
      </div>

      {/* Desktop: floating card */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden w-[21rem] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none md:block ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}
      >
        <Corner className="-left-1.5 -top-1.5 border-l-2 border-t-2" />
        <Corner className="-right-1.5 -top-1.5 border-r-2 border-t-2" />
        <Corner className="-bottom-1.5 -left-1.5 border-b-2 border-l-2" />
        <Corner className="-bottom-1.5 -right-1.5 border-b-2 border-r-2" />
        <div className="arena-beam rounded-2xl p-px shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
          <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-bg/95">
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative flex items-center gap-2 border-b border-white/10 px-5 py-3 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-fg-subtle">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Registration open
            </div>
            <div className="relative p-5">
              <p className="text-xl font-bold tracking-tight text-fg">Enter the arena</p>
              <p className="mt-1 text-sm text-fg-muted">
                {POOL.amount} pool · {LAPTOPS.count} laptops
              </p>
              <div className="mt-5">
                <JoinButton size="bar" location="sticky" inPage={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
