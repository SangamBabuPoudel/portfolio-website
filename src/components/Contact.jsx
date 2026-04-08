import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 font-mono mb-3">04. Contact</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s connect</h2>

      <p className="text-gray-400 max-w-2xl mb-10 leading-8">
        I am currently seeking internship opportunities in IT and cybersecurity.
        Feel free to reach out if you would like to connect, collaborate, or
        discuss opportunities.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="mailto:your-email@example.com"
          className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
        >
          <FaEnvelope className="text-cyan-400 text-2xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-400 break-all">your-email@example.com</p>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
        >
          <FaGithub className="text-cyan-400 text-2xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">GitHub</h3>
          <p className="text-gray-400">github.com/yourusername</p>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
        >
          <FaLinkedin className="text-cyan-400 text-2xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
          <p className="text-gray-400">linkedin.com/in/yourusername</p>
        </a>
      </div>
    </motion.section>
  )
}