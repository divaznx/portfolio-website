"use client"

import * as React from "react"
import { Reveal } from "@/components/motion/reveal"

const QUEST_LEVELS = [
  {
    level: "LEVEL 01",
    role: "eNTrust Software & Services",
    date: "JUN 2024",
    skills: ["Python", "Flask", "NLP", "OCR"],
    xp: 35,
    narrative:
      "Flask apps for internal workflows, first contact with Python web development, a first taste of NLP and OCR.",
  },
  {
    level: "LEVEL 02",
    role: "Sri Ramakrishna Math",
    date: "DEC 2025 – JAN 2026",
    skills: ["Open WebUI", "RAG", "Embeddings", "Vector Search"],
    xp: 65,
    narrative:
      "Extended Open WebUI with an organization knowledge base so teams could chat with large document collections using RAG, embeddings, and vector search.",
  },
  {
    level: "LEVEL 03",
    role: "Mavens i Softech Solutions",
    date: "JUN – AUG 2026",
    skills: ["FastAPI", "Qwen", "Prompt Engineering", "Structured Outputs"],
    xp: 90,
    narrative:
      "CareShield, an AI health assessment platform; a FastAPI backend; Qwen writing interview questions that adapt to each person; responses turned into structured health summaries.",
  },
]

export function ChapterLearning() {
  const [visibleLevels, setVisibleLevels] = React.useState(0)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight

      if (rect.top < windowH && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height * 0.5)))
        setVisibleLevels(Math.min(3, Math.floor(progress * 4)))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="sector-03"
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 03</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            LEARNING TO BUILD
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
          BCA · Ramakrishna Mission Vivekananda College · 8.02 CGPA
        </span>
      </div>

      {/* Main Narrative & Quest System */}
      <div className="my-auto space-y-12">
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              Levels unlocked.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fluid-base text-foreground/90 font-sans leading-relaxed">
              BCA at Ramakrishna Mission Vivekananda College, Chennai (8.02 CGPA).
              The real XP came from three internships.
            </p>
          </Reveal>
        </div>

        {/* Quest Level Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {QUEST_LEVELS.map((quest, index) => {
            const isRevealed = index < visibleLevels
            return (
              <Reveal key={quest.level} delay={0.15 + index * 0.1}>
                <div
                  className={`h-full rounded-2xl border p-6 transition-all duration-500 flex flex-col justify-between ${
                    isRevealed
                      ? "border-accent-electric bg-card shadow-lg"
                      : "border-border bg-card/60"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Level Badge + Date Chip */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-electric/15 px-2.5 py-0.5 text-[10px] font-bold text-accent-electric">
                        {quest.level}
                      </span>
                      <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                        {quest.date}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-foreground">
                      {quest.role}
                    </h3>

                    <p className="text-xs text-foreground/90 font-sans leading-relaxed">
                      {quest.narrative}
                    </p>

                    {/* XP Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                        <span>XP</span>
                        <span>{isRevealed ? quest.xp : 0}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                        <div
                          className="h-full rounded-full bg-accent-electric transition-all duration-1000 ease-out"
                          style={{ width: isRevealed ? `${quest.xp}%` : "0%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {quest.skills.map((s) => (
                        <span key={s} className="rounded bg-surface px-2 py-0.5 text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Hook */}
        <div className="flex items-center gap-2 font-mono text-xs text-accent-electric">
          <span>⚡</span>
          <span>Then I stepped off the keyboard and onto a stage.</span>
        </div>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 03 — LEARNING TO BUILD</span>
        <span>NEXT: SECTOR 04 ↓</span>
      </div>
    </section>
  )
}
