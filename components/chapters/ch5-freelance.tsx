"use client"

import * as React from "react"
import { Reveal } from "@/components/motion/reveal"
import { ArrowUpRight } from "lucide-react"

export function ChapterFreelance() {
  const scrollToContact = () => {
    const el = document.getElementById("sector-09") || document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="sector-05"
      className="relative min-h-[85vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 05</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            FREELANCE
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline">
          SEP 2026 – PRESENT
        </span>
      </div>

      {/* Main Narrative */}
      <div className="my-auto max-w-3xl space-y-8">
        <Reveal>
          <h2 className="chapter-title text-[clamp(2rem,1.3rem+3.5vw,4.8rem)] text-foreground text-balance">
            Freelance AI &amp; Software Developer.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 text-fluid-base sm:text-fluid-lg text-foreground/90 font-sans leading-relaxed">
            <p>
              I build production AI systems where reliability comes first. No notebook demos:
            </p>
            <div className="grid gap-3 pt-2 font-mono text-xs sm:text-sm text-foreground/90">
              <div className="rounded-xl border border-border bg-card/60 p-4 space-y-1">
                <span className="text-accent-electric font-bold block text-xs">01 / RAG KNOWLEDGE BASES</span>
                <p className="font-sans text-xs sm:text-sm text-foreground/85">Built RAG-powered chatbots enabling users to query business-specific documents and proprietary knowledge bases with accurate citations.</p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-4 space-y-1">
                <span className="text-accent-electric font-bold block text-xs">02 / AI AUTOMATION WORKFLOWS</span>
                <p className="font-sans text-xs sm:text-sm text-foreground/85">Developed AI automation workflows integrating LLMs, APIs, and backend services to eliminate repetitive manual tasks.</p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-4 space-y-1">
                <span className="text-accent-electric font-bold block text-xs">03 / FULL-STACK DEPLOYMENT</span>
                <p className="font-sans text-xs sm:text-sm text-foreground/85">Designed and deployed high-performance responsive web applications for local business clients.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-7 py-3.5 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity self-start min-h-[44px]"
            >
              <span>Let&apos;s build something</span>
              <ArrowUpRight className="size-4" />
            </button>

            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              RAG PIPELINES · AI AUTOMATION · BACKEND REST
            </span>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 05 — FREELANCE</span>
        <span>NEXT: SECTOR 06 ↓</span>
      </div>
    </section>
  )
}
