import { motion } from "framer-motion"

type MobileSectionTitleProps = {
  title: string
  icon: React.ReactNode
}

export default function MobileSectionTitle({ title, icon }: MobileSectionTitleProps) {
  return (
    <motion.div
      className="md:hidden flex items-center justify-center gap-4 mb-14 -mt-12"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <span className="flex items-center justify-center">
        <span className="scale-125 text-[rgb(var(--purple))]">{icon}</span>
      </span>

      <h2 className="text-3xl font-semibold tracking-tight text-[rgb(var(--purple))]">
        {title}
      </h2>
    </motion.div>
  )
}
