import EnvelopeScreen from './components/EnvelopeScreen'
import InvitationContent from './components/InvitationContent'
import { useEnvelope } from './hooks/useEnvelope'
import './App.css'

function App() {
  const { isOpening, isRevealed, open } = useEnvelope()

  return (
    <div className="stage">
      <EnvelopeScreen isOpening={isOpening} isRevealed={isRevealed} onOpen={open} />
      <InvitationContent isRevealed={isRevealed} />
    </div>
  )
}

export default App
