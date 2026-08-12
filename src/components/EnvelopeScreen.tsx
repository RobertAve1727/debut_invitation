import waxSealMark from "../assets/wax-seal-mark.png";
import "./EnvelopeScreen.css";

interface EnvelopeScreenProps {
  isOpening: boolean;
  isRevealed: boolean;
  onOpen: () => void;
}

/**
 * Full-screen envelope cover. Tapping the wax seal triggers the
 * opening animation; once the animation finishes the parent hides
 * this screen entirely (isRevealed becomes true).
 */
export default function EnvelopeScreen({
  isOpening,
  isRevealed,
  onOpen,
}: EnvelopeScreenProps) {
  const screenClassName = [
    "envelope-screen",
    isOpening ? "envelope-screen--opening" : "",
    isRevealed ? "envelope-screen--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={screenClassName} aria-hidden={isRevealed}>
      <p className="envelope-screen__word">You are invited!</p>
      <p className="envelope-screen__sub">A celebration awaits</p>

      <div className={`envelope ${isOpening ? "envelope--open" : ""}`}>
        <div className="envelope__body" />
        <div className="envelope__flap" />
        <button
          className="seal-button"
          onClick={onOpen}
          disabled={isOpening}
          aria-label="Open invitation"
        >
          <img
            src={waxSealMark}
            alt=""
            className="seal-button__image"
            draggable={false}
          />
        </button>
      </div>

      <p className="envelope-screen__hint">Tap the seal to open</p>
    </div>
  );
}
