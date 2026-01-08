import { useLanguage } from "../../contexts/LanguageContext"
import FotoLaisa from "../../assets/images/laisaFoto2.jpeg"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-30 text-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="max-w-3xl mx-auto md:mx-0 text-[1.5rem] md:text-3xl font-black leading-snug">
            Construindo experiências com
            <span className="block text-[#a855f7] text-3xl md:text-4xl">
              Códigos e Criatividade
            </span>
          </h1>

          <h2 className="mt-4 text-lg md:text-xl font-bold">
            Laísa Alb — <span className="text-[#a855f7]">Desenvolvedora Front-end</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-block px-10 py-3 rounded-full font-bold text-base bg-[#a855f7] hover:bg-[#9333ea] transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              Entre em Contato
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">

            <div className="relative w-56 h-56 md:w-90 md:h-90 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
              <img
                src={FotoLaisa}
                alt="Foto de Laísa Albuquerque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
