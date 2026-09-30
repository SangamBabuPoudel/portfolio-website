import { skills } from "../data/portfolio";
import { Section, Tags } from "./UI";
export default function Skills() {
  return (
    <Section
      id="skills"
      number="06"
      eyebrow="Tools of the trade"
      title="A practical security toolkit."
    >
      {skills.map(([title, items], i) => (
        <div className="skill-row" key={title}>
          <h3>
            <span>0{i + 1}</span>
            {title}
          </h3>
          <Tags items={items} />
        </div>
      ))}
    </Section>
  );
}
