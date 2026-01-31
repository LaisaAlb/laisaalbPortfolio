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
  if (!t?.skills) return null

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
    { icon: Users, label: t.skills.teamwork },
    { icon: MessageSquare, label: t.skills.communication },
    { icon: Lightbulb, label: t.skills.problemSolving },
    { icon: CheckCircle, label: t.skills.responsibility },
    { icon: Palette, label: t.skills.creativity },
  ]

  const cardBase =
    "rounded-2xl p-8 shadow-sm border border-zinc-200/60 dark:border-zinc-800 bg-bg-secondary text-text"

  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-bg text-text">
      <MobileSectionTitle
        title={t.skills.title}
        icon={<Award className="w-10 h-10 text-[rgb(var(--purple))]" />}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className={cardBase}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-[rgb(var(--purple))]" size={24} />
              <h3 className="text-xl font-semibold text-text">
                {t.skills.technical}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2 rounded-full text-sm font-medium
                    border border-zinc-200/60 dark:border-zinc-800
                    text-text
                    transition-all duration-300
                    hover:-translate-y-1 hover:scale-105
                  "
                  style={{
                    backgroundColor: "rgb(var(--purple-soft))" as any,
                  }}
                >
                  <span className="text-[rgb(var(--purple))]">{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={cardBase}>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-[rgb(var(--purple))]" size={24} />
              <h3 className="text-xl font-semibold text-text">
                {t.skills.soft}
              </h3>
            </div>

            <ul className="space-y-4">
              {softSkills.map(({ icon: Icon, label }, index) => (
                <li key={index} className="flex items-center gap-4 text-text-muted">
                  <Icon className="text-[rgb(var(--purple))]" size={20} />
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
