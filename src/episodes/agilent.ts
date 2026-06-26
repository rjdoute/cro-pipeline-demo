import type { Episode } from '../lib/types'

// Frontier episode — built entirely on PUBLIC material (Agilent's Lab OS /
// OpenLab vision) plus a real working proof-of-concept. Safe to commit in full.
export const agilent: Episode = {
  id: 'agilent-labos',
  company: 'Agilent — “Lab OS”',
  tier: 'frontier',
  vertical: 'Instruments & lab software',
  theme: 'An operating system for the lab',
  persona: 'One builder + AI coding agents',
  accent: '#3fa535',
  blurb:
    'Unify a sprawling, regulated instrument-software portfolio into one open platform — and prove it can be built.',
  youAre:
    'You’re looking at a public, board-backed vision to unify an entire instrument-software portfolio — and you’re about to prove an outsider can build against it in hours.',
  frontierNote:
    'Frontier: there’s no customer win here yet. But the vision is public, and a working proof already exists — that’s the flag we plant.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'The vision',
      role: 'You are a builder armed with AI coding agents',
      title: 'A public bet: turn 100+ products into one “Lab OS”',
      body: 'Agilent’s Productivity Solutions leader has a board-backed plan to consolidate 100+ software products and 600+ engineers onto a single platform — an open “operating system for the modern lab.” Explicitly anti-lock-in. Validated and regulated at scale (FDA, GxP, ISO 13485, 21 CFR Part 11). And notably: AI agents as first-class members of the engineering org.',
    },
    {
      id: 'reality',
      kind: 'pain',
      chapter: 'The reality',
      title: 'Decades of instruments, acquisitions, and silos',
      stat: '100+',
      statLabel: 'software products to unify across a regulated portfolio',
      body: 'The estate is fragmented — different eras, different stacks, systems that don’t talk. Competitors are betting on proprietary lock-in. Bench-level execution is still one of the last gaps in lab digitalization.',
      items: [
        'Legacy desktop software (think WPF/C++) needing modernization to web',
        'Instrument control, data, and execution split across tools',
        'Every change runs through a regulated, validated lifecycle',
      ],
    },
    {
      id: 'wall',
      kind: 'narration',
      chapter: 'The wall',
      title: 'Normally this is a multi-year, platform-team odyssey',
      body: 'Unifying a portfolio this size — with regulatory guardrails — is the kind of program that takes a large team and a long roadmap before anyone outside the building sees a thing.',
    },
    {
      id: 'thesis',
      kind: 'narration',
      chapter: 'The bet',
      title: 'The operating model is the product',
      body: 'The thesis: an API-first, open platform lets anyone build a delightful surface on top of it (platform attach) — and one person directing AI coding agents can ship that surface fast. If that’s true, the unification isn’t a decade away.',
    },
    {
      id: 'artifact',
      kind: 'artifact',
      chapter: 'The proof',
      label: 'labos.ts — a mock “Lab OS” data contract',
      language: 'typescript',
      content: `// The UI reads through a typed client whose methods mirror the
// platform's REST/GraphQL endpoints. Swap the mock for the real API
// and it's a drop-in — the UI never changes.
export const labOS = {
  getInstruments: () => GET<Instrument[]>('/v1/instruments'),
  getRun: (id: string) => GET<Run>(\`/v1/runs/\${id}\`),
  getSignals: (runId: string) => GET<Signal[]>(\`/v1/runs/\${runId}/signals\`),
}`,
      caption:
        'Design to the platform’s contract, not its internals. Today it returns synthetic data; tomorrow it’s a fetch() against the real Lab OS.',
    },
    {
      id: 'unlock',
      kind: 'cursorMoment',
      chapter: 'The unlock',
      prompt:
        'Build a polished, mobile-first thin client against this Lab OS contract: an instrument-fleet dashboard with live status + an interactive chromatogram review. Keep it read-only to respect the validated-record boundary (no eSignature/control in v1).',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Scaffolding Vite + React + TS against labos.ts…', tone: 'note' },
        { text: '+ Instrument Fleet dashboard: live status tiles, push alerts', tone: 'add' },
        { text: '+ Touch-native chromatogram: pinch-zoom, tap-a-peak (RT/area/purity)', tone: 'add' },
        { text: '+ Read-only by design — control + eSignature explicit non-goals (GxP / Part 11)', tone: 'note' },
        { text: 'Shipped solo, in hours — deployed to a public URL', tone: 'add' },
      ],
      caption:
        'A real proof, not a mockup: a working mobile companion built against a mock Lab OS API, regulated-aware from the start.',
    },
    {
      id: 'leap',
      kind: 'impact',
      chapter: 'The leap',
      title: 'One person. A few hours. A working surface.',
      metrics: [
        { value: '1', label: 'builder', sub: 'directing AI coding agents' },
        { value: 'Hours', label: 'to a live, deployed app', sub: 'not a slide — a real PWA' },
        { value: 'Read-only', label: 'regulated-aware v1', sub: 'stays clear of the validated-record boundary' },
        { value: 'Drop-in', label: 'API contract', sub: 'mock → real platform with no UI change' },
      ],
      body: 'See the proof: openlab-mobile-demo.vercel.app',
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight:
        'If one outsider with a few agents can build this against a mock API, imagine 600 engineers on the real one.',
      body: 'This is the operating model the platform vision is betting on, demonstrated live. The frontier isn’t “could this work” — it’s “here’s the model, already shown, now run it at portfolio scale.” That’s a CEO/board conversation, not a dev-tools one.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'Debrief',
      who: 'Platform leaders unifying fragmented instrument/device software portfolios — especially those publicly committing to “AI agents as first-class engineers.”',
      where:
        'Instrument, med-device, and lab-software companies (your Agilent-adjacent accounts) modernizing legacy desktop software to web under regulated constraints.',
      listenFor: [
        '“Open platform” vs. competitors’ proprietary lock-in.',
        'Unifying many products onto one architecture.',
        'Modernizing legacy WPF/C++ to web; bench-execution gaps.',
        'An explicit AI-native engineering operating model.',
      ],
      proof:
        'The vision is public and board-backed; a working, regulated-aware thin client was already built solo against a mock platform API in hours.',
    },
  ],
}
