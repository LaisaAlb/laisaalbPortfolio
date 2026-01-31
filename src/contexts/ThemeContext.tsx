import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyThemeToHtml(theme: Theme) {
  const root = document.documentElement // <html />
  root.classList.toggle("dark", theme === "dark")
  root.setAttribute("data-theme", theme) // opcional, mas útil
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme") as Theme | null
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme())

  function setTheme(t: Theme) {
    setThemeState(t)
    localStorage.setItem("theme", t)
    applyThemeToHtml(t)
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    // garante que ao carregar, a classe é aplicada
    applyThemeToHtml(theme)
  }, []) // só uma vez (o state já vem inicializado)

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
