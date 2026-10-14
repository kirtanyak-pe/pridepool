import VideoMoment from '../components/VideoMoment';
import { ANISH } from '../content';

/**
 * Round 1 · The Champion — who Anish is and why we're celebrating.
 * A game-style player card, his two lines from the stage as a two-beat story, and the video.
 * (Keeps id="moment" so existing links to #moment still land here.)
 */

function PlayerCard() {
  return (
    <div data-reveal="true" className="relative mx-auto w-full max-w-[20rem] lg:max-w-[24rem]">
      <div aria-hidden="true" className="arena-halo absolute -inset-3 -z-10 rounded-[2rem] bg-silver/20 blur-2xl" />
      {/* Silver frame = his #2 finish, same metal as the leaderboard podium */}
      <div className="rounded-[1.75rem] p-[2px]" style={{ background: 'linear-gradient(160deg, #ffffff 0%, var(--color-silver) 30%, #6f6f82 70%, var(--color-silver) 100%)' }}>
        <div className="relative overflow-hidden rounded-[calc(1.75rem-2px)] bg-bg">
          {/* Portrait */}
          <div className="relative h-[17rem] overflow-hidden lg:h-[20rem]">
            <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 35%, rgb(var(--glow-deep)/0.7), transparent 75%)' }} />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'linear-gradient(var(--color-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-violet) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />
            <img
              src="anish.webp"
              alt={ANISH.name}
              width="629"
              height="904"
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 select-none"
              style={{ maskImage: 'linear-gradient(to bottom, #000 70%, transparent 98%)', WebkitMaskImage: 'linear-gradient(to bottom, #000 70%, transparent 98%)' }}
            />
            {/* Rank badge */}
            <div className="absolute left-3 top-3 flex flex-col items-center rounded-xl border border-white/60 px-2.5 py-1.5 text-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_0_#8f8fa3,0_10px_18px_-6px_rgba(0,0,0,0.8)]" style={{ background: 'linear-gradient(160deg, #ffffff, var(--color-silver) 55%, #a9a9bd)' }}>
              <span className="text-[0.5rem] font-extrabold uppercase leading-none tracking-[0.18em] opacity-70">World</span>
              <span className="text-[1.375rem] font-extrabold leading-none tracking-[-0.04em]">{ANISH.rank}</span>
            </div>
            <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-bg/70 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-fg-muted backdrop-blur-sm">
              Player card
            </span>
          </div>

          {/* Name + stats */}
          <div className="relative border-t border-white/10 px-4 pb-4 pt-3.5">
            <p className="text-xl font-extrabold tracking-[-0.02em] text-fg">{ANISH.name}</p>
            <dl className="mt-3 grid grid-cols-[1fr_1.7fr_1fr] gap-2 text-center">
              {[
                { label: 'World rank', value: ANISH.rank },
                { label: 'Team', value: ANISH.team },
                { label: 'Event', value: 'WTC' },
              ].map((stat) => (
                <div key={stat.label} className="neu-inset rounded-lg px-1 py-2">
                  <dt className="text-[0.5625rem] font-bold uppercase tracking-[0.16em] text-fg-subtle">{stat.label}</dt>
                  <dd className="mt-0.5 truncate text-[0.8125rem] font-bold text-fg">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Champion() {
  return (
    <section id="moment" aria-labelledby="champion-heading" className="arena-container relative pb-20 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-[36rem] max-w-full -translate-x-1/2 opacity-60 blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, var(--color-violet-deep), transparent)' }}
      />

      <div data-reveal="true" className="relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
          Round 1 · The Champion
        </p>
        <h2
          id="champion-heading"
          className="mx-auto mt-4 max-w-[18ch] text-balance text-[clamp(1.875rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-fg [text-shadow:0_0_50px_rgb(var(--glow)/0.45)]"
        >
          One minute from the world title
        </h2>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16">
        <PlayerCard />

        <div className="mx-auto w-full max-w-[30rem] lg:mx-0">
          {/* Two beats: what he came for → how close he got */}
          <ol className="relative space-y-6 border-l border-white/10 pl-6">
            <li data-reveal="near" className="relative">
              <span aria-hidden="true" className="absolute -left-[1.8rem] top-1.5 h-2.5 w-2.5 rounded-full border border-white/30 bg-bg" />
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-fg-subtle">Before the final</p>
              <blockquote className="mt-1.5 text-lg font-semibold leading-snug text-fg-muted">“{ANISH.quoteBefore}”</blockquote>
            </li>
            <li data-reveal="near" className="relative" style={{ '--reveal-delay': '0.12s' }}>
              <span aria-hidden="true" className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full bg-silver shadow-[0_0_12px_2px_rgba(217,217,232,0.6)]" />
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-silver">After the final · World {ANISH.rank}</p>
              <blockquote className="mt-1.5 text-[1.375rem] font-extrabold leading-tight tracking-[-0.02em] text-fg lg:text-2xl">“{ANISH.quoteAfter}”</blockquote>
            </li>
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-fg-subtle">
            {ANISH.name} of {ANISH.team}, on stage at the {ANISH.event}.
          </p>

          <div data-reveal="near" className="mt-6">
            <VideoMoment id={ANISH.videoId} title={`${ANISH.name} on stage at the ${ANISH.event}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
