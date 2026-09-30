import { profile } from "../data/portfolio";
import { ExternalLink } from "./UI";
export default function Footer() {
  return (
    <footer>
      <div>
        <a href="#home" className="wordmark">
          sangam<span>.dev</span>_
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
      <div>
        <span>Built with React & Tailwind CSS</span>
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
