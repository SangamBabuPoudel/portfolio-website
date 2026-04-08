import { motion } from "framer-motion"

const languages = [
  "English",
  "Nepali",
  "Hindi",
  "Spanish (Basic)",
]

export default function Languages() {
  return (
    <motion.section
      id="languages"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 font-mono mb-3">06. Languages</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Communication
      </h2>

      <div className="flex flex-wrap gap-3">
        {languages.map((language) => (
          <span
            key={language}
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-cyan-300 bg-slate-900"
          >
            {language}
          </span>
        ))}
      </div>
    </motion.section>
  )
}