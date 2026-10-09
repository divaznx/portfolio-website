"use client"

import * as React from "react"
import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { ExternalLink } from "lucide-react"

const PHRASES = ["...is this thing on?", "okay, hello everyone."]

export function ChapterComfort() {
  const [typedText, setTypedText] = React.useState("")
  const sectionRef = React.useRef<HTMLElement>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setInView(rect.top < window.innerHeight * 0.7)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (!inView) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => setTypedText(PHRASES[1]), 0)
      return () => clearTimeout(timer)
    }

    let currentPhrase = 0
    let charIndex = 0
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      const phrase = PHRASES[currentPhrase]
      if (charIndex <= phrase.length) {
        setTypedText(phrase.slice(0, charIndex))
        charIndex++
        timeout = setTimeout(type, 60)
      } else if (currentPhrase === 0) {
        // Pause then move to second phrase
        timeout = setTimeout(() => {
          currentPhrase = 1
          charIndex = 0
          setTypedText("")
          timeout = setTimeout(type, 300)
        }, 1500)
      }
    }

    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  }, [inView])

  return (
    <section
      id="sector-04"
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-between py-24 px-[var(--layout-gutter)] max-w-[var(--layout-max)] mx-auto border-t border-border"
    >
      {/* Sector Tag */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="sector-tag">SECTOR 04</span>
          <span className="text-border">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            OUT OF THE COMFORT ZONE
          </span>
        </div>
      </div>

      {/* Main Narrative & Stage */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center my-auto">
        <div className="space-y-6">
          <Reveal>
            <h2 className="chapter-title text-[clamp(2.8rem,1.5rem+5vw,5.5rem)] text-foreground">
              The nervous speaker.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-fluid-base text-foreground/90 font-sans leading-relaxed max-w-xl">
              <p>
                I volunteer with <strong>Ullas Trust</strong>, an NGO, as a Higher Education Scholar.
                At the Ullas Summit I stand in front of the students in the class and speak.
                Through Touch The Soil I visit schools in other districts to talk about planning and goals.
              </p>
              <p>
                Public speaking was new to me. I was nervous. Then I loved it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ullas-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-xs text-accent-electric hover:border-accent-electric transition-colors"
              >
                <span>Ullas Trust</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-2 font-mono text-xs text-accent-electric flex items-center gap-2">
              <span>→</span>
              <span>Comfort zone: left. Production deploys: ahead.</span>
            </div>
          </Reveal>
        </div>

        {/* Visual: Stage frame with ullas.jpeg */}
        <Reveal delay={0.25} className="w-full flex justify-center">
          <div className="w-full max-w-[560px]">
            <div className="relative rounded-2xl border border-border overflow-hidden bg-card shadow-xl">
              {/* The image with bottom gradient to hide faces */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/images/ullas.jpeg"
                  alt="Divaakar speaking to a school audience at an Ullas Trust event"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                  sizes="(max-width: 768px) 90vw, 560px"
                  loading="lazy"
                />
                {/* Bottom gradient fade to hide student faces */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, var(--background), transparent)"
                  }}
                />
              </div>

              {/* Speech bubble typing effect */}
              <div className="absolute top-4 right-4 max-w-[200px]">
                <div className="relative rounded-lg border border-border bg-background/90 backdrop-blur-sm px-3 py-2 font-mono text-xs text-foreground">
                  {typedText}
                  <span className="boot-cursor text-accent-electric">|</span>
                  <div className="absolute -bottom-1.5 right-4 size-3 rotate-45 border-r border-b border-border bg-background" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 font-mono text-[10px] bg-black/50 text-white/80 rounded px-2 py-0.5 backdrop-blur-sm">
                ULLAS SUMMIT · IN FRONT OF THE CLASS
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Sector Cue */}
      <div className="border-t border-border pt-4 flex justify-between font-mono text-xs text-muted-foreground">
        <span>CH 04 — OUT OF THE COMFORT ZONE</span>
        <span>NEXT: SECTOR 05 ↓</span>
      </div>
    </section>
  )
}
