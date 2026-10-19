/**
 * "Landed" = a section has come into view. Section animations wait for this, so they play while you look at
 * them, not before you get there.
 *
 * V5 scrolls freely (no snapping), so a section counts as arrived as soon as its top is 10% of the screen
 * height into the view — its animations start right away, whatever the sections above are still doing.
 */
export const LANDED_OPTIONS: IntersectionObserverInit = { rootMargin: '0px 0px -10% 0px', threshold: 0 };

/** Calls back once, when the element lands (immediately with reduced motion). Returns a cleanup. */
export function onLanded(el: Element, cb: () => void): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cb();
    return () => {};
  }
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    cb();
  }, LANDED_OPTIONS);
  io.observe(el);
  return () => io.disconnect();
}
