import { useEffect } from 'react'
import Header from './components/Header'
import GlitchFrame from './components/GlitchFrame'
import Transmission from './components/Transmission'
import AccessPanel from './components/AccessPanel'
import { useNavigate } from 'react-router-dom'

export default function Second() {
  const navigate = useNavigate()

  useEffect(() => {
    // guard route if first fragment not unlocked
    const ok = localStorage.getItem('inferno_step1') === 'true'
    if (!ok) {
      navigate('/')
    }
  }, [navigate])

  function handleSuccess() {
    localStorage.setItem('inferno_step2', 'true')
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(251,146,60,0.12),transparent_40%)]" />
      <Header />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <Transmission title="The Second Circle" subtitle="What begins in purity always ends in plague." />
        </div>
        <GlitchFrame>
          <AccessPanel
            clueTitle="Clue 2: Cycle of Sins"
            clueText={`Nine rings. Nine falls. Each collapse births the same whisper: Rise, if you dare.\nThe answer is life returned, not newly born.`}
            promptLabel="Enter Access Word"
            correctAnswer="RESURGE"
            revealFragment="R"
            onSuccess={handleSuccess}
            nextCta={<button onClick={() => navigate('/final')} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 hover:bg-white/10">Proceed to Final Fragment</button>}
          />
        </GlitchFrame>
      </main>
    </div>
  )
}
