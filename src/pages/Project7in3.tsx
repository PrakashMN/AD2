import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

const sevenSummits = [
  { name: 'Mt Everest', continent: 'Asia', elevation: '8,848m', image: 'https://images.unsplash.com/photo-1778003586047-69c68f764af5?w=800&q=80&auto=format&fit=crop', target: '2026', description: 'The world\'s highest peak, standing at 8,848m on the Nepal-Tibet border. A legendary climb that demands technical skill, endurance, and favorable weather.' },
  { name: 'Aconcagua', continent: 'South America', elevation: '6,961m', image: 'https://imgs.search.brave.com/LM9ZeR9OisPiqaDomDWURIyfYYxKNTDKXUyzy9At2QU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pYW50/YXlsb3J0cmVra2lu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDMvU3Vt/bWl0LW5pZ2h0LW9u/LUFjb25jYWd1YS0x/MDI0eDc2OC5qcGc', target: '2026', description: 'The highest peak outside Asia, located in the Argentine Andes. Known as the "Stone Sentinel" — a challenging but non-technical high-altitude trek.' },
  { name: 'Denali', continent: 'North America', elevation: '6,190m', image: 'https://images.unsplash.com/photo-1604180989431-aa4e1ab13847?w=800&q=80&auto=format&fit=crop', target: '2027', description: 'Formerly Mt McKinley, this Alaskan giant has the greatest topographic prominence of any peak in North America. Extreme weather and severe cold make it one of the toughest.' },
  { name: 'Kilimanjaro', continent: 'Africa', elevation: '5,895m', image: 'https://images.unsplash.com/photo-1716404214250-8d34f6b0bc24?w=800&q=80&auto=format&fit=crop', target: '2025', description: 'The "Roof of Africa" — a dormant stratovolcano in Tanzania. A non-technical climb through five distinct climate zones, from jungle to glacial summit.' },
  { name: 'Elbrus', continent: 'Europe', elevation: '5,642m', image: 'https://images.unsplash.com/photo-1638627081025-0aa25b68c4af?w=800&q=80&auto=format&fit=crop', target: '2026', description: 'A dormant volcano in the Caucasus Range, Russia. Despite being Europe\'s highest, its relatively straightforward routes make it a popular high-altitude objective.' },
  { name: 'Vinson Massif', continent: 'Antarctica', elevation: '4,892m', image: 'https://images.unsplash.com/photo-1582501929835-c004cf990e10?w=800&q=80&auto=format&fit=crop', target: '2027', description: 'The Antarctic summit — remote, isolated, and brutally cold. Only a few hundred climbers have reached its top, making it the least-climbed of the Seven Summits.' },
  { name: 'Carstensz Pyramid', continent: 'Oceania', elevation: '4,884m', image: 'https://imgs.search.brave.com/fXbUZlBnHTg3yw6DdBndB6vJlWtKYYto8TROpHZg47g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZHZl/bnR1cmVjb25zdWx0/YW50cy5jb20vdXBs/b2Fkcy9SZXN0LW9m/LXRoZS1Xb3JsZC9D/YXJzdGVuc3otUHly/YW1pZC9DYXJzdGVu/c3otdG93ZXJlcy1v/bi1yaWRnZS1TTC5q/cGc', target: '2027', description: 'The highest island peak on Earth, located in the Indonesian jungle. A technical rock climb through remote terrain, requiring both climbing and expedition skills.' },
]

