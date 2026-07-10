"use client"

import { motion, useReducedMotion } from "motion/react"

/*
  The vertical timeline rule that "unfurls" (scaleY from the top) as it enters
  the viewport. Reduced motion renders it fully drawn and static.
*/
function TimelineAxis({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.span
      aria-hidden
      className={className}
      style={{ transformOrigin: "top" }}
      initial={reduced ? false : { scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-15% 0px -25% 0px" }}
      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
    />
  )
}

export { TimelineAxis }
