import { useId, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

export function Section({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  const reduced = useReducedMotion();
  return (
    <Motion.section
      id={id}
      className={`section ${className}`}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>{number} /</span> {eyebrow}
          </p>
          <h2>{title}</h2>
        </div>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </Motion.section>
  );
}
export function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
export function Pipeline({ steps }) {
  return (
    <ol className="pipeline" aria-label="Workflow">
      {steps.map((step, i) => (
        <li key={step}>
          <span className="pipeline-number">
            {String(i + 1).padStart(2, "0")}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}
export function ExternalLink({ href, children, className = "" }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

export function Expandable({ label, children, className = "" }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`expandable ${className}`} data-open={open}>
      <button
        className="expandable-trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label}
        <span aria-hidden="true">+</span>
      </button>
      <div
        id={id}
        className="expandable-panel"
        inert={!open}
        aria-hidden={!open}
      >
        <div>
          <div className="expandable-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
