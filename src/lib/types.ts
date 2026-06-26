// ---------------------------------------------------------------------------
// Content model. An Episode is a typed data object made of ordered "beats".
// The engine renders any episode from this data — adding an episode means
// adding one file under src/episodes/, no engine changes.
// ---------------------------------------------------------------------------

export type Tier = 'proven' | 'frontier'

export type Beat =
  | NarrationBeat
  | PainBeat
  | ArtifactBeat
  | CursorMomentBeat
  | ImpactBeat
  | AhaBeat
  | DebriefBeat

export interface BaseBeat {
  /** Stable id within the episode (used for keys + progress). */
  id: string
  /** Optional short label shown in the step rail (e.g. "The wall"). */
  chapter?: string
}

/** Scene-setting prose. Optionally framed as a character voice. */
export interface NarrationBeat extends BaseBeat {
  kind: 'narration'
  title?: string
  body: string
  /** e.g. "You are a DevOps engineer" */
  role?: string
}

/** A friction moment. The hero stat is the gut-punch. */
export interface PainBeat extends BaseBeat {
  kind: 'pain'
  title?: string
  /** Big number, e.g. "48 hrs". */
  stat?: string
  /** Caption under the stat, e.g. "to verify docs that take 30 min to write". */
  statLabel?: string
  body?: string
  /** Optional bulleted friction list. */
  items?: string[]
}

/** Show a real-looking artifact: messy code, a spec, a ticket. */
export interface ArtifactBeat extends BaseBeat {
  kind: 'artifact'
  label: string
  /** Display language for the mono block (purely cosmetic). */
  language?: string
  /** The artifact body (kept short + representative). */
  content: string
  caption?: string
}

/** Interactive: the user "runs" a Cursor-style prompt and sees the result. */
export interface CursorMomentBeat extends BaseBeat {
  kind: 'cursorMoment'
  /** What you type into Cursor. */
  prompt: string
  /** Label on the run button (default: "Run with Cursor"). */
  runLabel?: string
  /** Lines revealed as the "result" (rendered as a diff/console). */
  result: ResultLine[]
  caption?: string
}

export interface ResultLine {
  text: string
  tone?: 'add' | 'remove' | 'context' | 'note'
}

/** The measured outcome reveal. */
export interface ImpactBeat extends BaseBeat {
  kind: 'impact'
  title?: string
  metrics: ImpactMetric[]
  body?: string
}

export interface ImpactMetric {
  value: string
  label: string
  sub?: string
}

/** The reframe — the thing you'd never have seen from outside. */
export interface AhaBeat extends BaseBeat {
  kind: 'aha'
  body: string
  /** A short pull-quote to emphasize. */
  highlight?: string
}

/** The seller bridge: who this is, where to find them, what to listen for. */
export interface DebriefBeat extends BaseBeat {
  kind: 'debrief'
  who: string
  where: string
  listenFor: string[]
  proof?: string
}

export interface Episode {
  id: string
  /** Display name of the company / scenario. */
  company: string
  tier: Tier
  /** e.g. "Diagnostics", "Pharma discovery", "Instruments". */
  vertical: string
  /** One-word-ish theme, e.g. "Trust at the gates that matter". */
  theme: string
  /** Who you step into. */
  persona: string
  /** Accent color (hex) used across the episode UI. */
  accent: string
  /** One-line hook shown on the world screen. */
  blurb: string
  /** Setup line: "You are ..." */
  youAre: string
  /** For frontier episodes: the honest "this is a vision" framing. */
  frontierNote?: string
  beats: Beat[]
}
