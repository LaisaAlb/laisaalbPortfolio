import { useState } from "react"
import { NavLink } from "react-router-dom"
import ThemeToggle from "../components/ThemeToggle/ThemeToggle"
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher"
import Logo from "../assets/images/LAlogo.png"

import {
  Home,
  User,
  Award,
  Briefcase,
  Code,
  Mail,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"

const links = [
  { label: "Início", path: "/", sectionId: "hero", icon: <Home className="w-5 h-5" /> },
  { label: "Sobre", path: "/about", sectionId: "about", icon: <User className="w-5 h-5" /> },
  { label: "Habilidades", path: "/skills", sectionId: "skills", icon: <Award className="w-5 h-5" /> },
  { label: "Experiência", path: "/experience", sectionId: "experience", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Projetos", path: "/projects", sectionId: "projects", icon: <Code className="w-5 h-5" /> },
  { label: "Formação & Certificados", path: "/education", sectionId: "education", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Contato", path: "/contact", sectionId: "contact", icon: <Mail className="w-5 h-5" /> },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  function scrollToSection(id: string) {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {/* ================= HEADER MOBILE ================= */}
      <header
        className="
          fixed top-0 left-0 right-0 z-50 md:hidden
          h-16 px-4
          flex items-center justify-between
          bg-zinc-900/80 backdrop-blur
          border-b border-zinc-800
        "
      >
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="text-sm font-semibold text-purple-400">
            Laísa Albuquerque
          </span>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg border border-zinc-800 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* ================= BACKDROP ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      {/* ================= SIDEBAR MOBILE ================= */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-64
          bg-zinc-900 border-l border-zinc-800
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden flex flex-col p-6
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mt-12 flex-1">
          <nav className="flex flex-col gap-4">
            {links.map(link => (
              <button
                key={link.label}
                onClick={() => {
                  scrollToSection(link.sectionId)
                  setOpen(false)
                }}
                className="
                  flex items-center gap-3 text-base
                  text-zinc-300 hover:text-purple-400
                  transition-colors
                "
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </aside>

      {/* ================= SIDEBAR DESKTOP ================= */}
      <aside
        className="
          hidden md:flex fixed left-0 top-0 h-full w-20 md:w-64
          bg-zinc-900 border-r border-zinc-800
          flex-col justify-between p-4
        "
      >
        <div className="flex flex-col gap-6">
          {/* LOGO */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="ml-3 font-bold text-purple-400">
              Laísa Albuquerque
            </span>
          </div>

          {/* 🔹 DIVISOR (TRACINHO) */}
          <div className="w-full h-px bg-zinc-800" />

          {/* NAVEGAÇÃO */}
          <nav className="flex flex-col gap-4 pt-2">
            {links.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 transition-colors ${
                    isActive
                      ? "text-purple-400 font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <span className="text-xs text-zinc-500">
          © {new Date().getFullYear()}
        </span>
      </aside>
    </>
  )
}
