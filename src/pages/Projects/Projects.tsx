import { Code } from "lucide-react"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import { ProjectCard } from "../../components/ProjectCard/ProjectCard" 
import { projects as allProjects } from "../../service/getDataProjects"
import { useLanguage } from "../../contexts/LanguageContext"

// Importa os arquivos de i18n
import { pt } from "../../i18n/pt"
import { en } from "../../i18n/en"
import { es } from "../../i18n/es"

// Monta o objeto de traduções
const translations = { pt, en, es }

export default function ProjectsSection() {
  const { language } = useLanguage() // 'pt', 'en' ou 'es'

  // Combina dados fixos com textos traduzidos
  const translatedProjects = allProjects.map((project, index) => ({
    ...project, // mantém imagem, video, github, emoji
    ...(translations[language]?.projects?.[index] || {}),  // sobrescreve title, description e techs
  }))

  // Título da seção
  const sectionTitle =
    language === "pt" ? "Projetos" :
    language === "en" ? "Projects" :
    "Proyectos"

  return (
    <section id="projects" className="py-12 px-6">
      <MobileSectionTitle
        title={sectionTitle}
        icon={<Code className="w-10 h-10" />}
      />
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {translatedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
