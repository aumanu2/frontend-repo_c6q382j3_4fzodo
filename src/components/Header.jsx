import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const { pathname } = useLocation()
  const [unlocked, setUnlocked] = useState({ s1: false, s2: false })

  useEffect(() => {
    const s1 = localStorage.getItem('inferno_step1') === 'true'
    const s2 = localStorage.getItem('inferno_step2') === 'true'
    setUnlocked({ s1, s2 })
    const onStorage = () => {
      const n1 = localStorage.getItem('inferno_step1') === 'true'
      const n2 = localStorage.getItem('inferno_step2') === 'true'
      setUnlocked({ s1: n1, s2: n2 })
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const steps = [
    { path: '/', label: 'Fragment I', allowed: true },
    { path: '/second', label: 'Fragment II', allowed: unlocked.s1 },
    { path: '/final', label: 'Fragment III', allowed: unlocked.s2 },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="flex items-center gap-3">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_24px_6px_rgba(239,68,68,0.6)]" />
        <div>
          <h1 className="text-sm sm:text-base font-semibold tracking-widest text-white uppercase">Project Inferno: The Architect’s Code</h1>
          <p className="text-[10px] sm:text-xs text-white/70">Decode the ashes. Reveal the origin.</p>
        </div>
      </div>
      <nav className="hidden sm:flex items-center gap-2 text-xs text-white/70">
        {steps.map((s) => (
          s.allowed ? (
            <Link key={s.path} to={s.path} className={`px-3 py-1 rounded border ${pathname===s.path? 'border-red-500 text-white':'border-white/10 hover:border-white/30'}`}>
              {s.label}
            </Link>
          ) : (
            <span key={s.path} className="px-3 py-1 rounded border border-white/5 text-white/30 cursor-not-allowed select-none">{s.label}</span>
          )
        ))}
      </nav>
    </header>
  )
}
