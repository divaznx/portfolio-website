"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ChapterTurning() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)
  const lapCounterRef = React.useRef<HTMLSpanElement>(null)
  const speedTraceRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const section = sectionRef.current
    const inner = innerRef.current
    if (!section || !inner) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      if (lapCounterRef.current) lapCounterRef.current.textContent = "LAP 07 / 09 · FULL THROTTLE"
      return
    }

    const ctx = gsap.context(() => {
      const words = section.querySelectorAll(".f1-word")
      const bars = section.querySelectorAll(".speed-bar")

      // Initial states
      gsap.set(inner, { clipPath: "inset(100% 0% 0% 0%)" })
      gsap.set(words, { yPercent: 110, opacity: 0 })
      gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=160%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (lapCounterRef.current) {
              const currentLap = Math.min(7, Math.max(1, Math.floor(self.progress * 7) + 1))
              lapCounterRef.current.textContent = `LAP 0${currentLap} / 09 · FULL THROTTLE`
            }
          },
        },
      })

      // (a) Accent band wipes in over the previous section
      tl.to(inner, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.4,
        ease: "power2.out",
      })

      // (b) Words rise in one by one with a stagger
      tl.to(
        words,
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.1"
      )

      // (c) Speed-trace bars grow from scaleY 0 with stagger
      tl.to(
        bars,
        {
          scaleY: 1,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )

      // (d) Short hold at the end so the finished quote stays on screen before unpinning
      tl.to({}, { duration: 0.4 })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="sector-07"
      ref={sectionRef}
      className="relative w-full bg-[var(--accent-electric)] text-[var(--on-accent)] overflow-hidden"
    >
      {/* Exactly 100svh inner container with fixed safe-area flex centering */}
      <div
        ref={innerRef}
        className="relative w-full h-[100svh] flex flex-col justify-between items-center px-[var(--layout-gutter)] py-8 max-w-[1100px] mx-auto select-none"
      >
        {/* Top Reserved Telemetry Row */}
        <div className="w-full flex items-center justify-between font-mono text-xs z-10 pt-2">
          <div className="flex items-center gap-2 tracking-widest uppercase font-semibold">
            <span>SECTOR 07</span>
            <span className="opacity-40">/</span>
            <span>THE TURNING POINT</span>
          </div>

          <div className="font-mono text-xs tracking-wider uppercase">
            <span ref={lapCounterRef}>LAP 01 / 09 · FULL THROTTLE</span>
          </div>
        </div>

        {/* Center Main Stage: Speed Trace + Fixed-Break Quote + TODO Attribution */}
        <div className="my-auto w-full flex flex-col items-center justify-center space-y-6 sm:space-y-8 z-10">
          {/* Speed-Trace Bars (Reserved row ABOVE the quote) */}
          <div
            ref={speedTraceRef}
            className="w-full max-w-2xl flex items-end justify-center gap-1.5 h-8 px-4"
            aria-hidden="true"
          >
            {Array.from({ length: 28 }).map((_, i) => {
              const hPercent = 30 + Math.sin(i * 0.4) * 25 + (i % 3) * 15
              return (
                <div
                  key={i}
                  className="speed-bar flex-1 rounded-sm bg-current opacity-40 will-change-transform"
                  style={{ height: `${hPercent}%` }}
                />
              )
            })}
          </div>

          {/* Centered Quote with strictly fixed line breaks to prevent layout shifts */}
          <blockquote className="w-full text-center font-sans font-bold text-[clamp(2.6rem,1.8rem+5.5vw,6.5rem)] leading-[0.98] tracking-tight">
            {/* Desktop fixed lines */}
            <div className="hidden sm:block">
              <div className="overflow-hidden py-1">
                {["Giving", "up", "is", "not"].map((word) => (
                  <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                    <span className="f1-word inline-block will-change-transform">{word}</span>
                  </span>
                ))}
              </div>
              <div className="overflow-hidden py-1">
                {["in", "the", "blood,", "sir."].map((word) => (
                  <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                    <span className="f1-word inline-block will-change-transform">{word}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile fixed lines */}
            <div className="sm:hidden">
              <div className="overflow-hidden py-0.5">
                {["Giving", "up"].map((word) => (
                  <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                    <span className="f1-word inline-block will-change-transform">{word}</span>
                  </span>
                ))}
              </div>
              <div className="overflow-hidden py-0.5">
                {["is", "not", "in"].map((word) => (
                  <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                    <span className="f1-word inline-block will-change-transform">{word}</span>
                  </span>
                ))}
              </div>
              <div className="overflow-hidden py-0.5">
                {["the", "blood,", "sir."].map((word) => (
                  <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                    <span className="f1-word inline-block will-change-transform">{word}</span>
                  </span>
                ))}
              </div>
            </div>
          </blockquote>

          {/* Reserved Attribution slot (NO attribution printed) */}
          <div className="font-mono text-xs opacity-60 tracking-wider">
            <span>{"// NO ATTRIBUTION · [TODO: confirm quote speaker]"}</span>
          </div>
        </div>

        {/* Bottom Reserved Row: Safe Footer Cue */}
        <div className="w-full flex justify-between items-center font-mono text-xs opacity-60 border-t border-black/15 pt-3 z-10">
          <span>CH 07 — THE TURNING POINT</span>
          <span>NEXT: SECTOR 08 ↓</span>
        </div>
      </div>
    </section>
  )
}
