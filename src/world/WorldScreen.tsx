import { CheckCircle2, Telescope } from 'lucide-react'
import { provenEpisodes, frontierEpisodes } from '../episodes'
import { EpisodeCard } from './EpisodeCard'

export function WorldScreen() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:pt-16">
      {/* Hero */}
      <section className="animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/80">
          A field guide you play, not read
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
          Step inside a life-science company and live the moment AI changed how they work.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          Most of what these companies run on is invisible from the outside. Each episode drops you
          into someone’s shoes — feel the bottleneck, feel the unlock — so you walk away understanding
          where Cursor actually fits, and why.
        </p>
      </section>

      {/* Proven */}
      <section className="mt-14">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <h2 className="text-lg font-bold text-white">Where we’re winning today</h2>
          <span className="text-sm text-white/40">— real customers, real outcomes</span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {provenEpisodes.map((e, i) => (
            <EpisodeCard key={e.id} episode={e} index={i} />
          ))}
        </div>
      </section>

      {/* Frontier */}
      <section className="mt-14">
        <div className="flex items-center gap-2.5">
          <Telescope className="h-5 w-5 text-violet-400" />
          <h2 className="text-lg font-bold text-white">The frontier</h2>
          <span className="text-sm text-white/40">— where we go win next (no proof yet — we create it)</span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frontierEpisodes.map((e, i) => (
            <EpisodeCard key={e.id} episode={e} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
