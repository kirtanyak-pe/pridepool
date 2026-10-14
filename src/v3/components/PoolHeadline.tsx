import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Odometer from '../../v2/components/Odometer';
import { POOL } from '../../v2/content';

/**
 * The ₹1 Crore headline:
 *   1. ₹1,00,00,000 rolls up like a slot machine
 *   2. right after it lands, all at once: the zeros turn into "Crore", the line shrinks, PRIZE POOL rises in below
 *   3. once it has settled (end of the shrink), a bright light sweeps across the text once, like a reflection
 * The final state stays on screen. With reduced motion it starts at the final state (no sweep).
 */
type Phase = 'roll' | 'final';

const ROLL_DONE_MS = 1650; // last digit has visibly landed (8 × 70 ms stagger + the roll's ease-out; its slow tail is invisible)
const HOLD_MS = 80; // tiny beat so the full number registers
const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** One-time light sweep: a copy of the text, filled only with a bright streak (styles: .shimmer-once). */
function Sweep({ children, delay = '0s' }: { children: React.ReactNode; delay?: string }) {
  return (
    <span aria-hidden="true" className="shimmer-once pointer-events-none absolute inset-0 whitespace-nowrap" style={{ animationDelay: delay }}>
      {children}
    </span>
  );
}

export default function PoolHeadline({ align = 'center' }: { align?: 'center' | 'left' }) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [phase, setPhase] = useState<Phase>(reduced ? 'final' : 'roll');
  const [sweep, setSweep] = useState(false);

  // Widths of the two tails in em, so the line re-centres smoothly while it shrinks
  const zerosRef = useRef<HTMLSpanElement>(null);
  const croreRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState<{ zeros: number; crore: number } | null>(null);

  useLayoutEffect(() => {
    const z = zerosRef.current;
    const c = croreRef.current;
    if (!z || !c) return;
    const fs = parseFloat(getComputedStyle(z).fontSize) || 16;
    setWidths({ zeros: z.scrollWidth / fs, crore: c.scrollWidth / fs });
  }, []);

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setPhase('final'), ROLL_DONE_MS + HOLD_MS);
    return () => window.clearTimeout(t);
  }, [reduced]);

  const final = phase === 'final';

  return (
    <div aria-hidden="true" className={align === 'center' ? 'text-center' : 'text-left'}>
      {/* Line 1: ₹1,00,00,000 → ₹1 Crore, shrinking at the same time */}
      <p
        className={`font-extrabold leading-none tracking-[-0.04em] text-white [text-shadow:0_0_3.75rem_rgb(var(--glow)/0.55)] ${final ? 'text-[1.875rem] lg:text-[3.25rem]' : 'text-[2.875rem] lg:text-[5.75rem]'}`}
        style={{ transition: `font-size 0.7s ${ease}` }}
        onTransitionEnd={(e) => {
          // The light sweep starts only once the shrink has really finished, so it always lines up with the text
          if (final && e.target === e.currentTarget && e.propertyName === 'font-size') setSweep(true);
        }}
      >
        <span className="relative inline-block">
          <Odometer text="₹1" label={POOL.amount} />
          <span
            className="relative inline-block h-[1em] overflow-hidden align-top"
            style={{ width: widths ? `${final ? widths.crore : widths.zeros}em` : undefined, transition: `width 0.6s ${ease}` }}
          >
            {/* the zeros slide up and out… */}
            <span
              ref={zerosRef}
              className="absolute left-0 top-0 inline-flex whitespace-nowrap"
              style={{ transform: final ? 'translateY(-110%)' : 'none', opacity: final ? 0 : 1, transition: `transform 0.5s ${ease}, opacity 0.35s ease` }}
            >
              <Odometer text=",00,00,000" label="" delayOffset={1} />
            </span>
            {/* …and "Crore" slides up into their place */}
            <span
              ref={croreRef}
              className="absolute left-0 top-0 inline-block whitespace-nowrap pl-[0.22em]"
              style={{ transform: final ? 'none' : 'translateY(110%)', opacity: final ? 1 : 0, transition: `transform 0.5s ${ease} 0.06s, opacity 0.35s ease 0.06s` }}
            >
              Crore
            </span>
            <span className="invisible inline-block">0</span>
          </span>
          {sweep && (
            <Sweep>
              <span className="tabular-nums">₹1</span>
              <span className="pl-[0.22em]">Crore</span>
            </Sweep>
          )}
        </span>
      </p>

      {/* Line 2: PRIDE POOL rises in, bigger — at the same moment */}
      <div className="grid" style={{ gridTemplateRows: final ? '1fr' : '0fr', transition: `grid-template-rows 0.7s ${ease}` }}>
        <div className="overflow-hidden">
          <p
            className="pb-[0.08em] pt-[0.12em] text-[3.25rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] lg:text-[6.5rem]"
            style={{ transform: final ? 'none' : 'translateY(40%) scale(1.15)', opacity: final ? 1 : 0, transition: `transform 0.8s ${ease}, opacity 0.5s ease`, transformOrigin: align === 'center' ? 'center top' : 'left top' }}
          >
            <span className="relative inline-block">
              <span className="text-grad-silver">{POOL.title}</span>
              {sweep && <Sweep delay="0.2s">{POOL.title}</Sweep>}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
