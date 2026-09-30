import {
  FiArrowUpRight,
  FiShield,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";
import { projects, labs } from "../data/portfolio";
import { Section, Tags, Pipeline, ExternalLink } from "./UI";
function ProjectVisual({ project }) {
  if (project.id === "trusttrace")
    return (
      <div className="browser-mock">
        <div className="browser-top">
          <span className="window-dots" aria-hidden="true">
            ● ● ●
          </span>
          <span>TrustTrace AI / browser protection</span>
          <FiShield />
        </div>
        <div className="browser-body">
          <div className="mock-label">ILLUSTRATIVE INTERFACE</div>
          <div className="trust-brand">
            <FiShield /> TrustTrace<span>AI</span>
          </div>
          <div className="analysis-card">
            <span className="status-dot" />
            <div>
              <strong>
                Understand the link.
                <br />
                Before you follow it.
              </strong>
              <p>Local-first analysis. Explainable signals.</p>
            </div>
          </div>
          <div className="signal-row">
            <span>URL & domain analysis</span>
            <span>LOCAL</span>
          </div>
          <div className="signal-row">
            <span>Suspicious redirect detection</span>
            <span>CONTEXT</span>
          </div>
          <div className="signal-row">
            <span>Clipboard Guardian</span>
            <span>PROTECT</span>
          </div>
          <div className="mock-footer">
            <FiShield /> Your browsing. Your privacy.
          </div>
        </div>
      </div>
    );
  return (
    <div className={`project-diagram ${project.id}`}>
      <span className="mock-label">
        {project.id === "soc" ? "LAB ARCHITECTURE" : "SIGNAL WORKFLOW"}
      </span>
      {project.id === "soc" ? (
        <FiActivity className="diagram-icon" />
      ) : (
        <FiTrendingUp className="diagram-icon" />
      )}
      <Pipeline steps={project.pipeline} />
      {project.stage && (
        <div className="current-stage">
          <span>CURRENT STAGE</span>
          <p>{project.stage}</p>
        </div>
      )}
    </div>
  );
}
export default function Projects() {
  return (
    <Section
      id="projects"
      number="02"
      eyebrow="Selected work"
      title="Built to solve. Designed to defend."
      description="Security-focused software, practical infrastructure, and systems that turn data into decisions."
    >
      <div className="featured-projects">
        {projects.map((project, i) => (
          <article
            key={project.id}
            id={project.id}
            className={`featured-project ${project.id}`}
          >
            <div className="project-info">
              <div className="project-top">
                <span className="eyebrow">PROJECT / 0{i + 1}</span>
                <span className={`status ${i === 0 ? "published" : ""}`}>
                  <span className="status-dot" />
                  {project.status}
                </span>
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Tags items={project.capabilities} />
              {project.url && (
                <ExternalLink
                  href={project.url}
                  className="button primary project-store-link"
                >
                  {project.linkLabel || "Open project"}
                </ExternalLink>
              )}
              <details className="project-details">
                <summary>
                  {i === 0
                    ? "View Project"
                    : i === 1
                      ? "Explore Lab"
                      : "Explore Project"}{" "}
                  <FiArrowUpRight />
                </summary>
                <div>
                  <p>{project.detail}</p>
                  <p className="eyebrow">Technology</p>
                  <Tags items={project.tools} />
                  {project.github && (
                    <ExternalLink href={project.github}>GitHub</ExternalLink>
                  )}
                  {project.caseStudy && (
                    <ExternalLink href={project.caseStudy}>
                      Case study
                    </ExternalLink>
                  )}
                  {project.documentation && (
                    <ExternalLink href={project.documentation}>
                      Documentation
                    </ExternalLink>
                  )}
                </div>
              </details>
            </div>
            <ProjectVisual project={project} />
            {i === 0 && (
              <div className="flagship-pipeline">
                <Pipeline steps={project.pipeline} />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
export function SecurityLabs() {
  return (
    <Section
      id="labs"
      number="03"
      eyebrow="Learn by investigating"
      title="Security Labs"
      description="Hands-on academic work. Real tools, controlled environments, and a focus on the investigation."
    >
      <div className="lab-grid">
        {labs.map((lab, i) => (
          <article className="lab-card" key={lab.title}>
            <div className="lab-top">
              <span>LAB / 0{i + 1}</span>
              <span>ACADEMIC PROJECT</span>
            </div>
            <h3>{lab.title}</h3>
            <p>{lab.description}</p>
            <p className="lab-metric">{lab.metric}</p>
            <Tags items={lab.tools} />
            <details>
              <summary>
                View Details <span>+</span>
              </summary>
              <ul>
                {lab.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </Section>
  );
}
