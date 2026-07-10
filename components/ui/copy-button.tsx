"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

/*
  High-contrast solid pill that copies a value to the clipboard (the primary
  contact node in the footer). Monochrome: ink fill, background-color text.
*/
function CopyButton({
  value,
  className,
  children,
}: {
  value: string
  className?: string
  children: React.ReactNode
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      data-slot="copy-button"
      aria-label={copied ? "Email copied" : `Copy email ${value}`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-mono text-sm text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
    >
      {children}
      {copied ? (
        <Check className="size-3.5" />
      ) : (
        <Copy className="size-3.5 opacity-70" />
      )}
    </button>
  )
}

export { CopyButton }
