"use client"

import * as React from "react"
import gsap from "gsap"

export const SPLASH_STORAGE_KEY = "dn_splash_shown"

/**
 * Full-screen video splash that plays hello.mp4 once per session,
 * then reveals the site with a smooth 3-stage cinematic transition:
 * 1. Video scales 1 -> 1.06, fades to 0 with blur (0.7s)
 * 2. 2px lime line draws across screen center (0.5s)
 * 3. Split overlay halves slide up/down (0.9s)
 * 4. Introduction entrance unfolds smoothly
 */
export function VideoSplash() {
  const [phase, setPhase] = React.useState<"idle" | "playing" | "transitioning" | "done">("idle")
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const topHalfRef = React.useRef<HTMLDivElement>(null)
  const bottomHalfRef = React.useRef<HTMLDivElement>(null)
  const centerLineRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isTransitioningRef = React.useRef(false)

  const triggerTransition = React.useCallback(() => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true
    setPhase("transitioning")
    sessionStorage.setItem(SPLASH_STORAGE_KEY, "1")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("scroll-locked")
          setPhase("done")
        },
      })

      // 1. Video scales and fades with blur
      if (videoRef.current) {
        tl.to(
          videoRef.current,
          {
            scale: 1.06,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.7,
            ease: "power2.inOut",
          },
          0
        )
      }

      // 2. Lime center line draws across (0.5s)
      if (centerLineRef.current) {
        tl.fromTo(
          centerLineRef.current,
          { scaleX: 0, opacity: 1 },
          { scaleX: 1, duration: 0.5, ease: "power2.out" },
          0.2
        )
      }

      // 3. Black overlay halves split apart (0.9s, expo.inOut)
      if (topHalfRef.current && bottomHalfRef.current) {
        tl.to(
          topHalfRef.current,
          { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
          0.6
        )
        tl.to(
          bottomHalfRef.current,
          { yPercent: 100, duration: 0.9, ease: "expo.inOut" },
          0.6
        )
      }

      // Fade out center line as halves separate
      if (centerLineRef.current) {
        tl.to(
          centerLineRef.current,
          { opacity: 0, duration: 0.3, ease: "power2.in" },
          0.8
        )
      }

      // 4. Trigger Intro Page entrance animation
      tl.add(() => {
        window.dispatchEvent(new CustomEvent("splash-transition-in"))
      }, 0.8)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const finishInstantly = React.useCallback(() => {
    sessionStorage.setItem(SPLASH_STORAGE_KEY, "1")
    document.documentElement.classList.remove("scroll-locked")
    setPhase("done")
    window.dispatchEvent(new CustomEvent("splash-skipped"))
  }, [])

  const handleSkip = React.useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    finishInstantly()
  }, [finishInstantly])

  React.useEffect(() => {
    const isSplashShown = sessionStorage.getItem(SPLASH_STORAGE_KEY) === "1"
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (isSplashShown || isReduced) {
      const skipTimer = setTimeout(() => {
        setPhase("done")
        window.dispatchEvent(new CustomEvent("splash-skipped"))
      }, 0)
      return () => clearTimeout(skipTimer)
    }

    // Lock scroll
    document.documentElement.classList.add("scroll-locked")
    const playTimer = setTimeout(() => setPhase("playing"), 0)

    const video = videoRef.current
    if (!video) {
      finishInstantly()
      return () => clearTimeout(playTimer)
    }

    // Trigger transition 0.35s before video finishes
    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.35) {
        triggerTransition()
      }
    }

    const handleEnded = () => triggerTransition()
    const handleError = () => finishInstantly()

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("error", handleError)

    const playPromise = video.play()
    if (playPromise) {
      playPromise.catch(() => finishInstantly())
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("error", handleError)
    }
  }, [triggerTransition, finishInstantly])

  if (phase === "done") return null

  return (
    <div
      id="dn-video-splash"
      ref={containerRef}
      className="fixed inset-0 z-[100] pointer-events-auto overflow-hidden bg-transparent"
      aria-hidden="true"
    >
      {/* Top half black curtain */}
      <div
        ref={topHalfRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#1E1E1E] z-20 will-change-transform"
      />

      {/* Bottom half black curtain */}
      <div
        ref={bottomHalfRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1E1E1E] z-20 will-change-transform"
      />

      {/* Center 2px electric lime divider line */}
      <div
        ref={centerLineRef}
        className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#C6FF3D] z-30 opacity-0 origin-left will-change-transform"
      />

      {/* Video Container (lives behind curtains and fades before split) */}
      <div className="absolute inset-0 z-10 bg-black flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hello.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover will-change-transform"
        />

        {/* SKIP button */}
        {phase === "playing" && (
          <button
            type="button"
            onClick={handleSkip}
            className="absolute top-6 right-6 z-40 font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white px-4 py-2 border border-white/20 rounded-full hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-colors focus-visible:outline-2 focus-visible:outline-[#C6FF3D]"
            aria-label="Skip video intro"
          >
            SKIP →
          </button>
        )}
      </div>
    </div>
  )
}
