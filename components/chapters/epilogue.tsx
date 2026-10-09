"use client"

import * as React from "react"
import { Reveal } from "@/components/motion/reveal"
import { CopyButton } from "@/components/ui/copy-button"
import { Mail, ArrowDown, ArrowUpRight } from "lucide-react"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const EMAIL = "divaakarnaresh2005@gmail.com"

const SOCIAL_LINKS = [
  {
    name: "X (@Divaakar2005)",
    href: "https://x.com/Divaakar2005",
    icon: XLogo,
  },
  {
    name: "GitHub (divaznx)",
    href: "https://github.com/divaznx",
    icon: GithubLogo,
  },
  {
    name: "LinkedIn (Divaakar)",
    href: "https://www.linkedin.com/in/divaakar2005/",
    icon: LinkedinLogo,
  },
]

export function Epilogue() {
  return (
    <footer
      id="sector-09"
      className="relative min-h-[90vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Header */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 09</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            EPILOGUE
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline">
          END OF TRANSMISSION
        </span>
      </div>

      {/* Main Closing Section */}
      <div className="my-auto space-y-12 max-w-3xl">
        <Reveal>
          <h2 className="chapter-title text-[clamp(3.2rem,2rem+7vw,7rem)] text-foreground leading-[0.95]">
            What&apos;s next?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-fluid-xl text-foreground font-sans leading-relaxed">
            Big plans. Bigger coffee. Let&apos;s build something worth shipping.
          </p>
        </Reveal>

        {/* Contact Actions */}
        <Reveal delay={0.2}>
          <div className="space-y-6 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Mailto button */}
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-electric px-6 py-3 font-mono text-xs font-bold text-on-accent uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <Mail className="size-4" />
                <span>Send Dispatch</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              {/* Copy button */}
              <CopyButton value={EMAIL} className="font-mono text-xs">
                {EMAIL}
              </CopyButton>

              {/* Download Resume Button */}
              <a
                href="/Divaakar_Naresh_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-mono text-xs font-bold text-foreground uppercase tracking-wider hover:border-accent-electric hover:text-accent-electric transition-colors"
              >
                <ArrowDown className="size-4 text-accent-electric" />
                <span>Download resume ↓</span>
              </a>
            </div>

            {/* Social Grid with slide-underline effect */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-foreground hover:border-accent-electric hover:text-accent-electric transition-colors group overflow-hidden"
                >
                  <Icon className="size-3.5 text-muted-foreground group-hover:text-accent-electric transition-colors" />
                  <span className="relative">
                    {name}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-accent-electric transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-accent-electric transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer Motto, Film Credit & Konami hint */}
      <div className="border-t border-border pt-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div className="space-y-1 text-center md:text-left">
          <div>© 2026 DIVAAKAR NARESH · SHIP IT. THEN SHIP IT BETTER.</div>
          <div className="text-[10px] text-muted-foreground/60">
            Film still: The Social Network (2010), © its owners.
          </div>
        </div>

        {/* Konami code hint */}
        <div className="text-center md:text-right font-mono text-[11px] text-muted-foreground/80 tracking-wider">
          <span className="text-accent-electric font-semibold mr-1.5">SECRET:</span>
          <span>↑ ↑ ↓ ↓ ← → ← → B A</span>
        </div>
      </div>
    </footer>
  )
}
