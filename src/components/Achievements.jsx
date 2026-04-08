import { motion } from "framer-motion"

const achievements = [
  "Judy Genshaft Honors College Student",
  "Green & Gold Presidential Scholar",
  "Dean’s List",
  "Top 1% National Academic Performance - NEB Examination",
]

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 font-mono mb-3">05. Achievements</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
          >
            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}