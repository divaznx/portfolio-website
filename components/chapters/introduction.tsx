"use client"

import * as React from "react"
import Image from "next/image"
import gsap from "gsap"

export function Introduction() {
  const containerRef = React.useRef<HTMLElement>(null)
  const portraitRef = React.useRef<HTMLDivElement>(null)
  const headlineWordsRef = React.useRef<(HTMLSpanElement | null)[]>([])
  const metaRef = React.useRef<HTMLDivElement>(null)
  const subtitleRef = React.useRef<HTMLParagraphElement>(null)
  const roleRef = React.useRef<HTMLParagraphElement>(null)
  const bodyRef = React.useRef<HTMLParagraphElement>(null)
  const chipsRef = React.useRef<HTMLDivElement>(null)
  const ctasRef = React.useRef<HTMLDivElement>(null)

  const scrollToStory = () => {
    const el = document.getElementById("sector-01")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    const runEntrance = () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (prefersReduced) {
        gsap.to(containerRef.current, { opacity: 1, duration: 0.4 })
        return
      }

      const words = headlineWordsRef.current.filter(Boolean)

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Nav and meta chips drop in / fade up
      if (metaRef.current) {
        tl.fromTo(metaRef.current, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0)
      }

      // Headline words rise from mask
      if (words.length > 0) {
        tl.fromTo(
          words,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8, stagger: 0.08 },
          0.1
        )
      }

      // Subtitle & role line
      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.3)
      }
      if (roleRef.current) {
        tl.fromTo(roleRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.4)
      }

      // Paragraph & chips
      if (bodyRef.current) {
        tl.fromTo(bodyRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.48)
      }
      if (chipsRef.current) {
        tl.fromTo(chipsRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.56)
      }

      // CTAs
      if (ctasRef.current) {
        tl.fromTo(ctasRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.64)
      }

      // Portrait scales in with clip-path
      if (portraitRef.current) {
        tl.fromTo(
          portraitRef.current,
          {
            scale: 0.94,
            opacity: 0,
            clipPath: "inset(8% round 24px)",
          },
          {
            scale: 1,
            opacity: 1,
            clipPath: "inset(0% round 16px)",
            duration: 1,
            ease: "power3.out",
          },
          0.2
        )
      }
    }

    const handleSplashIn = () => runEntrance()
    const handleSplashSkipped = () => {
      // Short 0.4s fade-up if splash is skipped or session returning
      gsap.fromTo(containerRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 })
    }

    window.addEventListener("splash-transition-in", handleSplashIn)
    window.addEventListener("splash-skipped", handleSplashSkipped)

    // Fallback if no splash event fired within 3.5s
    const fallbackTimer = setTimeout(() => {
      if (containerRef.current && getComputedStyle(containerRef.current).opacity === "0") {
        gsap.to(containerRef.current, { opacity: 1, duration: 0.4 })
      }
    }, 3500)

    return () => {
      window.removeEventListener("splash-transition-in", handleSplashIn)
      window.removeEventListener("splash-skipped", handleSplashSkipped)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const headline = ["Hi,", "I'm", "Divaakar."]

  return (
    <header
      id="sector-00"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto"
    >
      {/* Sector Meta */}
      <div ref={metaRef} className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 00 / INTRODUCTION</span>
        </div>
        <span className="status-chip flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-accent-electric animate-ping" />
          <span>BUILDING SOMETHING COOL</span>
        </span>
      </div>

      {/* Two-column hero (clean order on mobile & desktop) */}
      <div className="my-auto py-8 sm:py-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="space-y-6 order-1">
          {/* Masked Headline Words */}
          <h1 className="chapter-title text-[clamp(2.8rem,1.8rem+5.5vw,5.8rem)] text-foreground leading-[1.02]">
            {headline.map((word, idx) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em] align-top">
                <span
                  ref={(el) => {
                    headlineWordsRef.current[idx] = el
                  }}
                  className="inline-block"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p ref={subtitleRef} className="font-sans text-fluid-xl font-normal text-foreground leading-snug">
            I build AI that actually works{" "}
            <span className="italic text-muted-foreground">(most days).</span>
          </p>

          <p ref={roleRef} className="font-mono text-xs sm:text-sm text-accent-electric tracking-wide uppercase font-semibold">
            BACKEND DEVELOPER · AI/ML ENGINEER · PYTHON DEVELOPER
          </p>

          <p ref={bodyRef} className="text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
            AI/ML-focused Python Developer from Chennai building RAG pipelines, LLM
            applications, REST APIs, and computer vision systems. Currently building my own product.
          </p>

          <div ref={chipsRef} className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              Chennai, India
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              FastAPI · LangGraph · Qdrant
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              BCA · 8.02 CGPA
            </span>
          </div>

          {/* Primary & Secondary CTAs at end of column */}
          <div ref={ctasRef} className="pt-2 sm:pt-4 space-y-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="/Divaakar_Naresh_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-6 py-3 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity min-h-[44px]"
              >
                Download resume ↓
              </a>
              <button
                type="button"
                onClick={scrollToStory}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs font-bold text-foreground uppercase tracking-wider hover:border-accent-electric hover:text-accent-electric transition-colors min-h-[44px]"
              >
                Start the story →
              </button>
            </div>
            <span className="block font-mono text-[10px] text-muted-foreground pl-1">
              PDF · Updated Oct 2026
            </span>
          </div>
        </div>

        {/* Right: Clean Portrait Box */}
        <div className="order-2 flex justify-center">
          <div ref={portraitRef} className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] flex justify-center">
            {/* Clean Box: ONLY the image, natural aspect ratio, no captions or labels */}
            <div className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md inline-block max-w-full">
              <Image
                src="/images/divaakar.jpeg"
                alt="Divaakar Naresh, backend and AI developer from Chennai"
                width={1079}
                height={1340}
                priority
                className="w-full h-auto max-h-[52vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain block rounded-[16px]"
                sizes="(max-width: 768px) 85vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hook */}
      <div className="flex items-end justify-between border-t border-border pt-6">
        <div className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
          SECTOR 00 — INTRODUCTION
        </div>
        <button
          type="button"
          onClick={scrollToStory}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent-electric transition-colors"
          aria-label="Begin story scroll"
        >
          <span>Begin the story</span>
          <span className="inline-block animate-bounce text-accent-electric">↓</span>
        </button>
      </div>
    </header>
  )
}
