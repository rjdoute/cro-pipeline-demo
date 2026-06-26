import type { Episode } from '../lib/types'

// Public, safe version. Company + individual generalized; private overlay
// restores specifics once the repo is private.
export const caris: Episode = {
  id: 'caris',
  company: 'A precision-oncology diagnostics company',
  tier: 'proven',
  vertical: 'Diagnostics',
  theme: 'Who gets to build',
  persona: 'Domain expert (not a software engineer)',
  accent: '#8b5cf6',
  blurb:
    'You’re brilliant with the data and the biology. You were never trained to build software. Watch what changes.',
  youAre:
    'You understand the company’s genomic data better than almost anyone. You write Python to get your science done — but you are not a software engineer, and everyone treats that as a ceiling.',
  beats: [
    {
      id: 'setup',
      kind: 'narration',
      chapter: 'Setup',
      role: 'You are a domain expert in a precision-oncology diagnostics company',
      title: 'The data is the crown jewel. You’re the one who understands it.',
      body: 'The company generates tens of gigabytes of multimodal data per patient — across hundreds of thousands of patients. It’s a genuinely unique dataset. And you know it cold. What you’re not is a “real” engineer, which has always meant your ideas had to wait in someone else’s queue.',
    },
    {
      id: 'buried',
      kind: 'pain',
      chapter: 'Buried',
      title: 'Everyone needs the data. The only path runs through you.',
      stat: 'Petabytes',
      statLabel: 'of proprietary data nobody can self-serve',
      body: 'Clients and internal teams ping you constantly for slices of data. Every request routes through your small team. Meanwhile the “infrastructure” holding it together is a pile of bespoke scripts you yourself call unsustainable.',
      items: [
        'Data requests queue on you and your team',
        'Bespoke Python scripts — fragile, undocumented, unscalable',
        'Cloud bills that make leadership wince',
      ],
    },
    {
      id: 'wall',
      kind: 'narration',
      chapter: 'The wall',
      title: 'To fix this properly, you’d need a platform team you don’t have',
      body: 'A request lands that you simply can’t turn around fast enough. The “right” answer is a real data platform — logging, governance, traceability, a clean source of truth. That’s months of an engineering team you were never going to be given. So it never happens.',
    },
    {
      id: 'artifact',
      kind: 'artifact',
      chapter: 'The artifact',
      label: 'pipeline_v7_FINAL_actually_final.py',
      language: 'python',
      content: `# don't touch — breaks if you look at it
import pandas as pd
def run(path):
    df = pd.read_csv(path)         # 40GB, no chunking, prays for RAM
    df = clean(df)                 # clean() defined 600 lines down
    # TODO logging? parallelize? who knows
    df.to_csv("/tmp/out.csv")      # then someone emails it. somehow.`,
      caption: 'This is the “data backend” for a company at petabyte scale. It is one person and a lot of hope.',
    },
    {
      id: 'unlock-refactor',
      kind: 'cursorMoment',
      chapter: 'The unlock',
      prompt:
        'Rebuild this ETL into a real pipeline: chunked + parallelized, with logging, governance, traceability, and cost telemetry. Keep the outputs identical.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Refactoring bespoke scripts → modular pipeline…', tone: 'note' },
        { text: '+ Chunked, parallelized ingestion (handles the 40GB/patient case)', tone: 'add' },
        { text: '+ Structured logging + lineage/traceability', tone: 'add' },
        { text: '+ Cost telemetry per run', tone: 'add' },
        { text: '+ A clean “source of truth” data-quality layer', tone: 'add' },
        { text: 'Done in hours — ~1/100th the effort of a traditional build', tone: 'add' },
      ],
      caption: 'You — not an engineer — just did the platform team’s job. In an afternoon.',
    },
    {
      id: 'unlock-agent',
      kind: 'cursorMoment',
      chapter: 'The leap',
      prompt:
        'Now expose our multimodal data (RNA-seq, DNA-seq, expression) as tools behind an agent so clients and teams can self-serve their own queries.',
      runLabel: 'Run with Cursor',
      result: [
        { text: 'Scaffolding an MCP server over the data APIs…', tone: 'note' },
        { text: '+ ~100 tools spanning every data modality', tone: 'add' },
        { text: '+ A chat surface so non-technical users self-serve queries', tone: 'add' },
        { text: '+ A self-improving loop: saved sessions → work items for new tools', tone: 'add' },
        { text: 'The queue that was crushing you… evaporates.', tone: 'add' },
      ],
      caption: 'Built over a weekend by one person. The company’s crown-jewel data becomes a self-serve product.',
    },
    {
      id: 'leap',
      kind: 'impact',
      chapter: 'The leap',
      title: 'From bottleneck to platform',
      metrics: [
        { value: 'Hours', label: 'to rebuild the data backbone', sub: 'vs. weeks of engineering' },
        { value: '~1/100th', label: 'the effort', sub: 'good enough for ~80% of cases' },
        { value: '~100 tools', label: 'self-serve data agent', sub: 'built solo over a weekend' },
        { value: 'Queue → 0', label: 'requests self-served', sub: 'data team stops being the bottleneck' },
      ],
    },
    {
      id: 'aha',
      kind: 'aha',
      chapter: 'The aha',
      highlight: 'You can change who gets to build.',
      body: 'The reframe isn’t “engineers ship faster.” It’s that a previously un-hireable profile — deep domain expertise, light coding — becomes a productive technical contributor. The scarce input was always the domain knowledge. Now the engineering comes from the tool. That changes who you hire.',
    },
    {
      id: 'debrief',
      kind: 'debrief',
      chapter: 'Debrief',
      who: 'Data/informatics leaders and domain-expert scientists at data-rich diagnostics & omics companies — and the execs who own data monetization.',
      where:
        'Companies sitting on large proprietary biological datasets where access bottlenecks through a central team and “the people who understand the data aren’t strong coders.”',
      listenFor: [
        '“Everything routes through my team.”',
        '“Our scripts aren’t sustainable.”',
        '“We can’t hire people who both know the data and can build.”',
        'Eye-watering cloud bills tied to data movement.',
      ],
      proof:
        'A non-engineer rebuilt the entire data backbone in hours and stood up a ~100-tool self-serve agent over the proprietary dataset in a weekend.',
    },
  ],
}
