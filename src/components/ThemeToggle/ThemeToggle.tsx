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
        border border-zinc-300/30 dark:border-zinc-700
        bg-zinc-100/40 dark:bg-zinc-900/40
        backdrop-blur
        text-zinc-700 dark:text-zinc-200
        transition-all duration-300
        hover:border-purple-400
        hover:text-purple-400
        focus:outline-none
        focus:ring-2 focus:ring-purple-500
      "
    >
      {isDark ? (
        <Sun className="w-6 h-6 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-6 h-6 transition-transform duration-300 rotate-0" />
      )}
    </button>
  )
}
