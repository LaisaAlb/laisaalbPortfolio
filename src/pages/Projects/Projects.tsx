import { Code } from "lucide-react"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import { ProjectCard } from "../../components/ProjectCard/ProjectCard" 
import { projects } from "../../service/getDataProjects"

export default function ProjectsSection() {
  return (
<section id="projects" className="py-12 px-6">
  <MobileSectionTitle
  title="Projetos"
  icon={<Code className="w-10 h-10" />}
/>
  <div className="max-w-7xl mx-auto">
    <div
      className="
        mt-8 grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6 md:gap-8
      "
    >
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</section>

  )
}
