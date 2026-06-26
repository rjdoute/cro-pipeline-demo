import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Telescope } from 'lucide-react'
import type { Episode } from '../lib/types'
import { alpha } from '../lib/utils'
import { SectionRenderer } from '../beats/StorySections'

export function StoryView({ episode }: { episode: Episode }) {
  const accent = episode.accent
  const sections = episode.sections ?? []
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <>
      {/* Reading progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-40 h-0.5 origin-left"
        style={{ scaleX: progress, background: accent }}
      />

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-8">
        {/* Episode chrome */}
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
          <span className="text-xs text-white/40">· {episode.theme}</span>
        </div>

        {episode.tier === 'frontier' && episode.frontierNote && (
          <p className="mt-3 rounded-xl border border-violet-400/20 bg-violet-500/5 px-4 py-2.5 text-sm text-violet-200/80">
            {episode.frontierNote}
          </p>
        )}

        {/* Sections */}
        <div className="mt-6 space-y-14">
          {sections.map((section, i) => (
            <section key={i}>
              <SectionRenderer section={section} accent={accent} />
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center justify-between border-t border-white/8 pt-6">
          <Link
            to="/"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30"
          >
            ← All episodes
          </Link>
          <span className="text-xs text-white/35">Play as: {episode.persona}</span>
        </div>
      </main>
    </>
  )
}
