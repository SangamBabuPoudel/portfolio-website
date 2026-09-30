import { useEffect, useRef } from "react";
import Terminal from "./Terminal";
export default function EasterEgg() {
  const dialog = useRef(null);
  useEffect(() => {
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let index = 0;
    let previous;
    const handler = (e) => {
      if (
        /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) ||
        e.target.isContentEditable ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey
      )
        return;
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      index = key === code[index] ? index + 1 : key === code[0] ? 1 : 0;
      if (index === code.length) {
        previous = document.activeElement;
        dialog.current.showModal();
        index = 0;
      }
    };
    const restore = () => previous?.focus();
    const element = dialog.current;
    element.addEventListener("close", restore);
    addEventListener("keydown", handler);
    return () => {
      removeEventListener("keydown", handler);
      element.removeEventListener("close", restore);
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="terminal-dialog"
      aria-labelledby="secret-title"
    >
      <div className="dialog-heading">
        <h2 id="secret-title">Analyst console</h2>
        <button
          className="icon-button"
          aria-label="Close analyst console"
          onClick={() => dialog.current.close()}
        >
          ×
        </button>
      </div>
      <Terminal overlay onExit={() => dialog.current.close()} />
    </dialog>
  );
}
