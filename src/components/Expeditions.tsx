import { motion } from 'framer-motion'

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
    image: '/Images/Nun/brightened_mountain_photo.jpg',
    story: 'An unsuccessful attempt to climb this peak has been a life learning.',
    status: 'Attempted',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
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

export default function Expeditions() {
  return (
    <section id="expeditions" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 60, maxWidth: 500 }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
            Expeditions
          </p>
          <h2 className="section-title">
            Previous expeditions
          </h2>
          <p className="section-sub">
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
            gap: 20,
          }}
        >
          {expeditions.map((exp) => (
            <motion.article
              key={exp.peak}
              variants={cardVariants}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid #333',
                background: '#1a1a1a',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease, border-color 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#333'
              }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
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
              <div style={{ padding: '16px 20px 20px' }}>
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
                    color: '#bbb',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M12 2L2 22h20L12 2z" />
                    <path d="M12 8l-5 14h10L12 8z" />
                  </svg>
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
                    background: exp.status === 'Summited' ? 'var(--gold)' : '#333',
                    color: exp.status === 'Summited' ? '#fff' : '#bbb',
                    }}
                  >
                    {exp.status}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: 10,
                    color: '#f0f0f0',
                  }}
                >
                  {exp.peak}
                </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      lineHeight: 1.7,
                      color: '#bbb',
                    }}
                  >
                    {exp.story}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #expeditions > div > div:first-of-type { margin-bottom: 36px !important; }
          #expeditions > div > div:first-of-type > h2 { font-size: clamp(1.5rem, 5vw, 1.8rem) !important; }
          #expeditions > div > div:last-child { grid-template-columns: 1fr !important; gap: 16px !important; }
          #expeditions > div > div:last-child > article > div:last-child { padding: 16px 18px 20px !important; }
          #expeditions > div > div:last-child > article > div:last-child > h3 { font-size: 1.15rem !important; }
          #expeditions > div > div:last-child > article > div:last-child > p { font-size: 0.8rem !important; }
        }
      `}</style>
    </section>
  )
}
