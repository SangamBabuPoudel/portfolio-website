import { Section } from "./UI";
import Terminal from "./Terminal";
export default function About() {
  return (
    <Section
      id="about"
      number="01"
      eyebrow="Behind the work"
      title="Curious by nature. Defensive by design."
    >
      <div className="about-grid">
        <div>
          <div className="profile-row">
            <img
              src="/profile-thumb.jpg"
              alt="Sangam Babu Poudel"
              width="80"
              height="80"
              loading="lazy"
            />
            <div>
              <strong>Sangam Babu Poudel</strong>
              <span>Cybersecurity student · USF</span>
            </div>
          </div>
          <p>
            I’m pursuing a BS in Computer & Information Systems Security at the
            University of South Florida, with an expected graduation in May 2028
            and a 3.77 GPA.
          </p>
          <p>
            Based in Tampa, I learn by building, investigating, and asking why.
            I’ve validated a Wazuh/Sysmon telemetry pipeline, investigated
            Windows service changes, and published a privacy-first
            phishing-detection extension. My academic work spans SIEM
            detections, Snort rules, threat intelligence, and memory forensics.
          </p>
          <p>
            I’m seeking a SOC / Security Analyst internship where I can
            contribute, keep learning, and turn strong technical foundations
            into practical security work.
          </p>
          <a href="#experience" className="text-link">
            More about my background ↗
          </a>
        </div>
        <Terminal />
      </div>
    </Section>
  );
}
