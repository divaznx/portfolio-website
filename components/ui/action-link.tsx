"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
  The single interactive link primitive for the editorial system. Renders a
  bracketed mono action ("[ Discover System ↗ ]") or a filled/outlined pill, with
  a placeholder-safe href contract: `href="#"` stays inert and marked
  aria-disabled; a real https URL automatically becomes an external link
  (target/rel applied) with no markup change, so live instances drop in cleanly.
*/

const actionLink = cva(
  "group/al inline-flex items-center gap-2 font-mono text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background aria-disabled:opacity-60",
  {
    variants: {
      variant: {
        ghost: "text-foreground",
        solid:
          "rounded-full bg-primary px-6 py-3 text-primary-foreground hover:opacity-90",
        outline:
          "rounded-full border border-border px-6 py-3 text-foreground hover:border-foreground",
      },
    },
    defaultVariants: { variant: "ghost" },
  },
)

function ActionLink({
  href,
  children,
  variant = "ghost",
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
} & VariantProps<typeof actionLink>) {
  const isPlaceholder = href === "#"
  const isExternal = /^https?:\/\//.test(href)

  const arrow = (
    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/al:-translate-x-0 group-hover/al:-translate-y-0.5 group-hover/al:translate-x-0.5" />
  )

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-disabled={isPlaceholder || undefined}
      className={cn(actionLink({ variant }), className)}
    >
      {variant === "ghost" ? (
        <>
          <span aria-hidden className="text-muted-foreground">
            [
          </span>
          <span className="relative">
            {children}
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover/al:scale-x-100"
            />
          </span>
          {arrow}
          <span aria-hidden className="text-muted-foreground">
            ]
          </span>
        </>
      ) : (
        <>
          {children}
          {arrow}
        </>
      )}
    </a>
  )
}

export { ActionLink }
