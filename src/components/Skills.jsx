import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Security Tools",
    skills: ["Elastic Stack (ELK)", "Snort IDS", "Wireshark", "Volatility", "Nmap"],
  },
  {
    title: "Threat Intelligence",
    skills: ["MITRE ATT&CK", "STIX", "TAXII", "Soltra Edge", "IOC Analysis"],
  },
  {
    title: "Systems & Networking",
    skills: ["Linux", "Windows", "VMware", "TCP/IP", "DNS", "HTTP", "ICMP"],
  },
  {
    title: "Programming",
    skills: ["Python", "SQL", "C/C++", "KQL"],
  },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 font-mono mb-3">02. Skills</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Technical tools and knowledge areas
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/30 px-3 py-1 text-sm text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}