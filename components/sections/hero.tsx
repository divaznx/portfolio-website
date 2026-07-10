"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { SplitHeading } from "@/components/motion/reveal"
import { ActionLink } from "@/components/ui/action-link"
import { gsap, useGSAP } from "@/lib/gsap"

const THESIS =
  "Solo builder, shipping real RAG & agentic AI systems (not just notebooks). I design robust backend architectures, break things, fix things, and ship production-ready AI. Self-taught, execution-focused, and obsessed with the edge cases that separate a 'cool demo' from a resilient product."

function Hero() {
  const reduced = useReducedMotion()
  const section = React.useRef<HTMLElement>(null)
  const name = React.useRef<HTMLDivElement>(null)

  // GSAP scrub: the name grid drifts up on scroll for deliberate depth. It runs
  // on a wrapper node distinct from the ones Framer animates on entrance, so no
  // element is driven by both engines.
  useGSAP(
    () => {
      if (reduced) return
      gsap.to(name.current, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    },
    { scope: section, dependencies: [reduced] },
  )

  return (
    <section
      ref={section}
      className="mx-auto flex min-h-svh w-full max-w-[var(--layout-max)] flex-col justify-center px-[var(--layout-gutter)] pb-24 pt-32"
    >
      {/* Editorial meta rule */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 flex items-center justify-between border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span>Portfolio</span>
        <span>Chennai, India</span>
      </motion.div>

      {/* Type column */}
      <div>
        <div ref={name} className="will-change-transform">
          <SplitHeading
            as="h1"
            text="Divaakar Naresh"
            className="font-serif text-fluid-display font-medium leading-[0.9] tracking-[-0.02em] text-foreground"
          />
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
          className="mt-8 font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground"
        >
          [ Solo Builder // AI Engineer // Open for Select Work ]
        </motion.p>
      </div>

      {/* Thesis + entry point */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
        className="mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.35fr_0.65fr]"
      >
        <p className="max-w-3xl text-fluid-lg leading-relaxed text-foreground">
          {THESIS}
        </p>
        <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
          <ActionLink href="#connect">Get in touch</ActionLink>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Currently taking on a few outside builds
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export { Hero }
