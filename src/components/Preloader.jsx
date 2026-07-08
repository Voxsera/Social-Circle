import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        className="preloader__circle"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.15, 1] }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Social Sircle
        </motion.span>
      </motion.div>
      <motion.p
        className="preloader__tag"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Crafting bold &amp; meaningful brands
      </motion.p>
    </motion.div>
  )
}
