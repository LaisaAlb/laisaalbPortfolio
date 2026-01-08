import profileImg from '../../assets/images/laisaFoto1.png'
import { useLanguage } from '../../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-5 px-6 md:px-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-20">

        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt={t.hero.imageAlt}
            className="w-[280px] h-[380px] md:w-[320px] md:h-[420px] object-cover rounded-[40px]"
          />
        </div>

        <div className="text-white">
          <h2 className="text-md tracking-[0.3em] mb-2">
            {t.about.greeting}
          </h2>

          <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
            {t.about.title}{' '}
            <span className="text-violet-500">{t.about.name}</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
            {t.about.p1}
          </p>

          <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
            {t.about.p2}
          </p>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            {t.about.p3}
          </p>
        </div>
      </div>
    </section>
  )
}
