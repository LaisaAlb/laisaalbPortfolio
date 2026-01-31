import { Github, Linkedin, FileDown } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"

type SocialActionsProps = {
  showLabel?: boolean
}

export default function SocialActions({ showLabel = true }: SocialActionsProps) {
  const { t, language } = useLanguage()

  const cvByLanguage: Record<string, string> = {
    pt: "/cv/LaisaAlb-PT.pdf",
    en: "/cv/LaisaAlb-EN.pdf",
    es: "/cv/LaisaAlb-ES.pdf",

  }

  const cvLink = cvByLanguage[language] ?? cvByLanguage.pt

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <a
        href={cvLink}
        download
        className="
          inline-flex items-center gap-2
          px-5 py-2.5 rounded-lg
          bg-[#9c00fd] text-white
          text-sm font-medium
          hover:bg-[#7e00cc]
          transition-colors
        "
      >
        <FileDown size={16} />
        {showLabel && t.about.cv}
      </a>

      <a
        href="https://www.linkedin.com/in/laisaalbdev"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2
          px-5 py-2.5 rounded-lg
          border border-[#9c00fd]
          text-[#9c00fd]
          text-sm font-medium
          hover:bg-[#9c00fd] hover:text-white
          transition-colors
        "
      >
        <Linkedin size={16} />
        {showLabel && "LinkedIn"}
      </a>

      <a
        href="https://github.com/LaisaAlb"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2
          px-5 py-2.5 rounded-lg
          border border-[#9c00fd]
          text-[#9c00fd]
          text-sm font-medium
          hover:bg-[#9c00fd] hover:text-white
          transition-colors
        "
      >
        <Github size={16} />
        {showLabel && "GitHub"}
      </a>
    </div>
  )
}
