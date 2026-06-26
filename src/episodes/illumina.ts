import type { Episode } from '../lib/types'

// Public, safe version. Company generalized; private overlay restores
// specifics once the repo is private.
export const illumina: Episode = {
  id: 'illumina',
  company: 'A genomics-instrument company',
  tier: 'proven',
  vertical: 'Instruments',
  theme: 'One person, enterprise leverage',
  persona: 'Software engineer',
  accent: '#f0a500',
  blurb:
    'Years of acquisitions left a fragmented software mess. One engineer untangled it — for the price of a laptop.',
  youAre:
    'You’re a software engineer at a sequencing-instrument company whose software estate was assembled through years of M&A — different languages, systems that don’t talk.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Setup',
      role: 'You are a software engineer at a genomics-instrument company',
      title: 'A software estate stitched together by acquisitions',
      body: 'Instruments, primary analysis, the sequencing data pipeline, tertiary analysis — each from a different era and a different company. They barely talk to each other.',
    },
    {
      id: 'pain',
      kind: 'pain',
      chapter: 'The friction',
      title: 'A customer bug means manual archaeology',
      statLabel: 'no unified view of root cause — or cost',
      body: 'When a customer reports a bug, triage is manual and siloed across every system the run touched. Nobody can see the root cause in one place — or how much a failed run actually cost the customer.',
      items: [
        'Triage spans instrument data → analysis pipelines → reporting',
        'No single view of root cause across products',
        'No visibility into the financial impact of a failed run',
      ],
    },
    {
      id: 'unlock',
      kind: 'cursorMoment',
      chapter: 'The unlock',
      prompt:
        'Build a unified support + bug-triage system: ingest a customer bug report into Jira, run automated root-cause analysis across every impacted system, and surface a dashboard with the cost impact of the failed run.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Wiring ingestion: bug report → Jira ticket + story…', tone: 'note' },
        { text: '+ Automated root-cause analysis across all impacted systems', tone: 'add' },
        { text: '+ Cost-impact dashboard (what a failed run cost the customer)', tone: 'add' },
        { text: '+ Coverage across every product line', tone: 'add' },
        { text: 'Built by one engineer in under a month, ~$6k of usage', tone: 'add' },
      ],
      caption:
        'An integration problem created by years of M&A — solved by one person, not a platform team and a long roadmap.',
    },
    {
      id: 'leap',
      kind: 'impact',
      chapter: 'The leap',
      title: 'Force-multiplier, not just an accelerant',
      metrics: [
        { value: '< 1 month', label: 'to production', sub: 'a single engineer' },
        { value: '~$6k', label: 'total usage cost', sub: 'called “game-changing” for customer service' },
        { value: 'All products', label: 'unified triage', sub: 'one view across the estate' },
        { value: 'New', label: 'financial visibility', sub: 'cost of a failed run, per customer' },
      ],
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: 'One engineer did what a platform team and a long roadmap would normally require.',
      body: 'It reframes the tool from a coding accelerant into a force multiplier — letting an individual unify fragmented enterprise systems that decades of M&A left behind.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'Debrief',
      who: 'Engineering leaders and finance/ELT at instrument & device companies carrying a fragmented, post-M&A software estate.',
      where:
        'Genomics-instrument, device, and lab-tools companies where support/triage spans many disconnected systems.',
      listenFor: [
        '“Our software came from a dozen acquisitions.”',
        '“Triage is manual; we can’t see root cause in one place.”',
        '“We have no view of what a failure costs.”',
      ],
      proof:
        'One engineer built a unified, cross-product support + bug-triage system (with cost-impact analytics) in under a month for ~$6k.',
    },
  ],
}
