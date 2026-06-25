import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const galleryImages = [
  { src: '/Images/Bandarpoonch/IMG_20180503_123855.jpg', alt: 'Bandarpoonch expedition view' },
  { src: '/Images/Bandarpoonch/DSC_7378.jpg', alt: 'Bandarpoonch mountain landscape' },
  { src: '/Images/Bandarpoonch/DSC_7357.jpg', alt: 'Bandarpoonch expedition base' },
  { src: '/Images/Kanamo/2017/20170821_142753.jpg', alt: 'Kanamo basecamp morning' },
  { src: '/Images/Kanamo/2017/20170822_194708.jpg', alt: 'Kanamo expedition trail' },
  { src: '/Images/Kanamo/2017/20170820_072444.jpg', alt: 'Kanamo summit moment' },
  { src: 'https://static.wixstatic.com/media/4b485b_262b4bd2f4944099b137ae91d492595f~mv2.jpg/v1/fill/w_950,h_626,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b485b_262b4bd2f4944099b137ae91d492595f~mv2.jpg', alt: 'Mountain expedition view' },
  { src: 'https://static.wixstatic.com/media/4b485b_7189575137e54f1683605230be078250~mv2.jpg', alt: 'Mountaineering expedition moment' },
  { src: '/Images/Kanamo/2017/20170820_153522.jpg', alt: 'Kanamo summit panorama' },
  { src: '/Images/Kanamo/2017/20170820_074736.jpg', alt: 'Kanamo expedition trail' },
  { src: '/Images/Bandarpoonch/DSC_7624.jpg', alt: 'Bandarpoonch peak view' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="section" style={{ background: 'var(--card-bg)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: 48, maxWidth: 500 }}
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
            Gallery
          </p>
          <h2 className="section-title">Frames from thin air</h2>
          <p className="section-sub">
            Above the treeline, light behaves differently. These are the moments
            worth carrying down the mountain.
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
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)}
        />
      )}
      <style>{`
        @media (max-width: 1024px) {
          #gallery > div:last-child { columns: 3 !important; }
        }
        @media (max-width: 768px) {
          #gallery > div:first-of-type > div > h2 { font-size: clamp(1.5rem, 5vw, 1.8rem) !important; }
          #gallery > div:last-child { columns: 2 !important; column-gap: 12px !important; padding: 0 12px !important; }
          #gallery > div:last-child > div { margin-bottom: 12px !important; border-radius: 12px !important; }
        }
        @media (max-width: 480px) {
          #gallery > div:last-child { columns: 1 !important; max-width: 400px !important; }
        }
      `}</style>
    </section>
  )
}
