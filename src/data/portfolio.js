export const profile = {
  name: "Sangam Babu Poudel",
  resume: "/resume.pdf?v=1adddca34428",
  location: "Tampa, FL",
  gpa: "3.77",
  email: "sangampoudel642@gmail.com",
  github: "https://github.com/SangamBabuPoudel",
  linkedin: "https://linkedin.com/in/sangambabupoudel",
};
export const projects = [
  {
    id: "trusttrace",
    url: "https://chromewebstore.google.com/detail/trusttrace-ai/icodclconianombigcapccpilpnngjbg",
    linkLabel: "View on Chrome Web Store",
    title: "TrustTrace AI",
    subtitle: "Privacy-First Browser Security Extension",
    status: "Published",
    description:
      "Published in September 2026, TrustTrace AI v1.0.0 is a local-first phishing-detection extension. It analyzes URLs, lookalike domains, punycode, redirects, and clipboard-link risks without sending browsing data to a server.",
    capabilities: [
      "Trust Badges",
      "Clipboard Guardian",
      "Risk Reports",
      "Redirect Analysis",
      "Local Analysis",
      "False-Positive Testing",
    ],
    tools: [
      "JavaScript",
      "HTML",
      "CSS",
      "Manifest V3",
      "FastAPI",
      "Git",
      "GitHub",
    ],
    pipeline: ["Browse", "Analyze", "Score", "Warn", "Explain"],
    detail:
      "Google Search trust badges, pre-visit warning pages, and caution banners make explainable risk signals available while browsing. A Security Report Card and Clipboard Guardian complement local-first URL and domain analysis. Regression tests and false-positive handling cover Microsoft, Google, GitHub, Duo, Okta, Auth0, Cloudflare, and university SSO login redirects.",
  },
  {
    id: "soc",
    title: "Enterprise SOC Home Lab",
    subtitle: "Endpoint Telemetry → Detection → Investigation",
    status: "Active build",
    description:
      "A VMware lab with Windows and Ubuntu endpoints, Sysmon, and Wazuh. Validated endpoint telemetry from event creation through collection, indexing, and dashboard search.",
    capabilities: [
      "Endpoint Telemetry",
      "Attack Simulation",
      "Detection Engineering",
      "Incident Investigation",
    ],
    tools: [
      "Wazuh SIEM",
      "Sysmon",
      "Windows Event Logs",
      "Linux",
      "VMware",
      "Wireshark",
      "Nmap",
      "MITRE ATT&CK",
    ],
    pipeline: [
      "Windows / Linux",
      "Sysmon",
      "Wazuh",
      "Alert",
      "Investigation",
      "MITRE ATT&CK",
    ],
    stage: "Telemetry validation & Event ID 7040 investigation",
    detail:
      "Investigated Windows Service Control Manager Event ID 7040 (BITS start-type change), tracing the endpoint log to its Wazuh event and troubleshooting telemetry gaps. Used Nmap for discovery and enumeration and Wireshark for packet analysis, documenting commands, errors, fixes, and evidence in a lab journal.",
  },
  {
    id: "trading",
    title: "Intelligent Trading Bot",
    subtitle: "Market Analysis & Signal Engine",
    status: "In development",
    description:
      "A Python-based market analysis system for scanning market activity, evaluating technical indicators, generating transparent rule-based signals, and tracking outcomes.",
    capabilities: [
      "Market Scanning",
      "Signal Tracking",
      "Outcome Analysis",
      "Backtesting",
    ],
    tools: [
      "Python",
      "Conda",
      "Alpaca Market Data",
      "TA-Lib",
      "scikit-learn",
      "LightGBM",
      "TensorFlow/Keras",
    ],
    pipeline: [
      "Market Data",
      "Indicators",
      "Signal Engine",
      "Buy / Watch / Hold / Sell",
      "Performance Analysis",
    ],
    detail:
      "The indicator workflow includes RSI, MACD, moving averages, ATR, volume analysis, and relative volume. BUY, WATCH, HOLD, and SELL signals support transparent outcome analysis and backtesting.",
  },
];
export const labs = [
  {
    title: "Hack The Box & TryHackMe Labs",
    category: "Practice",
    status: "Self-directed · Ongoing",
    metric: "Authorized lab environments",
    description: "Using the attacker’s view to inform detection and defense.",
    tools: ["Nmap/NSE", "Burp Suite", "Metasploit", "Hashcat", "John"],
    details: [
      "Completed multiple authorized labs covering enumeration, web security, and password auditing.",
      "Practiced SMB enumeration, DNS zone-transfer analysis, and SQL injection concepts in controlled lab environments.",
    ],
  },
  {
    title: "Security Monitoring & Detection",
    category: "Monitoring",
    status: "Academic project · 2026",
    metric: "03 dashboards · 10+ queries",
    description: "From authentication events to actionable detections.",
    tools: ["Elastic Stack", "KQL", "MITRE ATT&CK"],
    details: [
      "Built 3 Elastic Stack SIEM dashboards and 10+ KQL detection queries.",
      "Developed and tested detections for brute-force logins (MITRE T1110), repeated authentication failures, and anomalous user behavior.",
      "Performed SOC-style alert triage and log correlation across hundreds of simulated events, mapping findings to MITRE ATT&CK.",
    ],
  },
  {
    title: "Network Security Monitoring & Detection",
    category: "Monitoring",
    status: "Academic project · 2026",
    metric: "20+ simulated hosts · 500+ packets",
    description: "Understanding the network, one packet at a time.",
    tools: ["Nmap", "Zenmap", "Wireshark", "Snort", "TCP/IP", "DNS", "HTTP"],
    details: [
      "Performed reconnaissance and service enumeration across 20+ simulated hosts.",
      "Analyzed 500+ TCP, UDP, DNS, and HTTP packets for abnormal patterns.",
      "Created and tested 50+ Snort IDS rules.",
    ],
  },
  {
    title: "Threat Intelligence & Attack Lifecycle Analysis",
    category: "Analysis",
    status: "Academic project · 2025",
    metric: "10+ indicators of compromise",
    description: "Connecting individual indicators to the bigger picture.",
    tools: ["MITRE ATT&CK", "STIX", "TAXII", "Soltra Edge"],
    details: [
      "Modeled the 7-phase Cyber Kill Chain and created 10+ Indicators of Compromise.",
      "Mapped attacker TTPs to MITRE ATT&CK.",
      "Used STIX/TAXII with Soltra Edge for structured intelligence sharing.",
    ],
  },
  {
    title: "Malware Analysis & Memory Forensics",
    category: "Analysis",
    status: "Academic project · 2025",
    metric: "1–2 GB memory images · 20+ processes",
    description: "Investigating the artifacts left in memory.",
    tools: ["Volatility", "pslist", "pstree", "netscan", "malfind"],
    details: [
      "Investigated 20+ processes in 1–2 GB memory images.",
      "Analyzed process trees, network connections, and possible process injection.",
      "Investigated persistence mechanisms and hidden connections.",
    ],
  },
];
export const skills = [
  [
    "Authorized lab practice",
    ["Metasploit", "Burp Suite", "Hashcat", "John", "Nmap/NSE"],
  ],
  [
    "Defensive security",
    [
      "Wazuh",
      "Elastic Stack",
      "KQL",
      "Sysmon",
      "Windows Event Logs",
      "Detection Engineering",
      "Incident Investigation",
      "MITRE ATT&CK",
    ],
  ],
  [
    "Network security",
    [
      "Wireshark",
      "Nmap",
      "Zenmap",
      "Snort",
      "TCP/IP",
      "DNS",
      "HTTP",
      "ICMP",
      "ARP",
      "DHCP",
      "NAT",
    ],
  ],
  [
    "Security analysis",
    [
      "Threat Intelligence",
      "Memory Forensics",
      "Volatility",
      "STIX/TAXII",
      "Cyber Kill Chain",
      "Soltra Edge",
      "IOC Analysis",
    ],
  ],
  [
    "Development",
    [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "FastAPI",
      "SQL",
      "C/C++",
      "Git",
      "GitHub",
    ],
  ],
  [
    "Systems & data",
    [
      "Linux",
      "Windows",
      "VMware",
      "scikit-learn",
      "LightGBM",
      "TensorFlow/Keras",
    ],
  ],
];
export const activity = [
  [
    "Active",
    "Enterprise SOC Home Lab",
    "Telemetry validation & event investigation",
  ],
  [
    "Improving",
    "TrustTrace AI",
    "Detection quality and false-positive reduction",
  ],
  ["Building", "Trading Signal Engine", "Backtesting and outcome analysis"],
  ["Learning", "Cisco CyberOps Associate", "200-201 CBROPS · In progress"],
];
export const roadmaps = [
  {
    title: "Automated Network Vulnerability Assessment Platform",
    status: "Building / coming soon",
    steps: [
      "Host Discovery",
      "Port Scanning",
      "Service Identification",
      "Security Findings",
      "Vulnerability Analysis",
      "Risk Prioritization",
      "Remediation",
      "Reporting",
    ],
  },
  {
    title: "Detection Engineering & Threat Hunting Lab",
    status: "Planned",
    steps: [
      "Security Events",
      "Detection Rules",
      "Alert Tuning",
      "Threat Hunting",
      "ATT&CK Mapping",
      "Investigation",
    ],
  },
];
export const learning = [
  [
    "CompTIA Security+",
    "In preparation",
    [
      "Security Operations",
      "Threats & Vulnerabilities",
      "Security Architecture",
      "IAM",
      "Risk Management",
      "Incident Response",
      "Governance",
    ],
  ],
  [
    "Cisco CyberOps Associate (200-201 CBROPS)",
    "In progress",
    [
      "SOC Operations",
      "Security Monitoring",
      "Network Intrusion Analysis",
      "Incident Investigation",
      "Alert Handling",
      "Threat Analysis",
    ],
  ],
  [
    "AWS Cloud & Security Fundamentals",
    "Learning",
    [
      "Cloud Architecture",
      "IAM",
      "Networking",
      "Cloud Security",
      "Shared Responsibility",
      "Secure Cloud Configuration",
    ],
  ],
];
export const achievements = [
  {
    title: "Dean’s List — Three Consecutive Semesters",
    label: "3×",
    subtitle: "CONSECUTIVE SEMESTERS",
    description:
      "Recognized on the University of South Florida Dean’s List for three consecutive semesters, reflecting sustained academic achievement.",
    tags: ["Fall 2024", "Spring 2025", "Fall 2025"],
  },
  {
    title: "Green & Gold Presidential Scholarship",
    label: "USF",
    subtitle: "ACADEMIC RECOGNITION",
    description:
      "Awarded the University of South Florida Green & Gold Presidential Scholarship in recognition of academic achievement.",
    tags: ["University of South Florida"],
  },
];
