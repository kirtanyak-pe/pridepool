import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Odometer from '../../v2/components/Odometer';
import { POOL } from '../../v2/content';

/**
 * The ₹1 Crore headline, told in three beats so the number is impossible to misread:
 *   1. ₹1,00,00,000 rolls up like a slot machine
 *   2. after a beat, the zeros slide up and out and "Crore" slides in  → ₹1 Crore
 *   3. "₹1 Crore" shrinks and PRIDE POOL rises in below it, bigger
 * The final state stays on screen. With reduced motion it starts at the final state.
 */
type Phase = 'roll' | 'crore' | 'final';

const ROLL_DONE_MS = 2100; // last digit lands (9 digits × 70 ms stagger + 1.5 s roll)
const HOLD_MS = 500; // beat on the full number before the zeros go
const CRORE_HOLD_MS = 900; // let "₹1 Crore" land before it shrinks

export default function PoolHeadline({ align = 'center' }: { align?: 'center' | 'left' }) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [phase, setPhase] = useState<Phase>(reduced ? 'final' : 'roll');

  // Widths of the two tails in em, so the line re-centres smoothly while the font size changes
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
    const t1 = window.setTimeout(() => setPhase('crore'), ROLL_DONE_MS + HOLD_MS);
    const t2 = window.setTimeout(() => setPhase('final'), ROLL_DONE_MS + HOLD_MS + CRORE_HOLD_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduced]);

  const swapped = phase !== 'roll';
  const final = phase === 'final';
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div aria-hidden="true" className={align === 'center' ? 'text-center' : 'text-left'}>
      {/* Line 1: ₹1,00,00,000 → ₹1 Crore, then shrinks */}
      <p
        className={`font-extrabold leading-none tracking-[-0.04em] text-white [text-shadow:0_0_3.75rem_rgb(var(--glow)/0.55)] ${final ? 'text-[1.875rem] lg:text-[3.25rem]' : 'text-[2.875rem] lg:text-[5.75rem]'}`}
        style={{ transition: `font-size 0.7s ${ease}` }}
      >
        <Odometer text="₹1" label={POOL.amount} />
        <span
          className="relative inline-block h-[1em] overflow-hidden align-top"
          style={{
            width: widths ? `${swapped ? widths.crore : widths.zeros}em` : undefined,
            transition: `width 0.5s ${ease}`,
          }}
        >
          {/* the zeros slide up and out… */}
          <span
            ref={zerosRef}
            className="absolute left-0 top-0 inline-flex whitespace-nowrap"
            style={{ transform: swapped ? 'translateY(-110%)' : 'none', opacity: swapped ? 0 : 1, transition: `transform 0.5s ${ease}, opacity 0.35s ease` }}
          >
            <Odometer text=",00,00,000" label="" delayOffset={1} />
          </span>
          {/* …and "Crore" slides up into their place */}
          <span
            ref={croreRef}
            className="absolute left-0 top-0 inline-block whitespace-nowrap pl-[0.22em]"
            style={{ transform: swapped ? 'none' : 'translateY(110%)', opacity: swapped ? 1 : 0, transition: `transform 0.5s ${ease} 0.06s, opacity 0.35s ease 0.06s` }}
          >
            Crore
          </span>
          {/* keeps the line's height while both tails are absolutely positioned */}
          <span className="invisible inline-block">0</span>
        </span>
      </p>

      {/* Line 2: PRIDE POOL rises in, bigger */}
      <div className="grid" style={{ gridTemplateRows: final ? '1fr' : '0fr', transition: `grid-template-rows 0.7s ${ease}` }}>
        <div className="overflow-hidden">
          <p
            className="pb-[0.08em] pt-[0.12em] text-[3.25rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-grad-silver lg:text-[6.5rem]"
            style={{ transform: final ? 'none' : 'translateY(40%) scale(1.15)', opacity: final ? 1 : 0, transition: `transform 0.8s ${ease} 0.1s, opacity 0.5s ease 0.1s`, transformOrigin: align === 'center' ? 'center top' : 'left top' }}
          >
            {POOL.title}
          </p>
        </div>
      </div>
    </div>
  );
}
