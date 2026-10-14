/**
 * Decorative candlestick chart: an uptrend whose price axis climbs to ₹1 Cr — the pool.
 * Candles grow one by one, a trend line draws on, the last candle pulses "live".
 * Trading colours (green up / red down) stay fixed, whatever the theme.
 */

const UP = '#3dd68c';
const DOWN = '#f2545b';

// Hand-tuned uptrend (y grows downward in SVG): [open, close, high, low]
const CANDLES: [number, number, number, number][] = [
  [140, 132, 128, 146], [132, 136, 127, 140], [136, 124, 120, 139], [124, 118, 112, 128],
  [118, 122, 114, 127], [122, 108, 104, 125], [108, 100, 95, 112], [100, 104, 96, 110],
  [104, 90, 86, 107], [90, 82, 76, 94], [82, 86, 78, 92], [86, 72, 66, 89],
  [72, 64, 58, 76], [64, 68, 60, 73], [68, 52, 46, 71], [52, 44, 38, 56],
  [44, 48, 40, 53], [48, 34, 28, 51],
];

const GRID = [
  { y: 34, label: '₹1 Cr' },
  { y: 69, label: '₹75 L' },
  { y: 104, label: '₹50 L' },
  { y: 139, label: '₹25 L' },
];

export default function CandleBackdrop({ className = '' }: { className?: string }) {
  const step = 17;
  const width = 9;
  const closes = CANDLES.map(([, c], i) => `${i === 0 ? 'M' : 'L'}${i * step + 8 + width / 2} ${c}`).join(' ');

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 160"
      preserveAspectRatio="xMidYMax meet"
      className={`pointer-events-none ${className}`}
    >
      {GRID.map((g) => (
        <g key={g.y}>
          <line x1="0" x2="314" y1={g.y} y2={g.y} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 4" />
          <text x="338" y={g.y + 2.5} textAnchor="end" fontSize="7" fontFamily="ui-monospace, monospace" fill="currentColor" fillOpacity="0.45">
            {g.label}
          </text>
        </g>
      ))}

      {CANDLES.map(([o, c, h, l], i) => {
        const x = i * step + 8;
        const up = c < o;
        const color = up ? UP : DOWN;
        const last = i === CANDLES.length - 1;
        return (
          <g key={i} className={`candle-grow ${last ? 'candle-live' : ''}`} style={{ animationDelay: `${i * 85}ms` }}>
            <line x1={x + width / 2} x2={x + width / 2} y1={h} y2={l} stroke={color} strokeWidth="1" />
            <rect x={x} y={Math.min(o, c)} width={width} height={Math.max(2, Math.abs(o - c))} rx="1" fill={color} fillOpacity={up ? 0.9 : 0.75} />
          </g>
        );
      })}

      <path d={closes} pathLength={1} className="chart-draw" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
