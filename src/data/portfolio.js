export const profile = {
  name: "Sangam Babu Poudel",
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
      "A privacy-first Chrome security extension that analyzes URLs and browsing context for phishing, scams, fake login pages, lookalike domains, suspicious redirects, and clipboard-link risks.",
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
      "Google Search trust badges, pre-visit warning pages, and caution banners make explainable risk signals available while browsing. A Security Report Card and Clipboard Guardian complement local-first URL and domain analysis. Regression testing covers legitimate authentication and SSO redirects to reduce false positives.",
  },
  {
    id: "soc",
    title: "Enterprise SOC Home Lab",
    subtitle: "Endpoint Telemetry → Detection → Investigation",
    status: "Active build",
    description:
      "An enterprise-style SOC environment with Windows and Linux systems in VMware for security monitoring, endpoint telemetry, network analysis, and incident investigation.",
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
    stage: "Attack simulation & detection engineering",
    detail:
      "The lab connects endpoint telemetry collection with alert investigation and MITRE ATT&CK mapping. Windows and Linux virtual machines provide a hands-on environment for practicing SOC workflows and network analysis.",
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
    title: "Security Monitoring & Detection",
    metric: "03 dashboards · 10+ queries",
    description: "From authentication events to actionable detections.",
    tools: ["Elastic Stack", "KQL", "MITRE ATT&CK"],
    details: [
      "Built 3 Elastic Stack SIEM dashboards and 10+ KQL detection queries.",
      "Investigated brute-force attempts and authentication failures.",
      "Practiced SOC-style alert triage, event correlation, and ATT&CK mapping.",
    ],
  },
  {
    title: "Network Security Monitoring & Detection",
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
    ["Wireshark", "Nmap", "Zenmap", "Snort", "TCP/IP", "DNS", "HTTP", "ICMP"],
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
    "Attack simulation & detection engineering",
  ],
  [
    "Improving",
    "TrustTrace AI",
    "Detection quality and false-positive reduction",
  ],
  ["Building", "Trading Signal Engine", "Backtesting and outcome analysis"],
  ["Learning", "Security+", "Security operations and architecture"],
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
    "Cisco CyberOps Associate",
    "Planned",
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
