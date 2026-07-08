import { motion } from 'framer-motion'

export default function Marquee({ items, tilt = false }) {
  const row = (
    <>
      {items.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          <span className="marquee__dot" />
        </span>
      ))}
    </>
  )

  return (
    <div className={`marquee ${tilt ? 'marquee--tilt' : ''}`} aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: tilt ? 18 : 26, ease: 'linear', repeat: Infinity }}
      >
        <div style={{ display: 'flex', gap: 48 }}>{row}</div>
        <div style={{ display: 'flex', gap: 48 }}>{row}</div>
      </motion.div>
    </div>
  )
}
