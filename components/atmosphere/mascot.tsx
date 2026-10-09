"use client"

import * as React from "react"
import { X, Sparkles, Terminal, Wrench } from "lucide-react"

const MASCOT_JOKES = [
  "I read API docs for fun. Yes, I know.",
  "Sleep is just a cache I keep evicting.",
  "My retrieval pipeline has better memory than I do.",
  "Warning: Contains 0% boilerplate and 100% caffeine.",
  "Built with clean code and unreasonable ambition.",
  "Click me to inspect the classified toolbox.",
]

const TOOLBOX_DATA = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "Go", "PHP", "SQL", "FastAPI", "Flask", "Django"],
  },
  {
    category: "AI, Agents & Vector Search",
    items: ["LangChain", "LangGraph", "MCP", "Qdrant", "Chroma"],
  },
  {
    category: "Databases & Cloud Infrastructure",
    items: ["Supabase", "PostgreSQL", "MongoDB", "Docker", "AWS EC2/S3", "Linux"],
  },
  {
    category: "Computer Vision & ML",
    items: ["OpenCV", "YOLO", "ByteTrack", "Scikit-Learn"],
  },
]

export function Mascot() {
  const [open, setOpen] = React.useState(false)
  const [jokeIndex, setJokeIndex] = React.useState(0)
  const [hovered, setHovered] = React.useState(false)
  const [clickCount, setClickCount] = React.useState(0)
  const [easterEggActive, setEasterEggActive] = React.useState(false)
  const [dancing, setDancing] = React.useState(false)
  const [eyeOffset, setEyeOffset] = React.useState({ x: 0, y: 0 })
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const konamiSeq = React.useRef<string[]>([])

  // Eyes follow the cursor
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current) return
      const rect = btnRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const angle = Math.atan2(dy, dx)
      const dist = Math.min(2.5, Math.hypot(dx, dy) / 60)
      setEyeOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      })
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Konami code makes the mascot dance and swaps the accent color
  React.useEffect(() => {
    const KONAMI = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "KeyB", "KeyA"
    ]
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      if (e.code === KONAMI[konamiSeq.current.length]) {
        konamiSeq.current.push(e.code)
        if (konamiSeq.current.length === KONAMI.length) {
          konamiSeq.current = []
          setDancing(true)
          setEasterEggActive(true)
          // Swap accent color
          const current = document.documentElement.style.getPropertyValue("--accent-electric")
          const nextColor = current === "#FB923C" ? "#A3E635" : "#FB923C"
          document.documentElement.style.setProperty("--accent-electric", nextColor)
          setTimeout(() => {
            setDancing(false)
            setEasterEggActive(false)
          }, 6000)
        }
      } else {
        konamiSeq.current = e.code === KONAMI[0] ? [e.code] : []
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  const handleMascotClick = () => {
    const nextCount = clickCount + 1
    setClickCount(nextCount)
    if (nextCount >= 5) {
      setEasterEggActive(true)
      setTimeout(() => setEasterEggActive(false), 4000)
    }
    setOpen(true)
  }

  const cycleJoke = () => {
    setJokeIndex((prev) => (prev + 1) % MASCOT_JOKES.length)
    setHovered(true)
  }

  return (
    <>
      {/* Floating Terminal-Bot Mascot Dock */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
        {/* Hover Speech Bubble */}
        <div
          role="status"
          className={`mb-2.5 max-w-xs transition-all duration-300 pointer-events-none ${
            hovered
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95"
          }`}
        >
          <div className="relative rounded-lg border border-border bg-background/95 px-3 py-2 text-xs shadow-lg backdrop-blur-md text-foreground">
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-accent-electric font-semibold mb-0.5">
              <Terminal className="size-3" />
              <span>BOT_SYS</span>
            </div>
            <p className="font-sans leading-tight text-foreground/90">
              {MASCOT_JOKES[jokeIndex]}
            </p>
            {/* Pointer arrow */}
            <div className="absolute -bottom-1.5 right-5 size-3 rotate-45 border-r border-b border-border bg-background" />
          </div>
        </div>

        {/* Mascot Interactive Button */}
        <button
          ref={btnRef}
          type="button"
          onClick={handleMascotClick}
          onMouseEnter={cycleJoke}
          onMouseLeave={() => setHovered(false)}
          className={`group relative flex size-14 items-center justify-center rounded-2xl border transition-all duration-300 shadow-md ${
            dancing
              ? "border-accent-electric bg-accent-electric/30 animate-bounce scale-110 rotate-12"
              : easterEggActive
              ? "border-accent-electric bg-accent-electric/20 scale-110 rotate-6"
              : "border-border bg-card/90 hover:border-accent-electric hover:bg-card hover:scale-105"
          }`}
          aria-label="Open developer toolbox drawer"
          title="Click to view full developer toolbox"
        >
          {/* Antenna light */}
          <span className="absolute -top-1.5 right-6 flex size-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-electric opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent-electric" />
          </span>

          {/* Original Geometric Terminal Bot SVG */}
          <svg
            viewBox="0 0 40 40"
            className="size-9 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            aria-hidden="true"
          >
            {/* Bot Head / Terminal Frame */}
            <rect
              x="6"
              y="10"
              width="28"
              height="22"
              rx="4"
              className="fill-surface stroke-foreground/40 group-hover:stroke-accent-electric transition-colors"
              strokeWidth="2"
            />
            {/* Screen Inner */}
            <rect
              x="9"
              y="13"
              width="22"
              height="16"
              rx="2"
              className="fill-background"
            />
            {/* Antenna post */}
            <line
              x1="20"
              y1="10"
              x2="20"
              y2="4"
              className="stroke-foreground/60"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Bot Eyes / Screen Face (follow cursor) */}
            <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`, transition: "transform 0.05s ease-out" }}>
              {easterEggActive ? (
                // Winking happy face
                <>
                  <path
                    d="M13 21Q16 17 19 21"
                    stroke="var(--accent-electric)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="26" cy="20" r="1.5" fill="var(--accent-electric)" />
                </>
              ) : (
                // Friendly terminal prompt eyes: > _
                <>
                  <path
                    d="M12 18L15 20L12 22"
                    stroke="var(--accent-electric)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="18"
                    y1="22"
                    x2="23"
                    y2="22"
                    stroke="var(--accent-electric)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </g>
            {/* Side Ear Bolts */}
            <rect x="3" y="18" width="3" height="6" rx="1" fill="var(--muted-foreground)" />
            <rect x="34" y="18" width="3" height="6" rx="1" fill="var(--muted-foreground)" />
          </svg>

          {/* Mini helper badge */}
          <span className="absolute -bottom-1 -left-1 flex items-center justify-center rounded-full bg-accent-electric px-1.5 py-0.5 font-mono text-[9px] font-bold text-background leading-none">
            TOOLBOX
          </span>
        </button>
      </div>

      {/* Easter Egg Toast Notification */}
      {easterEggActive && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm rounded-lg border border-accent-electric bg-background p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent-electric">
            <Sparkles className="size-4 animate-spin" />
            <span>OVERCLOCK PROTOCOL ENGAGED!</span>
          </div>
          <p className="mt-1 text-xs text-foreground/90 font-mono">
            Achievement unlocked: You clicked the bot 5 times. Coffee consumption efficiency upgraded to 140%.
          </p>
        </div>
      )}

      {/* Hidden Toolbox Drawer */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Developer Toolbox"
          className="fixed inset-0 z-50 flex items-center justify-end bg-background/60 backdrop-blur-sm transition-opacity animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="h-full w-full max-w-md border-l border-border bg-card p-6 shadow-2xl overflow-y-auto sm:p-8 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-border pb-5">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-electric">
                  <Wrench className="size-3.5" />
                  <span>CLASSIFIED INVENTORY</span>
                </div>
                <h2 className="mt-1 font-serif text-2xl text-foreground">
                  The Builder&apos;s Toolbox
                </h2>
                <p className="mt-1 font-sans text-xs text-muted-foreground">
                  The only place on this site with a tool inventory. Everywhere else, they&apos;re woven into real stories.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
                aria-label="Close toolbox drawer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mt-6 space-y-6">
              {TOOLBOX_DATA.map(({ category, items }) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {"// " + category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground hover:border-accent-electric transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-lg border border-border/80 bg-surface/50 p-4 font-mono text-xs text-muted-foreground space-y-2">
                <p className="text-foreground font-semibold">
                  ⚡ Engineering Philosophy:
                </p>
                <p>
                  &ldquo;Tools change every 6 months. What remains is understanding customer demand curves, building robust systems, and refusing to give up when things break.&rdquo;
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 border-t border-border pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Return to story
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
