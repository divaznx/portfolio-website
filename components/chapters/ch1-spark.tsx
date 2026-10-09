"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"

/**
 * The film still image path. Change this one constant to swap the image.
 * See TODO.md for copyright/takedown note.
 */
const FILM_STILL_IMAGE = "/images/social-network.jpeg"

export function ChapterSpark() {
  const [locCount, setLocCount] = React.useState(42)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight

      if (rect.top < windowH && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height)))
        setLocCount(42 + Math.floor(progress * 14778))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="sector-01"
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 01</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            THE SPARK
          </span>
        </div>
      </div>

      {/* Main Narrative & Cinema Stage */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center my-auto">
        <div className="space-y-6">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              One movie. Then I couldn&apos;t stop.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              <p>
                <em>The Social Network</em> is the reason I became a software developer. A movie
                about building something from nothing hit differently, and I haven&apos;t stopped
                writing code since.
              </p>
              {/* [TODO-REAL-DETAIL: one scene or feeling from Divaakar about watching The Social Network] */}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-4 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-accent-electric animate-pulse" />
              <span>Before I wrote real code, I already had a different production system.</span>
            </div>
          </Reveal>
        </div>

        {/* Cinema-Style Visual: Film Still in letterbox frame */}
        <Reveal delay={0.25} className="w-full flex justify-center">
          <div className="w-full max-w-[509px]">
            {/* Cinema frame container */}
            <div className="relative rounded-2xl border border-border bg-black overflow-hidden shadow-xl">
              {/* Top letterbox bar */}
              <div className="bg-black px-4 py-2 flex items-center justify-between font-mono text-[10px] text-white/40 tracking-widest">
                <span>FILM FRAME · 001</span>
                <span className="text-accent-electric/60">24FPS</span>
              </div>

              {/* The film still — never displayed wider than 509px */}
              <div className="relative film-grain">
                <Image
                  src={FILM_STILL_IMAGE}
                  alt="Still from The Social Network (2010), the movie that inspired Divaakar to start coding"
                  width={509}
                  height={351}
                  className="w-full h-auto block"
                  sizes="(max-width: 509px) 100vw, 509px"
                  loading="lazy"
                />
              </div>

              {/* Bottom letterbox bar */}
              <div className="bg-black px-4 py-2 flex items-center justify-between font-mono text-[10px] text-white/40">
                <span className="tracking-wider">LINES OF CODE SINCE THE MOVIE</span>
                <span className="text-white/80 font-bold tracking-tight">
                  {locCount.toLocaleString("en-US", { minimumIntegerDigits: 5, useGrouping: true }).replace(/,/g, ",")}
                </span>
              </div>
            </div>

            {/* Credit line */}
            <p className="mt-2 text-center font-mono text-[9px] text-muted-foreground/60">
              Still from The Social Network (2010). © its owners.
            </p>

            {/* Mascot popcorn bubble */}
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[11px] text-muted-foreground">
              <span>🍿</span>
              <span className="italic text-foreground/60">
                *munches popcorn* &quot;npm run dev&quot;
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 01 — THE SPARK</span>
        <span>NEXT: SECTOR 02 ↓</span>
      </div>
    </section>
  )
}