export default function Project7in3() {
  const [activeBg, setActiveBg] = useState(sevenSummits[0].image)
  const [activePeak, setActivePeak] = useState<string | null>(sevenSummits[0].name)
  const cardsRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentIndexRef = useRef(0)

  const active = sevenSummits.find((p) => p.name === activePeak) || sevenSummits[0]

  const scrollToIndex = (index: number) => {
    const container = cardsRef.current
    if (!container) return
    const isMobile = window.innerWidth <= 768
    const scrollStep = isMobile ? 212 : 210
    container.scrollTo({ [isMobile ? 'left' : 'top']: index * scrollStep, behavior: 'smooth' } as any)
    const peak = sevenSummits[index]
    currentIndexRef.current = index
    setActiveBg(peak.image)
    setActivePeak(peak.name)
  }

  const stopAutoScroll = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const scheduleNext = () => {
    stopAutoScroll()
    timerRef.current = setTimeout(() => {
      const nextIndex = (currentIndexRef.current + 1) % sevenSummits.length
      scrollToIndex(nextIndex)
      scheduleNext()
    }, 3000)
  }

  useEffect(() => {
    const idx = sevenSummits.findIndex((p) => p.name === activePeak)
    if (idx >= 0) {
      currentIndexRef.current = idx
      scrollToIndex(idx)
    }
    scheduleNext()
    return () => stopAutoScroll()
  }, [])

  return (
    <>
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px 24px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${activeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            transition: 'background-image 0.6s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.55) 100%)',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center' }}>
          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 48,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div style={{ maxWidth: 640, minWidth: 0 }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  marginBottom: 12,
                }}
              >
                Project 7 in 3
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#fff',
                  padding: '5px 14px',
                  borderRadius: 9999,
                  background: 'rgba(59,130,246,0.25)',
                  border: '1px solid rgba(59,130,246,0.4)',
                  marginBottom: 14,
                  backdropFilter: 'blur(4px)',
                }}
              >
                The seven highest summits of the world
              </motion.p>

              <motion.h1
                key={active.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  marginBottom: 20,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                }}
              >
                {active.name}
                <br />
                <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}>
                  {active.elevation} &middot; {active.continent}
                </span>
              </motion.h1>

              <motion.p
                key={active.description}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: 28,
                  textShadow: '0 1px 8px rgba(0,0,0,0.5)',
                }}
              >
                {active.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href="#summits"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '15px 36px',
                    borderRadius: 9999,
                    background: 'var(--accent)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    border: 'none',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent-hover)'
                    e.currentTarget.style.transform = 'scale(1.04)'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--accent)'
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Explore the Summits
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            </div>

            <div
              ref={cardsRef}
              className="hero-cards"
              onMouseEnter={stopAutoScroll}
              onMouseLeave={scheduleNext}
              style={{
                overflowY: 'auto',
                maxHeight: '68vh',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <style>{`.hero-cards::-webkit-scrollbar { display: none; }`}</style>
              {sevenSummits.map((peak) => (
                <div
                  key={peak.name}
                  onClick={() => { setActiveBg(peak.image); setActivePeak(peak.name) }}
                  onMouseEnter={() => { setActiveBg(peak.image); setActivePeak(peak.name) }}
                  style={{
                    flexShrink: 0,
                    width: activePeak === peak.name ? 320 : 260,
                    height: activePeak === peak.name ? 240 : 200,
                    borderRadius: 14,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    border: activePeak === peak.name ? '2px solid var(--accent)' : '2px solid rgba(255,255,255,0.12)',
                    transition: 'border-color 0.25s ease, width 0.25s ease, height 0.25s ease',
                  }}
                >
                  <img
                    src={peak.image}
                    alt={peak.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: 6,
                    left: 10,
                    right: 10,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: '#fff',
                    textShadow: '0 1px 6px rgba(0,0,0,0.7)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {peak.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 48 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                marginBottom: 0,
              }}
            >
              About the Project
            </h2>
            <div
              style={{
                width: 60,
                height: 4,
                borderRadius: 2,
                background: 'var(--accent)',
                margin: '12px auto 0',
              }}
            />
          </motion.div>
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
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                Project 7 in 3 is an audacious mission to stand atop the highest peak on every continent — the Seven Summits — within just three years. It is a test of human endurance, mental fortitude, and an unrelenting commitment to the mountains.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.9,
                }}
              >
                From the frozen extremes of Antarctica to the technical limestone of Oceania, each climb presents a unique set of challenges across vastly different climates, terrains, and altitudes. This journey is about more than summits — it is a mission to push boundaries, inspire a new generation of adventurers, and prove that with grit and determination, the impossible becomes possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <img
                src="/Images/Bandarpoonch/New%20one.jpeg"
                alt="Highest summits infographic"
                style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: 500, display: 'block' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'var(--card-bg)' }}>
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
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: 20,
                  letterSpacing: '-0.01em',
                }}
              >
                Fastest man in the world to climb Seven Summits
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                I have successfully climbed Mt. Kanamo (19,600ft), Mt Bandarpoonch (20,721ft),
                and Mt Satopanth (23,300ft), and attempted Mt Nun (7,135m). I have been on various
                treks in Nepal and the Indian Himalayas.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.9,
                }}
              >
                Mountains mesmerize me and climbing them became my life's goal. Climbing mountains
                is not just a sport — it is the entire gist of human life: to feel overwhelmed,
                humbled, and then to take one step at a time, to overcome all odds, find strength
                within, to reach the summit, and to feel the closest to nature.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
            >
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
                src="https://static.wixstatic.com/media/4b485b_c3cb3d4f699d42fba4c09a825233b544~mv2.jpg"
                alt="Seven Summits map"
                style={{ width: '100%', display: 'block' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="summits" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <p className="section-label">The Challenge</p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.01em',
                marginBottom: 12,
              }}
            >
              The Seven Summits
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto' }}>
              The highest peak on each continent, targeted within three years
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
            {sevenSummits.map((peak, i) => (
              <motion.div
                key={peak.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  borderRadius: 16,
                  overflow: 'hidden',
                  width: 300,
                  height: 360,
                  cursor: 'pointer',
                  border: '1px solid var(--border)',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget.querySelector('[data-img]')
                  if (el) (el as HTMLElement).style.transform = 'scale(1.06)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget.querySelector('[data-img]')
                  if (el) (el as HTMLElement).style.transform = 'scale(1)'
                }}
              >
                <img
                  data-img
                  src={peak.image}
                  alt={peak.name}
                  loading="lazy"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                  zIndex: 1,
                }} />
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  zIndex: 2,
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.9rem', fontWeight: 700, color: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
                }}>{i + 1}</div>
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  zIndex: 2,
                  padding: '4px 12px',
                  borderRadius: 9999,
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(4px)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent)',
                  letterSpacing: '0.06em',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>{peak.target}</div>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: 24,
                  zIndex: 2,
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem', fontWeight: 700, color: '#fff',
                    marginBottom: 4,
                  }}>{peak.name}</h3>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.03em',
                  }}>
                    <span>{peak.elevation}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
                    <span>{peak.continent}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Sponsors />

      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <ContactForm />
      </section>
      <style>{`
        @media (max-width: 768px) {
          section:nth-of-type(2) > div > div,
          section:nth-of-type(3) > div > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          section:nth-of-type(4) > div > div > div { width: 100% !important; height: 300px !important; }
          .hero-layout { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hero-cards { overflow-x: auto !important; overflow-y: hidden !important; flex-direction: row !important; max-height: none !important; padding: 16px 12px !important; gap: 12px !important; background: rgba(0,0,0,0.35) !important; backdrop-filter: blur(8px) !important; -webkit-backdrop-filter: blur(8px) !important; border-radius: 16px !important; }
          .hero-cards > div { width: 200px !important; height: 150px !important; }
          section:first-of-type .hero-layout > div:first-child p { line-height: 1.5 !important; word-spacing: -0.03em !important; }
          section:nth-of-type(2) > div > div > div:first-child p,
          section:nth-of-type(3) > div > div > div:first-child p { line-height: 1.6 !important; word-spacing: -0.03em !important; }
        }
      `}</style>
    </>
  )
}
