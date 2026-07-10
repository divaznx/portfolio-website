"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

/*
  Single GSAP entry point. Registers ScrollTrigger + the useGSAP helper once on
  the client so scroll-scrubbed animations get automatic context cleanup
  (ScrollTrigger disposal + tween revert) on unmount. Import gsap/ScrollTrigger/
  useGSAP from here rather than from the raw packages so registration is
  guaranteed before any timeline is built.
*/
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export { gsap, ScrollTrigger, useGSAP }
