import { useEffect, useState } from 'react';

// Anchor jumps (pedestal links) land below the bar instead of under it
const SCROLL_PADDING = ['scroll-pt-16', 'lg:scroll-pt-20'];

/**
 * Fixed top bar with the co-brand logos. Transparent over the hero; picks up a dark
 * glass backdrop once the page scrolls so it stays readable over any section.
 * The hero keeps a same-height spacer (h-16 / lg:h-20) so nothing sits under it.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(...SCROLL_PADDING);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      root.classList.remove(...SCROLL_PADDING);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none ${scrolled ? 'border-white/10 bg-bg/80 backdrop-blur-md' : 'border-transparent'}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="arena-container flex h-16 items-center lg:h-20">
        <div className="flex items-center gap-3 lg:gap-4">
          <img alt="Lemonn" width="193" height="52" decoding="async" className="h-5 w-auto lg:h-7" src="lemonn-white.svg" />
          <span aria-hidden="true" className="text-xl font-light leading-none text-fg-muted lg:text-2xl">×</span>
          <img alt="Booming Bulls Academy" width="115" height="24" decoding="async" className="h-5 w-auto lg:h-7" src="booming-bulls-logo.svg" />
        </div>
      </div>
    </header>
  );
}
