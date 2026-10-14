import { ANISH, LAPTOPS, POOL } from '../content';

/**
 * Stock-ticker strip with campaign "symbols" — the first thing a trader recognises.
 * Only campaign facts, never market prices.
 */
const ITEMS = [
  { symbol: 'PRIDE POOL', value: '₹1,00,00,000' },
  { symbol: 'WORLD RANK', value: `ANISH ${ANISH.rank}` },
  { symbol: 'LAPTOPS', value: `${LAPTOPS.count} TO WIN` },
  { symbol: 'CREDITS', value: `${POOL.short} BROKERAGE` },
  { symbol: 'LEMONN × BB', value: 'COLLAB' },
];

function Items({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item.symbol} className="flex items-center gap-2 whitespace-nowrap px-4 font-mono text-[0.6875rem] tracking-[0.04em]">
          <span className="font-bold text-fg-muted">{item.symbol}</span>
          <span className="font-bold text-fg">{item.value}</span>
          <span className="text-success" aria-hidden="true">▲</span>
          <span aria-hidden="true" className="ml-2 h-3 w-px bg-white/15" />
        </li>
      ))}
    </ul>
  );
}

export default function TickerTape() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-white/[0.02] py-1.5">
      <div className="ticker-track flex w-max">
        <Items />
        <Items hidden />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-bg to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
