import profileImg from '../../assets/images/laisaFoto1.png'
import MobileSectionTitle from '../../components/MobileSectionTitle/MobileSectionTitle'
import { useLanguage } from '../../contexts/LanguageContext'
import { Github, Linkedin, FileDown, User } from 'lucide-react'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="px-6 md:px-16 py-15">
      <MobileSectionTitle
        title="Sobre mim"
        icon={<User className="w-10 h-10" />}
      />
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* FOTO */}
        <div className="flex-shrink-0 hidden md:block">
          <img
            src={profileImg}
            alt={t.hero.imageAlt}
            className="
      w-[280px] h-[380px]
      md:w-[320px] md:h-[420px]
      object-cover
      rounded-[40px]
    "
          />
        </div>

        <div className="text-white antialiased font-medium">

          <h2 className="text-xs tracking-[0.25em] font-medium text-white mb-1">
            {t.about.greeting}
          </h2>

          <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-3">
            {t.about.title}{' '}
            <span className="text-[#9c00fd] font-semibold">
              {t.about.name}
            </span>
          </h1>

          <p className="text-sm text-zinc-300 leading-6 max-w-2xl mb-3 font-medium">
            {t.about.p1}
          </p>

          <p className="text-sm text-zinc-300 leading-6 max-w-2xl mb-5 font-medium">
            {t.about.p2}
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-3 mt-4">

            {/* CV */}
            <a
              href="/cv/Laisa-Albuquerque-CV.pdf"
              download
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-lg
                bg-[#9c00fd] text-white
                text-sm font-medium
                hover:bg-[#7e00cc]
                transition-colors
              "
            >
              <FileDown size={16} />
              {t.about.cv}
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-lg
                border border-[#9c00fd]
                text-[#9c00fd]
                text-sm font-medium
                hover:bg-[#9c00fd] hover:text-white
                transition-colors
              "
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/seu-github"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-lg
                border border-[#9c00fd]
                text-[#9c00fd]
                text-sm font-medium
                hover:bg-[#9c00fd] hover:text-white
                transition-colors
              "
            >
              <Github size={16} />
              GitHub
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
