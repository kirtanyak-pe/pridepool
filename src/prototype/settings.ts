import { useCallback, useLayoutEffect, useState } from 'react';

/**
 * PROTOTYPE ONLY: what the switcher (top right) controls.
 *   version: v1 = Original (the live site as it was), v2 = Redesign (story/static first screen),
 *            v3 = Redesign (reward-stage first screen, page scales like an image)
 *            v4 = Final version (copy of V3, self-contained in src/v4)
 *   accent:  the redesign's accent colour: Join buttons, chips, checkmarks (the Original always stays violet)
 *   bg:      the redesign's background colour: glows, grid, leaderboard bars (the Original always stays violet)
 *   hero:    the redesign's first screen: story mode (animated scenes) or trailer (static)
 *   badge:   V3 rank badge: circular medal beside Anish, or a 3D stamp printed behind him
 * Read from the URL (?v=2&accent=lime&bg=violet), else the last choice on this device, else the defaults.
 */
export type Version = 'v1' | 'v2' | 'v3' | 'v4';
export type Accent = 'violet' | 'lime' | 'green';
export type Bg = 'violet' | 'green' | 'blue' | 'graphite';
export type HeroStyle = 'story' | 'trailer';
export type BadgeStyle = 'medal' | 'stamp';

const DEFAULTS = { version: 'v4' as Version, accent: 'green' as Accent, bg: 'green' as Bg, hero: 'story' as HeroStyle, badge: 'medal' as BadgeStyle };
const VERSIONS: Version[] = ['v1', 'v2', 'v3', 'v4'];
const ACCENTS: Accent[] = ['violet', 'lime', 'green'];
const BGS: Bg[] = ['violet', 'green', 'blue', 'graphite'];
const HEROES: HeroStyle[] = ['story', 'trailer'];
const BADGES: BadgeStyle[] = ['medal', 'stamp'];

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
function syncUrl(version: Version, accent: Accent, bg: Bg, hero: HeroStyle, badge: BadgeStyle) {
  const url = new URL(window.location.href);
  url.searchParams.set('v', version.slice(1));
  if (version !== 'v1') {
    url.searchParams.set('accent', accent);
    url.searchParams.set('bg', bg);
  } else {
    url.searchParams.delete('accent');
    url.searchParams.delete('bg');
  }
  if (version === 'v2') url.searchParams.set('hero', hero);
  else {
    url.searchParams.delete('hero');
  }
  if (version === 'v3' || version === 'v4') url.searchParams.set('badge', badge);
  else url.searchParams.delete('badge');
  url.hash = '';
  window.history.replaceState(null, '', url);
}

export function usePrototypeSettings() {
  const [version, setVersionState] = useState<Version>(() =>
    load('v', 'pridepool:version-2', VERSIONS, (raw) => (raw === '1' ? 'v1' : raw === '2' ? 'v2' : raw === '3' ? 'v3' : raw === '4' ? 'v4' : raw), DEFAULTS.version),
  );
  const [accent, setAccentState] = useState<Accent>(() =>
    load('accent', 'pridepool:accent-2', ACCENTS, (raw) => raw, DEFAULTS.accent),
  );
  const [bg, setBgState] = useState<Bg>(() => load('bg', 'pridepool:bg-2', BGS, (raw) => raw, DEFAULTS.bg));
  const [hero, setHeroState] = useState<HeroStyle>(() => load('hero', 'pridepool:hero', HEROES, (raw) => raw, DEFAULTS.hero));
  const [badge, setBadgeState] = useState<BadgeStyle>(() => load('badge', 'pridepool:badge', BADGES, (raw) => raw, DEFAULTS.badge));

  // Apply the colours before paint (no flash of the wrong colour). The Original is always violet.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const redesign = version !== 'v1';
    if (redesign && accent !== 'violet') root.dataset.accent = accent;
    else delete root.dataset.accent;
    if (redesign && bg !== 'violet') root.dataset.bg = bg;
    else delete root.dataset.bg;
    // V3 scales the whole page like an image (see html.scale-artboard in index.css)
    root.classList.toggle('scale-artboard', version === 'v3' || version === 'v4');
  }, [version, accent, bg]);

  const setVersion = useCallback(
    (next: Version) => {
      setVersionState(next);
      save('pridepool:version-2', next);
      syncUrl(next, accent, bg, hero, badge);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [accent, bg, hero, badge],
  );

  const setAccent = useCallback(
    (next: Accent) => {
      setAccentState(next);
      save('pridepool:accent-2', next);
      syncUrl(version, next, bg, hero, badge);
    },
    [version, bg, hero, badge],
  );

  const setBg = useCallback(
    (next: Bg) => {
      setBgState(next);
      save('pridepool:bg-2', next);
      syncUrl(version, accent, next, hero, badge);
    },
    [version, accent, hero, badge],
  );

  const setHero = useCallback(
    (next: HeroStyle) => {
      setHeroState(next);
      save('pridepool:hero', next);
      syncUrl(version, accent, bg, next, badge);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [version, accent, bg, badge],
  );

  const setBadge = useCallback(
    (next: BadgeStyle) => {
      setBadgeState(next);
      save('pridepool:badge', next);
      syncUrl(version, accent, bg, hero, next);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [version, accent, bg, hero],
  );

  return { version, setVersion, accent, setAccent, bg, setBg, hero, setHero, badge, setBadge };
}
