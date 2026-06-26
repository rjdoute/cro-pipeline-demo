import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Telescope } from 'lucide-react'
import type { Episode } from '../lib/types'
import { alpha } from '../lib/utils'
import { BeatRenderer } from '../beats/Beats'

export function EpisodePlayer({ episode }: { episode: Episode }) {
  const [i, setI] = useState(0)
  const beats = episode.beats ?? []
  const total = beats.length
  const beat = beats[i]
  const accent = episode.accent
  const atEnd = i === total - 1

  const next = useCallback(() => setI((v) => Math.min(v + 1, total - 1)), [total])
  const prev = useCallback(() => setI((v) => Math.max(v - 1, 0)), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <main className="mx-auto flex min-h-[calc(100vh-57px)] max-w-4xl flex-col px-5 pb-8 pt-6">
      {/* Episode header */}
      <div className="animate-fade-up">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: accent, background: alpha(accent, 0.12) }}
          >
            {episode.vertical}
          </span>
          {episode.tier === 'frontier' && (
            <span className="inline-flex items-center gap-1 rounded-md bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-violet-300">
              <Telescope className="h-3 w-3" /> Vision
            </span>
          )}
        </div>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-white">{episode.company}</h1>
        <p className="text-sm font-medium" style={{ color: accent }}>
          {episode.theme}
        </p>
        {episode.tier === 'frontier' && episode.frontierNote && i === 0 && (
          <p className="mt-3 rounded-xl border border-violet-400/20 bg-violet-500/5 px-4 py-2.5 text-sm text-violet-200/80">
            {episode.frontierNote}
          </p>
        )}
      </div>

      {/* Chapter rail */}
      <div className="mt-5 flex gap-1.5 overflow-x-auto pb-1">
        {beats.map((b, idx) => (
          <button
            key={b.id}
            onClick={() => setI(idx)}
            className="group flex shrink-0 flex-col gap-1.5"
            title={b.chapter}
          >
            <span
              className="h-1 w-10 rounded-full transition-all"
              style={{
                background: idx <= i ? accent : 'rgba(255,255,255,0.12)',
              }}
            />
            <span
              className={
                'whitespace-nowrap text-[11px] transition ' +
                (idx === i ? 'font-semibold text-white' : 'text-white/35 group-hover:text-white/60')
              }
            >
              {b.chapter ?? `Step ${idx + 1}`}
            </span>
          </button>
        ))}
      </div>

      {/* Beat */}
      <div className="relative mt-8 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={beat.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <BeatRenderer beat={beat} accent={accent} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="mt-10 flex items-center justify-between border-t border-white/8 pt-4">
        <button
          onClick={prev}
          disabled={i === 0}
          className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition enabled:hover:text-white disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>

        <span className="text-xs tabular-nums text-white/40">
          {i + 1} / {total}
        </span>

        {!atEnd ? (
          <button
            onClick={next}
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-ink-950 transition hover:brightness-110"
            style={{ background: accent }}
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30"
          >
            Finish ✓
          </Link>
        )}
      </div>
    </main>
  )
}
