import { useEffect, useState } from "react";
import EnvelopeScreen from "./components/EnvelopeScreen";
import InvitationContent from "./components/InvitationContent";
import { useEnvelope } from "./hooks/useEnvelope";
import "./App.css";

type Step = "hero" | "details";

function App() {
  const { isOpening, isRevealed, open } = useEnvelope();
  const [step, setStep] = useState<Step>("hero");

  // Page only scrolls once we're on the Details screen. The envelope
  // and Hero screens are each locked to a single full view.
  useEffect(() => {
    document.body.style.overflow =
      isRevealed && step === "details" ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isRevealed, step]);

  return (
    <div className="stage">
      <EnvelopeScreen
        isOpening={isOpening}
        isRevealed={isRevealed}
        onOpen={open}
      />
      <InvitationContent
        isRevealed={isRevealed}
        step={step}
        onSeeDetails={() => setStep("details")}
      />
    </div>
  );
}

export default App;
