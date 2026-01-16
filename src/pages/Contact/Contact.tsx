import { useState } from "react";
import { Mail, CheckCircle, AlertCircle, User, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import MobileSectionTitle from "../../components/MobileSectionTitle/MobileSectionTitle";
import SocialActions from "../../components/SocialActions/SocialActions";

import { pt } from "../../i18n/pt";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";

const translations = { pt, en, es };

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  const WHATSAPP_NUMBER = "5581998857075";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !message) {
      setFeedback("error");
      return;
    }

    // Mensagem traduzida para WhatsApp
    const text = t.whatsappMessage(name, email, phone, message);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setFeedback("success");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <section id="contact" className="w-full py-12 px-6 md:px-16">
      <MobileSectionTitle title={t.sectionTitle} icon={<Mail className="w-10 h-10" />} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* TEXTO */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-zinc-300">
            <h3 className="text-white font-medium mb-3">{t.subtitle1}</h3>
            <p className="text-sm leading-6 font-light mb-3">{t.subtitle2}</p>
            <p className="text-sm leading-6 font-light mb-3">
              {t.subtitle3} <span className="text-violet-400 font-medium">{t.subtitle3Highlight}</span>
            </p>
            <p className="text-xs text-zinc-400">{t.note}</p>
            <SocialActions />
          </div>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 flex flex-col gap-3">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={t.placeholders.name}
                className="w-full pl-12 pr-5 py-4 rounded-2xl text-zinc-200 text-sm placeholder:text-zinc-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] shadow-lg outline-none transition focus:ring-2 focus:ring-violet-600/40"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder={t.placeholders.email}
                className="w-full pl-12 pr-5 py-4 rounded-2xl text-zinc-200 text-sm placeholder:text-zinc-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] shadow-lg outline-none transition focus:ring-2 focus:ring-violet-600/40"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder={t.placeholders.phone}
                className="w-full pl-12 pr-5 py-4 rounded-2xl text-zinc-200 text-sm placeholder:text-zinc-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] shadow-lg outline-none transition focus:ring-2 focus:ring-violet-600/40"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-400" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.placeholders.message}
                rows={4}
                className="w-full pl-12 pr-5 py-4 rounded-2xl text-zinc-200 text-sm placeholder:text-zinc-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] shadow-lg outline-none resize-none transition focus:ring-2 focus:ring-violet-600/40"
              />
            </div>

            <button
              type="submit"
              className="mt-3 self-start px-6 py-2.5 rounded-lg bg-violet-600 text-sm font-medium text-white hover:bg-violet-700 transition shadow hover:shadow-violet-600/30"
            >
              {t.button}
            </button>

            {feedback === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
                <CheckCircle className="w-5 h-5" />
                <span>{t.feedback.success}</span>
              </div>
            )}

            {feedback === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                <AlertCircle className="w-5 h-5" />
                <span>{t.feedback.error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
