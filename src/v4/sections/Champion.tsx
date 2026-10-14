import { useEffect, useRef, useState } from 'react';
import { ANISH } from '../content';

/**
 * V3 Round 1 · The Champion — the moment itself, embedded.
 * A silver-framed "replay" card holds the YouTube Short (plays right here, nobody leaves the page);
 * beside it, his two lines from the stage as a two-beat story.
 * Keeps id="moment" so links to #moment still land here.
 */

function MomentCard() {
  return (
    <div data-reveal="true" className="relative mx-auto w-full max-w-[17.5rem] lg:max-w-[22rem]">
      <div aria-hidden="true" className="arena-halo absolute -inset-4 -z-10 rounded-[2.25rem] bg-silver/20 blur-2xl" />
      {/* Silver frame = his #2 finish, same metal as the podium */}
      <div className="rounded-[1.75rem] p-[2px]" style={{ background: 'linear-gradient(160deg, #ffffff 0%, var(--color-silver) 30%, #6f6f82 70%, var(--color-silver) 100%)' }}>
        <div className="overflow-hidden rounded-[calc(1.75rem-2px)] bg-bg">
          {/* Replay bar */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
            <span className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-fg-muted">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#f2545b] opacity-70 motion-reduce:hidden" />
                <span className="relative h-2 w-2 rounded-full bg-[#f2545b]" />
              </span>
              Replay · the moment
            </span>
            <span className="rounded-md border border-white/60 px-1.5 py-0.5 text-[0.625rem] font-extrabold uppercase tracking-[0.12em] text-bg" style={{ background: 'linear-gradient(160deg, #ffffff, var(--color-silver) 55%, #a9a9bd)' }}>
              World {ANISH.rank}
            </span>
          </div>

          {/* The embedded YouTube Short (loads when it scrolls near) */}
          <div className="relative aspect-[9/16] bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ANISH.videoId}?rel=0&modestbranding=1&playsinline=1`}
              title={`${ANISH.name} on stage at the ${ANISH.event}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Caption */}
          <div className="border-t border-white/10 px-4 py-3">
            <p className="text-base font-extrabold tracking-[-0.02em] text-fg">{ANISH.name}</p>
            <p className="mt-0.5 text-[0.75rem] font-semibold text-fg-subtle">
              {ANISH.team} · {ANISH.event}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const SWAP_AFTER_MS = 1000; // first quote holds the stage this long once the section is in view

/** One beat of the story. The active beat is big; the other steps back. */
function Beat({ active, label, quote, delay }: { active: boolean; label: string; quote: string; delay?: string }) {
  return (
    <li data-reveal="near" className="relative" style={delay ? { '--reveal-delay': delay } : undefined}>
      <span
        aria-hidden="true"
        className={`absolute top-1.5 rounded-full transition-all duration-500 ${active ? '-left-[1.85rem] h-3 w-3 bg-silver shadow-[0_0_12px_2px_rgba(217,217,232,0.6)]' : '-left-[1.8rem] h-2.5 w-2.5 border border-white/30 bg-bg'}`}
      />
      <p className={`text-[0.625rem] font-bold uppercase tracking-[0.18em] transition-colors duration-500 ${active ? 'text-silver' : 'text-fg-subtle'}`}>{label}</p>
      <blockquote
        className={`mt-1.5 tracking-[-0.02em] ${active ? 'text-[1.5rem] font-extrabold leading-tight text-fg lg:text-[2rem]' : 'text-base font-semibold leading-snug text-fg-muted lg:text-lg'}`}
        style={{ transition: `font-size 0.6s ${EASE}, color 0.6s ease, font-weight 0.6s ease` }}
      >
        “{quote}”
      </blockquote>
    </li>
  );
}

export default function Champion() {
  const ref = useRef<HTMLElement>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 0 = "I came here to become the champion." is big; 1 = "One more minute…" is big
  const [beat, setBeat] = useState<0 | 1>(reduced ? 1 : 0);

  // Once the section is in view, hold the first line for a second, then hand the stage to the second.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => setBeat(1), SWAP_AFTER_MS);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [reduced]);

  return (
    <section ref={ref} id="moment" aria-labelledby="champion-heading" className="arena-container relative pb-20 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-[36rem] max-w-full -translate-x-1/2 opacity-60 blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--color-violet-deep), transparent)' }}
      />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        {/* The video card: below the heading on phones, left column on desktop */}
        <div className="order-2 lg:order-none">
          <MomentCard />
        </div>

        {/* Heading + story. On phones this wrapper dissolves so the heading can sit above the card. */}
        <div className="contents lg:block lg:self-center">
          <div data-reveal="true" className="order-1 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
              Round 1 · The Champion
            </p>
            <h2
              id="champion-heading"
              className="mx-auto mt-4 max-w-[18ch] text-balance text-[clamp(1.875rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-fg [text-shadow:0_0_50px_rgb(var(--glow)/0.45)] lg:mx-0"
            >
              One minute from the world title
            </h2>
          </div>

          <div className="order-3 mx-auto w-full max-w-[30rem] lg:mx-0 lg:mt-8 lg:max-w-[34rem]">
            {/* Two beats: the first line takes the stage, then hands it to the second */}
            <ol className="relative space-y-6 border-l border-white/10 pl-6">
              <Beat active={beat === 0} label="Before the final" quote={ANISH.quoteBefore} />
              <Beat active={beat === 1} label={`After the final · World ${ANISH.rank}`} quote={ANISH.quoteAfter} delay="0.12s" />
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-fg-subtle lg:text-base">
              {ANISH.name} of {ANISH.team}, on stage at the {ANISH.event}. Watch the moment in the card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
