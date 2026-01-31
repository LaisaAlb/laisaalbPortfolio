import { useState } from "react"
import { X, Github, CheckCircle } from "lucide-react"

type Project = {
  id: string | number
  title: string
  description?: string
  image: string
  github?: string
  techs: string[]
  features?: string[]
  emoji: any
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  const Icon = project.emoji

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
          cursor-pointer rounded-3xl overflow-hidden
          border border-zinc-200/60 dark:border-zinc-800
          bg-bg-secondary
          hover:-translate-y-1 hover:scale-[1.02]
          transition-all
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
          loading="lazy"
        />

        <div className="py-4 text-center">
          <h3 className="flex items-center justify-center gap-2 font-semibold text-lg text-[rgb(var(--purple))]">
            <Icon className="w-5 h-5" />
            {project.title}
          </h3>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-3"

          style={{ backgroundColor: "rgb(0 0 0 / 0.55)" as any }}
          onClick={() => setOpen(false)}
        >
          <div
            className="
              relative w-full max-w-6xl
              max-h-[90vh] overflow-y-auto
              rounded-3xl
              border border-zinc-200/60 dark:border-zinc-800
              animate-fadeIn
            "
            style={{
              backgroundColor: "rgb(var(--color-bg-secondary))" as any,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="
                sticky top-0 z-10 flex justify-end p-4
                border-b border-zinc-200/60 dark:border-zinc-800
                backdrop-blur
              "
              style={{
                backgroundColor: "rgb(var(--color-bg-secondary) / 0.75)" as any,
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="transition-colors text-text hover:text-[rgb(var(--purple))]"
                aria-label="Fechar"
              >
                <X size={26} />
              </button>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-10">

                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col text-text">
                  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[rgb(var(--purple))]">
                    <Icon className="w-7 h-7" />
                    {project.title}
                  </h2>

                  {project.description && (
                    <p className="mt-6 text-text-muted leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {project.features?.length ? (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-4 text-[rgb(var(--purple))]">
                        O que eu fiz nesse projeto
                      </h4>

                      <ul className="space-y-3">
                        {project.features.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-text-muted"
                          >
                            <CheckCircle
                              className="w-5 h-5 mt-0.5"
                              style={{ color: "rgb(var(--purple))" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1 text-sm rounded-full
                          border border-zinc-200/60 dark:border-zinc-800
                        "
                        style={{
                          backgroundColor: "rgb(var(--purple-soft))" as any,
                          color: "rgb(var(--purple))",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-10 inline-flex items-center gap-3
                        self-start
                        px-6 py-3 rounded-xl
                        font-semibold
                        text-white
                        transition
                        focus:outline-none
                        focus:ring-2 focus:ring-[rgb(var(--purple))]
                        focus:ring-offset-2
                      "
                      style={{
                        backgroundColor: "rgb(var(--purple))",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgb(var(--purple-hover))"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgb(var(--purple))"
                      }}
                    >
                      <Github className="w-5 h-5" />
                      Ver código no GitHub
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
