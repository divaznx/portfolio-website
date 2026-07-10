import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { ActionLink } from "@/components/ui/action-link"
import { CopyButton } from "@/components/ui/copy-button"

const EMAIL = "divaakarnaresh2005@gmail.com"

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/divaakar2005/" },
  { label: "GitHub", href: "https://github.com/divaznx" },
]

function Footer() {
  return (
    <footer
      id="connect"
      className="mx-auto w-full max-w-[var(--layout-max)] px-[var(--layout-gutter)] pb-16 pt-[clamp(5rem,3rem+8vw,9rem)]"
    >
      <SectionHeader index="05 / Connect" title="Let's build something real." />

      <Reveal y={24}>
        <div className="flex flex-col gap-10">
          <p className="max-w-2xl text-fluid-lg leading-relaxed text-foreground">
            My calendar has room for a couple of outside projects right now. If
            you have a system worth shipping, bring the hard part and let&apos;s
            talk.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <CopyButton value={EMAIL}>{EMAIL}</CopyButton>
            {links.map(({ label, href }) => (
              <ActionLink key={label} href={href} variant="outline">
                {label}
              </ActionLink>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span aria-hidden>&#128205;</span>
            Chennai, India
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-20 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Divaakar Naresh // Built solo, shipped real
        </p>
      </Reveal>
    </footer>
  )
}

export { Footer }
