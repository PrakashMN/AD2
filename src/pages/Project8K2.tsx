import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

export default function Project8K2() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 180])

  return (
    <>
      <section
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px 48px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/Images/Bandarpoonch/IMG_20180424_171927.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            y: bgY,
            scale: 1.1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.45) 100%)',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--accent)',
              marginBottom: 12,
            }}
          >
            ✦ Project 8K×2 ✦
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 14,
              letterSpacing: '-0.02em',
              color: '#fff',
              maxWidth: 600,
              textShadow: '0 2px 16px rgba(0,0,0,0.5)',
            }}
          >
            One Expedition.
            <br />
            <span style={{ fontStyle: 'italic', color: '#8ec8e8', textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>Two Giants.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.6,
              maxWidth: 500,
              marginBottom: 36,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            An ambitious expedition to summit both Mt Everest{' '}
            <span style={{ color: '#8ec8e8', fontWeight: 600 }}>8,848m</span> and
            Mt Lhotse <span style={{ color: '#a8d8ea', fontWeight: 600 }}>8,516m</span> — the{' '}
            <span style={{ color: '#8ec8e8', fontWeight: 600 }}>world's highest</span> and{' '}
            <span style={{ color: '#a8d8ea', fontWeight: 600 }}>fourth-highest</span> peaks
            — in a single climbing season.
          </motion.p>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <motion.div variants={slideLeft}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 14,
                    padding: '20px 24px 18px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    width: 240,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: 'var(--accent)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    8,848
                    <span style={{ fontSize: '0.85rem', marginLeft: 4, color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>m</span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.6)',
                      marginTop: 6,
                    }}
                  >
                    Mt Everest
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      marginTop: 4,
                      letterSpacing: '0.05em',
                    }}
                  >
                    Highest Peak on Earth
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={slideRight}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 14,
                    padding: '20px 24px 18px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    width: 240,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: '#7ec8e3',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    8,516
                    <span style={{ fontSize: '0.85rem', marginLeft: 4, color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>m</span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.6)',
                      marginTop: 6,
                    }}
                  >
                    Mt Lhotse
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      color: '#7ec8e3',
                      marginTop: 4,
                      letterSpacing: '0.05em',
                    }}
                  >
                    Fourth Highest Peak
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ textAlign: 'left', marginTop: 48 }}
          >
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 36px',
                  borderRadius: 9999,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  border: 'none',
                  textDecoration: 'none',
                  boxShadow: '0 6px 28px rgba(59,130,246,0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-hover)'
                  e.currentTarget.style.transform = 'scale(1.04)'
                  e.currentTarget.style.boxShadow = '0 8px 36px rgba(59,130,246,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(59,130,246,0.25)'
                }}
              >
                Contact Me
              </Link>
              <Link
                to="/previous-expeditions"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 36px',
                  borderRadius: 9999,
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                }}
              >
                View Previous Expeditions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--card-bg)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.08)',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />
                <img
                  src="https://static.wixstatic.com/media/4b485b_22646fd3f63b49be80ae5ad5db4056b7~mv2.jpg/v1/fill/w_984,h_639,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b485b_22646fd3f63b49be80ae5ad5db4056b7~mv2.jpg"
                  alt="Everest region"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: 20,
                  letterSpacing: '-0.01em',
                }}
              >
                Why two peaks in one season?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Everest and Lhotse share the same base camp and lower routes, making a combined
                ascent logistically feasible — yet only a handful of climbers have ever accomplished
                this feat. The challenge lies in the rapid turnaround: summit Everest, descend, rest
                briefly, then push for Lhotse.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                This expedition represents the first major milestone in a broader vision to climb
                multiple 8,000m peaks and inspire a new generation of Indian mountaineers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Sponsors />

      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <ContactForm />
      </section>
      <style>{`
        @media (max-width: 768px) {
          section:nth-of-type(2) > div > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          section:first-of-type .container > div:nth-of-type(3) { justify-content: center !important; }
        }
      `}</style>
    </>
  )
}
