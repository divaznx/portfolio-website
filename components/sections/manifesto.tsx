import { Reveal } from "@/components/motion/reveal"

function Manifesto() {
  return (
    <section className="mx-auto w-full max-w-[var(--layout-max)] px-[var(--layout-gutter)] py-[clamp(5rem,3rem+8vw,9rem)]">
      <div className="mx-auto max-w-4xl border-y border-border py-[clamp(3.5rem,2rem+6vw,6rem)] text-center">
        <Reveal y={24}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            04 / Manifesto
          </p>
          <blockquote className="mt-10 font-serif text-fluid-xl font-medium leading-[1.35] tracking-[-0.01em] text-foreground">
            I spent too much time thinking, refining, and waiting for the
            &lsquo;right&rsquo; version. The real progress only began when I
            actually started building. I became more comfortable with
            uncertainty, and I care less about opinions that don&apos;t come with
            experience.
          </blockquote>
          <p className="mt-10 font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground">
            Still learning, still building.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export { Manifesto }
