import { Reveal } from "@/components/motion/reveal"
import { TimelineAxis } from "@/components/motion/timeline-axis"
import { SectionHeader } from "@/components/ui/section-header"

const roles = [
  {
    role: "AI Engineer Intern",
    org: "Mavens i Softech Solutions Pvt Ltd",
    period: "06/2026 — 07/2026",
    detail:
      "Architected CareShield, a FastAPI REST backend driving real-time Qwen inference to generate dynamic, persona-based medical screening interview trees and structured summary pipelines.",
  },
  {
    role: "Gen AI Intern",
    org: "Sri Ramakrishna Math",
    period: "12/2025 — 01/2026",
    detail:
      "Upgraded Open WebUI frameworks with corporate vector search, constructing RAG pipelines on advanced embeddings and vector similarity structures.",
  },
  {
    role: "IT Intern",
    org: "eNTrust Software & Services Pvt Ltd",
    period: "06/2024 — 06/2024",
    detail:
      "Created and automated Flask data-extraction pipelines within secure local network systems, introducing early NLP / OCR workflows.",
  },
]

function Experience() {
  return (
    <section className="mx-auto w-full max-w-[var(--layout-max)] px-[var(--layout-gutter)] py-[clamp(5rem,3rem+8vw,9rem)]">
      <SectionHeader index="03 / Trajectory" title="Experience" />

      <ol className="relative flex flex-col pl-8 sm:pl-12">
        <TimelineAxis className="absolute left-0 top-1 h-full w-px bg-border" />

        {roles.map((item, index) => (
          <li key={item.org} className="relative">
            <span className="absolute -left-8 top-2.5 size-1.5 -translate-x-1/2 rounded-full bg-foreground sm:-left-12" />
            <Reveal y={28} delay={index * 0.08}>
              <div
                className={`grid gap-2 py-9 md:grid-cols-[10rem_1fr] md:gap-10 md:py-11 ${
                  index < roles.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-[-0.01em] text-foreground sm:text-3xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {item.org}
                  </p>
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}

export { Experience }
