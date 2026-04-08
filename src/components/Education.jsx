import { motion } from "framer-motion"

export default function Education() {
  return (
    <motion.section
      id="education"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 font-mono mb-3">04. Education</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Academic background
      </h2>

      <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300">
        <h3 className="text-2xl font-semibold mb-2">
          University of South Florida
        </h3>
        <p className="text-cyan-300 mb-4">
          Bachelor of Science in Computer & Information Systems Security
        </p>
        <p className="text-gray-400 mb-3">Expected Graduation: May 2028</p>
        <p className="text-gray-400 leading-7">
          Judy Genshaft Honors College • Green & Gold Presidential Scholar •
          Dean’s List
        </p>
      </div>
    </motion.section>
  )
}