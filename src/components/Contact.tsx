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
              borderRadius: 16,
              padding: '56px 64px',
              color: 'var(--text)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              backgroundImage: 'url(/Images/Bandarpoonch/IMG_20180430_104240.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Blue overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(25, 55, 109, 0.82)',
                zIndex: 0,
              }}
            />
            {/* Accent top glow */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '20%',
              right: '20%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            }}
          />
          {/* Subtle mountain silhouette accent */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 300,
              height: 160,
              opacity: 0.03,
              pointerEvents: 'none',
            }}
          >
            <svg viewBox="0 0 300 160" preserveAspectRatio="xMaxYMax meet" style={{ width: '100%', height: '100%' }}>
              <polygon points="0,160 40,60 80,160" fill="var(--accent)" />
              <polygon points="50,160 110,30 170,160" fill="var(--accent)" />
              <polygon points="120,160 180,50 240,160" fill="var(--accent)" />
              <polygon points="190,160 240,70 300,160" fill="var(--accent)" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr',
                gap: 56,
                alignItems: 'start',
              }}
            >
              {/* Left — Contact info */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: 16,
                  }}
                >
                  <span style={{ width: 32, height: 1.5, background: 'var(--accent)', display: 'inline-block', verticalAlign: 'middle', marginRight: 12, opacity: 0.5 }} />
                  Get in touch
                </p>

                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                    fontWeight: 700,
                    lineHeight: 1.12,
                    marginBottom: 20,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Got a mountain in{' '}
                  <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                    mind
                  </span>
                  ?
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    marginBottom: 32,
                    maxWidth: 400,
                  }}
                >
                  Whether you&apos;re planning an expedition, need photography for
                  your brand, or want to collaborate &mdash; reach out.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 0 }}>
                  {/* Email */}
                  <a
                    href="mailto:akshayy.deshpande@gmail.com"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      width: 'fit-content',
                      padding: '10px 16px',
                      borderRadius: 8,
                      background: 'var(--accent-subtle)',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.background = 'rgba(59,130,246,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.background = 'var(--accent-subtle)'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13 2 4" />
                    </svg>
                    akshayy.deshpande@gmail.com
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/akshayydeshpande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      width: 'fit-content',
                      padding: '10px 16px',
                      borderRadius: 8,
                      background: 'var(--accent-subtle)',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.background = 'rgba(59,130,246,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.background = 'var(--accent-subtle)'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                    @akshayydeshpande
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/channel/UCbryBt3sZC7fyO_l-OcrtsQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      width: 'fit-content',
                      padding: '10px 16px',
                      borderRadius: 8,
                      background: 'var(--accent-subtle)',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.background = 'rgba(59,130,246,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.background = 'var(--accent-subtle)'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <path d="M9.75 15.02l5.75-3.25-5.75-3.25v6.5z" />
                    </svg>
                    Akshay Deshpande
                  </a>
                </div>
              </div>

              {/* Right — Open for + Location */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 28,
                }}
              >
                {/* Open for */}
                <div
                  style={{
                    padding: 24,
                    background: 'var(--card-hover)',
                    borderRadius: 12,
                    border: '1px solid var(--border)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--accent)',
                      marginBottom: 14,
                    }}
                  >
                    Currently open for
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 8,
                      marginBottom: 0,
                    }}
                  >
                    {availability.map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: '6px 14px',
                          borderRadius: 9999,
                          border: '1px solid var(--border)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          background: 'transparent',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent)'
                          e.currentTarget.style.color = 'var(--accent)'
                          e.currentTarget.style.background = 'var(--accent-subtle)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border)'
                          e.currentTarget.style.color = 'var(--text-muted)'
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'var(--accent-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: 2 }}>
                      Based in
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)' }}>
                      Belagavi, Karnataka, India
                    </p>
                  </div>
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
          #contact > div > div { padding: 32px 24px !important; border-radius: 12px !important; }
          #contact > div > div > div > div > div:first-child > h2 { font-size: clamp(1.4rem, 5vw, 1.8rem) !important; }
          #contact > div > div > div > div > div:first-child > p { font-size: 0.8rem !important; }
          #contact > div > div > div > div > div:first-child > div > a { font-size: 0.78rem !important; padding: 8px 12px !important; }
          #contact > div > div > div > div > div:last-child { gap: 20px !important; }
        }
      `}</style>
    </section>
  )
}
