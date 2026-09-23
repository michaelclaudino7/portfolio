# Portfolio — Michael Rodrigues

Personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **SCSS Modules** and **GSAP** animations (including `ScrollTrigger`).

## Visual concept

The project uses a "technical blueprint" visual language: deep ink-blue background, a subtle construction grid, monospace typography for labels, and an experience timeline drawn as a circuit schematic that completes itself as you scroll. The idea is to reflect the nature of someone who architects systems (frontend + backend), without falling into the generic "dev portfolio" look.

## How to run

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Structure

```
app/ # App Router (layout, page, global styles)
components/ # One component per folder, with its own .module.scss
lib/data.ts # ALL the content (experience, education, certifications, skills)
styles/ # Global tokens (_variables.scss) and mixins (_mixins.scss)
```


## Editing content

All of the site's text (name, bio, experience, education, certifications and skills) lives in **`lib/data.ts`**. You don't need to touch the components to update information — just edit the objects in that file.

## GSAP animations

- **Hero**: a single orchestrated entrance moment (GSAP timeline) — the frame lines draw themselves in, the name is revealed through a mask, and the labels appear in sequence.
- **Experience**: uses `ScrollTrigger` to "draw" the timeline as the user scrolls the page, revealing each role as a node in the schematic.
- All animations respect `prefers-reduced-motion` (using `gsap.matchMedia`), automatically disabling themselves for users who prefer reduced motion.

## Deploy

The project is ready to deploy on [Vercel](https://vercel.com) (Next.js's creator) — just import the repository. It also works on any host that supports Node.js.
