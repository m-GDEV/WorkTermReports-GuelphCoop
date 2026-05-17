# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server (localhost:5173)
npm run build     # static build → .svelte-kit/output (adapter-static)
npm run preview   # preview the static build
```

No test suite.

## Architecture

Single-page SvelteKit site deployed as fully static HTML (`adapter-static`, `prerender = true`).

**Content lives in one file:** `src/lib/workterm_answers.js`

All report content (abstract, employer info, goals, job description, conclusions, acknowledgments) is exported as named constants from that file. Every `Section*.svelte` component imports only from there — editing the report means editing `workterm_answers.js`, not the components.

**Component layout** (`src/lib/components/`):
- `Nav.svelte` — sticky nav, receives `activeSection` prop from `+page.svelte`
- `Hero.svelte` — top banner with hero image
- `Section*.svelte` — one component per report section, each maps to a section id used by the IntersectionObserver in `+page.svelte` for scroll-spy active-nav highlighting

**Svelte 5 runes** are used in `+page.svelte` (`$state`, `$effect`). Keep new code consistent with runes API, not legacy stores.

**Tailwind v4** — config is CSS-first via `@theme {}` in `src/app.css` (no `tailwind.config.js`).

Static assets (hero image, company photo, favicon) go in `static/`.
