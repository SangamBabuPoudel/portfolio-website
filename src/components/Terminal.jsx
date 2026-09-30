import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
const responses = {
  help: "Available commands: help, whoami, skills, projects, status, clear, exit",
  whoami: "Sangam Babu Poudel · Cybersecurity student at USF",
  skills:
    "SOC Operations · Detection Engineering · Network Security · Security Development · Threat Analysis",
  projects: "TrustTrace AI · Enterprise SOC Home Lab · Intelligent Trading Bot",
  status: "Building. Learning. Investigating.",
};
const initialLines = [
  "$ whoami",
  "Sangam Babu Poudel",
  "$ cat interests.txt",
  "SOC Operations · Detection Engineering",
  "Network Security · Security Development · Threat Analysis",
  "$ status",
  "Building. Learning. Investigating.",
];
export default function Terminal({ overlay = false, onExit }) {
  const [lines, setLines] = useState(
    overlay
      ? ["ACCESS GRANTED", "Welcome, analyst. Type help to explore."]
      : [],
  );
  const [input, setInput] = useState("");
  const ref = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (overlay) return;
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let i = 0;
        const next = () => {
          setLines(initialLines.slice(0, ++i));
          if (i < initialLines.length)
            timer = setTimeout(next, reduced ? 0 : 220);
        };
        next();
      },
      { threshold: 0.25 },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [overlay, reduced]);
  function submit(e) {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") setLines([]);
    else if (command === "exit" && onExit) onExit();
    else
      setLines((current) =>
        [
          ...current,
          `$ ${input}`,
          responses[command] ||
            (command === "exit"
              ? "Session stays open. Keep exploring."
              : "Command not found. Type help for available commands."),
        ].slice(-30),
      );
    setInput("");
  }
  return (
    <div className="terminal" ref={ref}>
      <div className="terminal-bar">
        <span className="window-dots" aria-hidden="true">
          ● ● ●
        </span>
        <span>sangam@portfolio: ~</span>
        <span>zsh</span>
      </div>
      <div className="terminal-body">
        <div
          className="terminal-output"
          tabIndex="0"
          role="region"
          aria-label="Terminal output"
        >
          {lines.map((line, i) => (
            <div
              key={`${i}-${line}`}
              className={line.startsWith("$") ? "command" : ""}
            >
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={submit}>
          <label htmlFor={overlay ? "overlay-command" : "terminal-command"}>
            <span aria-hidden="true">$</span>
            <span className="sr-only">Terminal command</span>
          </label>
          <input
            id={overlay ? "overlay-command" : "terminal-command"}
            autoComplete="off"
            spellCheck="false"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type help to explore…"
            maxLength={120}
          />
          <button type="submit" aria-label="Run command">
            ↵
          </button>
        </form>
      </div>
    </div>
  );
}
