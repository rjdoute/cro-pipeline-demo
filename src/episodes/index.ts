import type { Episode } from '../lib/types'

import { natera } from './natera'
import { caris } from './caris'
import { agilent } from './agilent'
import { genentech } from './genentech'
import { illumina } from './illumina'
import { f1BenchScientist } from './f1-bench-scientist'
import { f3WholeCompany } from './f3-whole-company'
import { f4Translational } from './f4-translational'

// Public, safe-to-commit episodes. Customer-identifying specifics are kept
// generic here; the real detail is layered in via the private overlay below.
const base: Episode[] = [
  natera,
  caris,
  genentech,
  illumina,
  agilent,
  f1BenchScientist,
  f3WholeCompany,
  f4Translational,
]

// ---------------------------------------------------------------------------
// Private overlay merge.
// Files under src/episodes/private/*.ts are gitignored and hold the sensitive,
// customer-identifying versions (real names, ARR, internal metrics). They are
// only present once the repository is private. When a private file exports an
// Episode whose id matches a base episode, it fully replaces the safe version.
// While the repo is public, this glob simply resolves to nothing.
// ---------------------------------------------------------------------------
const overlayModules = import.meta.glob<{ default?: Episode; episode?: Episode }>(
  './private/*.ts',
  { eager: true },
)

const overlays: Episode[] = Object.values(overlayModules)
  .map((m) => m.episode ?? m.default)
  .filter((e): e is Episode => Boolean(e))

const byId = new Map<string, Episode>()
for (const e of base) byId.set(e.id, e)
for (const e of overlays) byId.set(e.id, e)

export const episodes: Episode[] = Array.from(byId.values())

export const provenEpisodes = episodes.filter((e) => e.tier === 'proven')
export const frontierEpisodes = episodes.filter((e) => e.tier === 'frontier')

export function getEpisode(id: string): Episode | undefined {
  return byId.get(id)
}
