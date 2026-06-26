import { motion } from 'framer-motion'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

const expeditions = [
  {
    peak: 'Mt Rudragairah',
    year: '2016',
    elevation: '19,086 ft',
    image: 'https://static.wixstatic.com/media/4b485b_740e18a715034a2d9e0aad3db4fc4819~mv2.jpg',
    story: 'A first attempt that gave me learning through a tough and life-threatening failed attempt.',
    status: 'Attempted',
  },
  {
    peak: 'Mt Kanamo',
    year: '2017 | 2022',
    elevation: '19,600 ft',
    image: 'https://static.wixstatic.com/media/4b485b_e45678c78b35471998fbce8c8d9b62a9~mv2.jpg',
    story: 'My go-to peak that has been like a mother who nourishes and boosts positivity in me. She has accepted me with her open arms twice.',
    status: 'Summited',
  },
  {
    peak: 'Mt Bandarpoonch',
    year: '2018',
    elevation: '20,721 ft',
    image: 'https://static.wixstatic.com/media/4b485b_cf11b4dbe4d84b0d91fe5b9e7bec25c5~mv2.jpg',
    story: 'One first technical peak I attempted and successfully climbed.',
    status: 'Summited',
  },
  {
    peak: 'Mt Satopanth',
    year: '2022',
    elevation: '7,075 m / 23,300 ft',
    image: 'https://static.wixstatic.com/media/4b485b_2d11496bb9584fc1ad53cc6137f8f87e~mv2.jpg',
    story: 'A life-changing expedition which got me back to all my senses through rejecting me first and accepting me with tough lessons.',
    status: 'Summited',
  },
  {
    peak: 'Mt Nun',
    year: '2023',
    elevation: '7,135 m',
    image: 'https://static.wixstatic.com/media/4b485b_626b77affa204a54b09c97710fed0459~mv2.jpg',
    story: 'An unsuccessful attempt to climb this peak has been a life learning.',
    status: 'Attempted',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function PreviousExpeditions() {
  return (
    <>
      <section style={{ padding: '140px 24px 100px', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <p className="section-label">Expeditions</p>
            <h1 className="section-title" style={{ textAlign: 'center' }}>
              Previous expeditions
            </h1>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              My previous summits and the stories around them.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 28,
            }}
          >
            {expeditions.map((exp) => (
              <motion.article
                key={exp.peak}
                variants={cardVariants}
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  transition: 'box-shadow 0.4s ease, transform 0.4s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />
                  <img
                    src={exp.image}
                    alt={exp.peak}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                </div>
                <div style={{ padding: '24px 28px 28px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {exp.year} &middot; {exp.elevation}
                    </span>
                    <span
                      style={{
                        padding: '4px 14px',
                        borderRadius: 9999,
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        background: exp.status === 'Summited' ? 'var(--gold)' : 'var(--border)',
                        color: exp.status === 'Summited' ? '#fff' : 'var(--text-muted)',
                      }}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {exp.peak}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {exp.story}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Sponsors />

      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <ContactForm />
      </section>
      <style>{`
        @media (max-width: 768px) {
          section:first-of-type > div > div:last-child { grid-template-columns: 1fr !important; gap: 16px !important; }
          section:first-of-type > div > div:last-child > article > div:last-child { padding: 18px 20px 22px !important; }
        }
      `}</style>
    </>
  )
}
