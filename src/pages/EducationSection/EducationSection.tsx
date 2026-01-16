import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { en } from "../../i18n/en";
import { pt } from "../../i18n/pt";
import { es } from "../../i18n/es";
import { getEducation, getCertificates } from "../../service/getDataEducation";
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle";
import { Award, ChevronDown, GraduationCap } from "lucide-react";

const translations = { pt, en, es };

export default function EducationSection() {
  const { language } = useLanguage();
  const t = translations[language].education;

  // Pega os dados dos services
  const education = getEducation(); // apenas education.items
  const certificates = getCertificates(); // apenas education.certificates

  const [openEducation, setOpenEducation] = useState<number | null>(1);
  const [openCertificate, setOpenCertificate] = useState<number | null>(null);

  return (
    <section id="education" className="w-full py-16 px-6 md:px-16">
      <MobileSectionTitle
        title={t.sectionTitle}
        icon={<GraduationCap className="w-10 h-10" />}
      />

      <div className="max-w-6xl mx-auto gap-8 space-y-8">

        {/* ================= FORMAÇÃO / EDUCATION ================= */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl font-semibold text-purple-500 dark:text-white">
              {t.degree} {/* "Formação Acadêmica" ou equivalente no idioma */}
            </h3>
          </div>

          {education.map((item) => (
            <div key={item.id} className="border-l-2 border-purple-500 pl-4">
              <button
                onClick={() =>
                  setOpenEducation(openEducation === item.id ? null : item.id)
                }
                className="w-full flex justify-between items-center text-left text-purple-500"
              >
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.degree} em {item.field}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.institution} • {item.startYear} – {item.endYear} (
                    {item.status === "Concluído"
                      ? t.status.completed
                      : t.status.ongoing}
                    )
                  </p>
                </div>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openEducation === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openEducation === item.id && item.highlights && (
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {item.highlights.map((topic, index) => (
                    <p key={index}>• {topic}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ================= CERTIFICADOS / CERTIFICATES ================= */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl font-semibold text-purple-500 dark:text-white">
              {t.certificatesLabel} {/* "Certificados" ou equivalente no idioma */}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
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
                  className="w-full flex justify-between items-center text-left text-purple-500"
                >
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.institution} • {cert.year}
                      {cert.workload && ` • ${cert.workload}`}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openCertificate === cert.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openCertificate === cert.id && cert.skills && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
