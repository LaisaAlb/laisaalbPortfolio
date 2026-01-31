import { Sun, Moon } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="
        relative flex items-center justify-center
        w-9 h-9 rounded-md
        border border-zinc-200/60 dark:border-zinc-800
        text-text
        transition-all duration-300
        focus:outline-none
        focus:ring-2 focus:ring-[rgb(var(--purple))]
        focus:ring-offset-2
      "
      style={{
        backgroundColor: "rgb(var(--color-bg-secondary) / 0.6)" as any,
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget.style.borderColor as any) = "rgb(var(--purple))"
        ;(e.currentTarget.style.color as any) = "rgb(var(--purple))"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ""
        e.currentTarget.style.color = ""
      }}
    >
      {isDark ? (
        <Sun className="w-6 h-6 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-6 h-6 transition-transform duration-300 rotate-0" />
      )}
    </button>
  )
}
