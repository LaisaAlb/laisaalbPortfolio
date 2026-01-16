import { useState } from "react"
import { X } from "lucide-react"

interface ProjectCardProps {
  project: any
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  const Icon = project.emoji

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
          <h3 className="flex items-center justify-center gap-2 text-purple-400 font-semibold text-lg">
            <Icon className="w-5 h-5" />
            {project.title}
          </h3>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center px-3">
          <div
            className="
              relative w-full max-w-6xl
              max-h-[90vh] overflow-y-auto
              bg-gradient-to-br from-zinc-900
              rounded-3xl
              border border-purple-800/40
              animate-fadeIn
            "
          >
            {/* HEADER MOBILE COM X */}
            <div className="sticky top-0 z-10 bg-zinc-900/90 backdrop-blur flex justify-end p-4 rounded-t-3xl">
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-purple-400"
              >
                <X size={26} />
              </button>
            </div>

            {/* CONTEÚDO */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-10">
                
                {/* 🎬 VÍDEO */}
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden mb-6 md:mb-0">
                  <iframe
                    src={project.video}
                    title={project.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>

                {/* 📝 TEXTO */}
                <div className="w-full md:w-1/2 text-white">
                  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-purple-400">
                    <Icon className="w-7 h-7" />
                    {project.title}
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
                        rel="noreferrer"
                        className="text-purple-400 hover:underline"
                      >
                        💻 GitHub
                      </a>
                    )}

                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noreferrer"
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
        </div>
      )}
    </>
  )
}
