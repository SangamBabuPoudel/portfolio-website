import { motion } from "framer-motion"
import {
  FaShieldAlt,
  FaNetworkWired,
  FaSearch,
  FaBug,
} from "react-icons/fa"

const projects = [
  {
    title: "Cybersecurity Security Monitoring Lab",
    description:
      "Built 3 SIEM dashboards in Elastic Stack (ELK) to monitor authentication logs, system activity, and network security events. Developed 10+ KQL detection queries and performed SOC-style alert triaging across simulated log events while mapping activity to MITRE ATT&CK techniques.",
    tools: ["ELK", "KQL", "MITRE ATT&CK", "SIEM"],
    icon: <FaShieldAlt className="text-cyan-400 text-2xl mb-4" />,
  },
  {
    title: "Network Security Monitoring Lab",
    description:
      "Conducted reconnaissance and service enumeration on 20+ hosts using Nmap/Zenmap. Analyzed 500+ packets in Wireshark across TCP, UDP, DNS, and HTTP traffic, and implemented 50+ Snort IDS rules to improve threat detection and reduce false positives.",
    tools: ["Nmap", "Wireshark", "Snort", "TCP/IP"],
    icon: <FaNetworkWired className="text-cyan-400 text-2xl mb-4" />,
  },
  {
    title: "Threat Intelligence & Attack Lifecycle Analysis",
    description:
      "Modeled cyber-attacks using the 7-phase Cyber Kill Chain, created 10+ Indicators of Compromise, and implemented STIX/TAXII standards with Soltra Edge for structured threat intelligence sharing. Documented attacker TTPs and mapped them to MITRE ATT&CK.",
    tools: ["STIX", "TAXII", "Soltra Edge", "IOC Analysis"],
    icon: <FaSearch className="text-cyan-400 text-2xl mb-4" />,
  },
  {
    title: "Malware Analysis & Memory Forensics",
    description:
      "Performed memory forensics with Volatility on 1–2 GB memory images, identifying running processes and suspicious artifacts using modules such as pslist, pstree, netscan, and malfind. Investigated persistence mechanisms, injected processes, and hidden network connections.",
    tools: ["Volatility", "Memory Forensics", "Malware Analysis", "Windows"],
    icon: <FaBug className="text-cyan-400 text-2xl mb-4" />,
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 font-mono mb-3">03. Experience & Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Hands-on cybersecurity work
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
          >
            {project.icon}
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 leading-7">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs border border-cyan-400/30 text-cyan-300 px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}