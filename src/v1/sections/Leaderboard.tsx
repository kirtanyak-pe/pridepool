/**
 * DEMO DATA — illustrative only. Ranks 4–10 show by default,
 * the rest sit behind "Show more". Edit this list to change the table.
 */
const ROWS = [
  { rank: 4, name: 'CandleStorm', score: '8,120', pct: 83 },
  { rank: 5, name: 'TradePilot', score: '7,850', pct: 80 },
  { rank: 6, name: 'BullSignal', score: '7,420', pct: 75 },
  { rank: 7, name: 'ChartRider', score: '6,980', pct: 71 },
  { rank: 8, name: 'QuantumBull', score: '6,540', pct: 66 },
  { rank: 9, name: 'PipHunter', score: '6,120', pct: 62 },
  { rank: 10, name: 'TrendSmith', score: '5,890', pct: 60 },
  { rank: 11, name: 'GreenCandle', score: '5,410', pct: 55 },
  { rank: 12, name: 'RiskRanger', score: '5,070', pct: 52 },
];

type RowProps = { rank: number; name: string; score: string; pct: number; index: number };

/** One leaderboard row (rank 4+). `pct` = score as % of #1 (drives the bar). */
function Row({ rank, name, score, pct, index }: RowProps) {
  const delay = `${Math.min(0.06 + 0.045 * index, 0.3).toFixed(3)}s`;
  return (
    <li data-reveal="near" style={{ '--reveal-delay': delay }} className="group relative grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 transition-colors duration-200 hover:bg-black/[0.03] sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-5 sm:px-5 sm:py-3.5">
      <span aria-hidden="true" className="absolute inset-y-2 left-0 w-[3px] rounded-r-full bg-[#9a2fb3] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="inline-flex h-8 w-10 items-center justify-center rounded-lg border border-black/10 bg-black/[0.05] font-mono text-[0.8125rem] font-bold tabular-nums text-fg">
        <span className="sr-only">
          Rank{" "}
        </span>
        {rank}
      </span>
      <span className="flex min-w-0 items-center gap-3">
        <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#b145c9] to-[#4a1159] p-[1.5px]">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-white font-mono text-[0.6875rem] font-bold text-fg">
    {name.slice(0, 2).toUpperCase()}
    </span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.875rem] font-semibold text-fg sm:text-[0.9375rem]">
    {name}
    </span>
          <span aria-hidden="true" className="mt-1.5 block h-1.5 w-full max-w-[16rem] overflow-hidden rounded-full bg-black/[0.08]">
            <span className="block h-full rounded-full bg-gradient-to-r from-[#7b1f8f] to-[#c45fd8]" style={{ width: `${pct}%` }} />
          </span>
        </span>
      </span>
      <span className="text-right">
        <span className="block font-mono text-[0.9375rem] font-bold tabular-nums text-fg">
          <span className="sr-only">
            score{" "}
          </span>
          {score}
        </span>
        <span aria-hidden="true" className="block font-mono text-[0.625rem] tabular-nums text-fg-subtle">
          {pct}% of #1
        </span>
      </span>
    </li>
  );
}

