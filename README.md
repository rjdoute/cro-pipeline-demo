# The Unlock — Inside AI in Life Sciences

An internal, **playable field guide** for the life-sciences sales team. Instead of
flashcards, you *step into* a life-science company and live the moment AI changed
how they work — feel the bottleneck, feel the unlock — so you walk away
understanding **where Cursor actually fits, and why.**

> Internal enablement tool. Built for self-study first; designed to graduate into
> a live prospect demo.

## What's inside

Each **episode** drops you into someone's shoes and runs the same 7-beat arc:
**Setup → Bottleneck → Wall → Unlock → Leap → Aha → Debrief.** Two shelves:

- **Where we're winning today** — real customer outcomes.
- **The frontier** — where we go win next (clearly framed as *vision*, no fabricated proof).

## Run it

```bash
npm install
npm run dev      # Vite dev server
npm run build    # type-check + production build
npm run preview
```

Deploys zero-config to Vercel (`vercel.json` sets build + SPA rewrite).

## Architecture

- **Vite + React + TypeScript + Tailwind**, `react-router`, `zustand`, `framer-motion`, `lucide-react`.
- **Data-driven content.** Every episode is a typed object (`src/episodes/*.ts`)
  made of ordered *beats*. The engine (`src/engine/`, `src/beats/`) renders any
  episode from that data — **adding an episode = adding one file**, no engine changes.

```
src/
  engine/     episode player + screen (the arc controller)
  beats/      beat renderers (narration · pain · artifact · cursorMoment · impact · aha · debrief)
  world/      entry screen (Proven / Frontier), layout, episode cards
  episodes/   one typed file per episode
  lib/        types + utils
```

## Confidentiality (read before contributing)

This tool references real accounts. Customer-identifying specifics (names, ARR,
internal metrics) are **never committed to a public repo**.

- Committed episode files use **generalized** companies and representative figures.
- The real specifics live in a **gitignored overlay** at `src/episodes/private/*.ts`.
  When an overlay exports an `Episode` whose `id` matches a base episode, it
  replaces the safe version at build time. While the repo is public, that folder
  is empty and the safe versions render.
- Keep the deployment behind access protection.
