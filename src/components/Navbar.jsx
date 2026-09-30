import { useEffect, useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
const links = [
  "Home",
  "About",
  "Projects",
  "Labs",
  "Experience",
  "Achievements",
  "Learning",
  "Contact",
];
export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - innerHeight;
      setProgress(height ? scrollY / height : 0);
      const current = links
        .map((x) => document.getElementById(x.toLowerCase()))
        .filter(Boolean)
        .filter((x) => x.getBoundingClientRect().top <= 160)
        .at(-1);
      setActive(current?.id || "home");
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);
  return (
    <header className={`site-header ${progress > 0.005 ? "scrolled" : ""}`}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="nav-wrap">
        <a href="#home" className="wordmark" aria-label="Sangam home">
          sangam<span>.dev</span>
          <span className="wordmark-cursor">_</span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle").focus();
            }
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              aria-current={
                active === link.toLowerCase() ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
