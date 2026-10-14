import { useId, useState } from 'react';

/** V3 FAQ: trimmed to the 5 questions that decide a join, trust questions first. Copy from the original site. */
const FAQS = [
  {
    q: 'How do I join?',
    a: 'Tap “Join the ₹1 Crore Pool”. That is the only step on this page — there is no form to fill in. Existing Lemonn customers are part of the pool automatically.',
  },
  {
    q: 'Do I need to share my mobile number or an OTP here?',
    a: 'No. This page does not ask for a mobile number, an OTP or any other personal details.',
  },
  {
    q: 'What is the ₹1 Crore Brokerage Credits Pool?',
    a: "It celebrates Anish Singh Thakur's achievement at the World Trading Championship. The allocation, eligibility, and redemption rules will be in the final campaign terms.",
  },
  {
    q: 'Who can participate?',
    a: 'Eligibility for new and existing Lemonn users will be confirmed in the final campaign terms.',
  },
  {
    q: 'Is there a laptop giveaway?',
    a: 'Yes. 20 laptops will be given away to participants. How winners are chosen, who is eligible and when results are announced will be published in the terms.',
  },
];

export default function Faqs() {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="arena-container relative pb-20 lg:pb-28">
      <div className="relative mx-auto max-w-3xl">
        <div data-reveal="true" className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
            FAQ
          </p>
          <h2 id="faqs-heading" className="mt-4 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-fg">
            Questions before you join
          </h2>
        </div>

        <ul className="mt-8 space-y-2.5 lg:mt-10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} data-reveal="near" style={{ '--reveal-delay': `${0.05 * i}s` }} className={`overflow-hidden rounded-xl ${isOpen ? 'neu-inset' : 'neu-raised'}`}>
                <h3>
                  <button
                    type="button"
                    id={`${id}-q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-a${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-5"
                  >
                    <span className={`text-[0.9375rem] font-bold leading-snug ${isOpen ? 'text-accent' : 'text-fg'}`}>{item.q}</span>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true" className={`shrink-0 text-fg-subtle transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <path d="M3.5 6 8 10.5 12.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                <div id={`${id}-a${i}`} role="region" aria-labelledby={`${id}-q${i}`} inert={!isOpen} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-[0.875rem] leading-relaxed text-fg-muted sm:px-5 sm:pb-5">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-center text-sm text-fg-subtle">
          Full rules: <a href="terms-and-conditions" className="inline-flex min-h-12 items-center font-semibold text-fg-muted underline decoration-white/30 underline-offset-4 hover:text-fg">Campaign terms</a>
        </p>
      </div>
    </section>
  );
}
