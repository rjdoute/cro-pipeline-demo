import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CornerDownLeft,
  Ear,
  FileWarning,
  MapPin,
  Sparkles,
  Terminal,
  TrendingUp,
  User,
} from 'lucide-react'
import type {
  AhaBeat,
  ArtifactBeat,
  Beat,
  CursorMomentBeat,
  DebriefBeat,
  ImpactBeat,
  NarrationBeat,
  PainBeat,
} from '../lib/types'
import { alpha } from '../lib/utils'

export function BeatRenderer({ beat, accent }: { beat: Beat; accent: string }) {
  switch (beat.kind) {
    case 'narration':
      return <Narration beat={beat} accent={accent} />
    case 'pain':
      return <Pain beat={beat} accent={accent} />
    case 'artifact':
      return <Artifact beat={beat} accent={accent} />
    case 'cursorMoment':
      return <CursorMoment beat={beat} accent={accent} />
    case 'impact':
      return <Impact beat={beat} accent={accent} />
    case 'aha':
      return <Aha beat={beat} accent={accent} />
    case 'debrief':
      return <Debrief beat={beat} accent={accent} />
  }
}

function Narration({ beat, accent }: { beat: NarrationBeat; accent: string }) {
  return (
    <div className="max-w-2xl">
      {beat.role && (
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ color: accent, background: alpha(accent, 0.12) }}
        >
          <User className="h-3.5 w-3.5" /> {beat.role}
        </span>
      )}
      {beat.title && (
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white">{beat.title}</h2>
      )}
      <p className="mt-4 text-lg leading-relaxed text-white/70">{beat.body}</p>
    </div>
  )
}

function Pain({ beat, accent }: { beat: PainBeat; accent: string }) {
  return (
    <div className="max-w-2xl">
      {beat.title && <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">{beat.title}</h2>}
      {beat.stat && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-ink-800/60 p-6">
          <div className="text-5xl font-extrabold tracking-tight" style={{ color: accent }}>
            {beat.stat}
          </div>
          {beat.statLabel && <div className="mt-2 text-base text-white/70">{beat.statLabel}</div>}
        </div>
      )}
      {beat.body && <p className="mt-5 text-lg leading-relaxed text-white/70">{beat.body}</p>}
      {beat.items && (
        <ul className="mt-4 space-y-2.5">
          {beat.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 text-white/75">
              <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-400/80" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Artifact({ beat, accent }: { beat: ArtifactBeat; accent: string }) {
  return (
    <div className="max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
          <FileWarning className="h-4 w-4" style={{ color: accent }} />
          <span className="font-mono text-xs text-white/60">{beat.label}</span>
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-white/80">
          <code>{beat.content}</code>
        </pre>
      </div>
      {beat.caption && <p className="mt-3 text-sm italic text-white/55">{beat.caption}</p>}
    </div>
  )
}

function CursorMoment({ beat, accent }: { beat: CursorMomentBeat; accent: string }) {
  const [ran, setRan] = useState(false)
  return (
    <div className="max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
          <Terminal className="h-4 w-4" style={{ color: accent }} />
          <span className="font-mono text-xs text-white/60">Cursor</span>
        </div>

        <div className="px-4 py-4">
          <div className="rounded-xl border border-white/10 bg-ink-900/80 p-3.5">
            <p className="text-[15px] leading-relaxed text-white/85">{beat.prompt}</p>
          </div>

          {!ran ? (
            <button
              onClick={() => setRan(true)}
              className="mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-ink-950 transition hover:brightness-110"
              style={{ background: accent }}
            >
              {beat.runLabel ?? 'Run with Cursor'} <CornerDownLeft className="h-4 w-4" />
            </button>
          ) : (
            <div className="mt-3 space-y-1.5 font-mono text-[13px] leading-relaxed">
              {beat.result.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.35, duration: 0.25 }}
                  className={
                    line.tone === 'add'
                      ? 'text-emerald-300'
                      : line.tone === 'remove'
                        ? 'text-rose-300'
                        : line.tone === 'note'
                          ? 'text-white/45'
                          : 'text-white/75'
                  }
                >
                  {line.tone === 'add' ? '＋ ' : line.tone === 'remove' ? '－ ' : '  '}
                  {line.text}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      {beat.caption && <p className="mt-3 text-sm italic text-white/55">{beat.caption}</p>}
    </div>
  )
}

function Impact({ beat, accent }: { beat: ImpactBeat; accent: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5" style={{ color: accent }} />
        <h2 className="text-2xl font-bold tracking-tight text-white">{beat.title ?? 'The impact'}</h2>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {beat.metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-ink-800/50 p-5"
          >
            <div className="text-3xl font-extrabold tracking-tight" style={{ color: accent }}>
              {m.value}
            </div>
            <div className="mt-1 text-sm font-semibold text-white/85">{m.label}</div>
            {m.sub && <div className="mt-1 text-xs leading-relaxed text-white/50">{m.sub}</div>}
          </motion.div>
        ))}
      </div>
      {beat.body && <p className="mt-5 text-base leading-relaxed text-white/70">{beat.body}</p>}
    </div>
  )
}

function Aha({ beat, accent }: { beat: AhaBeat; accent: string }) {
  return (
    <div className="max-w-2xl">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
        style={{ color: accent, background: alpha(accent, 0.12) }}
      >
        <Sparkles className="h-3.5 w-3.5" /> The aha
      </span>
      {beat.highlight && (
        <blockquote
          className="mt-5 border-l-4 pl-5 text-2xl font-bold leading-snug text-white"
          style={{ borderColor: accent }}
        >
          “{beat.highlight}”
        </blockquote>
      )}
      <p className="mt-5 text-lg leading-relaxed text-white/70">{beat.body}</p>
    </div>
  )
}

function Debrief({ beat, accent }: { beat: DebriefBeat; accent: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight text-white">Debrief — take this to the field</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Panel icon={<User className="h-4 w-4" />} title="Who" accent={accent}>
          {beat.who}
        </Panel>
        <Panel icon={<MapPin className="h-4 w-4" />} title="Where to find them" accent={accent}>
          {beat.where}
        </Panel>
      </div>
      <div className="mt-3 rounded-2xl border border-white/10 bg-ink-800/50 p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
          <Ear className="h-4 w-4" style={{ color: accent }} /> Listen for
        </div>
        <ul className="mt-3 space-y-2">
          {beat.listenFor.map((l, i) => (
            <li key={i} className="flex items-start gap-2.5 text-white/75">
              <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
      {beat.proof && (
        <div
          className="mt-3 flex items-start gap-3 rounded-2xl border p-5"
          style={{ borderColor: alpha(accent, 0.3), background: alpha(accent, 0.07) }}
        >
          <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: accent }} />
          <p className="text-sm leading-relaxed text-white/80">{beat.proof}</p>
        </div>
      )}
    </div>
  )
}

function Panel({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
        <span style={{ color: accent }}>{icon}</span> {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{children}</p>
    </div>
  )
}
