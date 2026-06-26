import type { Episode } from '../lib/types'

// NOTE: Public, safe version. Company is generalized and exact internal
// figures/names are withheld. The private overlay (src/episodes/private/)
// restores the real company name, exact metrics, and stakeholders once the
// repository is private.
export const natera: Episode = {
  id: 'natera',
  company: 'A clinical-genomics leader',
  tier: 'proven',
  vertical: 'Diagnostics',
  theme: 'Trust at the gates that matter',
  persona: 'Senior DevOps / platform engineer',
  accent: '#22b8d6',
  blurb:
    'In regulated genomics, the bottleneck isn’t writing code. Find out where the 90 days actually go.',
  youAre:
    'You ship the infrastructure behind software that helps diagnose disease. Speed matters — but a mistake in a production clinical system is catastrophic.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Setup',
      role: 'You are a senior platform engineer at a clinical-genomics company',
      title: 'Move fast. Don’t break the thing that diagnoses patients.',
      body: 'Your teams build genetic-diagnostics software, clinical reporting, and the cloud infrastructure under it. Leadership wants to be “AI-first.” But the final checkpoint on a genomic algorithm isn’t a unit test — it’s a physical wet-lab experiment. Expensive. Slow. Unforgiving. The whole place feels less like agile and more like waterfall, because the last gate is the bench.',
    },
    {
      id: 'tension',
      kind: 'narration',
      chapter: 'The tension',
      title: 'The line every leader here repeats',
      body: '“We want to move fast and be AI-first… but we also live in a regulated environment.” That single sentence governs everything. Every shortcut runs into eQMS, traceability, and a lab director’s sign-off.',
    },
    {
      id: 'bottleneck',
      kind: 'pain',
      chapter: 'The bottleneck',
      title: 'Most of the 90 days is waiting — not working',
      stat: '~10%',
      statLabel: 'flow efficiency across a ~90-day lead time',
      body: 'They mapped the whole value stream end to end. The surprise: the work is tiny; the waiting is enormous. And it doesn’t pool where everyone points their AI tools.',
      items: [
        'Planning & intake — ~63% of the wait',
        'Release & compliance docs — ~23% of the wait',
        'Development — ~9%',
        'Testing — ~5%',
      ],
    },
    {
      id: 'gutpunch',
      kind: 'pain',
      chapter: 'Where the time goes',
      title: 'The number that says it all',
      stat: '48 hrs',
      statLabel: 'to verify regulated docs against requirements — for ~30 minutes of actual work',
      body: 'It repeats everywhere the work changes hands:',
      items: [
        'A merge request waits ~72 hrs for ~2 hrs of real review',
        'Stories reach “begin coding” at ~25% completeness — three in four carry rework forward',
        'Document approvals sit in queue for hundreds of hours',
      ],
    },
    {
      id: 'wall',
      kind: 'narration',
      chapter: 'The wall',
      title: 'So you make coding twice as fast. Nothing happens.',
      body: 'Development is ~9% of the trip. Cut it in half and you save ~5%. The wait lives at the two ends — drafting requirements up front and assembling regulated documentation at the back. Optimizing the fast middle is optimizing the part that was never the problem.',
    },
    {
      id: 'artifact-thin-ticket',
      kind: 'artifact',
      chapter: 'The artifact',
      label: 'JIRA-1042 · “Begin coding” readiness: 25%',
      language: 'markdown',
      content: `# Update reporting pipeline for new assay panel

Acceptance criteria: _TBD_
Edge cases: _?_
Dependencies: _ask the team_
NFRs / compliance impact: _unknown_
Linked requirement (Jama): _not attached_

> Picked up mid-sprint. Half the questions get answered in Slack.`,
      caption:
        'This is what the lowest quality gate looks like. Incomplete starts become review churn, then late-surfacing test defects.',
    },
    {
      id: 'unlock-spec',
      kind: 'cursorMoment',
      chapter: 'The unlock',
      prompt:
        'Draft a complete spec for JIRA-1042 from the linked epic + tech-design docs (via MCP). Score it against our story template — INVEST, edge cases, dependencies, NFRs — and flag every gap before grooming.',
      runLabel: 'Run with Cursor (Plan)',
      result: [
        { text: 'Pulling context: epic, tech-design doc, linked Jama requirement…', tone: 'note' },
        { text: '+ Acceptance criteria (7) drafted from requirement + design', tone: 'add' },
        { text: '+ Edge cases enumerated; 3 dependencies surfaced', tone: 'add' },
        { text: '+ Compliance/NFR section populated from regulated template', tone: 'add' },
        { text: '! Gap: missing rollback criteria — flagged for author', tone: 'note' },
        { text: 'Completeness score: 25% → 92% (review, don’t author)', tone: 'add' },
      ],
      caption:
        'Plan-first, grounded in the systems of record. The PM reviews a draft instead of starting from a blank page.',
    },
    {
      id: 'unlock-docs',
      kind: 'cursorMoment',
      chapter: 'The unlock',
      prompt:
        'From these merged changes, draft the release / IRN / SOP docs and verify traceability against the linked regulatory requirements.',
      runLabel: 'Run with Cursor (Agent + MCP)',
      result: [
        { text: 'Reading merged MRs + linked tickets…', tone: 'note' },
        { text: '+ Release notes, IRN, and SOP drafts generated from the change', tone: 'add' },
        { text: '+ Traceability matrix built: change → requirement → test', tone: 'add' },
        { text: '✓ Verification that took ~48 hrs now runs in minutes', tone: 'add' },
        { text: 'Approval gate stays human — Cursor prepares, it doesn’t sign', tone: 'note' },
      ],
      caption:
        'The honest boundary: approvals remain external. Cursor compresses the prep and verification, not the sign-off.',
    },
    {
      id: 'leap',
      kind: 'impact',
      chapter: 'The leap',
      title: 'What moved when the work went plan-first',
      metrics: [
        { value: '+26%', label: 'accepted code', sub: 'from engineers who adopted structured, plan-first workflows' },
        { value: '72h → ~24h', label: 'MR review cycle', sub: 'routine pass automated; humans on logic + architecture' },
        { value: '48h → min', label: 'doc verification', sub: 'traceability checked automatically' },
        { value: 'Fewer rollbacks', label: 'regulated infra', sub: 'plan-before-apply on clinical-genomics changes' },
      ],
      body: 'The teams that performed best weren’t the fastest through code — they made fewer expensive mistakes at the gates that matter.',
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: 'Pointing AI at coding optimizes the 9% that was already fast.',
      body: 'The unlock is the 86% at the ends: drafting requirements up front and automating regulated documentation and traceability at the back. In regulated genomics, the prize isn’t velocity in the editor — it’s confidence at the gates. That is the opposite of the “ship faster” pitch, and it’s the one that lands here.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'Debrief',
      who: 'Leaders over product engineering and scientific computing in regulated diagnostics — the people who own “AI tools for engineering.”',
      where:
        'Companies where the final validation is physical/wet-lab (so delivery behaves like waterfall), with eQMS + requirements systems of record and heavy release documentation.',
      listenFor: [
        '“Compliance and testing are bigger bottlenecks than code generation.”',
        '“We’re trying to be AI-first, but we’re regulated.”',
        'Rework from thin specs; long document-approval queues.',
        'A mandate to tie every AI dollar to cost / time / pulled-forward revenue.',
      ],
      proof:
        'Structured, plan-first workflows raised accepted code ~26% and cut review and doc-verification dramatically — by attacking the wait at the two ends, not the fast middle.',
    },
  ],
}
