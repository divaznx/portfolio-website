"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"

export function ChapterRoots() {
  return (
    <section
      id="sector-02"
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 02</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            THE ROOTS
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline">
          SINCE APR 2021
        </span>
      </div>

      {/* Main Narrative & Clean Image Box */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center my-auto">
        {/* Narrative text */}
        <div className="space-y-6">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              Before code, there was milk.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              <p>
                My family runs <strong>Gomatha Milk</strong>, a dairy in Chennai that delivers
                straight to homes in Mylapore, Alwarpet, and Mandaveli. I grew up around it.
              </p>
              <p>
                As soon as I was old enough, I started working with my parents, gave them my
                inputs, and helped turn a struggling business into a profitable one (Business Strategist, part-time, since April 2021).
                Pricing from feed, labour, and vet costs. Daily supply planned against demand. Customers
                who notice everything.
              </p>
              <p>
                My first production system had cows, a delivery route, and zero uptime guarantees.
              </p>
              {/* [TODO-REAL-DETAIL: one real moment from me; render nothing visible if missing] */}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-accent-electric" />
              <span>That&apos;s why I treat products like businesses. Then I learned to build them.</span>
            </div>
          </Reveal>
        </div>

        {/* Clean Image Box: ONLY cow.jpeg, natural aspect ratio, max-height 80vh */}
        <Reveal delay={0.25} className="w-full flex justify-center">
          <div className="w-full max-w-[420px] flex justify-center">
            <div className="rounded-[16px] border border-border overflow-hidden bg-surface shadow-md inline-block max-w-full">
              <Image
                src="/images/cow.jpeg"
                alt="A calf at the family Gomatha Milk dairy in Chennai"
                width={830}
                height={1346}
                className="w-full h-auto max-h-[80vh] object-contain block rounded-[16px]"
                sizes="(max-width: 768px) 90vw, 420px"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 02 — THE ROOTS</span>
        <span>NEXT: SECTOR 03 ↓</span>
      </div>
    </section>
  )
}
