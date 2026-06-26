import type { Episode } from '../lib/types'

export const f4Translational: Episode = {
  id: 'f4-translational',
  company: 'The translational scientist closes the loop',
  tier: 'frontier',
  vertical: 'Translational & clinical data science',
  theme: 'Patient data → insight, self-served',
  persona: 'Translational scientist',
  accent: '#5b8cff',
  blurb: 'Correlate omics with clinical outcomes without queuing on a data-science team for every question.',
  youAre:
    'You connect molecular data to patient outcomes. Every new cohort question means another request to a data-science team — and another wait.',
  frontierNote: 'Frontier: a vision grounded in the same “self-serve the science” pattern as the proven episodes.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Today',
      role: 'You are a translational scientist',
      title: 'Every cohort question is a ticket',
      body: 'You want to ask: does this biomarker track with response in this subgroup? Answering it means specifying a cohort, handing it to data science, and waiting — then re-specifying when the first cut raises a new question.',
    },
    {
      id: 'pain',
      kind: 'pain',
      chapter: 'The friction',
      title: 'Request-driven research is slow research',
      statLabel: 'every cohort cut routes through a scarce team',
      items: [
        'Cohort definition → data-science queue → wait',
        'Each answer spawns a new question, and a new wait',
        'The science moves at the speed of the backlog',
      ],
    },
    {
      id: 'unlock',
      kind: 'cursorMoment',
      chapter: 'The frontier',
      prompt:
        'Pull the cohort where biomarker X is elevated, join molecular profiles to clinical outcomes, and build me a stratified survival view I can adjust myself.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Assembling the cohort + joining omics ↔ outcomes…', tone: 'note' },
        { text: '+ Stratified analysis with the covariates you named', tone: 'add' },
        { text: '+ An interactive view you can re-slice on your own', tone: 'add' },
        { text: '+ Reproducible, documented, and shareable', tone: 'add' },
        { text: 'Translational research goes from request-driven to self-driven', tone: 'add' },
      ],
      caption: 'The scientist closes the loop from patient data to insight — without the queue.',
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: 'The person with the question becomes the person who answers it.',
      body: 'Self-driven translational work compounds: more questions asked, more hypotheses tested, faster — while the data-science team focuses on the genuinely hard, novel problems.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'How to go win it',
      who: 'Translational and clinical data scientists, plus the R&D / biomarker leaders who own the backlog they sit behind.',
      where:
        'Pharma, biotech, and diagnostics teams correlating multi-omics with clinical outcomes for target and biomarker work.',
      listenFor: [
        '“Every cohort question is a ticket.”',
        '“We re-specify and wait, again and again.”',
        '“Our data-science team is the bottleneck.”',
      ],
      proof:
        'Adjacent proven pattern: domain experts self-serving complex queries over proprietary multimodal data via agentic tooling.',
    },
  ],
}
