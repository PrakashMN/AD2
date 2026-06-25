import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Lightbox from '../components/Lightbox'
import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'

const galleryImages = [
  { src: '/Images/Bandarpoonch/DSC_7378.jpg', alt: 'Bandarpoonch expedition view' },
  { src: '/Images/Kanamo/2017/20170820_074723.jpg', alt: 'Kanamo basecamp morning' },
  { src: '/Images/Bandarpoonch/DSC_7624.jpg', alt: 'Bandarpoonch peak view' },
  { src: 'https://static.wixstatic.com/media/4b485b_2d11496bb9584fc1ad53cc6137f8f87e~mv2.jpg/v1/fill/w_592,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.jpg', alt: 'Satopanth expedition hero' },
  { src: '/Images/Bandarpoonch/DSC_7714.jpg', alt: 'Bandarpoonch mountain landscape' },
  { src: 'https://static.wixstatic.com/media/4b485b_e45678c78b35471998fbce8c8d9b62a9~mv2.jpg/v1/fill/w_614,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GOPR1216_edited.jpg', alt: 'Kanamo expedition view' },
  { src: '/Images/Nun/IMG20230806122233.jpg', alt: 'Nun expedition view' },
  { src: '/Images/Nun/IMG20230806145326.jpg', alt: 'Nun mountain landscape' },
  { src: '/Images/Kanamo/2017/20170820_074736.jpg', alt: 'Kanamo expedition trail' },
  { src: '/Images/Nun/PXL_20230806_064958997.jpg', alt: 'Nun expedition final view' },
  { src: '/Images/Satopanth/IMG20220826131401.jpg', alt: 'Satopanth expedition view' },
]

export default function MountaineeringPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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
            <p className="section-label">Mountaineering</p>
            <h1 className="section-title" style={{ textAlign: 'center' }}>
              Chasing <span className="accent-italic">Summits</span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                maxWidth: 560,
                margin: '0 auto',
              }}
            >
              High-altitude journeys, alpine light, and the world's most formidable landscapes.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            columns: '4 260px',
            columnGap: 20,
            padding: '0 24px',
            maxWidth: 1400,
            margin: '0 auto',
          }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                breakInside: 'avoid',
                marginBottom: 20,
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                background: '#1a1a1a',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              }}
              onClick={() => setLightboxIndex(i)}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                const imgEl = e.currentTarget.querySelector('img') as HTMLElement
                if (overlay) overlay.style.opacity = '1'
                if (imgEl) imgEl.style.transform = 'scale(1.04)'
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                const imgEl = e.currentTarget.querySelector('img') as HTMLElement
                if (overlay) overlay.style.opacity = '0'
                if (imgEl) imgEl.style.transform = 'scale(1)'
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'scale(0.8)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="gallery-icon"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.9 }}
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)}
        />
      )}

      <div style={{ textAlign: 'center', padding: '0 24px 40px' }}>
        <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', textDecoration: 'none', padding: '12px 28px', borderRadius: 9999, border: '1px solid var(--border)', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#000' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--accent)' }}>&larr; Back to Portfolio</Link>
      </div>
      <Sponsors />

      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <ContactForm />
      </section>
    </>
  )
}
