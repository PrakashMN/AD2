import { motion } from 'framer-motion'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
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
            <p className="section-label">Contact</p>
            <h1 className="section-title" style={{ textAlign: 'center' }}>
              Mountains are{' '}
              <span className="accent-italic">calling!</span>
            </h1>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Join me on my next adventure. Whether trekking, expedition, or collaboration
              &mdash; reach out.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              maxWidth: 900,
              margin: '0 auto',
              alignItems: 'start',
            }}
          >
            <div>
              <ContactForm />
            </div>

            <div>
              <div
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: 16,
                  padding: '36px 32px',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: 24,
                  }}
                >
                  Contact Details
                </h3>

                <div style={{ marginBottom: 24 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      marginBottom: 4,
                    }}
                  >
                    Phone
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 500,
                    }}
                  >
                    +91 8867540604
                  </p>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      marginBottom: 4,
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:akshayy.deshpande@gmail.com"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent' }}
                  >
                    akshayy.deshpande@gmail.com
                  </a>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      marginBottom: 4,
                    }}
                  >
                    Trek Inquiries
                  </p>
                  <a
                    href="mailto:theoutdoorschoolin@gmail.com"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent' }}
                  >
                    theoutdoorschoolin@gmail.com
                  </a>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      marginBottom: 14,
                    }}
                  >
                    Upcoming Treks
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['Everest Base Camp', 'Annapurna Base Camp', 'Spiti Valley Winter'].map((trek) => (
                      <span
                        key={trek}
                        style={{
                          padding: '7px 16px',
                          borderRadius: 9999,
                          border: '1px solid var(--border)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          background: 'var(--bg)',
                        }}
                      >
                        {trek}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sponsors />
      <style>{`
        @media (max-width: 768px) {
          section:first-of-type > div > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  )
}
