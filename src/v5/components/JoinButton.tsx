import { useSyncExternalStore } from 'react';
import { EXISTING_NOTE, EXISTING_USER, JOIN_LABEL, JOIN_URL, NEW_USER, OPEN_APP_LABEL, OPEN_APP_URL, openAppUrl } from '../content';

/**
 * THE Join buttons. Every Join / Open-app button on the page is this component, so labels, links and look stay identical.
 *   action="join" → new users: Sign Up & Join (the green 3D key)
 *   action="open" → existing users: Open Lemonn App (the light key)
 *
 * Tracking: each one carries data-cta ("join" | "open-app") and data-cta-location (hero, steps, final, sticky, navbar…),
 * so analytics can count taps per position without extra code.
 */
export type JoinLocation = 'hero' | 'round-1' | 'round-2' | 'round-3' | 'final' | 'sticky' | 'navbar' | 'steps';

const SIZES = {
  /** Hero and final call: full width on phones, auto width on desktop */
  lg: 'flex h-14 w-full text-base lg:inline-flex lg:h-16 lg:w-auto lg:px-10 lg:text-lg',
  /** After each round */
  md: 'flex h-14 w-full text-[0.9375rem] md:inline-flex md:h-[3.25rem] md:w-auto md:shrink-0 md:px-7',
  /** Floating bar (phones) and floating card (desktop) */
  bar: 'flex h-14 w-full text-base',
  /** Top navbar (tablet and desktop) */
  nav: 'inline-flex h-11 px-5 text-[0.875rem]',
  /** One half of the Existing / New user pair */
  pair: 'flex h-14 w-full px-3 text-[0.875rem] lg:h-16 lg:text-base',
  /** The pair, compact (floating card) */
  pairSm: 'flex h-8 w-full px-2 text-[0.6875rem]',
};

type Size = keyof typeof SIZES;

type Props = {
  location: JoinLocation;
  size?: Size;
  /**
   * In-page buttons (true) hide the floating Join button while they're on screen,
   * so there's only ever one Join button in view. The floating one itself passes false.
   */
  inPage?: boolean;
  /** primary = the green 3D key; outline = quiet secondary look (navbar on the first fold) */
  variant?: 'primary' | 'outline';
  action?: 'join' | 'open';
  className?: string;
};

const VARIANTS = {
  primary: 'arena-cta btn-key',
  outline: 'rounded-full border border-accent/70 text-accent transition-colors duration-200 hover:bg-accent/10',
};

const noSubscribe = () => () => {};
/** The Open-app link, chosen per device after hydration-safe first render */
function OpenAppLink({ className, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = useSyncExternalStore(noSubscribe, openAppUrl, () => OPEN_APP_URL);
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}

export default function JoinButton({ location, size = 'lg', inPage = true, variant = 'primary', action = 'join', className = '' }: Props) {
  const open = action === 'open';
  const label = open ? OPEN_APP_LABEL : JOIN_LABEL;
  const small = size === 'pairSm' || size === 'nav';
  const classes = `${open ? 'btn-key-light' : VARIANTS[variant]} items-center justify-center gap-2 whitespace-nowrap font-extrabold tracking-[-0.01em] ${SIZES[size]} ${className}`;
  const data = {
    'data-cta': open ? 'open-app' : 'join',
    'data-cta-location': location,
    ...(inPage && { 'data-cta-inpage': '' }),
  };
  const content =
    size === 'pair' || size === 'pairSm' || size === 'nav' ? (
      // two lines: who it's for, then the action
      <span className="flex flex-col items-center leading-none">
        <span className={`font-bold uppercase tracking-[0.14em] opacity-60 ${small ? 'text-[0.5rem]' : 'text-[0.5625rem] lg:text-[0.625rem]'}`}>
          {open ? EXISTING_USER : NEW_USER}
        </span>
        <span className={`inline-flex items-center ${small ? 'mt-0.5 gap-1.5' : 'mt-1 gap-2'}`}>
          {label}
          <span aria-hidden="true">→</span>
        </span>
      </span>
    ) : (
      <>
        {label}
        <span aria-hidden="true">→</span>
      </>
    );
  return open ? (
    <OpenAppLink className={classes} {...data}>
      {content}
    </OpenAppLink>
  ) : (
    <a href={JOIN_URL} className={classes} {...data}>
      {content}
    </a>
  );
}

/** Existing user (Open Lemonn App) + New user (Sign Up & Join), side by side */
export function JoinPair({
  location,
  inPage = true,
  compact = false,
  tight = false,
  className = '',
}: {
  location: JoinLocation;
  inPage?: boolean;
  compact?: boolean;
  /** hero: the two buttons close together (8px / 16px) */
  tight?: boolean;
  className?: string;
}) {
  const size = compact ? 'pairSm' : 'pair';
  const gap = tight ? 'gap-2 lg:gap-4' : `gap-2.5 ${compact ? 'lg:gap-3' : 'lg:gap-[3.75rem]'}`;
  return (
    <div className={`grid grid-cols-2 ${gap} ${className}`}>
      <JoinButton location={location} size={size} action="open" inPage={inPage} />
      <JoinButton location={location} size={size} inPage={inPage} />
    </div>
  );
}

/** The pair + the "existing customers are already in" note below it */
export function JoinBlock({
  location,
  align = 'center',
  shake = false,
  compact = false,
  wide = false,
  inPage = true,
  className = '',
}: {
  location: JoinLocation;
  align?: 'center' | 'left';
  /** the hero's one-time nudge once the intro has finished */
  shake?: boolean;
  compact?: boolean;
  /** hero: buttons closer together and a bit wider */
  wide?: boolean;
  inPage?: boolean;
  className?: string;
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${wide ? 'max-w-[34rem]' : 'max-w-[30rem]'} ${className}`}>
      <JoinPair location={location} compact={compact} tight={wide} inPage={inPage} className={shake ? 'join-shake' : ''} />
      <p
        className={`flex rounded-xl border border-accent/40 bg-accent/[0.08] text-left font-semibold leading-snug text-fg shadow-[0_0_1.5rem_-0.5rem_rgb(var(--accent-glow-rgb)/0.45)] ${compact ? 'mt-4 items-center gap-1.5 whitespace-nowrap px-2.5 py-1.5 text-[0.625rem]' : 'mt-5 items-center gap-2 whitespace-nowrap px-3 py-2 text-[0.625rem] lg:mt-6 lg:gap-2.5 lg:px-4 lg:py-2.5 lg:text-[0.8125rem]'}`}
      >
        <span
          aria-hidden="true"
          className={`mt-px flex shrink-0 items-center justify-center rounded-full bg-accent text-[var(--accent-ink)] ${compact ? 'size-3.5' : 'size-4 lg:size-[1.125rem]'}`}
        >
          <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
            <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-pretty">{EXISTING_NOTE}</span>
      </p>
    </div>
  );
}
