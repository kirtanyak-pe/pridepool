import { JOIN_LABEL, JOIN_URL } from '../content';

/**
 * THE Join button. Every Join on the page is this component, so label, link and look stay identical.
 *
 * Tracking: each one carries data-cta="join" and data-cta-location (hero, round-1…3, final, sticky, navbar),
 * so analytics can count taps per position without extra code (e.g. a click trigger on [data-cta="join"]).
 */
export type JoinLocation = 'hero' | 'round-1' | 'round-2' | 'round-3' | 'final' | 'sticky' | 'navbar';

const SIZES = {
  /** Hero and final call: full width on phones, auto width on desktop */
  lg: 'flex h-14 w-full text-base lg:inline-flex lg:h-16 lg:w-auto lg:px-10 lg:text-lg',
  /** After each round */
  md: 'flex h-14 w-full text-[0.9375rem] md:inline-flex md:h-[3.25rem] md:w-auto md:shrink-0 md:px-7',
  /** Floating bar (phones) and floating card (desktop) */
  bar: 'flex h-14 w-full text-base',
  /** Top navbar (tablet and desktop) */
  nav: 'inline-flex h-11 px-5 text-[0.875rem]',
};

type Props = {
  location: JoinLocation;
  size?: keyof typeof SIZES;
  /**
   * In-page buttons (true) hide the floating Join button while they're on screen,
   * so there's only ever one Join button in view. The floating one itself passes false.
   */
  inPage?: boolean;
  className?: string;
};

export default function JoinButton({ location, size = 'lg', inPage = true, className = '' }: Props) {
  return (
    <a
      href={JOIN_URL}
      data-cta="join"
      data-cta-location={location}
      data-cta-inpage={inPage ? '' : undefined}
      className={`arena-cta btn-key items-center justify-center gap-2 font-extrabold tracking-[-0.01em] ${SIZES[size]} ${className}`}
    >
      {JOIN_LABEL}
      <span aria-hidden="true">→</span>
    </a>
  );
}
