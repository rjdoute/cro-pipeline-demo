// Rich, long-form story sections. An episode that uses `sections` renders as a
// deep, scrollable, designed story (vs. the older stepped `beats`).

export type StorySection =
  | HeroSection
  | BigNumSection
  | WaitMapSection
  | CalloutSection
  | PainsSection
  | DiffSection
  | UseCasesSection
  | MetricsSection
  | StakesSection
  | TalkTrackSection
  | ProseSection

export interface HeroSection {
  kind: 'hero'
  eyebrow: string
  title: string
  lede: string
  /** "You are ..." line. */
  role?: string
}

/** One oversized number with a one-line meaning + supporting body. */
export interface BigNumSection {
  kind: 'bignum'
  stat: string
  label: string
  body?: string
}

/** Horizontal bars showing where time/wait is distributed. */
export interface WaitMapSection {
  kind: 'waitmap'
  title: string
  caption?: string
  items: { label: string; pct: number; hot?: boolean }[]
}

/** The headline insight — a pull-quote that has to land. */
export interface CalloutSection {
  kind: 'callout'
  quote: string
  body?: string
}

export interface PainsSection {
  kind: 'pains'
  title: string
  items: { stat: string; text: string }[]
}

/** A real before/after diff — the honest replacement for fake "agent" text. */
export interface DiffSection {
  kind: 'diff'
  title: string
  label: string
  language?: string
  before: string
  after: string
  caption?: string
}

/** Where Cursor actually fits — real use cases mapped to real capabilities. */
export interface UseCasesSection {
  kind: 'usecases'
  title: string
  intro?: string
  items: {
    title: string
    challenge: string
    evidence: string
    capability: string
  }[]
}

export interface MetricsSection {
  kind: 'metrics'
  title: string
  note?: string
  items: { value: string; label: string; sub?: string }[]
}

export interface StakesSection {
  kind: 'stakes'
  title: string
  items: { label: string; body: string }[]
}

export interface TalkTrackSection {
  kind: 'talktrack'
  title: string
  listen: string[]
  say: string[]
}

export interface ProseSection {
  kind: 'prose'
  title?: string
  body: string
}
