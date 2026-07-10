import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { ActionLink } from "@/components/ui/action-link"

const projects = [
  {
    index: "01",
    title: "Multi-Agent Travel Booking System",
    description:
      "Autonomous trip-planning system using LangGraph and MCP tool servers, orchestrating dedicated planner and budget agents into budget-aware, bookable plans.",
    tech: ["LangGraph", "MCP Tool Servers", "Multi-Agent"],
    cta: "Discover System",
    href: "#",
  },
  {
    index: "02",
    title: "Legal Document RAG Pipeline",
    description:
      "Production-ready semantic search architecture with structure-aware (Article / Section / Clause) chunking and deep metadata tagging for citation-backed accuracy.",
    tech: ["Python", "FastAPI", "ChromaDB / FAISS"],
    cta: "Launch Instance",
    href: "#",
  },
]

function Projects() {
  return (
    <section className="mx-auto w-full max-w-[var(--layout-max)] px-[var(--layout-gutter)] py-[clamp(5rem,3rem+8vw,9rem)]">
      <SectionHeader index="02 / Proof of Work" title="Selected Systems" />

      <div className="border-t border-border">
        {projects.map((project) => (
          <Reveal key={project.index} y={36}>
            <article className="grid gap-8 border-b border-border py-14 md:grid-cols-[0.35fr_1fr] md:gap-16 md:py-20">
              <div className="flex items-start justify-between md:flex-col md:justify-start md:gap-6">
                <span className="font-serif text-6xl leading-none text-muted-foreground/40 sm:text-7xl">
                  {project.index}
                </span>
                <ul className="flex flex-col items-end gap-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground md:items-start">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="max-w-2xl font-serif text-fluid-xl font-medium leading-[1.05] tracking-[-0.01em] text-foreground">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-10">
                  <ActionLink href={project.href}>{project.cta}</ActionLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export { Projects }
