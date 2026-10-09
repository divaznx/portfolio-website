"use client"

import * as React from "react"

type Theme = "night" | "day"
const THEME_STORAGE_KEY = "dn_story_theme"

const ThemeContext = React.createContext<{
  theme: Theme
  toggle: () => void
}>({ theme: "night", toggle: () => {} })

function getSnapshotTheme(): Theme {
  if (typeof document !== "undefined") {
    const domTheme = document.documentElement.dataset.theme as Theme
    if (domTheme === "day" || domTheme === "night") return domTheme
  }
  return "night"
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(getSnapshotTheme)

  const toggle = React.useCallback(() => {
    setTheme((prev) => {
      const next = prev === "day" ? "night" : "day"
      document.documentElement.dataset.theme = next
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next)
      } catch {}
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return React.useContext(ThemeContext)
}

export { ThemeProvider, useTheme }
