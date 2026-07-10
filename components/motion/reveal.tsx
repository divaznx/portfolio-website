"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"
import { anim } from "@/lib/theme"

/*
  Shared scroll-triggered reveal primitives. Everything animates transform +
  opacity only and respects prefers-reduced-motion (content renders static,
  never hidden). Spring physics come from the shared token module so every
  editorial entrance shares one profile.
*/

const spring = anim.spring

function Reveal({
  children,
  className,
  delay = 0,
  y = 48,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  )
}

const letterParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
}

const letterChild: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: anim.headingSpring,
  },
}

/*
  Letter-by-letter staggered heading. Each word stays in its own inline-block
  overflow clip so lines wrap on word boundaries and letters rise out of the
  clip; the spaces between words live outside the clips so text flows normally.
*/
function SplitHeading({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}) {
  const reduced = useReducedMotion()
  const words = text.split(" ")

  if (reduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        variants={letterParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delayChildren: delay }}
      >
        {words.map((word, w) => (
          <React.Fragment key={`${word}-${w}`}>
            <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom whitespace-nowrap">
              {word.split("").map((letter, l) => (
                <motion.span
                  key={l}
                  variants={letterChild}
                  className="inline-block will-change-transform"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            {w < words.length - 1 ? " " : null}
          </React.Fragment>
        ))}
      </motion.span>
    </Tag>
  )
}

export { Reveal, SplitHeading }
