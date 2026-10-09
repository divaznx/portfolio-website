"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"

/**
 * The film still image path. Change this one constant to swap the image.
 * See TODO.md for copyright/takedown risk and swap instructions.
 */
export const FILM_STILL_IMAGE = "/images/social-network.jpeg"

export function ChapterSpark() {
  return (
    <section
      id="sector-01"
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

      {/* Main Narrative & Clean Image Box */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center my-auto">
        {/* Text column with popcorn bubble */}
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
              {/* [TODO-REAL-DETAIL: one scene or feeling from me; render nothing visible if missing] */}
            </div>
          </Reveal>

          {/* Mascot with popcorn bubble placed next to text (not on image) */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground pt-1">
              <span className="text-2xl select-none" aria-hidden="true">🍿</span>
              <div className="rounded-xl border border-border bg-surface px-3.5 py-2 text-foreground/85 shadow-xs">
                <span className="italic">*munches popcorn*</span>{" "}
                <span className="text-accent-electric font-bold">&quot;npm run dev&quot;</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-accent-electric" />
              <span>Before I wrote real code, I already had a different production system.</span>
            </div>
          </Reveal>
        </div>

        {/* Clean Image Box: ONLY the image, max 509px, never upscaled */}
        <Reveal delay={0.25} className="w-full flex justify-center">
          <div className="w-full max-w-[509px]">
            <div className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md">
              <Image
                src={FILM_STILL_IMAGE}
                alt="Still from The Social Network (2010), the movie that inspired Divaakar to start coding"
                width={509}
                height={351}
                className="w-full h-auto block rounded-[16px]"
                sizes="(max-width: 509px) 100vw, 509px"
                loading="lazy"
              />
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
