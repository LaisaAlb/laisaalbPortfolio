import { useLocation } from "react-router-dom"
import { useLanguage } from "../../contexts/LanguageContext"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import Logo from "../../assets/images/LAlogo.png"


// Importando ícones do Lucide
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

type PageTitle = {
  title: string
  subtitle: string
  icon: JSX.Element
}

const titles: Record<RoutePath, PageTitle> = {
  "/": {
    title: "Olá, eu sou a Laísa",
    subtitle: "Desenvolvedora Front-end",
    icon: <SmileyWink
      size={48}
      weight="fill"
      className="text-white"
    />
  },
  "/about": {
    title: "Sobre mim",
    subtitle: "Quem sou eu e minha trajetória",
    icon: <User className="w-10 h-10 text-white" />,
  },
  "/skills": {
    title: "Habilidades",
    subtitle: "Técnicas e interpessoais",
    icon: <Award className="w-10 h-10 text-white" />,
  },
  "/experience": {
    title: "Experiência",
    subtitle: "Minha jornada profissional",
    icon: <Briefcase className="w-10 h-10 text-white" />,
  },
  "/projects": {
    title: "Projetos",
    subtitle: "Alguns trabalhos que desenvolvi",
    icon: <Code className="w-10 h-10 text-white" />,
  },
  "/education": {
    title: "Formação & Certificados",
    subtitle: "Minha trajetória acadêmica e cursos",
    icon: <GraduationCap className="w-10 h-10 text-white" />,
  },
  "/contact": {
    title: "Contato",
    subtitle: "Vamos conversar?",
    icon: <Mail className="w-10 h-10 text-white" />,
  },
}

export default function PageHeader() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  const current = titles[pathname as RoutePath]
  if (!current) return null

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
          {current.icon}
          <div>
            <h1 className="text-3xl font-semibold">
              {current.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {current.subtitle}
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
