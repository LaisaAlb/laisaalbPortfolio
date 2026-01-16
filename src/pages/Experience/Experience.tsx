import { useState } from "react"
import { Briefcase, ChevronDown } from "lucide-react"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import { useLanguage } from "../../contexts/LanguageContext"
import { experiences } from "../../service/getDataExperiences"

export default function ExperienceSection() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState<number | null>(null)

  function toggle(id: number) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 px-6 md:px-16">
      <MobileSectionTitle
        title={t.experience.title}
        icon={<Briefcase className="w-10 h-10" />}
      />

      <div className="max-w-5xl mx-auto space-y-6">
        {experiences.map((exp) => {
          const data = t.experience.items[exp.id]

          return (
            <div
              key={exp.id}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all"
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(exp.id)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left text-white rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={data.company}
                    className="w-12 h-12 rounded-lg object-contain bg-white"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">{data.role}</h3>
                    <p className="text-sm text-gray-400">
                      {data.company} · {data.period}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`transition-transform ${
                    openId === exp.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              {openId === exp.id && (
                <div className="px-6 pb-6 space-y-6 animate-fadeIn text-gray-300">
                  <p className="text-sm text-gray-400">
                    {data.location} · {data.type}
                  </p>

                  {/* SOBRE A EMPRESA / PROJETO */}
                  {data.about && (
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Sobre
                      </h4>
                      <p className="text-sm leading-relaxed">{data.about}</p>
                    </div>
                  )}

                  {/* ATIVIDADES */}
                  {data.activities && (
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Minhas atividades
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        {data.activities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* RESULTADOS */}
                  {data.results && (
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Resultados e aprendizados
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        {data.results.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* TECNOLOGIAS */}
                  {data.technologies && (
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
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
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        Habilidades desenvolvidas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
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
