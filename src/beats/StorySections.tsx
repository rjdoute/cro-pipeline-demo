import { motion } from 'framer-motion'
import {
  ArrowRight,
  Ear,
  MessageSquareQuote,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
  User,
} from 'lucide-react'
import type {
  BigNumSection,
  CalloutSection,
  DiffSection,
  HeroSection,
  MetricsSection,
  PainsSection,
  ProseSection,
  StakesSection,
  StorySection,
  TalkTrackSection,
  UseCasesSection,
  WaitMapSection,
} from '../lib/story'
import { alpha } from '../lib/utils'

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionRenderer({ section, accent }: { section: StorySection; accent: string }) {
  switch (section.kind) {
    case 'hero':
      return <Hero s={section} accent={accent} />
    case 'bignum':
      return <BigNum s={section} accent={accent} />
    case 'waitmap':
      return <WaitMap s={section} accent={accent} />
    case 'callout':
      return <Callout s={section} accent={accent} />
    case 'pains':
      return <Pains s={section} accent={accent} />
    case 'diff':
      return <Diff s={section} accent={accent} />
    case 'usecases':
      return <UseCases s={section} accent={accent} />
    case 'metrics':
      return <Metrics s={section} accent={accent} />
    case 'stakes':
      return <Stakes s={section} accent={accent} />
    case 'talktrack':
      return <TalkTrack s={section} accent={accent} />
    case 'prose':
      return <Prose s={section} />
  }
}

function Hero({ s, accent }: { s: HeroSection; accent: string }) {
  return (
    <div className="pt-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
        {s.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
        {s.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{s.lede}</p>
      {s.role && (
        <span
          className="mt-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold"
          style={{ color: accent, background: alpha(accent, 0.12) }}
        >
          <User className="h-4 w-4" /> {s.role}
        </span>
      )}
    </div>
  )
}

function BigNum({ s, accent }: { s: BigNumSection; accent: string }) {
  return (
    <Reveal>
      <div className="rounded-3xl border border-white/10 bg-ink-800/50 p-8 sm:p-10">
        <div
          className="text-6xl font-extrabold leading-none tracking-tight sm:text-7xl"
          style={{ color: accent }}
        >
          {s.stat}
        </div>
        <div className="mt-4 text-xl font-semibold text-white">{s.label}</div>
        {s.body && <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">{s.body}</p>}
      </div>
    </Reveal>
  )
}

function WaitMap({ s, accent }: { s: WaitMapSection; accent: string }) {
  const max = Math.max(...s.items.map((i) => i.pct))
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      <div className="mt-6 space-y-4">
        {s.items.map((it) => (
          <div key={it.label}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className={'text-sm font-medium ' + (it.hot ? 'text-white' : 'text-white/60')}>
                {it.label}
              </span>
              <span
                className="text-sm font-bold tabular-nums"
                style={{ color: it.hot ? accent : 'rgba(255,255,255,0.45)' }}
              >
                {it.pct}%
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(it.pct / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: it.hot ? accent : 'rgba(255,255,255,0.18)' }}
              />
            </div>
          </div>
        ))}
      </div>
      {s.caption && <p className="mt-5 text-base leading-relaxed text-white/60">{s.caption}</p>}
    </Reveal>
  )
}

function Callout({ s, accent }: { s: CalloutSection; accent: string }) {
  return (
    <Reveal>
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{ borderColor: alpha(accent, 0.3), background: alpha(accent, 0.08) }}
      >
        <Quote className="h-7 w-7" style={{ color: accent }} />
        <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
          {s.quote}
        </p>
        {s.body && <p className="mt-4 text-base leading-relaxed text-white/70">{s.body}</p>}
      </div>
    </Reveal>
  )
}

function Pains({ s, accent }: { s: PainsSection; accent: string }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {s.items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
            <div className="text-3xl font-extrabold tracking-tight" style={{ color: accent }}>
              {it.stat}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{it.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

function Diff({ s, accent }: { s: DiffSection; accent: string }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
          <span className="font-mono text-xs text-white/55">{s.label}</span>
        </div>
        <div className="grid md:grid-cols-2 md:divide-x md:divide-white/8">
          <DiffPane title="Before" tone="rose" content={s.before} />
          <DiffPane title="After — with Cursor" tone="emerald" content={s.after} accent={accent} />
        </div>
      </div>
      {s.caption && <p className="mt-3 text-sm italic text-white/55">{s.caption}</p>}
    </Reveal>
  )
}

function DiffPane({
  title,
  tone,
  content,
  accent,
}: {
  title: string
  tone: 'rose' | 'emerald'
  content: string
  accent?: string
}) {
  return (
    <div>
      <div
        className={
          'border-b border-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider ' +
          (tone === 'rose' ? 'text-rose-300/80' : 'text-emerald-300/90')
        }
        style={accent && tone === 'emerald' ? { color: accent } : undefined}
      >
        {title}
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-white/80">
        <code>{content}</code>
      </pre>
    </div>
  )
}

function UseCases({ s, accent }: { s: UseCasesSection; accent: string }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      {s.intro && <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">{s.intro}</p>}
      <div className="mt-6 space-y-3">
        {s.items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-ink-800/40 p-5">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" style={{ color: accent }} />
              <h3 className="font-semibold text-white">{it.title}</h3>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-white/70">{it.challenge}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl bg-white/[0.03] p-3">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  The evidence
                </div>
                <div className="mt-1 text-sm text-white/75">{it.evidence}</div>
              </div>
              <div
                className="rounded-xl p-3"
                style={{ background: alpha(accent, 0.08) }}
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: accent }}
                >
                  What Cursor does
                </div>
                <div className="mt-1 text-sm text-white/80">{it.capability}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

function Metrics({ s, accent }: { s: MetricsSection; accent: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5" style={{ color: accent }} />
        <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {s.items.map((m, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
            <div className="text-3xl font-extrabold tracking-tight" style={{ color: accent }}>
              {m.value}
            </div>
            <div className="mt-1 text-sm font-semibold text-white/85">{m.label}</div>
            {m.sub && <div className="mt-1 text-xs leading-relaxed text-white/50">{m.sub}</div>}
          </div>
        ))}
      </div>
      {s.note && <p className="mt-4 text-sm italic text-white/50">{s.note}</p>}
    </Reveal>
  )
}

function Stakes({ s, accent }: { s: StakesSection; accent: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5" style={{ color: accent }} />
        <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      </div>
      <div className="mt-5 space-y-3">
        {s.items.map((it, i) => (
          <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-ink-800/40 p-5">
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} />
            <div>
              <div className="font-semibold text-white">{it.label}</div>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

function TalkTrack({ s, accent }: { s: TalkTrackSection; accent: string }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
            <Ear className="h-4 w-4" style={{ color: accent }} /> Listen for
          </div>
          <ul className="mt-3 space-y-2">
            {s.listen.map((l, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
            <MessageSquareQuote className="h-4 w-4" style={{ color: accent }} /> What to say
          </div>
          <ul className="mt-3 space-y-2">
            {s.say.map((l, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

function Prose({ s }: { s: ProseSection }) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        {s.title && <h2 className="text-2xl font-bold tracking-tight text-white">{s.title}</h2>}
        <p className="mt-3 text-lg leading-relaxed text-white/70">{s.body}</p>
      </div>
    </Reveal>
  )
}
