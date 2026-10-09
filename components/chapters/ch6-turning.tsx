"use client"

import * as React from "react"

const QUOTE_WORDS = ["Giving", "up", "is", "not", "in", "the", "blood,", "sir."]

export function ChapterTurning() {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight

      if (rect.top < windowH && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height * 0.7)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const revealedWordsCount = Math.floor(scrollProgress * (QUOTE_WORDS.length + 1))
  const lapCount = Math.min(6, Math.floor(scrollProgress * 7))

  return (
    <section
      id="sector-06"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Full-bleed electric lime band */}
      <div
        className="min-h-[95vh] flex flex-col justify-between py-28 px-[var(--layout-gutter)]"
        style={{ background: "var(--accent-electric)" }}
      >
        {/* Telemetry Header */}
        <div className="flex items-center justify-between pb-8 max-w-[var(--layout-max)] mx-auto w-full">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[0.7rem] font-medium tracking-[0.28em] uppercase" style={{ color: "var(--on-accent)" }}>
              SECTOR 06
            </span>
            <span style={{ color: "var(--on-accent)", opacity: 0.3 }}>/</span>
            <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--on-accent)", opacity: 0.7 }}>
              THE TURNING POINT
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs" style={{ color: "var(--on-accent)", opacity: 0.7 }}>
            <span>LAP {String(lapCount).padStart(2, "0")} / 08 · FULL THROTTLE</span>
          </div>
        </div>

        {/* Speed-Trace Bars */}
        <div className="w-full max-w-[var(--layout-max)] mx-auto py-6">
          <div className="flex items-end gap-1 h-8">
            {Array.from({ length: 24 }).map((_, i) => {
              const barProgress = Math.min(1, Math.max(0, scrollProgress * 2 - i * 0.05))
              const height = 20 + Math.sin(i * 0.5 + scrollProgress * 4) * 12
              return (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all duration-200"
                  style={{
                    height: `${barProgress * height}px`,
                    background: "var(--on-accent)",
                    opacity: 0.15 + barProgress * 0.35,
                  }}
                />
              )
            })}
          </div>
        </div>

        {/* Main Full-Bleed Quote Reveal */}
        <div className="my-auto py-12 max-w-5xl mx-auto">
          <blockquote
            className="font-sans font-bold text-[clamp(3.2rem,2rem+7vw,7.5rem)] leading-[0.95] tracking-tight select-none"
            style={{ color: "var(--on-accent)" }}
          >
            {QUOTE_WORDS.map((word, idx) => {
              const isRevealed = idx < revealedWordsCount || scrollProgress > 0.8
              return (
                <span
                  key={`${word}-${idx}`}
                  className="inline-block mr-[0.25em] transition-all duration-300"
                  style={{
                    opacity: isRevealed ? 1 : 0.15,
                    transform: isRevealed ? "translateY(0)" : "translateY(0.5em)",
                  }}
                >
                  {word}
                </span>
              )
            })}
          </blockquote>

          <div className="pt-8 font-mono text-xs flex flex-wrap items-center gap-3" style={{ color: "var(--on-accent)", opacity: 0.5 }}>
            <span>{"// NO ATTRIBUTION"}</span>
            <span>·</span>
            <span>[TODO: confirm quote speaker]</span>
          </div>
        </div>

        {/* Bottom Sector Cue */}
        <div className="pt-4 flex justify-between font-mono text-xs max-w-[var(--layout-max)] mx-auto w-full" style={{ color: "var(--on-accent)", opacity: 0.5, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <span>CH 06 — THE TURNING POINT</span>
          <span>NEXT: SECTOR 07 ↓</span>
        </div>
      </div>
    </section>
  )
}
