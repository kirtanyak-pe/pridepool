import { useCallback, useLayoutEffect, useState } from 'react';

/**
 * PROTOTYPE ONLY: what the switcher (top right) controls.
 *   version: v1 = Original (the live site as it was), v2 = Redesign
 *   accent:  the redesign's accent colour: Join buttons, chips, checkmarks (the Original always stays violet)
 *   bg:      the redesign's background colour: glows, grid, leaderboard bars (the Original always stays violet)
 *   hero:    the redesign's first screen: story mode (animated scenes) or trailer (static)
 * Read from the URL (?v=2&accent=lime&bg=violet), else the last choice on this device, else the defaults.
 */
export type Version = 'v1' | 'v2';
export type Accent = 'violet' | 'lime' | 'green';
export type Bg = 'violet' | 'green' | 'blue' | 'graphite';
export type HeroStyle = 'story' | 'trailer';

const DEFAULTS = { version: 'v2' as Version, accent: 'lime' as Accent, bg: 'violet' as Bg, hero: 'story' as HeroStyle };
const VERSIONS: Version[] = ['v1', 'v2'];
const ACCENTS: Accent[] = ['violet', 'lime', 'green'];
const BGS: Bg[] = ['violet', 'green', 'blue', 'graphite'];
const HEROES: HeroStyle[] = ['story', 'trailer'];

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
function syncUrl(version: Version, accent: Accent, bg: Bg, hero: HeroStyle) {
  const url = new URL(window.location.href);
  url.searchParams.set('v', version === 'v1' ? '1' : '2');
  if (version === 'v2') {
    url.searchParams.set('accent', accent);
    url.searchParams.set('bg', bg);
    url.searchParams.set('hero', hero);
  } else {
    url.searchParams.delete('accent');
    url.searchParams.delete('bg');
    url.searchParams.delete('hero');
  }
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
  const [bg, setBgState] = useState<Bg>(() => load('bg', 'pridepool:bg', BGS, (raw) => raw, DEFAULTS.bg));
  const [hero, setHeroState] = useState<HeroStyle>(() => load('hero', 'pridepool:hero', HEROES, (raw) => raw, DEFAULTS.hero));

  // Apply the colours before paint (no flash of the wrong colour). The Original is always violet.
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (version === 'v2' && accent !== 'violet') root.dataset.accent = accent;
    else delete root.dataset.accent;
    if (version === 'v2' && bg !== 'violet') root.dataset.bg = bg;
    else delete root.dataset.bg;
  }, [version, accent, bg]);

  const setVersion = useCallback(
    (next: Version) => {
      setVersionState(next);
      save('pridepool:version', next);
      syncUrl(next, accent, bg, hero);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [accent, bg, hero],
  );

  const setAccent = useCallback(
    (next: Accent) => {
      setAccentState(next);
      save('pridepool:accent', next);
      syncUrl(version, next, bg, hero);
    },
    [version, bg, hero],
  );

  const setBg = useCallback(
    (next: Bg) => {
      setBgState(next);
      save('pridepool:bg', next);
      syncUrl(version, accent, next, hero);
    },
    [version, accent, hero],
  );

  const setHero = useCallback(
    (next: HeroStyle) => {
      setHeroState(next);
      save('pridepool:hero', next);
      syncUrl(version, accent, bg, next);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [version, accent, bg],
  );

  return { version, setVersion, accent, setAccent, bg, setBg, hero, setHero };
}
