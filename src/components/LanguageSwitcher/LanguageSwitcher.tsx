import { useState } from "react"
import { useLanguage } from "../../contexts/LanguageContext"

import brFlag from "../../assets/images/flags/brasil.png"
import usFlag from "../../assets/images/flags/usa.png"
import esFlag from "../../assets/images/flags/spain.png"

const languages = [
  { code: "pt", label: "PT", flag: brFlag },
  { code: "en", label: "EN", flag: usFlag },
  { code: "es", label: "ES", flag: esFlag },
] as const

export default function LanguageSwitcher() {
  const { setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<(typeof languages)[number]>(languages[0])

  function handleSelect(lang: (typeof languages)[number]) {
    setSelected(lang)
    setLanguage(lang.code as any)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center gap-2
          rounded-md px-3 py-2
          border border-zinc-200/60 dark:border-zinc-800
          text-text
          hover:text-[rgb(var(--purple))]
          transition
        "
        style={{
          backgroundColor: "rgb(var(--color-bg-secondary) / 0.6)" as any,
        }}
      >
        <span className="text-sm font-semibold">{selected.label}</span>
        <img src={selected.flag} alt={selected.label} className="w-7 h-5" />
      </button>

      {open && (
        <ul
          className="
            absolute w-full
            rounded-md shadow-lg z-50
            bottom-full mb-2
            md:top-full md:bottom-auto md:mt-2 md:mb-0
            border border-zinc-200/60 dark:border-zinc-800
            overflow-hidden
          "
          style={{
            backgroundColor: "rgb(var(--color-bg-secondary))" as any,
          }}
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="
                relative  /* ✅ necessário pro overlay ficar preso no item */
                flex items-center gap-2
                px-3 py-2 cursor-pointer
                text-text
                transition-colors
                select-none
              "
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "rgb(var(--purple-soft))" as any }}
              />

              <span className="relative flex items-center gap-2">
                <img
                  src={lang.flag}
                  alt={lang.label}
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-semibold">{lang.label}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
