import { motion } from 'framer-motion'

const cards = [
  {
    w: 'w7',
    bg: 'bg-flex',
    script: 'When the brief says',
    scriptClass: 'tc-orange',
    big: 'FLEX!',
    bigClass: 'tc-yellow',
    tag: 'Statics · Campaigns',
  },
  {
    w: 'w5',
    bg: 'bg-city',
    script: null,
    big: 'Your Marketing',
    bigClass: 'tc-cream',
    tag: 'Reels · Brand Films',
  },
  {
    w: 'w5',
    bg: 'bg-tv',
    script: 'Studio',
    scriptClass: 'tc-ink',
    big: 'Social Sircle',
    bigClass: 'tc-ink',
    tag: 'Original Audio · Retro Cuts',
  },
  {
    w: 'w7',
    bg: 'bg-buzz',
    script: 'Your brand deserves a voice.',
    scriptClass: 'tc-orange',
    big: 'Stop the fluff. Start the buzz.',
    bigClass: 'tc-cream',
    tag: 'Strategy · Storytelling',
  },
]

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section__label">The Stuff</p>
        <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', marginBottom: 56 }}>
          Made to be <span style={{ color: 'var(--orange)' }}>stared at.</span>
        </h2>
        <div className="work__grid">
          {cards.map((c, i) => (
            <motion.a
              href="https://www.instagram.com/socialsircleindia/"
              target="_blank"
              rel="noreferrer"
              className={`work-card work-card--${c.w}`}
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className={`work-card__bg ${c.bg}`} />
              <div>
                {c.script && (
                  <span className={`work-card__script ${c.scriptClass || ''}`}>{c.script}</span>
                )}
                <span className={`work-card__big display ${c.bigClass}`}>{c.big}</span>
                <p className={`work-card__tag ${c.bigClass}`}>{c.tag}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
