import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
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

export default function Sidebar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  if (!t?.navigation) return null

  const nav = t.navigation

  const links = [
    { key: "home", path: "/", icon: <Home className="w-5 h-5" /> },
    { key: "about", path: "/about", icon: <User className="w-5 h-5" /> },
    { key: "skills", path: "/skills", icon: <Award className="w-5 h-5" /> },
    { key: "experience", path: "/experience", icon: <Briefcase className="w-5 h-5" /> },
    { key: "projects", path: "/projects", icon: <Code className="w-5 h-5" /> },
    { key: "education", path: "/education", icon: <GraduationCap className="w-5 h-5" /> },
    { key: "contact", path: "/contact", icon: <Mail className="w-5 h-5" /> },
  ] as const

  return (
    <>
      {/* ================= HEADER MOBILE ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden h-16 px-4 flex items-center justify-between bg-zinc-900/80 backdrop-blur border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="text-sm font-semibold text-purple-400">
            {nav.title}
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
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-zinc-900 border-l border-zinc-800 transform transition-transform duration-300 md:hidden flex flex-col p-6 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
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
              <NavLink
                key={link.key}
                to={link.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-base text-zinc-300 hover:text-purple-400 transition-colors"
              >
                {link.icon}
                {nav.links[link.key]}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </aside>

      {/* ================= SIDEBAR DESKTOP ================= */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 md:w-64 bg-zinc-900 border-r border-zinc-800 flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          {/* LOGO */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="ml-3 font-bold text-purple-400">
              {nav.title}
            </span>
          </div>

          {/* 🔹 DIVISOR */}
          <div className="w-full h-px bg-zinc-800" />

          {/* NAVEGAÇÃO */}
          <nav className="flex flex-col gap-4 pt-2">
            {links.map(link => (
              <NavLink
                key={link.key}
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
                <span>{nav.links[link.key]}</span>
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
