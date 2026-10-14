import { useEffect } from 'react';

/**
 * Fades in every [data-reveal] element as it scrolls into view
 * (styles live in index.css under `.reveal-ready`).
 */
export default function useReveal(key: string) {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!els.length) return;
    const reveal = (el: HTMLElement) => (el.dataset.revealed = 'true');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      els.forEach(reveal);
      root.classList.remove('reveal-ready');
      return;
    }

    let fired = false;
    const io = new IntersectionObserver(
      (entries) => {
        fired = true;
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    // Safety net: never leave content invisible.
    const t = window.setTimeout(() => {
      if (!fired) {
        els.forEach(reveal);
        io.disconnect();
      }
    }, 3000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [key]);
}
