import { useState } from "react";
import { FiCopy, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { ExternalLink, Section } from "./UI";
export default function Contact() {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Email copied to clipboard.");
    } catch {
      setMessage(
        "Please select and copy the email address, or use the email link.",
      );
    }
  }
  return (
    <Section
      id="contact"
      number="10"
      eyebrow="Let’s connect"
      title={
        <>
          Let’s Build
          <br />
          Something <span className="accent">Secure.</span>
        </>
      }
      className="contact-section"
    >
      <div className="contact-layout">
        <p>
          I’m seeking internship opportunities in IT and cybersecurity. Have a
          project, an opportunity, or an interesting security problem? Let’s
          talk.
        </p>
        <div>
          <div className="email-row">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <FiArrowUpRight />
            </a>
            <button
              className="icon-button"
              onClick={copy}
              aria-label="Copy email address"
            >
              <FiCopy />
            </button>
          </div>
          <p className="copy-message" role="status">
            {message}
          </p>
          <div className="contact-links">
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href="/resume.pdf">View Resume</ExternalLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
