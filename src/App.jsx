import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import GlitchFrame from './components/GlitchFrame'
import Transmission from './components/Transmission'
import AccessPanel from './components/AccessPanel'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    // Reset gating on first visit
    if (!localStorage.getItem('inferno_initialized')) {
      localStorage.setItem('inferno_step1', 'false')
      localStorage.setItem('inferno_step2', 'false')
      localStorage.setItem('inferno_initialized', 'true')
    }
  }, [])

  function handleSuccess() {
    localStorage.setItem('inferno_step1', 'true')
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(251,146,60,0.12),transparent_40%)]" />

      <Header />

      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <Transmission title="The First Fracture" subtitle="Humanity forgot how to heal. So I will remind them through fire." />
        </div>

        <GlitchFrame>
          <AccessPanel
            clueTitle="Clue 1: Ashes of Faith"
            clueText={`He burned the world not from hate, but from belief, belief that from ruin, the pure may rise again.\nOnly the creature that devours its own death knows the path forward.`}
            promptLabel="Enter Access Word"
            correctAnswer="PHOENIX"
            revealFragment="EU"
            onSuccess={handleSuccess}
            nextCta={<button onClick={() => navigate('/second')} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 hover:bg-white/10">Proceed to Next Fragment</button>}
          />
        </GlitchFrame>
      </main>
    </div>
  )
}