export default function Leaderboard() {
  return (
    <section id="leaderboard" aria-labelledby="leaderboard-heading" className="arena-container relative pb-20 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[50rem] max-w-full -translate-x-1/2 opacity-80 blur-[110px]" style={{ background: "radial-gradient(closest-side, var(--color-violet-deep), transparent)" }} />
      <div data-reveal="true" className="relative text-center">
        <p className="inline-flex items-center gap-2.5 rounded-full neu-inset px-4 py-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-fg-muted backdrop-blur-sm">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet" />
          <span data-placeholder="true">
            Tournament standings
          </span>
        </p>
        <h2 id="leaderboard-heading" className="mt-5 text-[clamp(1.75rem,5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-fg [text-shadow:0_0_60px_rgba(177,69,201,0.55)]">
          The Leaderboard
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-[0.9375rem] leading-relaxed text-fg-muted">
          A preview of how standings will look. The live leaderboard goes up once ranking rules and a verified data source are approved.
        </p>
      </div>
      <div data-reveal="true" style={{ "--reveal-delay": "0.08s" }} className="relative mt-8 overflow-hidden rounded-xl border border-accent/30 neu-raised">
        <p className="flex flex-col items-center gap-2 px-4 py-3.5 text-center sm:flex-row sm:gap-3.5 sm:px-5 sm:text-left">
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.625rem] font-extrabold uppercase tracking-[0.14em] text-fg-on-accent">
            Demo data · Preview only
          </span>
          <span className="text-[0.8125rem] leading-relaxed text-accent">
            Illustrative leaderboard data for design preview only. These are not actual participants, rankings, or campaign scores.
          </span>
        </p>
      </div>
      <div className="relative mt-4 overflow-hidden rounded-3xl key-light">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div data-reveal="true" style={{ "--reveal-delay": "0.14s" }} className="flex items-center justify-between gap-4 border-b border-border-subtle bg-black/[0.025] px-5 py-4 sm:px-7">
          <p className="flex items-center gap-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-fg">
            <span aria-hidden="true" className="text-accent">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                <path d="M12 3v18M12 21c-4 0-7-3-7-7 3.5 0 7 2 7 7Zm0 0c4 0 7-3 7-7-3.5 0-7 2-7 7Zm0-8c-3 0-5.5-2.2-5.5-5.5C9.5 7.5 12 9.5 12 13Zm0 0c3 0 5.5-2.2 5.5-5.5C14.5 7.5 12 9.5 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Standings
          </p>
          <p className="flex items-center gap-2 rounded-full neu-inset px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Sample
          </p>
        </div>
        <div className="px-3 pt-5 sm:px-7 sm:pt-6">
          <ol aria-label="Top three, demo data" className="isolate grid grid-cols-3 items-end gap-2 sm:gap-4">
            <li data-reveal="near" style={{ "--reveal-delay": "0.48s", "--key-side": "#d4a24c" }} className="relative min-w-0 rounded-xl border border-gold/45 py-7 sm:py-9 order-2 key-cap mb-2 px-2 text-center sm:px-4">
              <span aria-hidden="true" className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl opacity-70 blur-2xl" style={{ background: "radial-gradient(closest-side, rgba(255,201,120,0.55), transparent)" }} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-xl" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,201,120,0.40), transparent)" }} />
              <span aria-hidden="true" className="relative mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/45 key-cap-sm text-gold">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
                  <path d="M4 17h16M4 17 3 7l5 3.5L12 5l4 5.5L21 7l-1 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="relative block font-mono text-2xl font-bold leading-none sm:text-[1.75rem] text-gold">
                1
              </span>
              <span className="sr-only">
                First place, demo data
              </span>
              <p className="relative mt-2.5 truncate text-[0.8125rem] font-bold text-fg sm:text-[0.9375rem]">
                AlphaTrader
              </p>
              <p className="relative mt-1 font-mono text-[0.8125rem] font-bold tabular-nums sm:text-sm text-gold">
                <span className="count-up" style={{ "--to": "9840" }}>
                  <span className="count-up-value">
                    9,840
                  </span>
                </span>
              </p>
            </li>
            <li data-reveal="near" style={{ "--reveal-delay": "0.34s", "--key-side": "#b4b4c2" }} className="relative min-w-0 rounded-xl border border-silver/35 py-5 sm:py-6 order-1 key-cap mb-2 px-2 text-center sm:px-4">
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-xl" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(217,217,232,0.26), transparent)" }} />
              <span aria-hidden="true" className="relative mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-silver/35 key-cap-sm text-silver">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
                  <path d="M12 14a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 0V9M8 3h8l-2.5 6h-3L8 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="relative block font-mono text-2xl font-bold leading-none sm:text-[1.75rem] text-silver">
                2
              </span>
              <span className="sr-only">
                Second place, demo data
              </span>
              <p className="relative mt-2.5 truncate text-[0.8125rem] font-bold text-fg sm:text-[0.9375rem]">
                BullRunner
              </p>
              <p className="relative mt-1 font-mono text-[0.8125rem] font-bold tabular-nums sm:text-sm text-silver">
                <span className="count-up" style={{ "--to": "9210" }}>
                  <span className="count-up-value">
                    9,210
                  </span>
                </span>
              </p>
            </li>
            <li data-reveal="near" style={{ "--reveal-delay": "0.22s", "--key-side": "#c98c5c" }} className="relative min-w-0 rounded-xl border border-bronze/35 py-4 sm:py-5 order-3 key-cap mb-2 px-2 text-center sm:px-4">
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-xl" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(224,154,98,0.28), transparent)" }} />
              <span aria-hidden="true" className="relative mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-bronze/35 key-cap-sm text-bronze">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
                  <path d="M12 14a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 0V9M8 3h8l-2.5 6h-3L8 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="relative block font-mono text-2xl font-bold leading-none sm:text-[1.75rem] text-bronze">
                3
              </span>
              <span className="sr-only">
                Third place, demo data
              </span>
              <p className="relative mt-2.5 truncate text-[0.8125rem] font-bold text-fg sm:text-[0.9375rem]">
                MarketNinja
              </p>
              <p className="relative mt-1 font-mono text-[0.8125rem] font-bold tabular-nums sm:text-sm text-bronze">
                <span className="count-up" style={{ "--to": "8760" }}>
                  <span className="count-up-value">
                    8,760
                  </span>
                </span>
              </p>
            </li>
          </ol>
        </div>
        <div className="mt-6 px-3 pb-5 sm:px-7 sm:pb-6">
          <div aria-hidden="true" className="mb-2.5 grid grid-cols-[2.75rem_minmax(0,1fr)_auto] gap-3 border-b border-border-subtle px-3 pb-2.5 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-fg-subtle sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-4 sm:px-4">
            <span data-placeholder="true">
              Rank
            </span>
            <span data-placeholder="true">
              Participant
            </span>
            <span data-placeholder="true">
              Score
            </span>
          </div>
          <ol start={4} aria-label="Demo leaderboard. Illustrative data for design preview only — not actual participants or scores." className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.08] bg-white/70">
            {ROWS.slice(0, 7).map((row, i) => <Row key={row.rank} {...row} index={i} />)}
          </ol>
          <details className="group mt-2.5">
            <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full key-cap relative px-5 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-fg-muted hover:text-fg [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">
                Show more ({ROWS.length - 7})
              </span>
              <span className="hidden group-open:inline">
                Show fewer
              </span>
              <svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" fill="none" className="transition-transform duration-200 group-open:rotate-180">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-2.5">
              <ol start={11} aria-label="Demo leaderboard. Illustrative data for design preview only — not actual participants or scores." className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.08] bg-white/70">
                {ROWS.slice(7).map((row, i) => <Row key={row.rank} {...row} index={i} />)}
              </ol>
            </div>
          </details>
        </div>
        <p className="border-t border-border-subtle bg-black/[0.025] px-5 py-3 text-center text-[0.6875rem] leading-relaxed text-fg-subtle sm:px-7">
          Sample data shown for layout purposes. Not actual participants, rankings, or scores.
        </p>
      </div>
    </section>
  );
}
