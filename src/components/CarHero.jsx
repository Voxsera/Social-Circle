import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
  Scroll-scrubbed cinematic hero — frame-sequence + canvas ("Apple" technique).
  All frames are preloaded as images; scrolling picks the frame index and draws
  it to a <canvas>. This scrubs perfectly smoothly with no video-seek stutter.
*/
const FRAME_COUNT = 118
const frameUrl = (i) => `/frames/frame-${String(i + 1).padStart(3, '0')}.jpg`

export default function CarHero() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([]) // Image objects
  const loadedRef = useRef([]) // per-frame loaded flags
  const lastDrawnRef = useRef(-1)
  const [ready, setReady] = useState(false)
  const [loadPct, setLoadPct] = useState(0)

  // Progress across the whole tall section: 0 at top, 1 when scrolled through.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // ---- Preload every frame ----
  useEffect(() => {
    let loaded = 0
    const imgs = new Array(FRAME_COUNT)
    const flags = new Array(FRAME_COUNT).fill(false)
    imagesRef.current = imgs
    loadedRef.current = flags

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.decoding = 'async'
      img.src = frameUrl(i)
      img.onload = () => {
        flags[i] = true
        loaded++
        setLoadPct(Math.round((loaded / FRAME_COUNT) * 100))
        if (i === 0) {
          setReady(true)
          drawFrame(0)
        }
      }
      imgs[i] = img
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ---- Canvas sizing (crisp on HiDPI, redraw current frame on resize) ----
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      const idx = lastDrawnRef.current < 0 ? 0 : lastDrawnRef.current
      lastDrawnRef.current = -1 // force redraw
      drawFrame(idx)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => ro.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Draw frame `index` (cover-fit). Falls back to nearest already-loaded frame.
  function drawFrame(index) {
    const canvas = canvasRef.current
    if (!canvas) return
    const flags = loadedRef.current
    const imgs = imagesRef.current
    let i = Math.max(0, Math.min(FRAME_COUNT - 1, index))
    if (!flags[i]) {
      // fall back to the closest earlier loaded frame so we never blank out
      let j = i
      while (j >= 0 && !flags[j]) j--
      if (j < 0) return
      i = j
    }
    if (i === lastDrawnRef.current) return
    const img = imgs[i]
    if (!img || !img.width) return
    const ctx = canvas.getContext('2d')
    const cw = canvas.width
    const ch = canvas.height
    const ir = img.width / img.height
    const cr = cw / ch
    let dw, dh, dx, dy
    if (ir > cr) {
      dh = ch
      dw = ch * ir
      dx = (cw - dw) / 2
      dy = 0
    } else {
      dw = cw
      dh = cw / ir
      dx = 0
      dy = (ch - dh) / 2
    }
    ctx.drawImage(img, dx, dy, dw, dh)
    lastDrawnRef.current = i
  }

  // ---- Drive the frame index from scroll every animation frame ----
  useEffect(() => {
    let raf
    const tick = () => {
      const p = scrollYProgress.get()
      const index = Math.round(p * (FRAME_COUNT - 1))
      drawFrame(index)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress])

  // Subtle cinematic push-in on the footage across the whole scroll.
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0])

  // Overlay fade windows (in section-progress space).
  const o1 = useTransform(scrollYProgress, [0.0, 0.15, 0.22], [1, 1, 0])
  const y1 = useTransform(scrollYProgress, [0.0, 0.22], [0, -40])
  const o2 = useTransform(scrollYProgress, [0.28, 0.36, 0.46, 0.54], [0, 1, 1, 0])
  const y2 = useTransform(scrollYProgress, [0.28, 0.54], [40, -40])
  const o3 = useTransform(scrollYProgress, [0.56, 0.64, 0.74, 0.82], [0, 1, 1, 0])
  const y3 = useTransform(scrollYProgress, [0.56, 0.82], [40, -40])
  const o4 = useTransform(scrollYProgress, [0.85, 0.93, 1, 1], [0, 1, 1, 1])
  const y4 = useTransform(scrollYProgress, [0.85, 1], [40, 0])

  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  return (
    <header className="car-hero" id="top" ref={sectionRef}>
      <div className="car-hero__sticky">
        <motion.div className="car-hero__canvas-wrap" style={{ scale: canvasScale }}>
          <canvas
            ref={canvasRef}
            className="car-hero__canvas"
            style={{ opacity: ready ? 1 : 0 }}
            aria-hidden="true"
          />
        </motion.div>

        {!ready && (
          <div className="car-hero__loading">Loading the reveal… {loadPct}%</div>
        )}

        <div className="car-hero__scrim" aria-hidden="true" />

        <div className="car-hero__stage">
          {/* Beat 1 — intro */}
          <motion.div className="car-hero__beat" style={{ opacity: o1, y: y1 }}>
            <span className="car-hero__kicker script">Allow us to reintroduce ourselves —</span>
            <h1 className="car-hero__title display">
              We put brands
              <br />
              <span className="fill-orange">in motion.</span>
            </h1>
          </motion.div>

          {/* Beat 2 */}
          <motion.div className="car-hero__beat" style={{ opacity: o2, y: y2 }}>
            <h2 className="car-hero__line display">
              From standstill
              <br />
              to <span className="stroke">scroll-stopping.</span>
            </h2>
          </motion.div>

          {/* Beat 3 */}
          <motion.div className="car-hero__beat" style={{ opacity: o3, y: y3 }}>
            <p className="car-hero__words display">
              <span>Strategy.</span> <span className="tc-orange">Story.</span>{' '}
              <span>Momentum.</span>
            </p>
          </motion.div>

          {/* Beat 4 — CTA */}
          <motion.div className="car-hero__beat" style={{ opacity: o4, y: y4 }}>
            <span className="car-hero__cta-script script">Ready to move?</span>
            <h2 className="car-hero__title display">Take the wheel.</h2>
            <div className="car-hero__actions">
              <a className="btn btn--primary" href="mailto:hello@socialsircle.in">
                Let&apos;s build something cool
              </a>
              <a className="btn btn--ghost" href="#work">
                See the stuff
              </a>
            </div>
          </motion.div>
        </div>

        <motion.span className="car-hero__scroll" style={{ opacity: hintOpacity }}>
          Scroll to drive
        </motion.span>
      </div>
    </header>
  )
}
