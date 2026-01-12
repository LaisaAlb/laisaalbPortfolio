import { useState } from "react"
import { X } from "lucide-react"

interface ProjectCardProps {
  project: any
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD FECHADO */}
      <div
        onClick={() => setOpen(true)}
        className="
          cursor-pointer rounded-3xl overflow-hidden
          bg-zinc-900 border border-zinc-800
          hover:scale-[1.03] transition
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        <div className="py-4 text-center">
          <h3 className="text-purple-400 font-semibold text-lg">
            {project.title} {project.emoji}
          </h3>
        </div>
      </div>

      {/* OVERLAY + CARD EXPANDIDO */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          
          <div
            className="
              relative w-full max-w-6xl
              bg-gradient-to-br from-zinc-900
              backdrop-blur-md
              rounded-3xl p-8 md:p-10
              border border-purple-800/40
              animate-fadeIn
            "
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-purple-400"
            >
              <X size={26} />
            </button>

            <div className="flex flex-col md:flex-row gap-10">
              
              {/* 🎬 VÍDEO */}
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={project.video}
                  title={project.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              {/* 📝 CONTEÚDO */}
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-3xl font-bold text-purple-400">
                  {project.title} {project.emoji}
                </h2>

                <p className="mt-6 text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* FUNCIONALIDADES */}
                {project.features && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg mb-3">
                      Principais funcionalidades:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((item: string) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-green-400">✔</span>
                          <span className="text-zinc-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TECNOLOGIAS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techs.map((tech: string) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 text-sm rounded-full
                        bg-purple-900/40 text-purple-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="mt-6 flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-purple-400 hover:underline"
                    >
                      💻 GitHub
                    </a>
                  )}

                  {project.linkedin && (
                    <a
                      href={project.linkedin}
                      target="_blank"
                      className="text-purple-400 hover:underline"
                    >
                      🔗 LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
