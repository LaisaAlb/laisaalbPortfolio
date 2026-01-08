import { useTheme } from '../../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="
        p-2 rounded-md
        border border-black/20 dark:border-white/20
        bg-transparent
        text-black dark:text-white
        transition-all duration-300
        hover:bg-[#ae3eff]/20
        hover:border-[#ae3eff]
        focus:outline-none
        focus:ring-2 focus:ring-[#9c00fd]
      "
    >
      <span className="text-lg">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  )
}
