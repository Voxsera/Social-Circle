import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.span
          className="contact__script"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s build
        </motion.span>
        <motion.h2
          className="contact__title display"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Something <span className="stroke">cool</span>
          <br />
          together.
        </motion.h2>
        <motion.a
          className="contact__mail"
          href="mailto:hello@socialsircle.in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span className="contact__mail-pill">hello@socialsircle.in</span>
        </motion.a>
        <p className="contact__meta">Goa · Hyderabad · Everywhere your audience scrolls</p>
      </div>
    </section>
  )
}
