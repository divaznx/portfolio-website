"use client"

import * as React from "react"

type Theme = "night" | "day"

const ThemeContext = React.createContext<{
  theme: Theme
  toggle: () => void
}>({ theme: "day", toggle: () => {} })

function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Day (light editorial) is the default environment; night is the ink-dark toggle.
  const [theme, setTheme] = React.useState<Theme>("day")

  React.useEffect(() => {
    const stored = window.localStorage.getItem("theme")
    if (stored === "day" || stored === "night") setTheme(stored)
  }, [])

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const toggle = React.useCallback(
    () => setTheme((t) => (t === "day" ? "night" : "day")),
    []
  )

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
