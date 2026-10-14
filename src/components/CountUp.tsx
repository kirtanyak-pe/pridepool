import { useEffect, useRef, useState } from 'react';

const TARGET = 1e7; // ₹1 Crore
const fmt = new Intl.NumberFormat('en-IN');

/** Counts 0 → ₹1,00,00,000 once the number scrolls into view. */
export default function CountUp() {
  const [value, setValue] = useState(TARGET);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 2400, 1);
          setValue(Math.round(TARGET * (1 - Math.pow(1 - t, 4))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setValue(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        ₹{fmt.format(value)}
      </span>
      <span className="sr-only">₹1 Crore</span>
    </>
  );
}
