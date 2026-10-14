# The Pride Pool — Lemonn × Booming Bulls

Editable source for the campaign page at https://pridepool-v1.vercel.app, plus a redesign in progress.

- **Original (v1):** a rebuild of the live site with the same layout, tokens, animations and copy. Frozen as a reference.
- **Redesign V2:** story-order page with the Join button system. First screen: animated Story mode or Static.
- **Redesign V3:** same page, but the first screen is a reward stage where all three touchpoints stay visible
  (nothing to miss if you look away), and the whole page **scales like an image**: designed on a 390×844 mobile
  canvas and a 1440×900 desktop canvas (≥1024px), scaled to fit any screen's width and height.

All versions are kept side by side for comparison; nothing is deleted between iterations.

Live prototype: https://kirtanyak-pe.github.io/pridepool/

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (or the port shown)
npm run build      # production build → dist/
npm run deploy     # publish to https://kirtanyak-pe.github.io/pridepool/
```

After `npm run deploy`, the live link updates in about a minute.

## Prototype controls (testing only)

A floating button in the top-right corner opens the prototype controls. They are not part of the website.

- **Version:** Original, V2 Story or V3 Stage (`?v=1` / `?v=2` / `?v=3`).
- **First screen** (V2 only): Story (animated scenes: Anish → ₹1 Crore → 20 laptops → all rewards) or Static.
- **Accent colour** (Redesign only): Violet (the original colour), Lemonn lime (the brand green from the Lemonn logo) or Trading green.
- **Background colour** (Redesign only): the "second colour" in the background glows, grid, light behind Anish, heading glows and leaderboard bars. Violet (original), Green, Blue or Grey.

The link updates as you switch, so you can share exactly what you see, e.g. for A/B tests:
`?v=1` = Original, `?v=2&accent=lime&bg=violet` = Redesign, lime accent, violet background.
Values: `accent` = `violet` | `lime` | `green`; `bg` = `violet` | `green` | `blue` | `graphite`.
With no parameters, the page shows the last choice on that device, or V3 with lime accent and violet background.

## The Join button system (redesign)

The page has one goal: get people to tap **Join the ₹1 Crore Pool**. Every Join button is the same component (`v2/components/JoinButton.tsx`), so the label, link and look are defined once.

| Where | What |
| --- | --- |
| Hero | The first Join, above the fold on phones |
| After each story round | `Checkpoint`: round progress (1–3 of 3), one line on why to join, then Join |
| Final call | `FinalCall`: recap of all three rewards, Join, existing-user line, trust lines |
| Floating | `StickyJoin`: full-width bar on phones, card on desktop |

**Rule: only one Join button on screen at a time.** The floating one appears only when no other Join button is in view, and hides over the footer.

**Tracking:** every Join button has `data-cta="join"` and `data-cta-location` (`hero`, `round-1`, `round-2`, `round-3`, `final`, `sticky`).
Count taps per position with a click trigger on `[data-cta="join"]` (e.g. in Google Tag Manager); no code changes needed.

## Folder structure

```
src/
  index.css        Design tokens (@theme), accent palettes, shared component styles, animations — used by both versions
  main.tsx         Entry point: picks the version, mounts the prototype controls
  v1/              ORIGINAL — the live site as it was. Don't edit; it's the comparison baseline.
    pages/           Home.tsx, TermsPage.tsx
    sections/        Hero, Basis (counter), Moment (video), Giveaway, Leaderboard, Faqs, Terms
    components/      Background, Footer, StickyJoin, CountUp, YouTubeShort, useReveal, TermsHeader
  v2/              REDESIGN
    content.ts       All redesign copy and links in one place (Join link + label, Anish's rank wording, …)
    pages/Home.tsx   The redesigned page, in story order. Imports from ../../v1/ = not redesigned yet
    sections/        StoryHero.tsx (animated first screen), Hero.tsx (static), Champion.tsx (Round 1), FinalCall.tsx
    components/      JoinButton.tsx, Checkpoint.tsx, StickyJoin.tsx, VideoMoment.tsx, TickerTape.tsx, CandleBackdrop.tsx
  v3/              REDESIGN V3 — full page (reuses v2 JoinButton, Checkpoint, StickyJoin, FinalCall, content.ts)
    pages/Home.tsx   V3 page: hero → Round 1 → Round 2 → Round 3 → leaderboard → final call → FAQ → footer
    sections/        ArenaHero (reward stage), Champion (embedded video moment), Pool (3-step flow),
                     Bonus (laptop loot drop + locked rules), Faqs (5, trust first), Footer (slim)
    leaderboard/     Leaderboard.tsx + Flag.tsx + layers.ts — built from the Figma leaderboard
                     (file CCpQIcDySK63UMO0KJkkda, node 2:94); layers.ts holds every podium layer's exact
                     Figma position; SVG assets in public/leaderboard/
  prototype/       PROTOTYPE ONLY — version + accent controls. Not part of the website.
public/            Images, logos, cursors, font
```

### Redesign status

| Part | Status |
| --- | --- |
| First screen | ✅ Two versions to A/B: Story mode (`StoryHero.tsx`: auto-playing scenes, tap to skip, hold to pause, Join fixed) and Static (`Hero.tsx`). Both have the ticker tape + candle chart climbing to ₹1 Cr |
| Join button system (checkpoints, final call, floating bar/card) | ✅ Built (`v2/components/`, `v2/sections/FinalCall.tsx`) |
| Section order | ✅ Story order: Anish → ₹1 Crore pool → laptops (`v2/pages/Home.tsx`) |
| Round 1 · The Champion | ✅ New section (`v2/sections/Champion.tsx`): player card, two-beat quote story, in-page video. Replaces the old video block |
| Counter, Laptops, Leaderboard, FAQ, Footer | Still the original (imported from `v1/`) |

### Colours: accent + background

Two independent colour sets, both in `src/index.css`:

- **Accent palette:** everything that says "act here": the Join button, its glowing border, chips, dots and checkmarks.
- **Background palette:** the atmosphere: background glows, grid lines, the light behind Anish, heading glows and the leaderboard bars.

Each option is one small block of values. With no attribute on `<html>`, both are violet, exactly the original site's colours.

### How V3 scaling works

`html.scale-artboard` in `src/index.css` sets the root font size from the screen size. Everything is sized in `rem`, so the whole page scales together:

- Phones/tablets (<1024px): 16px at 390×844, never below 13px.
- Desktop (≥1024px): 16px at 1440×900; e.g. 19.2px on a 1920×1080 monitor, 25.6px on 2560×1440.

When building new V3 sections, size everything in `rem` (Tailwind's default) — avoid `px` for layout.

## Handing off to development

To ship only the redesign:

1. Delete `src/prototype/`.
2. In `src/main.tsx`, remove the two prototype imports and render `<RedesignHome />` directly instead of choosing a version.
3. Pick the colours: in `src/index.css` → "Accent palette" and "Background palette", copy the chosen option's values into the first `:root` block of each and delete the other blocks.
4. Delete `src/v1/` **only after** every section `v2/pages/Home.tsx` imports from `v1/` has been redesigned.
   Until then, move the still-used v1 files into `v2/` (or a shared folder) rather than deleting them.
5. Fill in the TODOs in `src/v2/content.ts`: the real Join link, the "Open the app" link for existing users, and the legally approved wording for Anish's result.

Styling is Tailwind CSS v4: classes such as `bg-bg`, `text-fg-muted` and `text-accent` map to the tokens in `index.css`.
Elements with `data-reveal` fade in on scroll (`src/v1/components/useReveal.ts`).
