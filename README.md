# Social Sircle — Agency Website

Dark **neo-brutalist** single-page site for Social Sircle (React + Vite + Framer Motion) — near-black ink canvas, electric orange/yellow accents, cream hard-shadows and chunky borders, big Anton display type.

## Run it

```bash
npm install
npm run dev
```

Production build: `npm run build` (output in `dist/`).

## Sections

Preloader (orange circle logo) → Hero ("We make scroll-stopping stuff online") with parallax sun → marquee → Manifesto (the "reintroduction" copy, word-by-word reveal) → Stats counters → Services (hover-fill rows) → tilted orange marquee → Work (typographic cards echoing the IG posts: FLEX!, Your Marketing, Studio Social Sircle, Stop the fluff) → Contact (hello@socialsircle.in) → Footer.

## Brand tokens

- Ink (canvas) `#0B0A08`, Surfaces `#16130D` / `#1F1910`, Cream (text) `#F6EFE3`
- Orange `#F2A33C`, Orange-bright `#FF8A1F`, Yellow `#FFD84D`
- Signature "pop": cream hard offset shadows + black edge borders on bright elements
- Fonts: Anton (display), Space Grotesk (body), Yellowtail (script — the "Social" logo feel)

Scroll-progress bar, custom cursor, film-grain (screen-blend) overlay, glowing hero sun, and `prefers-reduced-motion` support included.
