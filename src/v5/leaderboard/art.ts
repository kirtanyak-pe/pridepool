/**
 * The leaderboard's 93 Figma SVG layers, bundled into one lazily loaded chunk (see artStore.ts) instead of
 * 93 separate requests. The SVG files are unchanged (src/v4/leaderboard/svg/); each becomes a data: URL,
 * so every <img> and mask still renders its own, isolated SVG document exactly as before.
 */
const files = import.meta.glob('./svg/*.svg', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

export const ART: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, raw]) => [path.slice('./svg/'.length, -'.svg'.length), `data:image/svg+xml,${encodeURIComponent(raw)}`]),
);
