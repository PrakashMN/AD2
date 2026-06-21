import { motion } from 'framer-motion'

const availability = ['Sponsorships', 'Collaborations', 'Speaking', 'Workshops', 'Film Projects']

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0 80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(160deg, #4A8DB7 0%, #2D6F94 50%, #1A5270 100%)',
            borderRadius: 6,
            padding: '48px 56px',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              opacity: 0.04,
              backgroundImage: 'radial-gradient(circle at 30% 40%, #fff 0%, transparent 50%), radial-gradient(circle at 70% 60%, #fff 0%, transparent 50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: 48,
                alignItems: 'start',
              }}
            >
              <div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}>
                  <span style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
                  Contact
                </p>

                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    marginBottom: 16,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Got a mountain in{' '}
                  <span style={{ fontStyle: 'italic', color: '#fff', opacity: 0.9 }}>
                    mind
                  </span>
                  ?
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    opacity: 0.8,
                    marginBottom: 28,
                    maxWidth: 380,
                  }}
                >
                  Whether you&apos;re planning an expedition, need photography for
                  your brand, or want to collaborate &mdash; reach out.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 0 }}>
                  <a
                    href="mailto:akshayy.deshpande@gmail.com"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#fff',
                      width: 'fit-content',
                      borderBottom: '1px solid rgba(255,255,255,0)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13 2 4" />
                    </svg>
                    akshayy.deshpande@gmail.com
                  </a>

                  <a
                    href="https://www.instagram.com/akshayydeshpande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#fff',
                      width: 'fit-content',
                      borderBottom: '1px solid rgba(255,255,255,0)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                    @akshayydeshpande
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCbryBt3sZC7fyO_l-OcrtsQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#fff',
                      width: 'fit-content',
                      borderBottom: '1px solid rgba(255,255,255,0)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <path d="M9.75 15.02l5.75-3.25-5.75-3.25v6.5z" />
                    </svg>
                    Akshay Deshpande
                  </a>
                </div>
              </div>

              <div
                style={{
                  padding: 20,
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 14,
                  }}
                >
                  Open for
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 24,
                  }}
                >
                  {availability.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: '5px 12px',
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.12)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.7)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#fff'
                        e.currentTarget.style.color = '#fff'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 8,
                  }}
                >
                  Current Location
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Belagavi, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 60px 0 0 !important; }
          #contact > div > div > div > div { grid-template-columns: 1fr !important; gap: 28px !important; }
          #contact > div > div { padding: 32px 24px !important; }
          #contact > div > div > div > div > div:first-child > h2 { font-size: clamp(1.3rem, 5vw, 1.6rem) !important; }
          #contact > div > div > div > div > div:first-child > p { font-size: 0.8rem !important; }
          #contact > div > div > div > div > div:first-child > div > a { font-size: 0.78rem !important; }
          #contact > div > div > div > div > div:last-child { padding: 16px !important; }
          #contact > div > div > div > div > div:last-child > div { gap: 4px !important; }
          #contact > div > div > div > div > div:last-child > div > span { padding: 4px 10px !important; font-size: 0.65rem !important; }
        }
      `}</style>
    </section>
  )
}
