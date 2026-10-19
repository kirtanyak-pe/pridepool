import { useEffect, useState, type RefObject } from 'react';

/**
 * Loads the leaderboard artwork (art.ts) as one chunk. V5: the leaderboard is the 2nd section, so it starts
 * loading right after the page mounts (the hero photo is already preloaded with high priority in index.html),
 * so the podium is ready by the time anyone scrolls there.
 */
let art: Record<string, string> | null = null;
let loading: Promise<void> | null = null;

export function loadArt() {
  return (loading ??= import('./art').then((m) => {
    art = m.ART;
  }));
}

/** data: URL for a layer name (e.g. 'gold-crystal'); empty until the art has loaded */
export const artUrl = (name: string) => art?.[name] ?? '';

/** true once the art is loaded (loading starts as soon as the leaderboard mounts). */
export function useLeaderboardArt(_ref: RefObject<HTMLElement | null>) {
  const [ready, setReady] = useState(art !== null);
  useEffect(() => {
    if (ready) return;
    let alive = true;
    loadArt().then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [ready]);
  return ready;
}
