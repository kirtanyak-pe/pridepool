import { useEffect, useRef, useState } from 'react';
import type { Version } from './version';

const OPTIONS: { value: Version; label: string }[] = [
  { value: 'v1', label: 'Original' },
  { value: 'v2', label: 'Redesign' },
];

/**
 * PROTOTYPE ONLY: floating control (top right) to flip between the original page and the redesign.
 * Deliberately styled unlike the site so nobody mistakes it for part of the campaign.
 * Remove this folder and its two lines in main.tsx before shipping.
 */
export default function VersionSwitcher({ version, onChange }: { version: Version; onChange: (v: Version) => void }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = OPTIONS.find((o) => o.value === version)!;

  return (
    <div ref={rootRef} className="fixed right-2 top-2 z-[100] font-sans" style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="proto-panel"
        aria-label={`Prototype version: ${current.label}. Change version`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-12 items-center justify-center"
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-white/40 bg-neutral-900/85 text-white shadow-lg backdrop-blur-md">
          {/* sliders icon */}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
            <circle cx="16" cy="7" r="2" />
            <circle cx="10" cy="17" r="2" />
          </svg>
          <span className="absolute -bottom-1 -right-1 rounded-full bg-white px-1 text-[0.5625rem] font-bold leading-[14px] text-neutral-900">
            {version === 'v1' ? 'V1' : 'V2'}
          </span>
        </span>
      </button>

      {open && (
        <div
          id="proto-panel"
          className="absolute right-1 top-14 w-64 rounded-2xl border border-white/15 bg-neutral-900/95 p-4 text-left text-white shadow-2xl backdrop-blur-md"
        >
          <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white/50">Prototype controls</p>
          <p className="mt-1 text-xs text-white/60">Only for testing. Not part of the website.</p>

          <div role="radiogroup" aria-label="Page version" className="mt-3 grid grid-cols-2 gap-1 rounded-xl bg-white/10 p-1">
            {OPTIONS.map((o) => {
              const selected = o.value === version;
              return (
                <button
                  key={o.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                  className={`h-10 rounded-lg text-sm font-semibold transition-colors ${selected ? 'bg-white text-neutral-900' : 'text-white/75 hover:text-white'}`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-[0.6875rem] leading-snug text-white/45">
            Share a version directly: add <code className="text-white/70">?v=1</code> or <code className="text-white/70">?v=2</code> to the link.
          </p>
        </div>
      )}
    </div>
  );
}
