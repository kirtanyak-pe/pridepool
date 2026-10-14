# The Pride Pool — Lemonn × Booming Bulls

Editable source for the campaign page at https://pridepool-v1.vercel.app, plus a redesign in progress.

- **Original (v1):** a rebuild of the live site with the same layout, tokens, animations and copy. Frozen as a reference.
- **Redesign (v2):** the new version, built section by section. Sections not redesigned yet reuse the original ones.

Live prototype: https://kirtanyak-pe.github.io/pridepool/

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (or the port shown)
npm run build      # production build → dist/
npm run deploy     # publish to https://kirtanyak-pe.github.io/pridepool/
```

After `npm run deploy`, the live link updates in about a minute.

## Switching versions (prototype only)

A floating button in the top-right corner switches between **Original** and **Redesign**.
It is only for testing and is not part of the website.

- Open a version directly with `?v=1` (Original) or `?v=2` (Redesign) on the link.
- With no `?v=`, the page shows the last version picked on that device, or the Redesign.

## Folder structure

```
src/
  index.css        Design tokens (@theme), shared component styles and animations — used by both versions
  main.tsx         Entry point: picks the version, mounts the prototype switcher
  v1/              ORIGINAL — the live site as it was. Don't edit; it's the comparison baseline.
    pages/           Home.tsx, TermsPage.tsx
    sections/        Hero, Basis (counter), Moment (video), Giveaway, Leaderboard, Faqs, Terms
    components/      Background, Footer, StickyJoin, CountUp, YouTubeShort, useReveal, TermsHeader
  v2/              REDESIGN
    content.ts       All redesign copy and links in one place (Join link, Anish's rank wording, …)
    pages/Home.tsx   The redesigned page. Imports from ../../v1/ = not redesigned yet
    sections/        Redesigned sections (so far: Hero.tsx)
  prototype/       PROTOTYPE ONLY — version switcher. Not part of the website.
public/            Images, logos, cursors, font
```

### Redesign status

| Section | Status |
| --- | --- |
| Hero | ✅ Redesigned (`v2/sections/Hero.tsx`) |
| Counter, Anish video, Laptops, Leaderboard, FAQ, Footer, floating Join button | Still the original (imported from `v1/`) |

## Handing off to development

To ship only the redesign:

1. Delete `src/prototype/`.
2. In `src/main.tsx`, remove the two prototype imports and render `<RedesignHome />` directly instead of choosing a version.
3. Delete `src/v1/` **only after** every section `v2/pages/Home.tsx` imports from `v1/` has been redesigned.
   Until then, move the still-used v1 files into `v2/` (or a shared folder) rather than deleting them.
4. Fill in the TODOs in `src/v2/content.ts`: the real Join link and the legally approved wording for Anish's result.

Styling is Tailwind CSS v4: classes such as `bg-bg`, `text-fg-muted` and `text-accent` map to the tokens in `index.css`.
Elements with `data-reveal` fade in on scroll (`src/v1/components/useReveal.ts`).
