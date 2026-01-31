import profileImg from "../../assets/images/laisaFoto1.png"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import SocialActions from "../../components/SocialActions/SocialActions"
import { useLanguage } from "../../contexts/LanguageContext"
import { User } from "lucide-react"

export default function AboutSection() {
  const { t } = useLanguage()

  function goToContact() {
    const contactSection = document.getElementById("contact")
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" })
  }

  if (!t?.about) return null

  return (
    <section id="about" className="px-6 md:px-16 py-24 bg-bg text-text">
      <MobileSectionTitle
        title="Sobre mim"
        icon={<User className="w-10 h-10 text-[rgb(var(--purple))]" />}
      />

      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
        <div className="flex-shrink-0 hidden md:block">
          <div className="relative rounded-[40px] overflow-hidden">
            <img
              src={profileImg}
              alt={t.hero?.imageAlt ?? "Foto de perfil"}
              className="
                w-[280px] h-[380px]
                md:w-[320px] md:h-[420px]
                object-cover
                rounded-[40px]
              "
              loading="lazy"
            />

            <div
              className="pointer-events-none absolute inset-0 rounded-[40px]"
              style={{
                boxShadow: "0 0 0 2px rgba(168,85,247,0.22) inset",
              }}
            />
          </div>
        </div>

        <div className="antialiased font-medium text-text">
          <h2 className="text-xs tracking-[0.25em] font-medium text-text-muted mb-1">
            {t.about.greeting}
          </h2>

          <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-3">
            {t.about.title}{" "}
            <span className="text-[rgb(var(--purple))] font-semibold">
              {t.about.name}
            </span>
          </h1>

          <p className="text-sm text-text-muted leading-6 max-w-2xl mb-3 font-medium">
            {t.about.p1}
          </p>

          <p className="text-sm text-text-muted leading-6 max-w-2xl mb-5 font-medium">
            {t.about.p2}
          </p>

          <div
            className="inline-block rounded-2xl p-1"

          >
            <div className="rounded-2xl px-1 py-1">
              <SocialActions onContactClick={goToContact} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
