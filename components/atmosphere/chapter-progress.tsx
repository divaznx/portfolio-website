"use client"

import * as React from "react"

interface SectorInfo {
  id: string
  num: string
  title: string
}

const SECTORS: SectorInfo[] = [
  { id: "sector-00", num: "00", title: "Introduction" },
  { id: "sector-01", num: "01", title: "The Spark" },
  { id: "sector-02", num: "02", title: "The Roots" },
  { id: "sector-03", num: "03", title: "Learning to Build" },
  { id: "sector-04", num: "04", title: "Out of the Comfort Zone" },
  { id: "sector-05", num: "05", title: "Shipping for Real" },
  { id: "sector-06", num: "06", title: "The Turning Point" },
  { id: "sector-07", num: "07", title: "Now" },
  { id: "sector-08", num: "08", title: "Epilogue" },
]

export function ChapterProgress() {
  const [progress, setProgress] = React.useState(0)
  const [activeSector, setActiveSector] = React.useState<SectorInfo>(SECTORS[0])
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) {
        setProgress(Math.min(1, Math.max(0, window.scrollY / total)))
      }
      setVisible(window.scrollY > 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    // Intersection observer for sectors
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = SECTORS.find((s) => s.id === entry.target.id)
            if (found) {
              setActiveSector(found)
            }
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    )

    SECTORS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Top thin telemetry progress line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-hairline/40">
        <div
          className="h-full bg-accent-electric origin-left transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Floating sector tag */}
      <div
        className={`fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300 pointer-events-auto ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="flex size-2 rounded-full bg-accent-electric animate-pulse" />
        <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
          SECTOR {activeSector.num}
        </span>
        <span className="text-border text-xs">/</span>
        <span className="font-sans text-xs font-medium text-foreground tracking-tight">
          {activeSector.title}
        </span>
      </div>
    </>
  )
}
