import profileImg from '../../assets/images/laisaFoto1.png'
import MobileSectionTitle from '../../components/MobileSectionTitle/MobileSectionTitle'
import SocialActions from '../../components/SocialActions/SocialActions'
import { useLanguage } from '../../contexts/LanguageContext'
import { User } from 'lucide-react'

export default function AboutSection() {
  const { t } = useLanguage()

  // Função para ir para a seção de contatos
  function goToContact() {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
          <SocialActions onContactClick={goToContact} />
        </div>
      </div>
    </section>
  )
}
