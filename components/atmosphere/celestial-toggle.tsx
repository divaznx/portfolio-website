"use client"

import { motion, AnimatePresence } from "motion/react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"

/*
  Minimal day/night switch: a clean hairline circle that inverts to ink on hover
  and crossfades the sun/moon glyph. Flipping it shifts the whole color space
  between the light editorial canvas and the ink-dark environment.
*/
function CelestialToggle() {
  const { theme, toggle } = useTheme()
  const isNight = theme === "night"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isNight ? "Switch to daylight" : "Switch to night"}
      className="fixed right-5 top-5 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-foreground hover:text-background sm:right-8 sm:top-8"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {isNight ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export { CelestialToggle }
