import { useLanguage } from '../../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { setLanguage } = useLanguage()

  return (
    <select
      onChange={(e) => setLanguage(e.target.value as any)}
      className="
        bg-transparent
        border border-white/20
        rounded-md
        px-3 py-2
        text-sm font-semibold
        text-white
        cursor-pointer

        transition-all duration-300

        hover:border-[#ae3eff]
        hover:bg-[#ae3eff]/10

        focus:outline-none
        focus:ring-2 focus:ring-[#9c00fd]
        focus:border-[#9c00fd]
      "
    >
      <option value="pt" className="text-black">PT</option>
      <option value="en" className="text-black">EN</option>
      <option value="es" className="text-black">ES</option>
    </select>
  )
}
