import { Reveal, SplitHeading } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

/*
  Shared section header: a mono index label ("01 / Capabilities") above a serif
  display title with the clip-mask letter reveal. Keeps every section's masthead
  consistent and free of repeated markup.
*/
function SectionHeader({
  index,
  title,
  className,
}: {
  index: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("mb-14", className)}>
      <Reveal y={20}>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {index}
        </span>
      </Reveal>
      <SplitHeading
        text={title}
        className="mt-4 font-serif text-fluid-2xl font-medium leading-[0.95] tracking-[-0.01em] text-foreground"
      />
    </div>
  )
}

export { SectionHeader }
