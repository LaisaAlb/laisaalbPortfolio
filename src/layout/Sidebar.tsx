import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
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

type LinkKey =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "contact"

export default function Sidebar() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  if (!t?.navigation) return null
  const nav = t.navigation

  const links = useMemo(
    () =>
      [
        { key: "home", path: "/", icon: Home },
        { key: "about", path: "/about", icon: User },
        { key: "skills", path: "/skills", icon: Award },
        { key: "experience", path: "/experience", icon: Briefcase },
        { key: "projects", path: "/projects", icon: Code },
        { key: "education", path: "/education", icon: GraduationCap },
        { key: "contact", path: "/contact", icon: Mail },
      ] as const,
    []
  )

  const sectionIdByKey: Record<LinkKey, string> = {
    home: "hero",
    about: "about",
    skills: "skills",
    experience: "experience",
    projects: "projects",
    education: "education",
    contact: "contact",
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  function scrollToSectionId(id: string) {
    const el = document.getElementById(id)
    if (!el) return false

    const HEADER_OFFSET = 80
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: y, behavior: "smooth" })
    return true
  }

  function goHomeAndScroll(targetId: string) {
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } })
      return
    }
    scrollToSectionId(targetId)
  }

  useEffect(() => {
    const state = (history.state?.usr ?? null) as { scrollTo?: string } | null
    const scrollTo = state?.scrollTo
    if (!scrollTo) return

    requestAnimationFrame(() => {
      scrollToSectionId(scrollTo)
      navigate(".", { replace: true, state: {} })
    })

  }, [pathname])

  function NavItem({
    link,
    onClick,
  }: {
    link: (typeof links)[number]
    onClick?: () => void
  }) {
    const Icon = link.icon
    const isHome = link.key === "home"

    function handleClick(e: React.MouseEvent) {
      if (pathname === "/") {
        const id = sectionIdByKey[link.key as LinkKey]
        const ok = scrollToSectionId(id)
        if (ok) {
          e.preventDefault()
          onClick?.()
          return
        }
      }

      if (isHome) {
        e.preventDefault()
        goHomeAndScroll(sectionIdByKey.home)
        onClick?.()
        return
      }

      onClick?.()
    }

    return (
      <NavLink
        to={link.path}
        onClick={handleClick}
        className={({ isActive }) => {
          const active = isActive

          return `
            group relative flex items-center gap-3
            w-full rounded-xl px-3 py-2
            transition-colors
            ${active ? "text-[rgb(var(--purple))] font-semibold" : "text-text-muted hover:text-[rgb(var(--purple))]"}
          `
        }}
      >
        {({ isActive }) => (
          <>
            <span
              className={`
                pointer-events-none
                absolute inset-0 rounded-xl
                transition-opacity
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}
              style={{
                backgroundColor: isActive
                  ? ("rgb(var(--purple-soft-hover))" as any)
                  : ("rgb(var(--purple-soft))" as any),
              }}
              aria-hidden="true"
            />
            <span
              className={`
                pointer-events-none
                absolute left-0 top-1/2 -translate-y-1/2
                h-6 w-1 rounded-full
                transition-opacity
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}
              style={{ backgroundColor: "rgb(var(--purple))" as any }}
              aria-hidden="true"
            />

            <span className="relative z-10 flex items-center gap-3">
              <Icon
                className="w-5 h-5 transition-colors"
                style={{ color: isActive ? "rgb(var(--purple))" : undefined }}
              />
              <span>{nav.links[link.key as LinkKey]}</span>
            </span>
          </>
        )}
      </NavLink>
    )
  }

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50 md:hidden h-16 px-4
          flex items-center justify-between
          bg-bg/80 backdrop-blur
          border-b border-zinc-200/60 dark:border-zinc-800
          text-text
        "
      >
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="text-sm font-semibold text-[rgb(var(--purple))]">
            {nav.title}
          </span>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="
            p-2 rounded-lg
            border border-zinc-200/60 dark:border-zinc-800
            text-text
            hover:border-[rgb(var(--purple))] hover:text-[rgb(var(--purple))]
            transition-colors
          "
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* ================= BACKDROP ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      {/* ================= SIDEBAR MOBILE ================= */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw]
          transform transition-transform duration-300
          md:hidden flex flex-col p-6
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          backgroundColor: "rgb(var(--mobile-drawer-bg))",
          borderLeft: "1px solid rgb(var(--mobile-drawer-border))",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-4 right-4
            rounded-lg p-2
            text-text hover:text-[rgb(var(--purple))]
            transition-colors
          "
          aria-label="Fechar menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mt-10 flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-9 h-9" />
          <span className="text-base font-bold text-[rgb(var(--purple))]">
            {nav.title}
          </span>
        </div>

        <nav className="mt-8 flex-1 flex flex-col gap-1">
          {links.map((link) => (
            <NavItem key={link.key} link={link} onClick={() => setOpen(false)} />
          ))}
        </nav>

        <div
          className="flex justify-between items-center pt-4"
          style={{ borderTop: "1px solid rgb(var(--mobile-drawer-border))" }}
        >
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </aside>

      {/* ================= SIDEBAR DESKTOP ================= */}
      <aside
        className="
          hidden md:flex fixed left-0 top-0 h-full w-20 md:w-64
          bg-bg-secondary
          border-r border-zinc-200/60 dark:border-zinc-800
          flex-col justify-between p-4
          text-text
          z-50 pointer-events-auto
        "
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="ml-3 font-bold text-[rgb(var(--purple))]">
              {nav.title}
            </span>
          </div>

          <div className="w-full h-px bg-zinc-200/60 dark:bg-zinc-800" />

          <nav className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <NavItem key={link.key} link={link} />
            ))}
          </nav>
        </div>

        <span className="text-xs text-text-muted">© {new Date().getFullYear()}</span>
      </aside>
    </>
  )
}
