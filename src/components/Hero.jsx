import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono mb-4">
            &gt; Aspiring Cybersecurity Analyst
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Sangam Babu Poudel
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-8 max-w-xl">
            I am an aspiring cybersecurity analyst with hands-on experience in
            log analysis, network monitoring, and security tools such as
            Wireshark, Nmap, and ELK Stack. I enjoy learning by doing and
            building practical technical skills through projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 0.9, delay: 0.2 },
            scale: { duration: 0.9, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <img
                src="/profile.jpg"
                alt="Sangam Babu Poudel"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}