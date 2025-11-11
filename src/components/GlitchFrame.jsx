import { motion } from 'framer-motion'

export default function GlitchFrame({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative border border-white/10 bg-black/60 backdrop-blur-lg rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#ef4444_0,transparent_40%),radial-gradient(circle_at_80%_80%,#fb923c_0,transparent_40%)]" />
      <div className="absolute inset-0 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)' }} />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
