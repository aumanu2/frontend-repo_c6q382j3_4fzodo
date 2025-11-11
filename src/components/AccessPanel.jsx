import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Lock, AlertTriangle } from 'lucide-react'

export default function AccessPanel({ clueTitle, clueText, promptLabel, correctAnswer, onSuccess, revealFragment, nextCta }) {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | wrong | correct

  useEffect(() => {
    setValue('')
    setStatus('idle')
  }, [clueTitle])

  function handleSubmit(e) {
    e.preventDefault()
    if (!value) return
    if (value.trim().toUpperCase() === correctAnswer.toUpperCase()) {
      setStatus('correct')
      setTimeout(() => onSuccess?.(), 900)
    } else {
      setStatus('wrong')
      setTimeout(() => setStatus('idle'), 1200)
    }
  }

  return (
    <div className="p-6 sm:p-8">
      <div className="mb-4 text-white/80">
        <p className="uppercase text-[11px] tracking-[0.3em] text-red-400/80 mb-1">Classified Transmission</p>
        <h3 className="text-lg sm:text-xl font-semibold">{clueTitle}</h3>
      </div>
      <p className="text-white/70 text-sm leading-relaxed mb-6 whitespace-pre-line">{clueText}</p>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className={`flex-1 relative`}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={promptLabel}
            className={`w-full bg-black/60 border rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition ${status==='wrong'? 'border-red-500/70 ring-red-500/30': 'border-white/10 focus:ring-red-500/30'}`}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
            {status === 'idle' && <Lock size={18} />}
            {status === 'correct' && <Check className="text-green-400" size={18} />}
            {status === 'wrong' && <AlertTriangle className="text-red-400" size={18} />}
          </div>
        </div>
        <button type="submit" className="px-4 py-3 rounded-md border border-white/10 text-white hover:bg-white/10 transition">Verify</button>
      </form>
      <AnimatePresence>
        {status === 'correct' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-5 text-center">
            <p className="text-white/80 text-sm">Fragment revealed: <span className="font-mono tracking-widest text-red-400">{revealFragment}</span></p>
            {nextCta}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
