import { profile } from "../data/portfolio";
import { useEffect, useRef, useState } from "react";
import {
  motion as Motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiShield,
  FiPause,
  FiPlay,
} from "react-icons/fi";
const roles = [
  "SOC Analyst",
  "Detection Engineer",
  "Security Developer",
  "Cybersecurity Student",
  "Security Researcher",
];
export default function Hero() {
  const [role, setRole] = useState(0);
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);
  const visible = useInView(ref);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 55, damping: 22 });
  const rotateX = useSpring(pointerY, { stiffness: 55, damping: 22 });
  useEffect(() => {
    if (reduced || paused || !visible) return;
    const timer = setInterval(
      () => setRole((x) => (x + 1) % roles.length),
      4000,
    );
    return () => clearInterval(timer);
  }, [reduced, paused, visible]);
  function move(e) {
    if (reduced || paused || !matchMedia("(pointer: fine)").matches) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - bounds.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - bounds.top}px`);
    pointerX.set(((e.clientX - bounds.left) / bounds.width - 0.5) * 12);
    pointerY.set(-((e.clientY - bounds.top) / bounds.height - 0.5) * 10);
  }
  return (
    <section
      id="home"
      className="hero"
      ref={ref}
      onPointerMove={move}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      data-motion={paused || reduced || !visible ? "paused" : "running"}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" /> OPEN TO CYBERSECURITY INTERNSHIPS
        </div>
        <p className="hero-name">SANGAM BABU POUDEL</p>
        <h1>
          Cybersecurity Student<span className="headline-dot"> · </span>
          <br />
          <span>
            SOC & Detection
            <br />
            Engineering
          </span>
          <span className="headline-dot"> · </span>
          <br />
          Security Development
        </h1>
        <p className="hero-copy">
          I build and investigate security systems beyond the classroom: Wazuh
          and Sysmon telemetry, SIEM detections, and a published
          phishing-defense extension. Seeking a SOC / Security Analyst
          internship.
        </p>
        <div className="hero-evidence" aria-label="Portfolio highlights">
          <a href="#experience">
            <strong>3.77</strong>
            <span>GPA · USF</span>
          </a>
          <a href="#soc">
            <strong>Wazuh + Sysmon</strong>
            <span>Validated telemetry</span>
          </a>
          <a href="#trusttrace">
            <strong>TrustTrace AI</strong>
            <span>Published · Sep 2026</span>
          </a>
        </div>
        <div className="hero-buttons">
          <a className="button primary" href="#projects">
            View Projects <FiArrowUpRight />
          </a>
          <a className="button" href="#contact">
            Contact Me <FiArrowUpRight />
          </a>
          <a
            className="text-link"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            View Resume ↗
          </a>
        </div>
        <div className="role-line">
          <span aria-hidden="true">&gt;_</span>
          <span className="sr-only">
            Areas of interest: SOC analysis, detection engineering, security
            development, and research.
          </span>
          <span key={role} className="rotating-role" aria-hidden="true">
            {roles[role]}
          </span>
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
      <div className="hero-visual" aria-label="Security workflow illustration">
        <div className="visual-topline">
          <span>DEFENSE IN DEPTH</span>
          <span className="accent">● SYSTEM MINDSET</span>
        </div>
        <Motion.div
          className="orbit-scene"
          aria-hidden="true"
          style={{
            rotateX: reduced || paused ? 0 : rotateX,
            rotateY: reduced || paused ? 0 : rotateY,
          }}
        >
          <div className="signal-ring signal-ring-one" />
          <div className="signal-ring signal-ring-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-axis" />
          <div className="shield-core">
            <FiShield />
          </div>
          <span className="orbit-label label-one">01 / OBSERVE</span>
          <span className="orbit-label label-two">02 / DETECT</span>
          <span className="orbit-label label-three">03 / INVESTIGATE</span>
        </Motion.div>
        <div className="visual-bottom">
          <span>
            TELEMETRY <b>→</b> INSIGHT <b>→</b> ACTION
          </span>
          <div className="visual-controls">
            <span>SECURITY, BUILT WITH INTENT.</span>
            {!reduced && (
              <button
                className="motion-toggle"
                aria-label={
                  paused ? "Play hero animation" : "Pause hero animation"
                }
                aria-pressed={paused}
                onClick={() => {
                  setPaused(!paused);
                  pointerX.set(0);
                  pointerY.set(0);
                }}
              >
                {paused ? <FiPlay /> : <FiPause />}
                <span>{paused ? "PLAY" : "PAUSE"}</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          UNIVERSITY OF SOUTH FLORIDA{" "}
          <span className="muted">/ BS · EXPECTED 2028</span>
        </span>
        <a href="#projects">
          EXPLORE THE WORK <FiArrowDown />
        </a>
      </div>
    </section>
  );
}
