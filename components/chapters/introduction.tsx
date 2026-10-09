"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"

export function Introduction() {
  const scrollToStory = () => {
    const el = document.getElementById("sector-01")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      id="sector-00"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto"
    >
      {/* Sector Meta */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 00 / INTRODUCTION</span>
        </div>
        <span className="status-chip">BUILDING SOMETHING COOL</span>
      </div>

      {/* Two-column hero */}
      <div className="my-auto py-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left: Text column */}
        <div className="space-y-6 order-2 lg:order-1">
          <Reveal>
            <h1 className="chapter-title text-[clamp(3rem,1.5rem+6vw,5.5rem)] text-foreground">
              Hi, I&apos;m Divaakar.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-fluid-xl font-normal text-foreground leading-snug">
              I build AI that actually works{" "}
              <span className="italic text-muted-foreground">(most days).</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground tracking-wide uppercase">
              BACKEND DEVELOPER · AI/ML ENGINEER · PYTHON DEVELOPER
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              I&apos;m a developer from Chennai who builds RAG systems, AI agents,
              and backend APIs. I&apos;m also building my own product. This site is
              the story of how I got here.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                Chennai, India
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                RAG · Agents · Backend
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                BCA · 8.02 CGPA
              </span>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/Divaakar_Naresh_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-6 py-3 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Download resume ↓
              </a>
              <button
                type="button"
                onClick={scrollToStory}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs font-bold text-foreground uppercase tracking-wider hover:border-accent-electric hover:text-accent-electric transition-colors"
              >
                Start the story →
              </button>
            </div>
            <span className="block font-mono text-[10px] text-muted-foreground mt-2 pl-1">
              PDF · Updated Oct 2026
            </span>
          </Reveal>
        </div>

        {/* Right: Portrait card */}
        <Reveal delay={0.2} className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-[460px]">
            <div className="relative rounded-3xl border border-border overflow-hidden bg-surface film-grain">
              <Image
                src="/images/divaakar.jpeg"
                alt="Divaakar Naresh, a developer from Chennai, standing against a bright wall"
                width={460}
                height={580}
                priority
                className="w-full h-auto object-cover"
                style={{ objectPosition: "center 25%" }}
                sizes="(max-width: 768px) 90vw, 460px"
              />

              {/* Film label overlay */}
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-white/70 bg-black/40 rounded px-2 py-0.5 backdrop-blur-sm">
                FIG. 01
              </div>
            </div>

            {/* Caption chip */}
            <div className="mt-3 flex items-center justify-center">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                DIVAAKAR NARESH · CHENNAI
              </span>
            </div>
          </div>
        </Reveal>
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
