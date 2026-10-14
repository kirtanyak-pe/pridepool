import { useEffect, useRef, useState } from 'react';
import type { Accent, Version } from './settings';

const VERSION_OPTIONS: { value: Version; label: string }[] = [
  { value: 'v1', label: 'Original' },
  { value: 'v2', label: 'Redesign' },
];

const ACCENT_OPTIONS: { value: Accent; label: string; swatch: string }[] = [
  { value: 'violet', label: 'Violet', swatch: '#c45fd8' },
  { value: 'lime', label: 'Lime', swatch: '#a1e600' },
  { value: 'green', label: 'Green', swatch: '#4ade80' },
];

type Props = {
  version: Version;
  onVersionChange: (v: Version) => void;
  accent: Accent;
  onAccentChange: (a: Accent) => void;
};

/** A row of segmented buttons (radio group). */
function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
  disabled = false,
}: {
  label: string;
  options: { value: T; label: string; swatch?: string }[];
  value: T;
  onChange: (v: T) => void;
  disabled?: boolean;
}) {
  return (
    <div role="radiogroup" aria-label={label} aria-disabled={disabled} className={`grid gap-1 rounded-xl bg-white/10 p-1 ${disabled ? 'opacity-40' : ''}`} style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={disabled}
            onClick={() => onChange(o.value)}
            className={`flex h-10 items-center justify-center gap-1.5 rounded-lg text-sm font-semibold transition-colors ${selected ? 'bg-white text-neutral-900' : 'text-white/75 enabled:hover:text-white'}`}
          >
            {o.swatch && <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full ring-1 ring-black/20" style={{ background: o.swatch }} />}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * PROTOTYPE ONLY: floating control (top right) to flip between the original page and the redesign,
 * and to try accent colours on the redesign.
 * Deliberately styled unlike the site so nobody mistakes it for part of the campaign.
 * Remove this folder and its lines in main.tsx before shipping.
 */
export default function VersionSwitcher({ version, onVersionChange, accent, onAccentChange }: Props) {
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

  const versionLabel = VERSION_OPTIONS.find((o) => o.value === version)!.label;

  return (
    <div ref={rootRef} className="fixed right-2 top-2 z-[100] font-sans" style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="proto-panel"
        aria-label={`Prototype version: ${versionLabel}. Change version or accent`}
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
          className="absolute right-1 top-14 w-72 rounded-2xl border border-white/15 bg-neutral-900/95 p-4 text-left text-white shadow-2xl backdrop-blur-md"
        >
          <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white/50">Prototype controls</p>
          <p className="mt-1 text-xs text-white/60">Only for testing. Not part of the website.</p>

          <p className="mt-4 text-xs font-semibold text-white/80">Version</p>
          <div className="mt-1.5">
            <Segmented
              label="Page version"
              options={VERSION_OPTIONS}
              value={version}
              onChange={(v) => {
                onVersionChange(v);
                setOpen(false);
              }}
            />
          </div>

          <p className="mt-4 text-xs font-semibold text-white/80">Accent colour {version === 'v1' && <span className="font-normal text-white/50">· Redesign only</span>}</p>
          <div className="mt-1.5">
            <Segmented label="Accent colour" options={ACCENT_OPTIONS} value={accent} onChange={onAccentChange} disabled={version === 'v1'} />
          </div>

          <p className="mt-4 text-[0.6875rem] leading-snug text-white/45">
            Share exactly what you see: the link updates as you switch (<code className="text-white/70">?v=2&amp;accent=lime</code>).
          </p>
        </div>
      )}
    </div>
  );
}
