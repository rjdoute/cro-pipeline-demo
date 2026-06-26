import type { Episode } from '../lib/types'

export const f1BenchScientist: Episode = {
  id: 'f1-bench-scientist',
  company: 'The bench scientist who never files a ticket again',
  tier: 'frontier',
  vertical: 'Research & translational',
  theme: 'Every scientist their own data team',
  persona: 'Wet-lab biologist',
  accent: '#22b8d6',
  blurb: 'Run the experiment in the morning. Build your own analysis by the afternoon. No queue.',
  youAre:
    'You’re a wet-lab biologist. You generate rich experimental data — and then you wait on someone else to make sense of it.',
  frontierNote:
    'Frontier: a vision, not a customer story yet. It’s the end-state of patterns already showing up in the proven episodes.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Today',
      role: 'You are a wet-lab scientist',
      title: 'Your insight is trapped in a spreadsheet and a queue',
      body: 'You run an experiment, export the results to Excel, and file a request with bioinformatics. Then you wait — sometimes weeks — for someone with a coding background to run the analysis you already know you need.',
    },
    {
      id: 'pain',
      kind: 'pain',
      chapter: 'The friction',
      title: 'The bottleneck is access, not ideas',
      statLabel: 'every analysis routes through a scarce specialist',
      items: [
        'Export to Excel; hand off; wait for a specialist',
        'Iterate by email across a multi-week loop',
        'Your domain expertise stalls at the edge of your coding ability',
      ],
    },
    {
      id: 'unlock',
      kind: 'cursorMoment',
      chapter: 'The frontier',
      prompt:
        'I ran a dose–response experiment across these plates. Load the data, fit curves per compound, flag outliers, and build me a small dashboard I can re-run next week.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Reading plate data + experiment description…', tone: 'note' },
        { text: '+ Curve fits per compound, with QC flags on outliers', tone: 'add' },
        { text: '+ A reusable analysis script (no more Excel hand-offs)', tone: 'add' },
        { text: '+ A small dashboard you own and can re-run yourself', tone: 'add' },
        { text: 'Same afternoon — no ticket, no queue', tone: 'add' },
      ],
      caption: 'The scientist becomes their own data team — for the 80% of analyses that don’t need a specialist.',
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: 'Every scientist becomes a builder.',
      body: 'The specialist bioinformatics team stops being a queue and becomes leverage for the genuinely hard problems. The routine 80% gets self-served by the person who understands the science best.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'How to go win it',
      who: 'Bench, translational, and discovery scientists — and the R&D leaders whose teams are bottlenecked on a scarce bioinformatics function.',
      where:
        'Pharma R&D, biotech, and research orgs where scientists “aren’t hardcore coders but are great at data” and wait on a central team.',
      listenFor: [
        '“My analysis is stuck in the bioinformatics queue.”',
        '“I export to Excel and wait.”',
        '“If I could just run it myself…”',
      ],
      proof:
        'Adjacent proven pattern: a domain expert rebuilt a company’s data backbone and a self-serve agent without being an engineer.',
    },
  ],
}
