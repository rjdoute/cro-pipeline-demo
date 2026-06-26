import { Link, Outlet, useLocation } from 'react-router-dom'
import { Compass } from 'lucide-react'

export function AppLayout() {
  const { pathname } = useLocation()
  const onWorld = pathname === '/'
  return (
    <div className="min-h-full bg-ink-950 bg-aurora">
      <header
        className="sticky top-0 z-30 border-b border-white/5 bg-ink-950/80 backdrop-blur"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
              <Compass className="h-4 w-4 text-accent" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              The Unlock
              <span className="ml-2 hidden text-xs font-normal text-white/40 sm:inline">
                Inside AI in Life Sciences
              </span>
            </span>
          </Link>
          {!onWorld && (
            <Link
              to="/"
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/25 hover:text-white"
            >
              ← All episodes
            </Link>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  )
}
