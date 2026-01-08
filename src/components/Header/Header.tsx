import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Logo from '../../assets/images/LAlogo.png'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Header() {
    const { t } = useLanguage()
    const [scrolled, setScrolled] = useState(false)

    const navItems = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.contact, href: '#contact' },
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<string>('')

    useEffect(() => {
        setActiveLink(window.location.hash)
    }, [])

    return (
        <header
  className="
    fixed top-0 w-full z-50
    backdrop-blur-md
    bg-white/70 dark:bg-zinc-900/70
    border-b border-black/10 dark:border-white/10
  "
>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#" onClick={() => setActiveLink('')}>
                    <img src={Logo} alt="Logo" className="h-10" />
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-2">
                    {navItems.map(item => {
                        const isActive = activeLink === item.href

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveLink(item.href)}
                                className={`
                  px-4 py-2 text-sm font-semibold
                  transition-colors duration-300

                  ${isActive
                                        ? 'text-[#9c00fd]'
                                        : 'text-black dark:text-white hover:text-[#9c00fd]'
                                    }
                `}
                            >
                                {item.label}
                            </a>
                        )
                    })}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeToggle />

                    <button
                        className="md:hidden text-black dark:text-white text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-bg-dark border-t border-white/10">
                    <nav className="flex flex-col px-6 py-4 gap-2">
                        {navItems.map(item => {
                            const isActive = activeLink === item.href

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                        setActiveLink(item.href)
                                        setMenuOpen(false)
                                    }}
                                    className={`
                    px-4 py-3 font-semibold
                    transition-colors duration-300

                    ${isActive
                                            ? 'text-[#9c00fd]'
                                            : 'text-white hover:text-[#ae3eff]'
                                        }
                  `}
                                >
                                    {item.label}
                                </a>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>
    )
}
