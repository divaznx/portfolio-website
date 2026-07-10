import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/ui/section-header"

const groups = [
  {
    title: "Core Logic & Orchestration",
    items: ["Python", "LangGraph", "LangChain", "MCP (Model Context Protocol)"],
  },
  {
    title: "Backend & Vector Architecture",
    items: ["FastAPI", "Supabase", "REST API", "ChromaDB", "FAISS", "Ollama"],
  },
  {
    title: "Infrastructure & ML Foundations",
    items: [
      "Docker",
      "Linux",
      "AWS (EC2 / S3)",
      "Scikit-Learn",
      "Deep Learning",
      "NLP",
    ],
  },
]

function Stack() {
  return (
    <section className="mx-auto w-full max-w-[var(--layout-max)] px-[var(--layout-gutter)] py-[clamp(5rem,3rem+8vw,9rem)]">
      <SectionHeader index="01 / Capabilities" title="Core Stack" />

      <div className="border-t border-border">
        {groups.map((group, index) => (
          <Reveal key={group.title} y={28} delay={index * 0.05}>
            <div className="grid gap-x-12 gap-y-5 border-b border-border py-9 md:grid-cols-[16rem_1fr] md:py-11">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                  {group.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-x-8 gap-y-3 self-center">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-transparent pb-0.5 font-sans text-lg text-foreground transition-colors duration-300 hover:border-foreground sm:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export { Stack }
