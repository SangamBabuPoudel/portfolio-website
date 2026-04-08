import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-cyan-400 font-mono mb-3">01. About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cybersecurity student building real technical experience
          </h2>
        </div>

        <div className="text-gray-400 space-y-4 leading-8">
          <p>
            I am a cybersecurity student at the University of South Florida,
            currently pursuing a Bachelor of Science in Computer & Information
            Systems Security with an expected graduation date of May 2028.
          </p>

          <p>
            My experience includes security monitoring, network traffic
            analysis, intrusion detection, threat intelligence, and malware
            analysis through hands-on labs and academic projects. I enjoy
            understanding how systems behave, identifying suspicious activity,
            and applying security concepts in practical environments.
          </p>

          <p>
            I am currently seeking internship opportunities where I can
            contribute, keep learning, and continue developing strong technical
            foundations in IT and cybersecurity.
          </p>
        </div>
      </div>
    </motion.section>
  )
}