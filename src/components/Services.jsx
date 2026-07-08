import { motion } from 'framer-motion'

const services = [
  {
    name: 'Social Media Marketing',
    desc: 'Platform-native campaigns that turn scrollers into followers, and followers into fans.',
  },
  {
    name: 'Content Creation',
    desc: 'Reels, statics, carousels — creative content built to be shared, saved, and screenshotted.',
  },
  {
    name: 'Content That Converts',
    desc: 'Pretty is nice. Performing is better. Every post pulls its weight toward your goals.',
  },
  {
    name: 'Storytelling',
    desc: 'We are storytellers first. Your brand gets a voice people actually want to listen to.',
  },
  {
    name: 'Strategy',
    desc: 'Positioning, calendars, launches — a roadmap before the rocket. No guesswork.',
  },
  {
    name: 'Brand Building',
    desc: 'Crafting bold and meaningful brands that stay memorable long after the scroll.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section__label">What we do</p>
        <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', marginBottom: 56 }}>
          Stop the fluff. <span className="script" style={{ fontSize: '0.9em' }}>Start the buzz.</span>
        </h2>
      </div>
      <div className="container">
        {services.map((s, i) => (
          <motion.div
            className="service"
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: 'easeOut' }}
          >
            <div className="service__fill" />
            <div className="service__inner">
              <span className="service__num">/{String(i + 1).padStart(2, '0')}</span>
              <h3 className="service__name">{s.name}</h3>
              <p className="service__desc">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
