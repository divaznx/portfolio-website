"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// 44 vertical equalizer bars precisely matching the waveform in the screenshot:
// 4 peaks with valleys, smoothly tapering to low dots at both edges.
const WAVEFORM_HEIGHTS = [
  4, 5, 6, 8, 11, 15, 20, 27, 36, 44, 48, 42, 34, 28, 24, 30, 40, 50, 54, 48, 38,
  24, 16, 12, 16, 24, 36, 46, 42, 32, 22, 16, 12, 18, 28, 38, 46, 42, 32, 20, 14, 8, 5, 4,
] as const

export function ChapterTurning() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      return
    }

    const ctx = gsap.context(() => {
      const words = section.querySelectorAll(".f1-word")
      const bars = section.querySelectorAll(".waveform-bar")
      const header = section.querySelector(".f1-header")
      const footer = section.querySelector(".f1-footer")

      const mm = gsap.matchMedia()

      // Mobile / Tablet: Smooth trigger entrance without scroll-jacking pin
      mm.add("(max-width: 768px)", () => {
        gsap.set(words, { y: 16, opacity: 0 })
        gsap.set(bars, { scaleY: 0.15, transformOrigin: "bottom" })
        gsap.set(header, { opacity: 0, y: -6 })
        gsap.set(footer, { opacity: 0, y: 6 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })

        tl.to(header, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0)
          .to(
            words,
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.45,
              ease: "back.out(1.4)",
            },
            0.1
          )
          .to(
            bars,
            {
              scaleY: 1,
              stagger: {
                each: 0.01,
                from: "center",
              },
              duration: 0.4,
              ease: "power2.out",
            },
            0.2
          )
          .to(footer, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.35)

        // Subtle ambient telemetry flutter on mobile after reveal
        tl.add(() => {
          gsap.to(bars, {
            scaleY: "random(0.5, 1.1)",
            duration: 0.35,
            stagger: {
              each: 0.02,
              from: "random",
              repeat: -1,
              yoyo: true,
            },
            ease: "sine.inOut",
          })
        }, 0.6)
      })

      // Desktop: Pinned cinematic scrub experience
      mm.add("(min-width: 769px)", () => {
        gsap.set(words, { y: 24, opacity: 0 })
        gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" })
        gsap.set(header, { opacity: 0, y: -8 })
        gsap.set(footer, { opacity: 0, y: 8 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=120%",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        tl.to(header, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.05)
          .to(
            words,
            {
              y: 0,
              opacity: 1,
              stagger: 0.04,
              duration: 0.5,
              ease: "power2.out",
            },
            0.1
          )
          .to(
            bars,
            {
              scaleY: 1,
              stagger: {
                each: 0.012,
                from: "center",
              },
              duration: 0.45,
              ease: "power2.out",
            },
            0.2
          )
          .to(footer, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.3)
          .to({}, { duration: 0.5 })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="sector-07"
      ref={sectionRef}
      className="relative w-full min-h-[100svh] bg-[#C6FF3D] text-[#14140F] flex items-center justify-center px-4 sm:px-6 py-12 select-none overflow-hidden"
    >
      <div
        ref={contentRef}
        className="w-full max-w-[1100px] flex flex-col items-center justify-center text-center my-auto z-10"
      >
        {/* Top Header: SECTOR 07 / THE TURNING POINT */}
        <div className="f1-header font-mono text-[11px] sm:text-[13px] tracking-[0.24em] uppercase font-bold text-[#14140F] mb-8 sm:mb-14">
          SECTOR 07 / THE TURNING POINT
        </div>

        {/* Centered Display Quote with calibrated mobile size so line 1 & line 2 never break awkwardly */}
        <blockquote className="w-full text-center font-sans font-black text-[clamp(1.75rem,1.1rem+4vw,5.5rem)] leading-[1.12] sm:leading-[1.15] tracking-[-0.02em] text-[#14140F] mb-8 sm:mb-12 space-y-1 sm:space-y-2">
          {/* Line 1: Giving up is not in */}
          <div className="py-0.5 sm:py-1">
            {["Giving", "up", "is", "not", "in"].map((word, i) => (
              <React.Fragment key={word}>
                {i > 0 && " "}
                <span className="f1-word inline-block will-change-transform">{word}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Line 2: the blood, sir */}
          <div className="py-0.5 sm:py-1 whitespace-nowrap">
            {["the", "blood,", "sir"].map((word, i) => (
              <React.Fragment key={word}>
                {i > 0 && " "}
                <span className="f1-word inline-block will-change-transform">{word}</span>
              </React.Fragment>
            ))}
          </div>
        </blockquote>

        {/* Audio Waveform Equalizer directly below quote on flat baseline */}
        <div
          className="flex items-end justify-center gap-[2.5px] sm:gap-[4px] md:gap-[5px] h-[52px] sm:h-[58px] mb-6 sm:mb-8 px-2 max-w-full"
          aria-hidden="true"
        >
          {WAVEFORM_HEIGHTS.map((height, i) => (
            <div
              key={i}
              className="waveform-bar w-[2.75px] sm:w-[4px] md:w-[5px] bg-[#14140F] rounded-full will-change-transform origin-bottom flex-shrink-0"
              style={{
                height: `${height}px`,
              }}
            />
          ))}
        </div>

        {/* Bottom Cue: LAP 07 / 09   FULL THROTTLE */}
        <div className="f1-footer font-mono text-[11px] sm:text-[13px] tracking-[0.24em] uppercase font-bold text-[#14140F]">
          LAP 07 / 09 &nbsp; FULL THROTTLE
        </div>
      </div>
    </section>
  )
}
