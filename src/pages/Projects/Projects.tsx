import { Code } from "lucide-react"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import { projects as allProjects } from "../../service/getDataProjects"
import { useLanguage } from "../../contexts/LanguageContext"

import { pt } from "../../i18n/pt"
import { en } from "../../i18n/en"
import { es } from "../../i18n/es"

const translations = { pt, en, es }

export default function ProjectsSection() {
  const { language } = useLanguage()

  const translatedProjects = allProjects.map((project, index) => ({
    ...project,
    ...(translations[language]?.projects?.[index] || {}),
  }))

  const sectionTitle =
    language === "pt" ? "Projetos" : language === "en" ? "Projects" : "Proyectos"

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-bg text-text">
      <MobileSectionTitle
        title={sectionTitle}
        icon={<Code className="w-10 h-10 text-[rgb(var(--purple))]" />}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {translatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
