"use client"

import * as React from "react"
import { Reveal } from "@/components/motion/reveal"
import { Folder, ArrowUpRight } from "lucide-react"

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
    solution: "Structure-aware chunking by article, section, and clause, stored with metadata so every answer comes with a citation.",
    stack: ["FastAPI", "Qdrant", "RAG"],
    githubUrl: "https://github.com/divaznx",
    fullWidth: false,
  },
  {
    id: "CASE-FILE-02",
    title: "Multi-Agent Travel Booking Agent",
    problem: "Trip planning means juggling flights, hotels, and a budget that fights back.",
    painful: "Getting several agents to cooperate instead of arguing.",
    solution: "A LangGraph multi-agent planner using MCP tools for flight and hotel search, building plans around budget and preferences.",
    stack: ["LangGraph", "MCP", "Multi-agent"],
    githubUrl: "https://github.com/divaznx",
    fullWidth: false,
  },
  {
    id: "CASE-FILE-03",
    title: "AI-Powered Video Threat Detection System",
    problem: "Surveillance footage runs for hours and nobody watches all of it.",
    painful: "Tracking the same person persistently across frames.",
    solution: "A YOLO + ByteTrack pipeline that detects and tracks people and raises timestamped alerts with confidence scores and tracking IDs for restricted-area entry and prolonged presence, behind a FastAPI backend for video upload, async analysis, results, and annotated footage.",
    stack: ["YOLO", "ByteTrack", "OpenCV", "FastAPI"],
    githubUrl: "https://github.com/divaznx",
    fullWidth: true,
  },
]

export function ChapterProjects() {
  return (
    <section
      id="sector-06"
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 06</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            PERSONAL PROJECTS
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline">
          OPEN SOURCE &amp; LABS
        </span>
      </div>

      {/* Main Narrative & Case Files */}
      <div className="my-auto space-y-12">
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              Side quests.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fluid-lg text-foreground/90 font-sans leading-relaxed">
              The projects I built because I couldn&apos;t help myself.
            </p>
          </Reveal>
        </div>

        {/* Case Files Dossier Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {CASE_FILES.map((caseFile, idx) => (
            <Reveal
              key={caseFile.id}
              delay={0.15 + idx * 0.1}
              className={caseFile.fullWidth ? "md:col-span-2" : "md:col-span-1"}
            >
              <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between h-full shadow-lg hover:border-accent-electric transition-colors group">
                {/* Stamp: PERSONAL PROJECT */}
                <div className="absolute top-6 right-6 font-mono text-[10px] tracking-widest uppercase border border-accent-electric/80 text-accent-electric bg-accent-electric/10 rounded-md px-2.5 py-1 rotate-[-4deg] select-none shadow-xs">
                  PERSONAL PROJECT
                </div>

                <div className="space-y-6">
                  {/* Dossier Header */}
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Folder className="size-4 text-accent-electric" />
                    <span>{caseFile.id}</span>
                  </div>

                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground">
                    {caseFile.title}
                  </h3>

                  {/* Problem / Painful / Built structure */}
                  <div className="space-y-4 text-xs sm:text-sm font-sans leading-relaxed">
                    <div>
                      <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                        {"// THE PROBLEM:"}
                      </div>
                      <p className="text-foreground/90">{caseFile.problem}</p>
                    </div>

                    <div>
                      <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                        {"// THE HARD PART:"}
                      </div>
                      <p className="text-foreground/90">{caseFile.painful}</p>
                    </div>

                    <div>
                      <div className="font-mono text-[11px] text-accent-electric uppercase tracking-wider mb-1 font-semibold">
                        {"// WHAT I BUILT:"}
                      </div>
                      <p className="text-foreground/90">{caseFile.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Footer: Tech chips + GitHub Slot */}
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {caseFile.stack.map((tech) => (
                      <span key={tech} className="rounded border border-border bg-surface px-2.5 py-0.5 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={caseFile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:text-accent-electric transition-colors"
                    >
                      <GithubLogo className="size-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="size-3 text-muted-foreground" />
                    </a>
                    <span className="font-mono text-[10px] text-muted-foreground/60 hidden sm:inline">
                      [TODO: specific repo link]
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 06 — PERSONAL PROJECTS</span>
        <span>NEXT: SECTOR 07 ↓</span>
      </div>
    </section>
  )
}
