import { useState } from "react"
import { Briefcase, ChevronDown } from "lucide-react"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import { useLanguage } from "../../contexts/LanguageContext"
import { experiences } from "../../service/getDataExperiences"

export default function ExperienceSection() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState<number | null>(null)

  if (!t?.experience) return null

  function toggle(id: number) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 px-6 md:px-16 bg-bg text-text">
      <MobileSectionTitle
        title={t.experience.title}
        icon={<Briefcase className="w-10 h-10 text-[rgb(var(--purple))]" />}
      />

      <div className="max-w-5xl mx-auto space-y-6">
        {experiences.map((exp) => {
          const data = t.experience.items[exp.id]
          const isOpen = openId === exp.id

          return (
            <div
              key={exp.id}
              className="
                rounded-2xl border
                border-zinc-200/60 dark:border-zinc-800
                bg-bg-secondary
                transition-all
              "
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(exp.id)}
                className="
                  w-full flex items-center justify-between gap-6
                  p-6 text-left rounded-2xl
                  transition-colors
                "
               
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12 h-12 rounded-lg
                      flex items-center justify-center
                      border border-zinc-200/60 dark:border-zinc-800
                      overflow-hidden
                    "
                    style={{ backgroundColor: "rgb(var(--color-bg))" as any }}
                  >
                    <img
                      src={exp.logo}
                      alt={data.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-text">{data.role}</h3>
                    <p className="text-sm text-text-muted">
                      {data.company} · {data.period}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  style={{ color: "rgb(var(--purple))" }}
                />
              </button>

              {/* CONTENT */}
              {isOpen && (
                <div className="px-6 pb-6 space-y-6 animate-fadeIn text-text">
                  <p className="text-sm text-text-muted">
                    {data.location} · {data.type}
                  </p>

                  {/* SOBRE */}
                  {data.about && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-[rgb(var(--purple))]">
                        Sobre
                      </h4>
                      <p className="text-sm leading-relaxed text-text-muted">
                        {data.about}
                      </p>
                    </div>
                  )}

                  {/* ATIVIDADES */}
                  {data.activities && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-[rgb(var(--purple))]">
                        Minhas atividades
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-text-muted">
                        {data.activities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* RESULTADOS */}
                  {data.results && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-[rgb(var(--purple))]">
                        Resultados e aprendizados
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-text-muted">
                        {data.results.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* TECNOLOGIAS */}
                  {data.technologies && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-[rgb(var(--purple))]">
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                              px-3 py-1 text-xs rounded-full
                              border border-zinc-200/60 dark:border-zinc-800
                            "
                            style={{
                              backgroundColor: "rgb(var(--purple-soft))" as any,
                              color: "rgb(var(--purple))",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* HABILIDADES */}
                  {data.skills && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-text-muted">
                        Habilidades desenvolvidas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill) => (
                          <span
                            key={skill}
                            className="
                              px-3 py-1 text-xs rounded-full
                              border border-zinc-200/60 dark:border-zinc-800
                              text-text-muted
                            "
                            style={{
                              backgroundColor: "rgb(var(--color-bg) / 0.55)" as any,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
