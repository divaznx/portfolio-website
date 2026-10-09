"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { ArrowUpRight } from "lucide-react"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function ChapterNow() {
  return (
    <section
      id="sector-08"
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 08</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            NOW
          </span>
        </div>
      </div>

      {/* Main Grid: Text on one side, two clean images on the other */}
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center my-auto">
        {/* Narrative & Status Column */}
        <div className="space-y-6">
          {/* Status chip outside and above title */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground">
              <span className="size-2 rounded-full bg-accent-electric animate-pulse" />
              <span>STATUS: BUILDING · DETAILS CLASSIFIED</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground leading-[1.02]">
              Currently building something cool.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              <p>
                I&apos;m building my own product. I can&apos;t tell you what it is yet.
                I can tell you it&apos;s the reason my coffee intake has a roadmap.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-2">
              <a
                href="https://x.com/Divaakar2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-6 py-3 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <XLogo className="size-3.5" />
                <span>Follow the build on X</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span>→</span>
              <span>The build log is public-ish.</span>
            </div>
          </Reveal>
        </div>

        {/* Two-Image Clean Gallery: building.jpeg (landscape) and building-2.jpg (tall portrait) */}
        <Reveal delay={0.3} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-[20px] items-start select-none">
            {/* Image 1: building.jpeg (landscape 1587x1322) */}
            <div
              className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl will-change-transform"
              style={{
                transform: "rotate(-1.5deg)",
              }}
            >
              <Image
                src="/images/building.jpeg"
                alt="Workspace desk where the new product is being built"
                width={1587}
                height={1322}
                className="w-full h-auto block rounded-[16px]"
                sizes="(max-width: 768px) 90vw, 420px"
                loading="lazy"
              />
            </div>

            {/* Image 2: building-2.jpg (tall portrait 480x1039, max-height 80vh desktop, 70vh mobile) */}
            <div
              className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl will-change-transform"
              style={{
                transform: "rotate(1.5deg)",
              }}
            >
              <Image
                src="/images/building-2.jpg"
                alt="Building together in the workspace"
                width={480}
                height={1039}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain block rounded-[16px]"
                sizes="(max-width: 768px) 90vw, 280px"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 08 — NOW</span>
        <span>NEXT: SECTOR 09 (EPILOGUE) ↓</span>
      </div>
    </section>
  )
}
