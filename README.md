# The Pride Pool — Lemonn × Booming Bulls

Editable source for the campaign page at https://pridepool-v1.vercel.app.
It was rebuilt from the live site with the same layout, tokens, animations and copy, so you can redesign it in code.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (or the port shown)
npm run build      # production build → dist/
```

## Where things live

| What you want to change | File |
| --- | --- |
| Colors, font, max width, easing (design tokens) | `src/index.css` → `@theme` |
| Neumorphic cards, 3D "key" buttons, glows, animations | `src/index.css` → `@layer components` / base |
| Hero (Anish photo, ₹1 Crore headline, main CTA) | `src/sections/Hero.tsx` |
| Live counter card | `src/sections/Basis.tsx` (+ `components/CountUp.tsx`) |
| "One minute from the title" + YouTube short | `src/sections/Moment.tsx` (+ `components/YouTubeShort.tsx`) |
| 20 laptops giveaway | `src/sections/Giveaway.tsx` |
| Leaderboard (demo data list at the top of the file) | `src/sections/Leaderboard.tsx` |
| FAQ questions & answers (`FAQS` list) | `src/sections/Faqs.tsx` |
| Footer | `src/components/Footer.tsx` |
| Floating "Join the ₹1 Crore Pool" card | `src/components/StickyJoin.tsx` |
| Page background (glows, particles, grid) | `src/components/Background.tsx` |
| Terms & Conditions page | `src/sections/Terms.tsx` |
| Images, logos, cursor, font | `public/` |

Styling is Tailwind CSS v4: classes such as `bg-bg`, `text-fg-muted` and `text-accent` map to the tokens in `index.css`.

Elements with `data-reveal` fade in on scroll (`src/components/useReveal.ts`).
The "Join" buttons point to `href="#"`, just as they do on the live site, so add the real link when you have it.
