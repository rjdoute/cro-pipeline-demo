import type { Episode } from '../lib/types'

// Public, safe version. Company + individuals generalized; private overlay
// restores specifics once the repo is private.
export const genentech: Episode = {
  id: 'genentech',
  company: 'A biopharma drug-discovery group',
  tier: 'proven',
  vertical: 'Pharma discovery',
  theme: 'Speed of science',
  persona: 'Computational / ML scientist & team lead',
  accent: '#5b8cff',
  blurb:
    'When the gap between a scientific insight and the tool that uses it is too slow, the science slows too.',
  youAre:
    'You lead a team building the computational methods behind small-molecule discovery. You used to write code. Lately you mostly review other people’s outputs.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Setup',
      role: 'You are a director of ML in a drug-discovery group',
      title: 'The science moves at the speed of the tooling around it',
      body: 'Your team builds core methods — ligand modeling, cofolding, structure-prediction variants — and the internal tools scientists use to run them. The bottleneck isn’t the science. It’s the loop between a scientist’s feedback and a shipped change to the tool.',
    },
    {
      id: 'pain',
      kind: 'pain',
      chapter: 'The friction',
      title: 'File a ticket. Wait. Review. Repeat.',
      statLabel: 'every custom-tool request routes through your team',
      body: 'Wet-lab and computational scientists can’t run their own analyses — they request custom tooling and wait. And you, the leader who used to build, are now a reviewer of outputs rather than a contributor.',
      items: [
        'Scientist feedback → shipped tooling is a slow, multi-week loop',
        'Scientists queue for analyses they could run themselves',
        'Senior builders stuck reviewing instead of building',
      ],
    },
    {
      id: 'unlock',
      kind: 'cursorMoment',
      chapter: 'The unlock',
      prompt:
        'Add the new scoring variant the scientists asked for to our cofolding tool, wire it into the analysis UI, and generate a quick notebook so they can run it themselves.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Reading the methods repo + the linked request…', tone: 'note' },
        { text: '+ New scoring variant implemented and tested', tone: 'add' },
        { text: '+ Exposed in the internal analysis tool', tone: 'add' },
        { text: '+ Self-serve notebook generated for the scientists', tone: 'add' },
        { text: 'Feedback → shipped change collapses from weeks to a day', tone: 'add' },
      ],
      caption:
        'The loop compresses — and a director-level leader is contributing code again, not just reviewing it.',
    },
    {
      id: 'leap',
      kind: 'impact',
      chapter: 'The leap',
      title: 'The discovery loop tightens',
      metrics: [
        { value: 'Weeks → days', label: 'feedback to shipped tool', sub: 'scientist insight reaches software fast' },
        { value: 'Back in the code', label: 'leaders contributing', sub: 'not just reviewing outputs' },
        { value: 'Self-serve', label: 'scientists run analyses', sub: 'instead of queuing custom requests' },
      ],
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: 'It embeds into the science itself.',
      body: 'This isn’t generic engineering productivity. It shrinks the distance between a scientific insight and the software that operationalizes it — and becomes the foundation for scientists running their own analyses instead of waiting in a queue.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'Debrief',
      who: 'Computational / ML leaders in discovery research who own internal scientific tooling.',
      where:
        'Drug-discovery R&D groups where scientists depend on a methods/tooling team and the feedback loop is the constraint.',
      listenFor: [
        '“Scientists file tickets for tools instead of running their own analyses.”',
        '“Our leads review outputs but don’t build anymore.”',
        'A slow insight → tool → result loop.',
      ],
      proof:
        'A discovery group uses Cursor to build and iterate core scientific tooling, compressing the feedback loop and putting senior scientists back into the codebase.',
    },
  ],
}
