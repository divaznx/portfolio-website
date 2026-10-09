"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"

const ROUTE_STOPS = ["Mylapore", "Alwarpet", "Mandaveli"]

export function ChapterRoots() {
  const [activeStop, setActiveStop] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStop((prev) => (prev + 1) % ROUTE_STOPS.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

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

      {/* Main Narrative & Supply Log */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center my-auto">
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
                inputs, and helped turn a struggling business into a profitable one. Pricing
                from feed, labour, and vet costs. Daily supply planned against demand. Customers
                who notice everything.
              </p>
              <p>
                My first production system had cows, a delivery route, and zero uptime guarantees.
              </p>
              {/* [TODO-REAL-DETAIL: one real moment from Divaakar about Gomatha Milk] */}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span>→</span>
              <span>That&apos;s why I treat products like businesses. Then I learned to build them.</span>
            </div>
          </Reveal>
        </div>

        {/* Supply Log Visual Card */}
        <Reveal delay={0.25} className="w-full">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-xs">
              <span className="text-accent-electric uppercase tracking-wider font-semibold">
                {"// GOMATHA SUPPLY LOG"}
              </span>
              <span className="text-muted-foreground">Chennai Ops</span>
            </div>

            {/* Cow image at top */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/cow.jpeg"
                alt="A calf at Gomatha Milk dairy, one of the team members on duty 24/7"
                width={496}
                height={240}
                className="w-full h-60 object-cover"
                style={{ objectPosition: "center 40%" }}
                sizes="(max-width: 768px) 90vw, 496px"
                loading="lazy"
              />
              <div className="absolute bottom-2 right-2 font-mono text-[10px] bg-black/50 text-white/80 rounded px-2 py-0.5 backdrop-blur-sm">
                TEAM MEMBER 01 · ON DUTY 24/7
              </div>
            </div>

            {/* Formula */}
            <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
              <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                Unit Pricing Model
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-foreground flex flex-wrap items-center gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-background border border-border text-accent-electric">
                  feed
                </span>
                <span className="text-muted-foreground">+</span>
                <span className="px-2 py-0.5 rounded bg-background border border-border">
                  labour
                </span>
                <span className="text-muted-foreground">+</span>
                <span className="px-2 py-0.5 rounded bg-background border border-border">
                  vet care
                </span>
                <span className="text-accent-electric font-bold">→</span>
                <span className="px-2.5 py-0.5 rounded bg-accent-electric font-bold text-on-accent">
                  price
                </span>
              </div>
            </div>

            {/* Delivery Route */}
            <div className="space-y-3 font-mono text-xs">
              <div className="text-[10px] uppercase text-muted-foreground tracking-widest">
                Delivery Route:
              </div>

              <div className="relative border-l-2 border-accent-electric/40 ml-3 pl-4 space-y-4">
                {ROUTE_STOPS.map((stop, index) => {
                  const isCurrent = index === activeStop
                  return (
                    <div key={stop} className="relative flex items-center gap-3">
                      <span
                        className={`absolute -left-[23px] size-3.5 rounded-full border-2 transition-all duration-300 ${
                          isCurrent
                            ? "border-accent-electric bg-accent-electric scale-125"
                            : "border-border bg-background"
                        }`}
                      />
                      <span
                        className={`font-mono text-sm transition-colors ${
                          isCurrent ? "text-accent-electric font-bold" : "text-muted-foreground"
                        }`}
                      >
                        {stop}
                      </span>
                      {isCurrent && (
                        <span className="rounded-full bg-accent-electric/10 px-2 py-0.5 text-[10px] text-accent-electric animate-pulse">
                          Active
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-border/70 pt-3 text-[11px] font-mono text-muted-foreground">
              UPTIME GUARANTEE: NONE (COWS)
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
