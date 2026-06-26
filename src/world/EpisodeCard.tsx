import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Episode } from '../lib/types'
import { alpha } from '../lib/utils'

export function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  return (
    <Link
      to={`/episode/${episode.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-800/50 card-grain p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
        style={{ background: alpha(episode.accent, 0.5) }}
      />
      <div className="relative flex items-center justify-between">
        <span
          className="rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
          style={{ color: episode.accent, background: alpha(episode.accent, 0.12) }}
        >
          {episode.vertical}
        </span>
        {episode.tier === 'frontier' && (
          <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white/55">
            Vision
          </span>
        )}
      </div>

      <h3 className="relative mt-3 text-lg font-bold leading-snug text-white">{episode.company}</h3>
      <p className="relative mt-0.5 text-sm font-medium" style={{ color: episode.accent }}>
        {episode.theme}
      </p>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/60">{episode.blurb}</p>

      <div className="relative mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <span className="text-xs text-white/45">Play as: {episode.persona}</span>
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 transition group-hover:gap-2"
          style={{ color: episode.accent }}
        >
          Step in <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
