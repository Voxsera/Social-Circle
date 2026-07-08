import { motion, useScroll, useTransform } from 'framer-motion'

const lineAnim = {
  hidden: { y: 48, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 2.35 + i * 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { scrollY } = useScroll()
  const sunY = useTransform(scrollY, [0, 800], [0, 220])
  const sunScale = useTransform(scrollY, [0, 800], [1, 1.25])

  return (
    <header className="hero" id="top">
      <motion.div
        className="hero__sun"
        style={{ y: sunY, scale: sunScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.92 }}
        transition={{ delay: 2.2, duration: 1.1, ease: 'easeOut' }}
      />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__content">
        <motion.span
          className="hero__kicker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.6 }}
        >
          Allow us to reintroduce ourselves —
        </motion.span>

        <h1 className="hero__title display">
          <span className="hero__row">
            <motion.span
              style={{ display: 'inline-block' }}
              custom={0}
              variants={lineAnim}
              initial="hidden"
              animate="show"
            >
              We make
            </motion.span>
          </span>
          <span className="hero__row">
            <motion.span
              style={{ display: 'inline-block' }}
              custom={1}
              variants={lineAnim}
              initial="hidden"
              animate="show"
            >
              <span className="fill-orange">scroll-stopping</span>
            </motion.span>
          </span>
          <span className="hero__row">
            <motion.span
              style={{ display: 'inline-block' }}
              custom={2}
              variants={lineAnim}
              initial="hidden"
              animate="show"
            >
              <span className="stroke">stuff online.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7 }}
        >
          Social Sircle is a social media marketing agency crafting bold and
          meaningful brands out of Goa &amp; Hyderabad. Strategy, storytelling,
          and content that converts.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.05, duration: 0.7 }}
        >
          <a className="btn btn--primary" href="mailto:hello@socialsircle.in">
            Let&apos;s build something cool
          </a>
          <a className="btn btn--ghost" href="#work">
            See the stuff
          </a>
          <span className="hero__sticker">★ Goa · Hyderabad ★</span>
        </motion.div>
      </div>

      <motion.span
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
      >
        Scroll — if you can stop staring
      </motion.span>
    </header>
  )
}
