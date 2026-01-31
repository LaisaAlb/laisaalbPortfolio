import { useLocation } from "react-router-dom"
import { useLanguage } from "../../contexts/LanguageContext"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import Logo from "../../assets/images/LAlogo.png"

import { User, Award, Briefcase, Code, Mail, GraduationCap } from "lucide-react"
import { SmileyWink } from "phosphor-react"

type RoutePath =
  | "/"
  | "/about"
  | "/skills"
  | "/experience"
  | "/projects"
  | "/education"
  | "/contact"

const iconClass = "w-10 h-10 text-[rgb(var(--purple))]"
const icons: Record<RoutePath, JSX.Element> = {
  "/": <SmileyWink size={48} weight="fill" className="text-[rgb(var(--purple))]" />,
  "/about": <User className={iconClass} />,
  "/skills": <Award className={iconClass} />,
  "/experience": <Briefcase className={iconClass} />,
  "/projects": <Code className={iconClass} />,
  "/education": <GraduationCap className={iconClass} />,
  "/contact": <Mail className={iconClass} />,
}

export default function PageHeader() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  if (!t?.pageHeader) return null

  const keyMap: Record<RoutePath, keyof typeof t.pageHeader> = {
    "/": "home",
    "/about": "about",
    "/skills": "skills",
    "/experience": "experience",
    "/projects": "projects",
    "/education": "education",
    "/contact": "contact",
  }

  const pageKey = keyMap[pathname as RoutePath]
  if (!pageKey) return null

  const content = t.pageHeader[pageKey]

  return (
    <header
      className="
        border-b border-zinc-200/60 dark:border-zinc-800
        pb-4
      "
    >
      {/* 📱 MOBILE — apenas logo */}
      <div className="flex items-center md:hidden">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* 💻 DESKTOP — header completo */}
      <div className="hidden md:flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-text">
          {icons[pathname as RoutePath]}

          <div>
            <h1 className="text-3xl font-semibold text-text">
              {content.title}
            </h1>
            <p className="text-sm text-text-muted">
              {content.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
