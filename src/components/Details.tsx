import ShirtIcon from './icons/ShirtIcon'
import DressIcon from './icons/DressIcon'
import { colorPalette, eventDetails } from '../data/eventDetails'
import './Details.css'

/** Attire guidance and the event color palette. RSVP form is intentionally omitted for now. */
export default function Details() {
  return (
    <section className="details" id="details">
      <h2 className="details__title">The Details</h2>

      <p className="details__attire-eyebrow">Attire</p>
      <p className="details__attire-line">{eventDetails.attire}</p>

      <div className="details__garments">
        <ShirtIcon />
        <DressIcon />
      </div>

      <p className="details__palette-label">Color Palette</p>
      <div className="details__palette">
        {colorPalette.map((color) => (
          <span
            key={color.name}
            className="details__swatch"
            style={{ background: color.hex }}
            title={color.name}
          />
        ))}
      </div>

      <p className="details__closing">{eventDetails.closingNote}</p>
    </section>
  )
}
