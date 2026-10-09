"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { RecruiterDrawer } from "@/components/ui/recruiter-drawer"

/**
 * Minimal sticky nav: initials mark, social icons, recruiter drawer trigger,
 * skip-to-contact, and theme toggle.
 */

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

function MailLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const SOCIALS = [
  {
    label: "X (Twitter)",
    href: "https://x.com/Divaakar2005",
    icon: XLogo,
  },
  {
    label: "GitHub",
    href: "https://github.com/divaznx",
    icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divaakar2005/",
    icon: LinkedinLogo,
  },
  {
    label: "Email",
    href: "mailto:divaakarnaresh2005@gmail.com",
    icon: MailLogo,
  },
] as const

function Nav() {
  const { theme, toggle } = useTheme()
  const isNight = theme === "night"
  const [scrolled, setScrolled] = React.useState(false)
  const [recruiterOpen, setRecruiterOpen] = React.useState(false)
  const [logoClicks, setLogoClicks] = React.useState(0)
  const [easterEggToast, setEasterEggToast] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const count = logoClicks + 1
    setLogoClicks(count)
    if (count === 5) {
      setEasterEggToast(true)
      setTimeout(() => setEasterEggToast(false), 3500)
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-[var(--layout-gutter)] py-3 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-transparent"
        }`}
      >
        {/* Name mark & Quick Easter Egg */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={handleLogoClick}
            className="font-serif text-xl font-bold text-foreground tracking-tight hover:text-accent-electric transition-colors select-none"
            aria-label="Scroll to top"
            title="Divaakar Naresh (click 5 times for a secret)"
          >
            DN
          </a>

          {/* Quick link for recruiters */}
          <button
            type="button"
            onClick={() => setRecruiterOpen(true)}
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors border-l border-border pl-3 py-0.5"
            aria-label="Open plain summary for recruiters"
          >
            <span>Skip the story, show me the boring version</span>
            <span className="text-accent-electric font-bold">→</span>
          </button>
        </div>

        {/* Right side: socials + skip to contact + theme toggle */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Social icons */}
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-surface"
            >
              <Icon className="size-4" />
            </a>
          ))}

          {/* Divider */}
          <span
            aria-hidden
            className="mx-1 h-4 w-px bg-border hidden sm:block"
          />

          {/* Resume Download */}
          <a
            href="/Divaakar_Naresh_Resume.pdf"
            download
            className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent-electric transition-colors px-2.5 py-1 rounded-full border border-border hover:border-accent-electric bg-surface/50"
            aria-label="Download Divaakar Naresh Resume PDF"
          >
            <span>Resume</span>
            <span className="text-accent-electric font-bold">↓</span>
          </a>

          {/* Skip to contact persistent link */}
          <button
            type="button"
            className="hidden sm:inline-flex font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            onClick={() => {
              const el = document.getElementById("sector-08") || document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            aria-label="Skip to contact section"
          >
            Skip to contact
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label={isNight ? "Switch to daylight" : "Switch to night"}
            className="relative flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            <span className="relative size-4 flex items-center justify-center overflow-hidden">
              <Moon
                className={`size-4 absolute transition-all duration-300 ${
                  isNight
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-50 opacity-0"
                }`}
              />
              <Sun
                className={`size-4 absolute transition-all duration-300 ${
                  isNight
                    ? "rotate-90 scale-50 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Recruiter Drawer Modal */}
      <RecruiterDrawer
        open={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />

      {/* Logo Click Easter Egg Toast */}
      {easterEggToast && (
        <div className="fixed top-16 left-6 z-50 rounded-lg border border-accent-electric bg-background p-3 font-mono text-xs text-foreground shadow-2xl animate-in fade-in slide-in-from-top-2">
          <span className="text-accent-electric font-bold">⚡ EASTER EGG FOUND:</span> You clicked DN 5 times! Welcome to the source code.
        </div>
      )}
    </>
  )
}

export { Nav }
