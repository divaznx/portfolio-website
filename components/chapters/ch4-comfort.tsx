"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { ExternalLink } from "lucide-react"

export function ChapterComfort() {
  return (
    <section
      id="sector-04"
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 04</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            OUT OF THE COMFORT ZONE
          </span>
        </div>
      </div>

      {/* Main Narrative & Two-Image Desk Gallery */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center my-auto">
        {/* Narrative text */}
        <div className="space-y-6">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              The nervous speaker.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              <p>
                I volunteer with <strong>Ullas Trust</strong>, an NGO, as a Higher Education Scholar.
                At the Ullas Summit I stand in front of the students in the class and speak.
                Through Touch The Soil I visit schools in other districts to talk about planning and goals.
              </p>
              <p>
                Public speaking was new to me. I was nervous. Then I loved it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ullas-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-foreground hover:border-accent-electric hover:text-accent-electric transition-colors"
              >
                <span>Ullas Trust</span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-accent-electric" />
              <span>Comfort zone: left. Production deploys: ahead.</span>
            </div>
          </Reveal>
        </div>

        {/* Two-Image Clean Gallery: stacked with 20px gap, ullas-3 offset 24px right, slight desk rotation */}
        <Reveal delay={0.25} className="w-full flex justify-center">
          <div className="w-full max-w-[540px] flex flex-col gap-[20px] select-none">
            {/* Image 1: ullas-2.jpg */}
            <div
              className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl will-change-transform"
              style={{
                transform: "rotate(-1.5deg)",
              }}
            >
              <Image
                src="/images/ullas-2.jpg"
                alt="Divaakar speaking at the Ullas Summit"
                width={1080}
                height={484}
                className="w-full h-auto block rounded-[16px]"
                sizes="(max-width: 768px) 90vw, 540px"
                loading="lazy"
              />
            </div>

            {/* Image 2: ullas-3.jpg (offset 24px right on md+ screens) */}
            <div
              className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md sm:translate-x-[24px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl will-change-transform"
              style={{
                transform: "rotate(1.5deg)",
              }}
            >
              <Image
                src="/images/ullas-3.jpg"
                alt="Divaakar engaging with students during a mentoring summit"
                width={1062}
                height={466}
                className="w-full h-auto block rounded-[16px]"
                sizes="(max-width: 768px) 90vw, 540px"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 04 — OUT OF THE COMFORT ZONE</span>
        <span>NEXT: SECTOR 05 ↓</span>
      </div>
    </section>
  )
}
