"use client"

import * as React from "react"

/**
 * Full-screen video splash that plays hello.mp4 once per session,
 * then reveals the site with a curtain wipe upward.
 * Skips under prefers-reduced-motion or if autoplay fails.
 * Uses sessionStorage so returning visitors don't see it again in the same tab.
 */
export function VideoSplash() {
  const [phase, setPhase] = React.useState<"loading" | "playing" | "wiping" | "done">("loading")
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)

  // Check if we should skip the splash entirely
  const shouldSkip = React.useMemo(() => {
    if (typeof window === "undefined") return false
    // Skip if already shown this session
    if (sessionStorage.getItem("dn_splash_shown") === "1") return true
    // Skip under reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true
    return false
  }, [])

  React.useEffect(() => {
    if (shouldSkip) {
      const timer = setTimeout(() => setPhase("done"), 0)
      return () => clearTimeout(timer)
    }

    // Lock scroll while playing
    document.documentElement.classList.add("scroll-locked")
    const playTimer = setTimeout(() => setPhase("playing"), 0)

    const video = videoRef.current
    if (!video) {
      cleanup()
      return () => clearTimeout(playTimer)
    }

    const handleEnded = () => startWipe()
    const handleError = () => cleanup()

    video.addEventListener("ended", handleEnded)
    video.addEventListener("error", handleError)

    // Try to play — if autoplay is blocked, skip immediately
    const playPromise = video.play()
    if (playPromise) {
      playPromise.catch(() => cleanup())
    }

    return () => {
      clearTimeout(playTimer)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("error", handleError)
    }
  }, [shouldSkip])

  function startWipe() {
    sessionStorage.setItem("dn_splash_shown", "1")
    setPhase("wiping")
    // After wipe animation completes, remove overlay
    setTimeout(() => {
      document.documentElement.classList.remove("scroll-locked")
      setPhase("done")
    }, 900)
  }

  function cleanup() {
    sessionStorage.setItem("dn_splash_shown", "1")
    document.documentElement.classList.remove("scroll-locked")
    setPhase("done")
  }

  function handleSkip() {
    const video = videoRef.current
    if (video) {
      video.pause()
    }
    startWipe()
  }

  if (phase === "done") return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{
        transition: phase === "wiping" ? "clip-path 0.8s cubic-bezier(0.7, 0, 0.3, 1)" : "none",
        clipPath: phase === "wiping" ? "inset(100% 0 0 0)" : "inset(0 0 0 0)",
      }}
      aria-hidden="true"
    >
      {/* The video */}
      <video
        ref={videoRef}
        src="/videos/hello.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="w-full h-full object-cover"
      />

      {/* SKIP button — top right, keyboard focusable */}
      {phase === "playing" && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute top-6 right-6 z-10 font-mono text-sm tracking-widest text-white/70 hover:text-white transition-colors px-4 py-2 border border-white/20 rounded-full hover:border-white/50 focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Skip video intro"
        >
          SKIP →
        </button>
      )}
    </div>
  )
}
