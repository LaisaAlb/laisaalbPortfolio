import { createContext, useContext, useState, ReactNode } from 'react'
import { pt } from '../i18n/pt'
import { en } from '../i18n/en'
import { es } from '../i18n/es'

const languages = { pt, en, es }
type Lang = keyof typeof languages

type LanguageContextType = {
  language: Lang
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>
  t: typeof pt
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Lang>('pt')

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: languages[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
