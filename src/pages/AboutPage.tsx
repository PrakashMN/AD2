import { motion } from 'framer-motion'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

export default function AboutPage() {
  return (
    <>
      <section style={{ padding: '140px 24px 100px', background: 'var(--bg)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'start',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="section-label">About Me</p>
              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
                Its all about{' '}
                <span className="accent-italic">trying</span>
              </h1>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  color: 'var(--text-muted)',
                }}
              >
                <p style={{ marginBottom: 24 }}>
                  A proud native of Belagavi, where I have spent my formative years. Although I pursued a
                  diploma in computer science, I chose a different path for my career. Presently, I am actively
                  engaged in a rural and women development program focused on skill development and sustainability
                  initiatives.
                </p>
                <p style={{ marginBottom: 24 }}>
                  Working closely with a group of vulnerable human,I specialize in designing natural fiber
                  products. However, my passion lies in the great outdoors. It all began at the age of 20 when
                  I had the opportunity to participate in a rock climbing training program. Since then, I have
                  embarked on a thrilling journey in the outdoor world.
                </p>
                <p style={{ marginBottom: 24 }}>
                  My training in rock climbing and aero sports took place at GETHNAA — an esteemed state-run
                  academy for outdoor sports. Additionally, I underwent mountaineering training at NIM, an Indian
                  government-run institute renowned for training civilians and defense personnel in mountaineering.
                </p>
                <p style={{ marginBottom: 24 }}>
                  Driven by my passion, I have ventured into icy mountain landscapes, challenging myself to reach
                  higher summits. Among my notable achievements, I have attempted and successfully climbed Mt.
                  Rudragairah (19,086 ft.), Mt. Kanamo (19,600 ft.), Mt. Bandarpoonch (20,721 ft.), and Mt.
                  Satopanth (7,075 m) & have attempted to climb Mt. Nun (7,135 m) in the Greater Himalayas of
                  Jammu & Kashmir.
                </p>
                <p>
                  However, my aspirations do not end here. I have set my sights on new dreams — climbing
                  Mt. Everest (8,848 m) and other 8,000m peaks, and hoisting the tricolor on those summits.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <div
                style={{
                  borderRadius: 18,
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  marginBottom: 40,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 18,
                    border: '1px solid rgba(255,255,255,0.08)',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />
                <img
                  src="https://static.wixstatic.com/media/4b485b_e8cb667134224872829fb2c035eda729~mv2.jpg"
                  alt="Akshay Deshpande portrait"
                  style={{ width: '100%', height: 420, objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: 16,
                  padding: '32px 36px',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: 18,
                  }}
                >
                  Certifications
                </h3>
                <ul
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 2.2,
                    paddingLeft: 20,
                    listStyle: 'none',
                  }}
                >
                  <li style={{ position: 'relative', paddingLeft: 16 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&mdash;</span>
                    Basic Rock Climbing Course
                  </li>
                  <li style={{ position: 'relative', paddingLeft: 16 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&mdash;</span>
                    Advanced Rock Climbing Course
                  </li>
                  <li style={{ position: 'relative', paddingLeft: 16 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&mdash;</span>
                    Basic Mountaineering Course (NIM)
                  </li>
                  <li style={{ position: 'relative', paddingLeft: 16 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&mdash;</span>
                    Basic Parasailing Course
                  </li>
                </ul>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginTop: 28,
                    marginBottom: 18,
                  }}
                >
                  Qualifications
                </h3>
                <ul
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 2.2,
                    paddingLeft: 20,
                    listStyle: 'none',
                  }}
                >
                  <li style={{ position: 'relative', paddingLeft: 16 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&mdash;</span>
                    Diploma in Computer Science
                  </li>
                  <li style={{ position: 'relative', paddingLeft: 16 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&mdash;</span>
                    Basic Mountaineering Course
                  </li>
                </ul>
              </div>
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
          section:first-of-type > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          section:first-of-type > div > div > div:first-child > h1 { font-size: clamp(2rem, 8vw, 2.5rem) !important; }
          section:first-of-type > div > div > div:first-child > div p { line-height: 1.6 !important; word-spacing: -0.03em !important; }
          section:first-of-type > div > div > div:last-child ul { line-height: 1.8 !important; }
        }
      `}</style>
    </>
  )
}
