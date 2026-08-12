import { eventDetails } from '../data/eventDetails'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      {eventDetails.celebrantPossessive} {eventDetails.age}
      {'th'} Birthday &middot; {eventDetails.month} {eventDetails.date}
    </footer>
  )
}
