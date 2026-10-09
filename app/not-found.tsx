import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <div className="space-y-4 max-w-lg">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-electric">
          {"// ERROR 404: RESOURCE_MISSING"}
        </span>

        <h1 className="chapter-title text-5xl sm:text-7xl text-foreground">
          You found the one endpoint I haven&apos;t built yet.
        </h1>

        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          Either you mistyped the URL, or you found a route I planned during a 3 AM caffeine binge and forgot to deploy to production.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
          <Link
            href="/"
            className="rounded-full bg-accent-electric px-6 py-2.5 font-semibold text-background hover:opacity-90 transition-opacity"
          >
            ← Return to the Story
          </Link>
          <a
            href="mailto:divaakarnaresh2005@gmail.com"
            className="rounded-full border border-border px-5 py-2.5 text-foreground hover:bg-surface transition-colors"
          >
            Report Bug / Talk Shop
          </a>
        </div>
      </div>
    </main>
  )
}
