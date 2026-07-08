import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { target: 70, suffix: '+', label: 'Campaigns shipped' },
  { target: 3, suffix: 'M+', label: 'Eyeballs stopped' },
  { target: 2, suffix: '', label: 'Cities — Goa & Hyd' },
  { target: 100, suffix: '%', label: 'Fluff-free content' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((s) => (
          <div className="stats__cell" key={s.label}>
            <div className="stats__num">
              <Counter target={s.target} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
