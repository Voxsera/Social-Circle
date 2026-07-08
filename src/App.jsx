import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Preloader from './components/Preloader.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import CarHero from './components/CarHero.jsx'
import Marquee from './components/Marquee.jsx'
import Manifesto from './components/Manifesto.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="grain">
      <Cursor />
      <motion.div className="progress-bar" style={{ scaleX: progress }} aria-hidden="true" />
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>
      <Nav />
      <main>
        <CarHero />
        <Marquee
          items={['Scroll-Stopping', 'Memorable', 'Legendary', 'Bold', 'Unstoppable']}
        />
        <Manifesto />
        <Stats />
        <Services />
        <Marquee
          tilt
          items={['Stop the fluff', 'Start the buzz', 'Your brand deserves a voice']}
        />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
