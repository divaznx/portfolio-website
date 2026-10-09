"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { Lock, Terminal } from "lucide-react"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const BUILD_LOG = [
  "> git init",
  "> it works on my machine",
  "> ship it. (not yet)",
]

export function ChapterNow() {
  const [logIndex, setLogIndex] = React.useState(0)
  const [cursorVisible, setCursorVisible] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => Math.min(prev + 1, BUILD_LOG.length - 1))
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(blink)
  }, [])

  return (
    <section
      id="sector-07"
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Header */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 07</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            NOW
          </span>
        </div>
      </div>

      {/* Main Narrative & Stealth Card */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center my-auto">
        <div className="space-y-6">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              Currently building something cool.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              <p>
                I&apos;m building my own product. I can&apos;t tell you what it is yet.
                I can tell you it&apos;s the reason my coffee intake has a roadmap.
              </p>
              {/* [TODO: product name and one-liner] */}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href="https://x.com/Divaakar2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent-electric px-6 py-3 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <XLogo className="size-3.5" />
              <span>Follow the build on X</span>
              <span>→</span>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span>→</span>
              <span>The build log is public-ish.</span>
            </div>
          </Reveal>
        </div>

        {/* Stealth Card with building.jpeg */}
        <Reveal delay={0.25} className="w-full">
          <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
            {/* Desk photo at top */}
            <div className="relative">
              <Image
                src="/images/building.jpeg"
                alt="Divaakar's desk and workstation setup where the product is being built"
                width={560}
                height={260}
                className="w-full h-[260px] object-cover"
                sizes="(max-width: 768px) 90vw, 560px"
                loading="lazy"
              />
              {/* REC dot */}
              <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] text-white/80 bg-black/50 rounded px-2 py-0.5 backdrop-blur-sm">
                <span className="size-2 rounded-full bg-red-500 blink-rec" />
                <span>DESK CAM 01 · WHERE IT GETS BUILT</span>
              </div>
            </div>

            {/* Redacted info */}
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Lock className="size-3.5 text-accent-electric" />
                  <span>DETAILS CLASSIFIED</span>
                </div>
              </div>

              {/* Redaction bars */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-16 shrink-0">PRODUCT</span>
                  <span className="flex-1 h-4 rounded bg-foreground/80" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-16 shrink-0">WHAT</span>
                  <span className="flex-1 h-4 rounded bg-foreground/60" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-16 shrink-0">LAUNCH</span>
                  <span className="flex-1 h-4 rounded bg-foreground/40" />
                </div>
              </div>

              {/* Build log */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                  <Terminal className="size-3 text-accent-electric" />
                  <span>BUILD LOG</span>
                </div>
                <div className="rounded-lg border border-border/80 bg-background/80 p-3 space-y-1 font-mono text-[11px] text-foreground/80">
                  {BUILD_LOG.slice(0, logIndex + 1).map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-accent-electric">$</span>
                      <span>{line}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-2">
                    <span className="text-accent-electric">$</span>
                    <span className={cursorVisible ? "text-accent-electric" : "text-transparent"}>▌</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 07 — NOW</span>
        <span>NEXT: SECTOR 08 (EPILOGUE) ↓</span>
      </div>
    </section>
  )
}
