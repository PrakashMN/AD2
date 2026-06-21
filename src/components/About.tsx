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
              <span style={{ width: 32, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
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
              Based in karnataka, India, Akshay Deshpande is an mountaineer, photographer,
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
                marginBottom: 48,
              }}
            >
              From navigating crevasse fields on frozen glaciers to documenting
              vanishing cultures through his lens, Akshay brings an unwavering
              commitment to every expedition he undertakes.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 20,
              }}
            >
              {[
                { value: '7+', label: 'Major Expeditions' },
                { value: '7000m+', label: 'Highest Altitude' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    padding: '28px 16px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.2rem',
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
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: 'var(--muted)',
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
              position: 'relative',
              width: '100%',
              aspectRatio: '3 / 4',
              maxWidth: 420,
              margin: '0 auto',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -16,
                left: -16,
                width: '100%',
                height: '100%',
                border: '2px solid rgba(59,130,246,0.15)',
                borderRadius: 4,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: 4,
              }}
            >
              <img
                src="https://static.wixstatic.com/media/4b485b_e8cb667134224872829fb2c035eda729~mv2.jpg/v1/crop/x_499,y_0,w_2003,h_2003/fill/w_552,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_7633_edited.jpg"
                alt="Akshay Deshpande mountaineering"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
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
