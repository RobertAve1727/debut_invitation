import Hero from "./Hero";
import Details from "./Details";
import Footer from "./Footer";
import "./InvitationContent.css";

type Step = "hero" | "details";

interface InvitationContentProps {
  isRevealed: boolean;
  step: Step;
  onSeeDetails: () => void;
}

/** The main invitation body, revealed once the envelope has finished
 *  opening. Shows the Hero as a standalone full screen first, then
 *  swaps to the scrollable Details + Footer screen once the visitor
 *  taps "See details". */
export default function InvitationContent({
  isRevealed,
  step,
  onSeeDetails,
}: InvitationContentProps) {
  return (
    <div
      className={`invitation-content ${isRevealed ? "invitation-content--revealed" : ""}`}
    >
      {step === "hero" && (
        <div className="invitation-content__hero-stage">
          <Hero onSeeDetails={onSeeDetails} />
        </div>
      )}

      {step === "details" && (
        <div className="invitation-content__details-stage">
          <div className="floral-band" />
          <Details />
          <Footer />
        </div>
      )}
    </div>
  );
}
