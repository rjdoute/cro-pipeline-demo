import { Link, useParams } from 'react-router-dom'
import { getEpisode } from '../episodes'
import { EpisodePlayer } from './EpisodePlayer'
import { StoryView } from './StoryView'

export function EpisodeScreen() {
  const { episodeId } = useParams()
  const episode = episodeId ? getEpisode(episodeId) : undefined

  if (!episode) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Episode not found</h1>
        <p className="mt-2 text-white/60">That scenario doesn’t exist (yet).</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-white/30"
        >
          ← Back to all episodes
        </Link>
      </main>
    )
  }

  if (episode.sections && episode.sections.length > 0) {
    return <StoryView episode={episode} />
  }

  return <EpisodePlayer episode={episode} />
}
