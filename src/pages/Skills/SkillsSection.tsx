import {
  Code,
  Palette,
  Users,
  Lightbulb,
  MessageSquare,
  CheckCircle,
  Award,
} from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"

export default function SkillsSection() {
  const { t } = useLanguage()

  const technicalSkills = [
    "Angular",
    "TypeScript",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3 / SCSS",
    "Tailwind CSS",
    "Node.js",
    "MySQL | Prisma",
    "UX/UI Design",
    "Git & GitHub",
    "Figma",
  ]

  const softSkills = [
    {
      icon: Users,
      label: t.skills.teamwork,
    },
    {
      icon: MessageSquare,
      label: t.skills.communication,
    },
    {
      icon: Lightbulb,
      label: t.skills.problemSolving,
    },
    {
      icon: CheckCircle,
      label: t.skills.responsibility,
    },
    {
      icon: Palette,
      label: t.skills.creativity,
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 bg-background text-foreground"
    >
      <MobileSectionTitle
        title="Habilidades"
        icon={<Award className="w-10 h-10" />}
      />
      <div className="max-w-7xl mx-auto">

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 text-[#dddd]">
          {/* Technical Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6 text-[#9c00fd]">
              <Code className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">
                {t.skills.technical}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium
                  bg-primary/10 text-primary
                  hover:bg-primary hover:text-white
                  transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6 text-[#9c00fd]">
              <Users className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">
                {t.skills.soft}
              </h3>
            </div>

            <ul className="space-y-4">
              {softSkills.map(({ icon: Icon, label }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-muted-foreground"
                >
                  <Icon className="text-primary" size={20} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
