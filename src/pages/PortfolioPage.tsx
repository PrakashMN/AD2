import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

const categories = [
  {
    title: 'Mountaineering',
    slug: '/portfolio/mountaineering',
    image: 'https://static.wixstatic.com/media/4b485b_2951fc5051e046d5b2f70ccf18224b25~mv2.jpg',
    desc: 'Summit photos, high-altitude landscapes, and expedition documentation.',
    span: 2,
  },
  {
    title: 'Photography',
    slug: '/portfolio/photography',
    image: 'https://static.wixstatic.com/media/4b485b_643ccef980a1484c9489b2eda8874f94~mv2.jpg',
    desc: 'A curated collection of visual stories from the mountains and beyond.',
    span: 1,
  },
  {
    title: 'Sustainable Design',
    slug: '/portfolio/sustainable-design',
    image: 'https://static.wixstatic.com/media/4b485b_aabb3b75f5344d889b7b8134d25ebfd7~mv2.jpg',
    desc: 'Natural fiber products designed with rural women in Belagavi.',
    span: 2,
  },
]

export default function PortfolioPage() {
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
            <p className="section-label">Portfolio</p>
            <h1 className="section-title" style={{ textAlign: 'center' }}>
              A jack of all. <span className="accent-italic">Me.</span>
            </h1>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{
                  height: '100%',
                }}
              >
                <Link
                  to={cat.slug}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: 20,
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'inherit',
                    background: '#1a1a1a',
                    transition: 'box-shadow 0.4s ease, transform 0.4s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                    const overlay = e.currentTarget.querySelector('.portfolio-overlay') as HTMLElement
                    if (overlay) overlay.style.opacity = '1'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    const overlay = e.currentTarget.querySelector('.portfolio-overlay') as HTMLElement
                    if (overlay) overlay.style.opacity = '0'
                  }}
                >
                  <div style={{ overflow: 'hidden', position: 'relative', aspectRatio: '16 / 11' }}>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 35%)',
                        zIndex: 1,
                        pointerEvents: 'none',
                      }}
                    />
                    <div
                      className="portfolio-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#fff',
                          border: '1px solid rgba(255,255,255,0.3)',
                          padding: '10px 24px',
                          borderRadius: 9999,
                          backdropFilter: 'blur(6px)',
                          background: 'rgba(255,255,255,0.08)',
                        }}
                      >
                        Click to View
                      </span>
                    </div>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      style={{
                        width: '100%',
                        display: 'block',
                        transition: 'transform 0.6s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px 24px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        marginBottom: 8,
                        color: '#f0f0f0',
                      }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        color: '#bbb',
                        lineHeight: 1.7,
                      }}
                    >
                      {cat.desc}
                    </p>
                  </div>
                </Link>
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
          section:first-of-type > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
