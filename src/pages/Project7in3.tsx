import { motion } from 'framer-motion'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

const sevenSummits = [
  { name: 'Mt Everest', continent: 'Asia', elevation: '8,848m' },
  { name: 'Aconcagua', continent: 'South America', elevation: '6,961m' },
  { name: 'Denali', continent: 'North America', elevation: '6,190m' },
  { name: 'Kilimanjaro', continent: 'Africa', elevation: '5,895m' },
  { name: 'Elbrus', continent: 'Europe', elevation: '5,642m' },
  { name: 'Vinson Massif', continent: 'Antarctica', elevation: '4,892m' },
  { name: 'Carstensz Pyramid', continent: 'Oceania', elevation: '4,884m' },
]

export default function Project7in3() {
  return (
    <>
      <section
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px 48px',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label"
            style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 12 }}
          >
            Project 7 in 3
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: 16,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            Seven Summits.
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Three Years.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: 560,
              margin: '0 auto 32px',
            }}
          >
            The ultimate challenge — climbing the highest peak on each of the seven continents
            within three years. Aiming to become the{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>fastest Indian</span> to complete
            the Seven Summits grand slam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a
              href="#summits"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 36px',
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Explore the Summits
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
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

      <section id="summits" style={{ padding: '100px 24px', background: 'var(--card-bg)' }}>
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
              }}
            >
              The Seven Summits
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {sevenSummits.map((peak, i) => (
              <motion.div
                key={peak.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  background: 'var(--card-bg)',
                  borderRadius: 14,
                  padding: '20px 28px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: i === 0 ? 'var(--accent)' : 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: i === 0 ? '#fff' : 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: 2,
                    }}
                  >
                    {peak.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {peak.continent}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {peak.elevation}
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
          section:nth-of-type(3) > div > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  )
}
