import { useState } from "react"
import {
  Mail,
  CheckCircle,
  AlertCircle,
  User,
  Phone,
  MessageSquare,
} from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle"
import SocialActions from "../../components/SocialActions/SocialActions"

import { pt } from "../../i18n/pt"
import { en } from "../../i18n/en"
import { es } from "../../i18n/es"

const translations = { pt, en, es } as const

export default function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language].contact

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null)

  const WHATSAPP_NUMBER = "5581998857075"

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!name || !email || !message) {
      setFeedback("error")
      return
    }

    // ✅ garante que nunca quebra, mesmo se algum idioma ainda não tiver whatsappMessage
    const whatsappMessageFn =
      typeof (t as any).whatsappMessage === "function"
        ? (t as any).whatsappMessage
        : (n: string, em: string, ph: string, msg: string) =>
            `Olá! Gostaria de entrar em contato.\n\nNome: ${n}\nEmail: ${em}\nTelefone: ${ph || "-"}\n\nMensagem:\n${msg}`

    const text = whatsappMessageFn(name, email, phone, message)

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")

    setFeedback("success")
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  const cardBase =
    "rounded-xl p-6 border border-zinc-200/60 dark:border-zinc-800 bg-bg-secondary text-text"

  const inputBase = `
    w-full pl-12 pr-5 py-4 rounded-2xl text-sm
    border border-zinc-200/60 dark:border-zinc-800
    outline-none transition
    text-text placeholder:text-text-muted
    focus:ring-2 focus:ring-[rgb(var(--purple))]
    focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-bg))]
  `

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-16 bg-bg text-text">
      <MobileSectionTitle
        title={t.sectionTitle}
        icon={<Mail className="w-10 h-10 text-[rgb(var(--purple))]" />}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TEXTO */}
          <div className={cardBase}>
            <h3 className="font-semibold mb-3 text-text">{t.subtitle1}</h3>

            <p className="text-sm leading-6 font-normal mb-3 text-text-muted">
              {t.subtitle2}
            </p>

            <p className="text-sm leading-6 font-normal mb-3 text-text-muted">
              {t.subtitle3}{" "}
              <span className="font-semibold text-[rgb(var(--purple))]">
                {t.subtitle3Highlight}
              </span>
            </p>

            <p className="text-xs text-text-muted">{t.note}</p>

            <div className="mt-4">
              <SocialActions />
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className={`${cardBase} flex flex-col gap-3`}>
            {/* Nome */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={t.placeholders.name}
                className={inputBase}
                style={{ backgroundColor: "rgb(var(--color-bg) / 0.55)" as any }}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder={t.placeholders.email}
                className={inputBase}
                style={{ backgroundColor: "rgb(var(--color-bg) / 0.55)" as any }}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder={t.placeholders.phone}
                className={inputBase}
                style={{ backgroundColor: "rgb(var(--color-bg) / 0.55)" as any }}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-muted" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.placeholders.message}
                rows={4}
                className={inputBase + " resize-none pt-4"}
                style={{ backgroundColor: "rgb(var(--color-bg) / 0.55)" as any }}
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="
                mt-3 self-start px-6 py-2.5 rounded-lg
                text-sm font-semibold text-white
                transition shadow
                focus:outline-none
                focus:ring-2 focus:ring-[rgb(var(--purple))]
                focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-bg))]
              "
              style={{ backgroundColor: "rgb(var(--purple))" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(var(--purple-hover))"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(var(--purple))"
              }}
            >
              {t.button}
            </button>

            {feedback === "success" && (
              <div className="flex items-center gap-2 text-sm mt-2">
                <CheckCircle className="w-5 h-5" style={{ color: "#22c55e" }} />
                <span className="text-text-muted">{t.feedback.success}</span>
              </div>
            )}

            {feedback === "error" && (
              <div className="flex items-center gap-2 text-sm mt-2">
                <AlertCircle className="w-5 h-5" style={{ color: "#ef4444" }} />
                <span className="text-text-muted">{t.feedback.error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
