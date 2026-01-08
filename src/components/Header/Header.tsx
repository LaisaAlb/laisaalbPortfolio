import { useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Logo from '../../assets/images/LAlogo.png'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Header() {
    const { t } = useLanguage()

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ]
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<string | null>(null)

    const handleLogoClick = () => {
        setActiveLink(null)
        setMenuOpen(false)
    }

    return (
        <header className="
        fixed top-0 w-full z-50
        bg-bg-light dark:bg-bg-dark
        border-b border-black/10 dark:border-white/10
        transition-colors duration-300
      ">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#hero" onClick={handleLogoClick}>
                    <img
                        src={Logo}
                        alt="Logo Laísa Albuquerque"
                        className="h-10 w-auto cursor-pointer"
                    />
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-2">
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveLink(item.href)}
                            className={`
  px-4 py-2 rounded-md text-sm
  text-black dark:text-white
  font-semibold tracking-wide
  transition-all duration-300
  hover:bg-[#ae3eff]/80
  ${activeLink === item.href ? 'bg-[#9c00fd] text-white' : ''}
`}

                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeToggle />

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menu"
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#191919] border-t border-white/10">
                    <nav className="flex flex-col px-6 py-4 gap-2">
                        {navItems.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    setActiveLink(item.href)
                                    setMenuOpen(false)
                                }}
                                className={`
                  px-4 py-3 rounded-md text-white
                  font-semibold
                  transition-all duration-300
                  hover:bg-[#ae3eff]/80
                  ${activeLink === item.href ? 'bg-[#9c00fd]' : ''}
                `}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
