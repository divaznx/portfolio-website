"use client"

import * as React from "react"

export type Theme = "night" | "day"
export const THEME_STORAGE_KEY = "dn_theme_2026"

interface ThemeContextType {
  theme: Theme
  toggle: (event?: React.MouseEvent) => void
  mounted: boolean
}

const emptySubscribe = () => () => {}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "night",
  toggle: () => {},
  mounted: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("night")
  
  // Clean hydration detection without cascading setState renders
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const domTheme = document.documentElement.dataset.theme as Theme
      if (domTheme === "day" || domTheme === "night") {
        setTheme(domTheme)
      }
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  const toggle = React.useCallback((event?: React.MouseEvent) => {
    setTheme((prev) => {
      const next: Theme = prev === "day" ? "night" : "day"

      const applyTheme = () => {
        document.documentElement.dataset.theme = next
        try {
          window.localStorage.setItem(THEME_STORAGE_KEY, next)
        } catch {}
      }

      // Circular-reveal transition if startViewTransition supported and event provided
      if (typeof document !== "undefined" && "startViewTransition" in document && event) {
        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        )

        // View transition API
        const transition = (document as unknown as { startViewTransition: (cb: () => void) => { ready: Promise<void> } }).startViewTransition(() => {
          applyTheme()
        })

        transition.ready?.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 600,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          )
        })
      } else {
        applyTheme()
      }

      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
