/**
 * Design tokens: a single typed source for layout, fluid typography, motion
 * timing, and the hero portrait shape/scrub config for the editorial system.
 *
 * Colors are AUTHORITATIVE in app/globals.css as per-theme CSS variables
 * (CLAUDE.md: "consume the variables"). The `themeColors` map below only mirrors
 * them for TS-side tooling/reference; globals.css always wins at runtime.
 */

/** Layout constants (mirror the container/section utilities used in sections). */
export const layout = {
  containerMax: "78rem",
  gutter: "clamp(1.25rem, 0.5rem + 3vw, 4rem)",
  sectionY: "clamp(5rem, 3rem + 8vw, 9rem)",
} as const

/**
 * Fluid editorial type scale. Mirrors the --text-fluid-* custom properties in
 * app/globals.css @theme (which generate the `text-fluid-*` utilities). Keep the
 * two in sync; the CSS side is what actually renders.
 */
export const fontSize = {
  sm: "clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem)",
  base: "clamp(1rem, 0.94rem + 0.3vw, 1.125rem)",
  lg: "clamp(1.2rem, 1rem + 0.9vw, 1.6rem)",
  xl: "clamp(1.75rem, 1.1rem + 2.6vw, 3rem)",
  "2xl": "clamp(2.5rem, 1.6rem + 3.2vw, 4.25rem)",
  display: "clamp(3.25rem, 1rem + 9vw, 9.5rem)",
} as const

/** Consistent spacing rhythm (fluid clamp steps; mirrors --space-* in globals). */
export const space = {
  xs: "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)",
  sm: "clamp(0.75rem, 0.6rem + 0.75vw, 1.125rem)",
  md: "clamp(1rem, 0.8rem + 1vw, 1.5rem)",
  lg: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)",
  xl: "clamp(2rem, 1.6rem + 2vw, 3rem)",
} as const

/**
 * Motion timing. `spring`/`headingSpring` are consumed by the Framer Motion
 * reveal primitives so every editorial entrance shares one physics profile.
 */
export const anim = {
  duration: { fast: 0.25, normal: 0.6, slow: 1 },
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
  },
  spring: { type: "spring", stiffness: 90, damping: 20, mass: 0.9 } as const,
  headingSpring: { type: "spring", stiffness: 120, damping: 22 } as const,
} as const

/** Reference mirror of the per-theme colors defined in app/globals.css. */
export const themeColors = {
  day: {
    background: "#ffffff",
    foreground: "#0f0f10",
    hairline: "#e5e5e7",
    mutedForeground: "#6b6b70",
  },
  night: {
    background: "#0f0f10",
    foreground: "#f4f4f0",
    hairline: "#262629",
    mutedForeground: "#8b8b92",
  },
} as const

export type ThemeName = keyof typeof themeColors
