import { useState } from "react"
import { GraduationCap, Award, ChevronDown } from "lucide-react"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"

export default function EducationSection() {
  const [openEducation, setOpenEducation] = useState<number | null>(1)
  const [openCertificate, setOpenCertificate] = useState<number | null>(null)

  return (
    <section id="education" className="w-full py-16 px-6 md:px-16">
      <MobileSectionTitle
        title="Educação"
        icon={<GraduationCap className="w-10 h-10" />}
      />
      <div className="max-w-6xl mx-auto">

        <div className="gap-8">

          {/* ================= FORMAÇÃO ================= */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-[#a855f7]" />
              <h3 className="text-xl font-semibold text-[#a855f7] dark:text-white">
                Formação Acadêmica
              </h3>
            </div>

            <div className="border-l-2 border-[#a855f7] pl-4">
              <button
                onClick={() =>
                  setOpenEducation(openEducation === 1 ? null : 1)
                }
                className="w-full flex justify-between items-center text-left text-[#a855f7]"
              >
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    Bacharelado em Ciência da Computação
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Universidade • 2023 – Em andamento
                  </p>
                </div>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openEducation === 1 ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openEducation === 1 && (
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>• Estruturas de Dados</p>
                  <p>• Programação Orientada a Objetos</p>
                  <p>• Engenharia de Software</p>
                  <p>• Desenvolvimento Web</p>
                </div>
              )}
            </div>
          </div>

          {/* ================= CERTIFICADOS ================= */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#a855f7]" />
              <h3 className="text-xl font-semibold text-[#a855f7] dark:text-white">
                Certificados
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Angular Avançado",
                  year: "2024",
                  details: "Componentização, RxJS, boas práticas"
                },
                {
                  id: 2,
                  title: "React + TypeScript",
                  year: "2024",
                  details: "Hooks, tipagem, arquitetura"
                },
                {
                  id: 3,
                  title: "UX & Web Design",
                  year: "2023",
                  details: "Usabilidade, design systems"
                }
              ].map(cert => (
                <div
                  key={cert.id}
                  className="border border-gray-200 dark:border-zinc-700 rounded-xl p-4 hover:shadow-md transition"
                >
                  <button
                    onClick={() =>
                      setOpenCertificate(
                        openCertificate === cert.id ? null : cert.id
                      )
                    }
                    className="w-full flex justify-between items-center text-left text-[#a855f7]"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.year}
                      </p>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openCertificate === cert.id ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {openCertificate === cert.id && (
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      {cert.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
