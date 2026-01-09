import profileImg from '../../assets/images/laisaFoto1.png'
import { useLanguage } from '../../contexts/LanguageContext'
import { Github, Linkedin, FileDown } from 'lucide-react'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-5 px-6 md:px-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-20">

        {/* FOTO */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt={t.hero.imageAlt}
            className="w-[280px] h-[380px] md:w-[320px] md:h-[420px] object-cover rounded-[40px]"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="text-white">
          <h2 className="text-md tracking-[0.3em] mb-2">
            {t.about.greeting}
          </h2>

          <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
            {t.about.title}{' '}
            <span className="text-[#9c00fd]">{t.about.name}</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
            {t.about.p1}
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-xl">
            {t.about.p2}
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4 mt-6">

            {/* CV */}
            <a
              href="/cv/Laisa-Albuquerque-CV.pdf"
              download
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-[#9c00fd] text-white font-semibold
                hover:bg-[#7e00cc]
                transition-colors
              "
            >
              <FileDown size={18} />
              {t.about.cv}
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                border border-[#9c00fd]
                text-[#9c00fd] font-semibold
                hover:bg-[#9c00fd] hover:text-white
                transition-colors
              "
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/seu-github"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                border border-[#9c00fd]
                text-[#9c00fd] font-semibold
                hover:bg-[#9c00fd] hover:text-white
                transition-colors
              "
            >
              <Github size={18} />
              GitHub
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
