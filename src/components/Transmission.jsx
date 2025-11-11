import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Transmission({ title, subtitle }) {
  return (
    <div className="relative h-[40vh] sm:h-[55vh] w-full rounded-xl overflow-hidden border border-white/10">
      <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-6 left-6 right-6 text-white"
      >
        <h2 className="text-xl sm:text-2xl font-semibold tracking-widest uppercase">{title}</h2>
        <p className="text-sm sm:text-base text-white/80">{subtitle}</p>
      </motion.div>
    </div>
  )
}
