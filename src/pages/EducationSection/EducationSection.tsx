import { useMemo, useState } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import { en } from "../../i18n/en"
import { pt } from "../../i18n/pt"
import { es } from "../../i18n/es"
import { getEducation, getCertificates } from "../../service/getDataEducation"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import { Award, ChevronDown, GraduationCap } from "lucide-react"

const translations = { pt, en, es } as const

export default function EducationSection() {
  const { language } = useLanguage()
  const t = translations[language].education

  const educationBase = getEducation()
  const certificates = getCertificates()

  const [openEducation, setOpenEducation] = useState<number | null>(1)
  const [openCertificate, setOpenCertificate] = useState<number | null>(null)

  const education = useMemo(() => {
    const translatedById = new Map(
      (t.items ?? []).map((it: any) => [it.id, it])
    )

    return educationBase.map((base: any) => ({
      ...base,
      ...(translatedById.get(base.id) || {}),
    }))
  }, [educationBase, t.items])

  const cardBase =
    "rounded-2xl p-6 border border-zinc-200/60 dark:border-zinc-800 bg-bg-secondary text-text"
  const sectionTitle =
    "flex items-center gap-3 mb-6 text-[rgb(var(--purple))]"

  return (
    <section id="education" className="w-full py-20 px-6 md:px-16 bg-bg text-text">
      <MobileSectionTitle
        title={t.sectionTitle}
        icon={<GraduationCap className="w-10 h-10 text-[rgb(var(--purple))]" />}
      />

      <div className="max-w-6xl mx-auto gap-8 space-y-8">
        {/* ================= FORMAÇÃO ================= */}
        <div className={cardBase}>
          <div className={sectionTitle}>
            <GraduationCap className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-text">
              <span className="text-[rgb(var(--purple))]">{t.degree}</span>
            </h3>
          </div>

          {education.map((item: any) => {
            const isOpen = openEducation === item.id

            const normalizedStatus =
              item.status === "Concluído" ? "completed" :
              item.status === "Em andamento" ? "ongoing" :
              item.status

            return (
              <div key={item.id} className="relative pl-4 py-3">
                <span
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                  style={{ backgroundColor: "rgb(var(--purple))" }}
                />

                <button
                  onClick={() => setOpenEducation(isOpen ? null : item.id)}
                  className="
                    w-full flex justify-between items-start gap-4 text-left
                    rounded-xl px-3 py-3 transition-colors
                  "

                >
                  <div>
                    <h4 className="font-semibold text-text">
                      {item.degree} {language === "en" ? "in" : "em"} {item.field}
                    </h4>

                    <p className="text-sm text-text-muted mt-1">
                      {item.institution} • {item.startYear} – {item.endYear} (
                      {normalizedStatus === "completed"
                        ? t.status.completed
                        : t.status.ongoing}
                      )
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: "rgb(var(--purple))" }}
                  />
                </button>
                {isOpen && item.highlights?.length ? (
                  <div className="mt-3 text-sm text-text-muted space-y-1 px-3">
                    {item.highlights.map((topic: string, index: number) => (
                      <p key={index}>• {topic}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        {/* ================= CERTIFICADOS ================= */}
        <div className={cardBase}>
          <div className={sectionTitle}>
            <Award className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-text">
              <span className="text-[rgb(var(--purple))]">{t.certificatesLabel}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert: any) => {
              const isOpen = openCertificate === cert.id

              return (
                <div
                  key={cert.id}
                  className="
                    rounded-xl p-4
                    border border-zinc-200/60 dark:border-zinc-800
                    transition
                  "
                  style={{
                    backgroundColor: "rgb(var(--color-bg) / 0.55)" as any,
                  }}
                >
                  <button
                    onClick={() => setOpenCertificate(isOpen ? null : cert.id)}
                    className="
                      w-full flex justify-between items-start gap-3
                      text-left rounded-lg px-2 py-2
                      transition-colors
                    "
                    style={{
                      backgroundColor: isOpen
                        ? ("rgb(var(--purple-soft))" as any)
                        : "transparent",
                    }}
                  >
                    <div>
                      <h4 className="font-medium text-text">{cert.title}</h4>
                      <p className="text-sm text-text-muted mt-1">
                        {cert.institution} • {cert.year}
                        {cert.workload && ` • ${cert.workload}`}
                      </p>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "rgb(var(--purple))" }}
                    />
                  </button>

                  {isOpen && cert.skills?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2 px-2">
                      {cert.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="
                            px-2 py-1 text-xs rounded-full
                            border border-zinc-200/60 dark:border-zinc-800
                          "
                          style={{
                            backgroundColor: "rgb(var(--purple-soft))" as any,
                            color: "rgb(var(--purple))",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
