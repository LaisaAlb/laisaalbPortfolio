import { useLanguage } from "../../contexts/LanguageContext"
import FotoLaisa from "../../assets/images/laisaFoto2.jpeg"

export default function HeroSection() {
  const { t } = useLanguage()
  if (!t?.hero) return null

  return (
    <section
      id="hero"
      className="
        relative min-h-[90vh]
        flex items-center justify-center
        px-6 py-24 md:py-28
        bg-bg text-text
      "
    >
      {/* brilho roxo sutil no fundo (não muda o roxo, só o bg) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-80"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 20%, rgba(168,85,247,0.14), transparent 60%), radial-gradient(600px 300px at 80% 70%, rgba(168,85,247,0.10), transparent 60%)",
        }}
      />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="max-w-3xl mx-auto md:mx-0 text-[1.5rem] md:text-3xl font-black leading-snug">
            {t.hero.titleLine1}{" "}
            <span className="text-[rgb(var(--purple))]">
              {/* roxo fixo (não depende do tema) */}
              <span className="block text-3xl md:text-4xl">
                {t.hero.titleLine2}
              </span>
            </span>
          </h1>

          <h2 className="mt-4 text-lg md:text-xl font-bold">
            Laísa Alb —{" "}
            <span className="text-[rgb(var(--purple))]">
              {t.hero.role}
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-text-muted max-w-xl mx-auto md:mx-0 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-10 py-3 rounded-full font-bold text-base
                text-white
                transition-all transform hover:scale-105
                shadow-lg shadow-purple-500/20
                focus:outline-none
                focus:ring-2 focus:ring-[rgb(var(--purple))]
                focus:ring-offset-2
                focus:ring-offset-[rgb(var(--color-bg))]
              "
              style={{
                backgroundColor: "rgb(var(--purple))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(var(--purple-hover))"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(var(--purple))"
              }}
            >
              {t.hero.cta}
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div
            className="
              relative w-56 h-56 md:w-80 md:h-80 rounded-full
              border-4 border-zinc-200/50 dark:border-white/10
              overflow-hidden shadow-2xl
            "
          >
            {/* anel roxo sutil (funciona nos 2 temas) */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full ring-2"
              style={{ boxShadow: "0 0 0 2px rgba(168,85,247,0.25) inset" }}
            />

            <img
              src={FotoLaisa}
              alt={t.hero.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
