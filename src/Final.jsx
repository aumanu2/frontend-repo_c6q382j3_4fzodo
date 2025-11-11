import { useEffect, useState } from 'react'
import Header from './components/Header'
import GlitchFrame from './components/GlitchFrame'
import Transmission from './components/Transmission'
import AccessPanel from './components/AccessPanel'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Final() {
  const [revealed, setRevealed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const ok = localStorage.getItem('inferno_step2') === 'true'
    if (!ok) navigate('/second')
  }, [navigate])

  function handleSuccess() {
    setRevealed(true)
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(251,146,60,0.12),transparent_40%)]" />
      <Header />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <Transmission title="The Final Revelation" subtitle="Redemption sleeps beneath cold earth. Follow cinder to the horizon where mercy dies." />
        </div>
        <GlitchFrame>
          <AccessPanel
            clueTitle="Clue 3 – Echoes of the Architect"
            clueText={`They called it extinction. He called it renewal. From charred soil one word remained — carved by those who refused to die.`}
            promptLabel="Enter Access Word"
            correctAnswer="REVENANT"
            revealFragment="OPE"
            onSuccess={handleSuccess}
            nextCta={null}
          />
        </GlitchFrame>

        <AnimatePresence>
          {revealed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10">
              <div className="relative overflow-hidden rounded-xl border border-white/10 p-10 bg-gradient-to-br from-black via-black to-red-950/30">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(600px_200px_at_50%_-10%,rgba(239,68,68,0.35),transparent), radial-gradient(400px_150px_at_70%_120%,rgba(251,146,60,0.35),transparent)' }} />
                <motion.h3 className="text-center text-4xl sm:text-6xl font-extrabold tracking-widest"
                  initial={{ letterSpacing: '0.2em', textShadow: '0 0 0 rgba(255,0,0,0)' }}
                  animate={{ letterSpacing: '0.35em', textShadow: '0 0 24px rgba(255,80,80,0.8)' }}
                  transition={{ duration: 1.2 }}
                >
                  EUROPE
                </motion.h3>
                <motion.p className="mt-4 text-center text-white/80"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  The Architect’s shadow falls upon Europe. The Inferno begins where the old world once rose.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
