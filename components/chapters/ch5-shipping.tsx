"use client"

import * as React from "react"
import { Reveal } from "@/components/motion/reveal"
import { Folder, CheckCircle, ArrowUpRight } from "lucide-react"

function GithubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const CASE_FILES = [
  {
    id: "CASE-FILE-01",
    title: "Legal Document RAG System",
    problem: "Legal documents are long, structured, and unforgiving. Answers need receipts.",
    painful: "Chunking by token count shreds articles and clauses mid-thought.",
    built: "Structure-aware chunking by article, section, and clause, stored with metadata so every answer comes with a citation.",
    stack: ["FastAPI", "Qdrant", "RAG"],
    githubUrl: "https://github.com/divaznx",
    stamp: "SHIPPED",
  },
  {
    id: "CASE-FILE-02",
    title: "Multi-Agent Travel Booking Agent",
    problem: "Trip planning means juggling flights, hotels, and a budget that fights back.",
    painful: "Getting several agents to cooperate instead of arguing.",
    built: "A LangGraph multi-agent planner using MCP tools for flight and hotel search, building plans around budget and preferences.",
    stack: ["LangGraph", "MCP", "Multi-agent"],
    githubUrl: "https://github.com/divaznx",
    stamp: "SHIPPED",
  },
  {
    id: "CASE-FILE-03",
    title: "AI-Powered Video Threat Detection System",
    problem: "Surveillance footage runs for hours and nobody watches all of it.",
    painful: "Tracking the same person persistently across frames.",
    built: "A YOLO + ByteTrack pipeline that detects and tracks people and raises timestamped alerts with confidence scores and tracking IDs for restricted-area entry and prolonged presence, behind a FastAPI backend for video upload, async analysis, results, and annotated footage.",
    stack: ["YOLO", "ByteTrack", "OpenCV", "FastAPI"],
    githubUrl: "https://github.com/divaznx",
    stamp: "BUILT",
  },
]

export function ChapterShipping() {
  return (
    <section
      id="sector-05"
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 05</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            SHIPPING FOR REAL
          </span>
        </div>
        <span className="font-mono text-xs text-accent-electric uppercase tracking-widest">
          FREELANCE · JAN 2026 – NOW
        </span>
      </div>

      {/* Main Narrative & Case Files */}
      <div className="my-auto space-y-12">
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              Freelance. January 2026{"\u00A0"}&ndash;{"\u00A0"}now.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fluid-base text-foreground/90 font-sans leading-relaxed">
              I build AI agents, RAG systems, and AI chatbots for clients.
            </p>
          </Reveal>
        </div>

        {/* Case Files: first two side by side, third full-width */}
        <div className="grid lg:grid-cols-2 gap-8">
          {CASE_FILES.slice(0, 2).map((cFile, index) => (
            <CaseFileCard key={cFile.id} cFile={cFile} delay={0.15 + index * 0.1} />
          ))}
        </div>

        {/* Third case file: full width */}
        <CaseFileCard cFile={CASE_FILES[2]} delay={0.35} fullWidth />

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-border">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              AI AGENTS · RAG SYSTEMS · AI CHATBOTS
            </span>
            <a
              href="#sector-08"
              className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-6 py-2.5 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <span>Let&apos;s build something</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 05 — SHIPPING FOR REAL</span>
        <span>NEXT: SECTOR 06 ↓</span>
      </div>
    </section>
  )
}

function CaseFileCard({
  cFile,
  delay,
  fullWidth,
}: {
  cFile: (typeof CASE_FILES)[number]
  delay: number
  fullWidth?: boolean
}) {
  return (
    <Reveal delay={delay} className={fullWidth ? "lg:col-span-2" : ""}>
      <div className="rounded-2xl border border-border p-7 bg-card hover:border-accent-electric/50 transition-all duration-300 relative overflow-hidden">
        {/* Stamp */}
        <div className="absolute top-5 right-5 rotate-[-8deg] select-none pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded border-2 border-accent-electric/80 bg-accent-electric/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-accent-electric tracking-wider uppercase">
            <CheckCircle className="size-3" />
            {cFile.stamp}
          </span>
        </div>

        <div className="space-y-5">
          {/* Folder Tab Header */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Folder className="size-4 text-accent-electric" />
            <span className="font-semibold text-foreground">{cFile.id}</span>
          </div>

          <h3 className="font-sans text-xl font-bold text-foreground">
            {cFile.title}
          </h3>

          {/* Problem */}
          <div className="space-y-1 text-xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              {"// THE PROBLEM:"}
            </span>
            <p className="text-foreground/90 font-sans leading-relaxed">{cFile.problem}</p>
          </div>

          {/* Painful part */}
          <div className="space-y-1 text-xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              {"// THE HARD PART:"}
            </span>
            <p className="text-foreground/90 font-sans leading-relaxed">{cFile.painful}</p>
          </div>

          {/* What I built */}
          <div className="space-y-1 text-xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-electric font-semibold">
              {"// WHAT I BUILT:"}
            </span>
            <p className="text-foreground/90 font-sans leading-relaxed">{cFile.built}</p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
            {cFile.stack.map((item) => (
              <span
                key={item}
                className="rounded border border-border bg-surface px-2 py-0.5 text-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          {/* GitHub Link Slot */}
          <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-mono">
            <a
              href={cFile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-electric hover:underline"
            >
              <GithubLogo className="size-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3" />
            </a>
            <span className="text-[10px] text-muted-foreground">
              [TODO: specific repo link]
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
