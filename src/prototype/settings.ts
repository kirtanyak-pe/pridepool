import { useCallback, useLayoutEffect, useState } from 'react';

/**
 * PROTOTYPE ONLY: what the switcher (top right) controls.
 *   version: v1 = Original (the live site as it was), v2 = Redesign
 *   accent:  the redesign's accent colour (the Original always stays violet)
 * Read from the URL (?v=2&accent=lime), else the last choice on this device, else the defaults.
 */
export type Version = 'v1' | 'v2';
export type Accent = 'violet' | 'lime' | 'green';

const DEFAULTS = { version: 'v2' as Version, accent: 'lime' as Accent };
const VERSIONS: Version[] = ['v1', 'v2'];
const ACCENTS: Accent[] = ['violet', 'lime', 'green'];

function load<T extends string>(param: string, key: string, allowed: T[], map: (raw: string) => string, fallback: T): T {
  const fromUrl = new URLSearchParams(window.location.search).get(param);
  if (fromUrl && allowed.includes(map(fromUrl) as T)) return map(fromUrl) as T;
  try {
    const saved = localStorage.getItem(key);
    if (saved && allowed.includes(saved as T)) return saved as T;
  } catch {
    // storage blocked (private mode etc.) — use the default
  }
  return fallback;
}

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

/** Keep the current choice in the URL so a shared link opens the same thing. */
function syncUrl(version: Version, accent: Accent) {
  const url = new URL(window.location.href);
  url.searchParams.set('v', version === 'v1' ? '1' : '2');
  if (version === 'v2') url.searchParams.set('accent', accent);
  else url.searchParams.delete('accent');
  url.hash = '';
  window.history.replaceState(null, '', url);
}

export function usePrototypeSettings() {
  const [version, setVersionState] = useState<Version>(() =>
    load('v', 'pridepool:version', VERSIONS, (raw) => (raw === '1' ? 'v1' : raw === '2' ? 'v2' : raw), DEFAULTS.version),
  );
  const [accent, setAccentState] = useState<Accent>(() =>
    load('accent', 'pridepool:accent', ACCENTS, (raw) => raw, DEFAULTS.accent),
  );

  // Apply the accent before paint (no flash of the wrong colour). The Original is always violet.
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (version === 'v2' && accent !== 'violet') root.dataset.accent = accent;
    else delete root.dataset.accent;
  }, [version, accent]);

  const setVersion = useCallback(
    (next: Version) => {
      setVersionState(next);
      save('pridepool:version', next);
      syncUrl(next, accent);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [accent],
  );

  const setAccent = useCallback(
    (next: Accent) => {
      setAccentState(next);
      save('pridepool:accent', next);
      syncUrl(version, next);
    },
    [version],
  );

  return { version, setVersion, accent, setAccent };
}
