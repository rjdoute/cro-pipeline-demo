import type { Episode } from '../lib/types'

export const f3WholeCompany: Episode = {
  id: 'f3-whole-company',
  company: 'The whole company becomes builders',
  tier: 'frontier',
  vertical: 'Cross-functional',
  theme: 'Everyone becomes a builder',
  persona: 'A non-technical functional leader',
  accent: '#8b5cf6',
  blurb: 'Not just engineering. Medical affairs, commercial, ops — every function spins up its own tools.',
  youAre:
    'You lead a non-technical function. You’ve always waited on IT or bought rigid SaaS you can’t bend to your workflow.',
  frontierNote:
    'Frontier: a vision — but non-engineers are already among the heaviest agent users in the proven episodes.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Today',
      role: 'You run a non-technical function (commercial / medical affairs / ops)',
      title: 'You’re boxed in by someone else’s roadmap',
      body: 'When you need a tool, you either wait in IT’s backlog or buy expensive software that almost fits. The workflow that would actually help you never gets built, because it’s nobody’s priority but yours.',
    },
    {
      id: 'pain',
      kind: 'pain',
      chapter: 'The friction',
      title: 'Expensive, inflexible, and not yours',
      statLabel: 'paying vendors millions for tools you can’t change',
      items: [
        'IT backlog: your request is always someone’s low priority',
        'SaaS you rent, can’t customize, and can’t observe',
        'The exact workflow you need simply doesn’t exist',
      ],
    },
    {
      id: 'unlock',
      kind: 'cursorMoment',
      chapter: 'The frontier',
      prompt:
        'Build me a targeting tool that joins our CRM, ticketing, and data warehouse into one view, and produces a prioritized account list I can refresh from a short prompt.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Connecting CRM + ticketing + warehouse via MCP…', tone: 'note' },
        { text: '+ A unified, queryable view across your systems', tone: 'add' },
        { text: '+ A prioritized, refreshable output (no SQL, no eng ticket)', tone: 'add' },
        { text: '+ A shareable internal tool your team actually owns', tone: 'add' },
        { text: 'A deliverable in minutes that used to take analytics days', tone: 'add' },
      ],
      caption: 'A non-engineer ships their own internal tooling — the “citizen builder” pattern, made real.',
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: '“Change who builds” becomes the operating model of the whole company.',
      body: 'It stops being a story about one heroic engineer. When every function can build, the company replaces rented black-box software with tools it owns — and the capability moves far beyond the engineering org.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'How to go win it',
      who: 'Function leaders outside engineering (commercial, medical affairs, ops, program management) — and CIOs measuring AI ROI.',
      where:
        'Large life-science orgs paying for rigid enterprise SaaS, under board pressure to show AI returns.',
      listenFor: [
        '“We pay millions for tools that don’t fit our workflow.”',
        '“Our non-engineers are asking for more agent access.”',
        '“IT can’t get to our requests.”',
      ],
      proof:
        'Adjacent proven pattern: non-engineers (incl. a design leader and a PM) are among the heaviest internal builders in real deployments.',
    },
  ],
}
