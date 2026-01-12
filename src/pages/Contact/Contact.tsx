import { Github, Linkedin, FileDown, Mail } from 'lucide-react'
import { useLanguage } from "../../contexts/LanguageContext"
import MobileSectionTitle from '../../components/MobileSectionTitle/MobileSectionTitle'

export default function ContactSection() {
  const { t } = useLanguage()
  return (
    <section
      id="contact"
      className="w-full py-12 px-6 md:px-16"
    >
      <MobileSectionTitle
        title="Contato"
        icon={<Mail className="w-10 h-10" />}
      />
      <div className="max-w-6xl mx-auto">

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* TEXTO */}
          <div className="
            bg-white/5 backdrop-blur
            border border-white/10
            rounded-xl p-6
            text-zinc-300
          ">
            <h3 className="text-white font-medium mb-3">
              ✨ Gostou do que viu?
            </h3>

            <p className="text-sm leading-6 font-light mb-3">
              Se você curtiu meu trabalho e acredita que podemos construir algo
              juntos, me manda uma mensagem. Estou sempre aberta a novos
              projetos, colaborações e desafios.
            </p>

            <p className="text-sm leading-6 font-light mb-3">
              Tem uma ideia e quer transformá-la em código?
              <span className="text-violet-400 font-medium">
                {" "}Vamos conversar.
              </span>
            </p>

            <p className="text-xs text-zinc-400">
              Respondo o mais rápido possível 😊
            </p>
            <div className="flex flex-wrap gap-3 mt-4 py-10">

              {/* CV */}
              <a
                href="/cv/Laisa-Albuquerque-CV.pdf"
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
                {t.about.cv}
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/seu-linkedin"
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
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/seu-github"
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
                GitHub
              </a>

            </div>
          </div>


          {/* FORMULÁRIO */}
          <form
            className="
              bg-white/5 backdrop-blur
              border border-white/10
              rounded-xl p-6
              flex flex-col gap-3
            "
          >
            <input
              type="text"
              placeholder="Seu nome completo:"
              className="
              w-full px-5 py-4
              rounded-2xl

              text-zinc-200 text-sm
              placeholder:text-zinc-400
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]
              shadow-lg
              outline-none
              transition
              focus:ring-2 focus:ring-violet-600/40
            "
            />

            <input
              type="email"
              placeholder="Seu e-mail:"
              className="
              w-full px-5 py-4
              rounded-2xl
              text-zinc-200 text-sm
              placeholder:text-zinc-400
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]
              shadow-lg
              outline-none
              transition
              focus:ring-2 focus:ring-violet-600/40
            "
            />


            <input
              type="tel"
              placeholder="Seu celular:"
              className="
              w-full px-5 py-4
              rounded-2xl
              text-zinc-200 text-sm
              placeholder:text-zinc-400
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]
              shadow-lg
              outline-none
              transition
              focus:ring-2 focus:ring-violet-600/40
            "
            />

            {/* Mensagem */}
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              className="
              w-full px-5 py-4
              rounded-2xl
              text-zinc-200 text-sm
              placeholder:text-zinc-400
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]
              shadow-lg
              outline-none resize-none
              transition
              focus:ring-2 focus:ring-violet-600/40
            "
            />

            <button
              type="submit"
              className="
                mt-3 self-start
                px-6 py-2.5
                rounded-lg
                bg-violet-600
                text-sm font-medium text-white
                hover:bg-violet-700
                transition
                shadow hover:shadow-violet-600/30
              "
            >
              Enviar mensagem
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
