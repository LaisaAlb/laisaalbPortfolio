import { useLocation } from "react-router-dom"
import { useLanguage } from "../../contexts/LanguageContext"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import Logo from "../../assets/images/LAlogo.png"

import {
  User,
  Award,
  Briefcase,
  Code,
  Mail,
  GraduationCap,
} from "lucide-react"
import { SmileyWink } from "phosphor-react"

type RoutePath =
  | "/"
  | "/about"
  | "/skills"
  | "/experience"
  | "/projects"
  | "/education"
  | "/contact"

const icons: Record<RoutePath, JSX.Element> = {
  "/": (
    <SmileyWink
      size={48}
      weight="fill"
      className="text-white"
    />
  ),
  "/about": <User className="w-10 h-10 text-white" />,
  "/skills": <Award className="w-10 h-10 text-white" />,
  "/experience": <Briefcase className="w-10 h-10 text-white" />,
  "/projects": <Code className="w-10 h-10 text-white" />,
  "/education": <GraduationCap className="w-10 h-10 text-white" />,
  "/contact": <Mail className="w-10 h-10 text-white" />,
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
    <header className="border-b border-zinc-800 pb-4">
      {/* 📱 MOBILE — apenas logo */}
      <div className="flex items-center md:hidden">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10"
        />
      </div>

      {/* 💻 DESKTOP — header completo */}
      <div className="hidden md:flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white">
          {icons[pathname as RoutePath]}
          <div>
            <h1 className="text-3xl font-semibold">
              {content.title}
            </h1>
            <p className="text-sm text-zinc-400">
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
