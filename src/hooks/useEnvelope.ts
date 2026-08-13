import { useState } from "react";

/** How long (ms) the opening animation runs before the envelope
 *  is unmounted and the invitation is revealed. Keep in sync with
 *  the CSS transition durations in EnvelopeScreen.css. */
const OPEN_ANIMATION_MS = 950;

interface UseEnvelopeResult {
  isOpening: boolean;
  isRevealed: boolean;
  open: () => void;
}

export function useEnvelope(): UseEnvelopeResult {
  const [isOpening, setIsOpening] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const open = () => {
    if (isOpening || isRevealed) return;
    setIsOpening(true);
    window.setTimeout(() => setIsRevealed(true), OPEN_ANIMATION_MS);
  };

  return { isOpening, isRevealed, open };
}
