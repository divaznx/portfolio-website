"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  return reduced
}

/*
  Shared scroll-triggered reveal primitives using IntersectionObserver and
  CSS hardware-accelerated transitions. Respects prefers-reduced-motion.
*/
function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const [intersected, setIntersected] = React.useState(false)
  const isReduced = usePrefersReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true)
          observer.disconnect()
        }
      },
      { rootMargin: "-60px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const revealed = isReduced || intersected

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        revealed
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 scale-[0.98]",
        className
      )}
      style={{
        transform: revealed ? undefined : `translateY(${y}px)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

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
  const [intersected, setIntersected] = React.useState(false)
  const isReduced = usePrefersReducedMotion()
  const ref = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true)
          observer.disconnect()
        }
      },
      { rootMargin: "-40px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const revealed = isReduced || intersected
  const words = text.split(" ")

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span className="inline">
        {words.map((word, w) => (
          <React.Fragment key={`${word}-${w}`}>
            <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom whitespace-nowrap">
              {word.split("").map((letter, l) => (
                <span
                  key={l}
                  className="inline-block transition-transform duration-500 ease-out will-change-transform"
                  style={{
                    transform: revealed ? "translateY(0%)" : "translateY(110%)",
                    transitionDelay: `${delay + (w * 0.05) + (l * 0.02)}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            {w < words.length - 1 ? " " : null}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  )
}

export { Reveal, SplitHeading }
