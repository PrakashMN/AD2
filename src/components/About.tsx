import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about-section" style={{ padding: '140px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
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
              <span style={{ width: 48, height: 2, background: 'var(--accent)', display: 'inline-block', borderRadius: 1 }} />
              About
            </p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              The man behind <br />the mountains
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.9,
                color: 'var(--muted)',
                marginBottom: 16,
              }}
            >
              Based in Karnataka, India, Akshay Deshpande is a mountaineer, photographer,
              and storyteller on a relentless quest to explore the unknown. His
              journey began on the rugged trails of the Western Ghats and has since
              taken him to some of the most remote corners of the planet.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.9,
                color: 'var(--muted)',
                marginBottom: 12,
              }}
            >
              From navigating crevasse fields on frozen glaciers to documenting
              vanishing cultures through his lens.
            </p>
            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: 500,
                color: 'var(--accent)',
                lineHeight: 1.6,
                marginBottom: 48,
                paddingLeft: 24,
                borderLeft: '3px solid var(--accent)',
                fontStyle: 'italic',
              }}
            >
              &ldquo;Akshay brings an unwavering commitment to every expedition he undertakes.&rdquo;
            </blockquote>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 20,
              }}
            >
              <span style={{ width: 24, height: 2, background: 'var(--accent)', display: 'inline-block', borderRadius: 1 }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                By the numbers
              </span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
              }}
            >
              {[
                { value: '7+', label: 'Major Expeditions', icon: 'M4 21V3h12l-2 6 2 6H6' },
                { value: '7000m+', label: 'Highest Altitude', icon: 'M12 2L2 22h20L12 2zM12 8l-5 14h10L12 8z' },
                { value: '8+', label: 'Years Exploring', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    padding: '18px 10px 16px',
                    background: '#1a1a1a',
                    borderRadius: 14,
                    border: '1px solid #333',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#252525'
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a'
                    e.currentTarget.style.borderColor = '#333'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginBottom: 6, display: 'inline-block' }}
                  >
                    <path d={stat.icon} />
                  </svg>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      marginBottom: 4,
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.55rem',
                      fontWeight: 500,
                      color: '#999',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            style={{
              width: '100%',
              maxWidth: 420,
              margin: '0 auto',
            }}
          >
            <div
              style={{
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="https://static.wixstatic.com/media/4b485b_e8cb667134224872829fb2c035eda729~mv2.jpg/v1/crop/x_499,y_0,w_2003,h_2003/fill/w_552,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_7633_edited.jpg"
                alt="Akshay Deshpande mountaineering"
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about-section { padding: 70px 0 !important; }
          #about-section > div > div { grid-template-columns: 1fr !important; gap: 36px !important; }
          #about-section > div > div > div:first-child > h2 { font-size: clamp(1.5rem, 5vw, 1.8rem) !important; }
          #about-section > div > div > div:first-child > p { font-size: 0.9rem !important; }
          #about-section > div > div > div:first-child > div { grid-template-columns: repeat(3, 1fr) !important; gap: 8px !important; }
          #about-section > div > div > div:first-child > div > div { padding: 16px 8px !important; }
          #about-section > div > div > div:first-child > div > div > div { font-size: 1.3rem !important; }
          #about-section > div > div > div:first-child > div > div > div + div { font-size: 0.6rem !important; }
          #about-section > div > div > div:last-child { max-width: 280px !important; }
        }
        @media (max-width: 400px) {
          #about-section > div > div > div:first-child > div { grid-template-columns: 1fr !important; gap: 6px !important; }
          #about-section > div > div > div:first-child > div > div { display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 10px 14px !important; }
          #about-section > div > div > div:first-child > div > div > div { font-size: 1.1rem !important; margin-bottom: 0 !important; }
        }
      `}</style>
    </section>
  )
}
