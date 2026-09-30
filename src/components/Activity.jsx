import { activity, roadmaps, learning } from "../data/portfolio";
import { Section, Tags } from "./UI";
export default function Activity() {
  return (
    <>
      <Section
        id="now"
        number="04"
        eyebrow="In the workspace"
        title="What I’m Working On"
      >
        <div className="activity-grid">
          {activity.map(([status, title, detail]) => (
            <article key={title}>
              <p className="eyebrow">
                <span className="status-dot" />
                {status}
              </p>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="building"
        number="05"
        eyebrow="The next iteration"
        title="Currently Building"
        description="A look at what comes next. Planned milestones, without invented progress percentages."
      >
        <div className="roadmap-grid">
          {roadmaps.map((project) => (
            <article className="roadmap" key={project.title}>
              <span className="status">{project.status}</span>
              <h3>{project.title}</h3>
              <ol>
                {project.steps.map((step) => (
                  <li key={step}>
                    <span>{step}</span>
                    <small>PLANNED</small>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
export function Learning() {
  return (
    <Section
      id="learning"
      number="09"
      eyebrow="Always a student"
      title="Currently Learning"
      description="Study paths in progress — these are not earned certifications."
    >
      <div className="learning-grid">
        {learning.map(([title, status, focus]) => (
          <article key={title}>
            <span className="status">{status}</span>
            <h3>{title}</h3>
            <Tags items={focus} />
          </article>
        ))}
      </div>
      <div className="writeups">
        <div>
          <p className="eyebrow">FIELD NOTES / COMING SOON</p>
          <h3>Technical write-ups, from the workbench.</h3>
          <p>
            Future notes on SOC investigations, detection engineering, network
            analysis, security development, and lab work.
          </p>
        </div>
        <span aria-hidden="true">[ … ]</span>
      </div>
    </Section>
  );
}
