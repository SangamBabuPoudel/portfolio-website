import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects, { SecurityLabs } from "./components/Projects";
import Activity, { Learning } from "./components/Activity";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";
export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works without storage. */
    }
  }
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <div className="content">
          <About />
          <Projects />
          <SecurityLabs />
          <Activity />
          <Skills />
          <Education />
          <Achievements />
          <Learning />
          <Contact />
        </div>
      </main>
      <Footer />
      <EasterEgg />
    </MotionConfig>
  );
}
