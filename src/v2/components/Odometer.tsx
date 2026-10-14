/** Slot-machine number: each digit rolls up and lands (styles: .odo-strip in index.css). */
export default function Odometer({ text, label }: { text: string; label: string }) {
  let digitIndex = 0;
  return (
    <span aria-label={label} role="img" className="inline-flex leading-none tabular-nums">
      {[...text].map((ch, i) => {
        if (!/\d/.test(ch)) return <span key={i} aria-hidden="true">{ch}</span>;
        const delay = `${digitIndex++ * 70}ms`;
        return (
          <span key={i} aria-hidden="true" className="inline-block h-[1em] overflow-hidden">
            <span className="odo-strip block" style={{ '--d': Number(ch), animationDelay: delay }}>
              {Array.from({ length: 20 }, (_, n) => (
                <span key={n} className="block h-[1em]">{n % 10}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
