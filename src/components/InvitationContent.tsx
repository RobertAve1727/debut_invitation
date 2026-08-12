import Hero from './Hero'
import Details from './Details'
import Footer from './Footer'
import './InvitationContent.css'

interface InvitationContentProps {
  isRevealed: boolean
}

/** The main invitation body, revealed once the envelope has finished opening. */
export default function InvitationContent({ isRevealed }: InvitationContentProps) {
  return (
    <div className={`invitation-content ${isRevealed ? 'invitation-content--revealed' : ''}`}>
      <Hero />
      <div className="floral-band" />
      <Details />
      <Footer />
    </div>
  )
}
