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
          JAN 2026 – NOW
        </span>
      </div>

      {/* Main Narrative */}
      <div className="my-auto max-w-3xl space-y-8">
        <Reveal>
          <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground text-balance">
            Freelance.{" "}January&nbsp;2026&nbsp;–&nbsp;now.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-fluid-lg text-foreground/90 font-sans leading-relaxed">
            <p>
              I build RAG-powered chatbots that let people ask questions over a business&apos;s
              own documents and knowledge bases; I build AI automation workflows that connect LLMs,
              APIs, and backend services to take repetitive tasks off people&apos;s plates; and I designed
              and deployed a responsive website for a local business.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-7 py-3.5 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity self-start"
            >
              <span>Let&apos;s build something</span>
              <ArrowUpRight className="size-4" />
            </button>

            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              AI AGENTS · RAG SYSTEMS · AI CHATBOTS
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
