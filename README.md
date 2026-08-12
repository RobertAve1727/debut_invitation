# Kreiza's 18th Birthday Party — Invitation

A React + Vite + TypeScript digital invitation with an animated wax-seal
envelope intro.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.tsx                    Entry point, mounts <App />
  App.tsx / App.css           Root component, phone-card "stage" wrapper
  index.css                   Global design tokens (colors, fonts) + resets

  data/
    eventDetails.ts           Single source of truth for names, date, venue, colors

  hooks/
    useEnvelope.ts            Envelope open/reveal state + scroll lock

  components/
    EnvelopeScreen.tsx/.css   Wax-seal envelope cover + opening animation
    InvitationContent.tsx/.css  Wrapper that fades in Hero + Details + Footer
    Hero.tsx/.css             Title, date, time, venue, "See details" link
    Details.tsx/.css          Attire guidance + color palette
    Footer.tsx/.css           Closing footer line

    icons/
      Butterfly.tsx           Decorative butterfly (reused, color props)
      SealMark.tsx            Bow imprint inside the wax seal button
      Silhouette.tsx          Gown silhouette illustration
      RibbonDivider.tsx       Small bow divider under the hero title
      ShirtIcon.tsx           Line-art shirt icon
      DressIcon.tsx           Line-art dress icon
```

## Notes

- The RSVP form from the original design was intentionally left out — ask
  for it whenever you're ready to add it.
- Edit `src/data/eventDetails.ts` to change the name, date, time, venue,
  attire note, or color palette — every component reads from there.
- Fonts (Beau Rivage, Cormorant Garamond, Cinzel) are loaded from Google
  Fonts in `index.html`.
