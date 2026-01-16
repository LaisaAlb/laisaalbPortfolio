import { useState } from 'react' 
import { useLanguage } from '../../contexts/LanguageContext'

import brFlag from '../../assets/images/flags/brasil.png'
import usFlag from '../../assets/images/flags/usa.png'
import esFlag from '../../assets/images/flags/spain.png'

const languages = [
  { code: 'pt', label: 'PT', flag: brFlag },
  { code: 'en', label: 'EN', flag: usFlag },
  { code: 'es', label: 'ES', flag: esFlag },
]

export default function LanguageSwitcher() {
  const { setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])

  function handleSelect(lang: typeof languages[number]) {
    setSelected(lang)
    setLanguage(lang.code as any)
    setOpen(false)
  }

  return (
    <div className="relative">
      {/* BOTÃO */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          border border-white/20
          rounded-md
          px-3 py-2
          text-white
          hover:border-[#ae3eff]
          hover:bg-[#ae3eff]/10
          transition
        "
      >
        <span className="text-sm font-semibold">{selected.label}</span>
        {/* Bandeira selecionada → triangular */}
        <img
          src={selected.flag}
          alt={selected.label}
          className="w-7 h-5"
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <ul
          className="
            absolute w-full
            bg-[#0f0f0f]
            border border-white/10
            rounded-md
            shadow-lg
            z-50
            bottom-full mb-2
            md:top-full md:bottom-auto md:mt-2 md:mb-0
          "
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="
                flex items-center gap-2
                px-3 py-2
                cursor-pointer
                hover:bg-[#ae3eff]/10
              "
            >
              {/* Bandeira da lista → redonda */}
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm text-white">{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
