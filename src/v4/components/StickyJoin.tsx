import { useEffect, useState } from 'react';
import JoinButton from './JoinButton';

/**
 * The floating Join button on phones: a full-width bottom bar.
 * (Tablet and desktop use the Join button in the top navbar instead.)
 *
 * Rule: it appears from the second fold (once the hero has scrolled away) and stays
 * until the "Enter the Pride Pool" section (#join) comes into view — it then hands over
 * to that section's own Join button and stays away for the rest of the page.
 */
export default function StickyJoin() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const finalCall = document.getElementById('join');
    if (!hero || !finalCall) return;

    const update = () => {
      const pastHero = hero.getBoundingClientRect().bottom <= 0;
      const reachedFinal = finalCall.getBoundingClientRect().top < window.innerHeight;
      setVisible(pastHero && !reachedFinal);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
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

    </aside>
  );
}
