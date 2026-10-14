import { useEffect, useState } from 'react';

/**
 * True while a section's own Join button (JoinButton with inPage, i.e. [data-cta-inpage]) is on screen,
 * below the Navbar. The navbar Join then steps back to its outline style and the floating Join hides,
 * so there's only ever one primary Join button in view.
 */
export default function useInPageJoinVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const nav = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const on = Array.from(document.querySelectorAll<HTMLElement>('[data-cta-inpage]')).some((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && r.bottom > nav && r.top < window.innerHeight;
      });
      setVisible(on);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    // the hero's buttons mount a moment after the page (landing hold): look again shortly after
    const t = window.setTimeout(update, 800);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(t);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return visible;
}
