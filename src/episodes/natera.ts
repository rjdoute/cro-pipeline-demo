import type { Episode } from '../lib/types'

// Public, safe version. Company generalized; exact ARR / names / the most
// sensitive figures live in the private overlay once the repo is private.
// The depth here (wait-map, use cases, outcomes) is real and safe to show.
export const natera: Episode = {
  id: 'natera',
  company: 'A clinical-genomics leader',
  tier: 'proven',
  vertical: 'Diagnostics',
  theme: 'Trust at the gates that matter',
  persona: 'Senior platform / DevOps engineer',
  accent: '#22b8d6',
  blurb:
    'In regulated genomics, the bottleneck isn’t writing code. See where the 90 days actually go.',
  youAre: 'You ship the infrastructure behind software that helps diagnose disease.',
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Diagnostics · Clinical genomics',
      title: 'The bottleneck isn’t writing code. It’s everything around it.',
      lede: 'A clinical-genomics leader is racing to reposition itself as an AI and data company — under a multi-year, nine-figure cost-savings mandate that every AI investment is measured against. But the final checkpoint on its software is a physical wet-lab experiment: expensive, slow, unforgiving. Delivery behaves less like agile and more like waterfall.',
      role: 'You are a senior platform engineer here',
    },
    {
      kind: 'callout',
      quote: '“We want to move fast and be AI-first… but we also live in a regulated environment.”',
      body: 'That one line, repeated by leaders across the org, governs everything. Every shortcut runs into eQMS, traceability, and a lab director’s sign-off. So when “AI” shows up, the instinct is caution — and the obvious move (make coding faster) turns out to be the wrong target.',
    },
    {
      kind: 'waitmap',
      title: 'Where the 90 days actually go',
      items: [
        { label: 'Planning & intake', pct: 63, hot: true },
        { label: 'Release & compliance docs', pct: 23, hot: true },
        { label: 'Development', pct: 9 },
        { label: 'Testing', pct: 5 },
      ],
      caption:
        'They mapped the whole value stream end to end: ~90-day lead time at ~10% flow efficiency. The work is tiny; the waiting is enormous — and it pools at the two ends, not in the middle where most AI tooling points.',
    },
    {
      kind: 'callout',
      quote: 'Make coding twice as fast and you shave ~5% off the trip.',
      body: 'Development is 9% of the lead time. The wait lives up front (drafting requirements) and at the back (assembling regulated documentation). Optimizing the fast middle optimizes the part that was never the problem. This is the insight everything else hangs on.',
    },
    {
      kind: 'bignum',
      stat: '48 hrs',
      label: 'to verify regulated docs against requirements — for ~30 minutes of real work',
      body: 'It’s the perfect emblem of where the time goes: almost all wait, almost no work. And it repeats everywhere the work changes hands.',
    },
    {
      kind: 'pains',
      title: 'The friction, in real numbers',
      items: [
        { stat: '~72 hrs', text: 'a merge request waits — for ~2 hrs of actual review' },
        { stat: '25%', text: '“begin coding” completeness — three in four items carry rework forward' },
        { stat: '~336 hrs', text: 'document-approval queues at release' },
      ],
    },
    {
      kind: 'diff',
      title: 'What “begin coding” looks like — before and after',
      label: 'JIRA-1042 · begin-coding readiness',
      before: `# Update reporting pipeline for new assay panel

Acceptance criteria: TBD
Edge cases: ?
Dependencies: ask the team
Compliance impact: unknown
Linked requirement (Jama): not attached

(picked up mid-sprint; half the questions
get answered later in Slack)`,
      after: `# Update reporting pipeline for new assay panel

Acceptance criteria (7): derived from the
  linked Jama requirement + tech design
Edge cases: 4 enumerated
Dependencies: 3 surfaced (incl. upstream
  schema change)
Compliance/NFR: populated from template
Rollback criteria: FLAGGED — needs author
Traceability: change → requirement → test

Completeness: 25% → 92% (review, not author)`,
      caption:
        'Drafted from the systems of record (requirements + design) via MCP. The PM reviews a complete spec instead of starting from a blank page — attacking the single largest queue in the stream.',
    },
    {
      kind: 'usecases',
      title: 'Where Cursor actually fits',
      intro:
        'Not the fast middle — the whole stream. Each of these is a measured bottleneck mapped to a real capability.',
      items: [
        {
          title: 'Story & spec authoring (Planning · 63% of the wait)',
          challenge:
            'Specs are written from a blank page across Jira/Confluence/Jama and reach dev at only 40–50% complete, creating the biggest queue in the stream.',
          evidence: 'Creating user stories: ~730 hrs cycle, ~610 hrs pure wait, 50% complete.',
          capability:
            'Agent + MCP draft stories from the linked epic/design and score completeness (edge cases, deps, NFRs) before grooming.',
        },
        {
          title: 'Begin-coding readiness (Dev handoff)',
          challenge:
            'Engineers start from thin tickets — the lowest quality gate on the board — so rework ripples into review and test.',
          evidence: '“Begin coding” sits at 25% complete; ~3 in 4 items carry rework.',
          capability:
            'Agent opens from the linked ticket + design + indexed repo to produce a grounded plan; Rules encode regulated conventions.',
        },
        {
          title: 'Merge-request review (Dev)',
          challenge:
            'MRs sit for days waiting on routine review before a human gets to logic and architecture.',
          evidence: '~72 hrs cycle for ~2 hrs of actual review — the widest wait-to-work gap.',
          capability:
            'Bugbot pre-reviews every MR and proposes fixes for high-confidence issues, collapsing the review → rework loop.',
        },
        {
          title: 'Shift-left testing (Testing)',
          challenge:
            'Testing is manual and written after merge, so defects surface late; automation is near zero.',
          evidence: 'Manual testing ~70% accuracy; automation ~0% across mapped steps.',
          capability:
            'Generate tests from acceptance criteria at story time; gate coverage on every MR so defects are caught while coding.',
        },
        {
          title: 'Release & compliance docs (Release · 23% of the wait)',
          challenge:
            'Release documentation and regulatory traceability are slow and manual.',
          evidence: 'Doc approvals ~336 hrs; the 48-hr verification for ~30 min of work.',
          capability:
            'Agent drafts release/IRN/SOP artifacts from the change and auto-verifies traceability via MCP to the eQMS — approvals stay human.',
        },
        {
          title: 'Governance (Platform · gates everything)',
          challenge:
            'Scaling AI to 50+ contributors in regulated diagnostics requires security, auditability and data-handling settled first.',
          evidence: 'Governance is the enabler that moves every other use case from pilot to platform.',
          capability:
            'Privacy Mode (no retention/training), SOC 2 Type II, admin policy, audit logs + AI-code attribution for an FDA/eQMS context.',
        },
      ],
    },
    {
      kind: 'metrics',
      title: 'What moved when the work went plan-first',
      items: [
        { value: '+26%', label: 'accepted code', sub: 'engineers who adopted structured, plan-first workflows' },
        { value: '72h → ~24h', label: 'MR review cycle', sub: 'routine pass automated; humans on logic + architecture' },
        { value: '48h → min', label: 'doc verification', sub: 'traceability checked automatically' },
        { value: 'Fewer rollbacks', label: 'regulated infra', sub: 'plan-before-apply on clinical-genomics changes' },
      ],
      note: 'The teams that performed best weren’t fastest through code — they made fewer expensive mistakes at the gates that matter.',
    },
    {
      kind: 'stakes',
      title: 'Why this is bigger than a tooling deal',
      items: [
        {
          label: 'The PHI unlock',
          body: 'A signed HIPAA BAA opens the company’s highest-cost AI workload — a complex, fully PHI-gated medical-billing process. Until it’s signed, that work routes to other vendors. (Cursor signs BAAs for Enterprise, and will guarantee US-only inference above a threshold — this is a yes.)',
        },
        {
          label: 'The savings mandate',
          body: 'Every AI dollar is measured against a multi-year, nine-figure cost-savings target. The wait-at-the-ends story ties directly to time and cost — which is exactly how the pitch has to be framed internally.',
        },
        {
          label: 'The strategic seat',
          body: 'They want to build — and commercialize — a proprietary biological foundation model on their unique dataset. That flagship co-build seat goes to whoever earns trust first.',
        },
      ],
    },
    {
      kind: 'callout',
      quote: 'Pointing AI at coding optimizes the 9% that was already fast. The unlock is the 86% at the two ends.',
      body: 'In regulated genomics the prize isn’t velocity in the editor — it’s confidence at the gates, and compressing the planning and compliance wait. That’s the opposite of the “ship faster” pitch, and it’s the one that lands here.',
    },
    {
      kind: 'talktrack',
      title: 'Take it to a call',
      listen: [
        '“Compliance and testing are bigger bottlenecks than code generation.”',
        '“We’re trying to be AI-first, but we’re regulated.”',
        'Rework from thin specs; long document-approval queues.',
        'A mandate to tie every AI dollar to cost / time / pulled-forward revenue.',
      ],
      say: [
        'Most of your lead time is wait at the two ends — let’s point Cursor at requirements up front and regulated docs at the back.',
        'Cursor prepares and verifies; approvals stay with your people and your eQMS.',
        'Plan-first workflows raised accepted code ~26% and cut review and verification — while reducing mistakes on regulated infra.',
      ],
    },
  ],
}
