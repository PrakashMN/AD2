import { motion } from 'framer-motion'

const sponsors = [
  { name: 'Sponsor 1', src: 'https://static.wixstatic.com/media/4b485b_bea432d724294ca8b4a4e46bad1b4bd2~mv2.png' },
  { name: 'Sponsor 2', src: 'https://static.wixstatic.com/media/4b485b_6102f1d94c6b4adaa14c544232d74b86~mv2.png' },
  { name: 'Sponsor 3', src: 'https://static.wixstatic.com/media/4b485b_8d4bfeb049134aaa8172120800fb8023~mv2.png' },
  { name: 'Sponsor 4', src: 'https://static.wixstatic.com/media/4b485b_03847c84fa974f4eba969e7dedf21606~mv2.png' },
  { name: 'Sponsor 5', src: 'https://static.wixstatic.com/media/4b485b_1e4f4a2e36e6449f96e8fc4b1ef86c7d~mv2.png' },
  { name: 'Sponsor 6', src: 'https://static.wixstatic.com/media/4b485b_20f68c3bf24f4e2391b26e36e226748d~mv2.png' },
]

const individuals = [
  { name: 'Mr Mihir Potdar'},
  { name: 'Dr. Ravi Patil', role: 'Vijaya Hospital' },
]

const fitnessPartners = [
  { name: 'Partner 1', src: 'https://static.wixstatic.com/media/4b485b_b30b5e299bb84e90b448d4dd914693ba~mv2.png' },
  { name: 'Partner 2', src: 'https://static.wixstatic.com/media/4b485b_e860086d2a55427cba8701771629cc01~mv2.png' },
]

export default function Sponsors() {
  return (
    <section
      style={{
        padding: '40px 24px',
        background: 'var(--card-bg)',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
          <span style={{ width: 24, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          My Sponsors
          <span style={{ width: 24, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
            marginBottom: 24,
          }}
        >
          {sponsors.map((s) => (
            <div
              key={s.name}
              style={{
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <img
                src={s.src}
                alt={s.name}
                style={{
                  height: 40,
                  objectFit: 'contain',
                  opacity: 1,
                  filter: 'grayscale(0)',
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          {individuals.map((p) => (
            <div key={p.name} style={{
              padding: '10px 16px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.04)',
            }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                }}
              >
                {p.name}
              </p>
              {p.role && (
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    marginTop: 2,
                    letterSpacing: '0.05em',
                  }}
                >
                  {p.role}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.55rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              marginBottom: 12,
            }}
          >
            Fitness Partner
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            {fitnessPartners.map((p) => (
              <div
                key={p.name}
                style={{
                padding: '10px 16px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.04)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <img
                  src={p.src}
                  alt={p.name}
                  style={{
                    height: 36,
                    objectFit: 'contain',
                    opacity: 1,
                    filter: 'grayscale(0)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </motion.div>
      <style>{`
        @media (max-width: 768px) {
          section:has(> div > div > p:first-child) { padding: 28px 16px !important; }
          section:has(> div > div > p:first-child) > div > div > div:first-of-type > img { height: 180px !important; }
          section:has(> div > div > p:first-child) > div > div > div:first-of-type + div { gap: 12px !important; }
          section:has(> div > div > p:first-child) > div > div > div:first-of-type + div > div { padding: 8px 12px !important; }
          section:has(> div > div > p:first-child) > div > div > div:first-of-type + div > div > p:first-child { font-size: 0.75rem !important; }
        }
      `}</style>
    </section>
  )
}
