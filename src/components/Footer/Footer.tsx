import Logo from "../../assets/images/LAlogo.png"
import { Download, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 px-6 md:px-16 py-10 text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* ESQUERDA */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src={Logo} alt="Logo Laisa" className="h-10" />
          <a
            href="mailto:laisa@email.com"
            className="text-sm hover:text-purple-400 transition"
          >
            laisa275@gmail.com
          </a>
        </div>

        {/* DIREITA – ÍCONES */}
        <div className="flex items-center gap-4">
          <a
            href="/cv-laisa.pdf"
            download
            aria-label="Baixar CV"
            className="footer-icon"
          >
            <Download size={18} color="#9c00fd" />
          </a>

          <a
            href="https://linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <Linkedin size={18} color="#9c00fd" />
          </a>

          <a
            href="https://github.com/seu-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <Github size={18} color="#9c00fd" />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Laísa Albuquerque
      </div>
    </footer>
  )
}
