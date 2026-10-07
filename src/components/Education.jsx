import { Section } from "./UI";
import Languages from "./Languages";
export default function Education() {
  return (
    <Section
      id="experience"
      number="07"
      eyebrow="The path so far"
      title="Experience & Education"
      description="An academic foundation, strengthened through independent building and hands-on investigation."
    >
      <div className="timeline">
        <article id="education">
          <span className="timeline-date">EXPECTED MAY 2028</span>
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h3>University of South Florida</h3>
            <p>BS in Computer & Information Systems Security · GPA: 3.77</p>
            <p>
              Coursework: Network Security, Threat Intelligence, Malware
              Analysis, Digital Forensics, Intrusion Detection Systems, and
              Penetration Testing.
            </p>
            <p>
              Judy Genshaft Honors College · Green & Gold Presidential Scholar
            </p>
          </div>
        </article>
        <article>
          <span className="timeline-date">FALL 2024 – FALL 2025</span>
          <div>
            <p className="eyebrow">ACADEMIC MILESTONE</p>
            <h3>Three consecutive Dean’s List semesters</h3>
            <p>Fall 2024 · Spring 2025 · Fall 2025</p>
          </div>
        </article>
        <article>
          <span className="timeline-date">2026 – PRESENT</span>
          <div>
            <p className="eyebrow">PERSONAL PROJECT</p>
            <h3>Security Operations Home Lab</h3>
            <p>
              Validated Wazuh/Sysmon endpoint telemetry and investigated Event
              ID 7040, tracing a BITS service change from the endpoint log to
              the SIEM.
            </p>
            <a className="text-link" href="#soc">
              Explore the investigation context ↗
            </a>
          </div>
        </article>
        <article>
          <span className="timeline-date">RELEASED SEPTEMBER 2026</span>
          <div>
            <p className="eyebrow">INDEPENDENT PROJECTS</p>
            <h3>Building across security and software</h3>
            <p>
              TrustTrace AI is published. The Enterprise SOC Home Lab is an
              active build, and the Intelligent Trading Bot is in development.
            </p>
            <a href="#projects" className="text-link">
              Explore the projects ↗
            </a>
          </div>
        </article>
      </div>
      <Languages />
    </Section>
  );
}
