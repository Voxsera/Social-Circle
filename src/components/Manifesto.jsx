import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const words = [
  { t: 'We are', script: true },
  { t: 'Social Sircle' },
  { t: 'and we create some stuff online.' },
  { t: 'Stuff that is' },
  { t: 'scroll-stopping.', hl: true },
  { t: 'Stuff that is' },
  { t: 'memorable.', hl: true },
  { t: 'Stuff that is' },
  { t: 'legendary.', hl: true },
]

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section__label">The Reintroduction</p>
        <p className="manifesto__text" ref={ref}>
          {words.map((w, i) => (
            <motion.span
              key={i}
              className={`manifesto__word ${w.script ? 'manifesto__word--script' : ''} ${
                w.hl ? 'manifesto__word--hl' : ''
              }`}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
            >
              {w.t}
            </motion.span>
          ))}
        </p>
        <motion.p
          className="manifesto__footer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: words.length * 0.12 + 0.2, duration: 0.6 }}
        >
          Let&apos;s build something cool together — hit us up on{' '}
          <a className="manifesto__mail" href="mailto:hello@socialsircle.in">
            hello@socialsircle.in
          </a>
        </motion.p>
      </div>
    </section>
  )
}
