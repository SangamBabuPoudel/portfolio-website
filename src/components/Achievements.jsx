import { achievements } from "../data/portfolio";
import { Section, Tags } from "./UI";
export default function Achievements() {
  return (
    <Section
      id="achievements"
      number="08"
      eyebrow="Consistency, recognized"
      title="Academic Achievements"
    >
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article key={item.title}>
            <div className="award-mark">
              {item.label}
              <span>{item.subtitle}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Tags items={item.tags} />
          </article>
        ))}
      </div>
      <div className="additional-achievements">
        <span>Judy Genshaft Honors College Student</span>
        <span>Top 1% National Academic Performance — NEB Examination</span>
      </div>
    </Section>
  );
}
