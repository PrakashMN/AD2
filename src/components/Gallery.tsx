import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const galleryImages = [
  { src: '/Images/ExtraImages/GOPR1672 (1).jpg', alt: 'Mountain ridge walk' },
  { src: '/Images/Bandarpoonch/IMG_20180424_171927.jpg', alt: 'Bandarpoonch evening light' },
  { src: '/Images/SevenSummits/elbrus.jpg', alt: 'Mount Elbrus' },
  { src: '/Images/Bandarpoonch/DSC_7685.jpg', alt: 'Bandarpoonch ridge line' },
  { src: '/Images/ExtraImages/IMG_20180430_130235 (1).jpg', alt: 'Afternoon mountain vista' },
  { src: '/Images/Kanamo/2017/20170822_194708.jpg', alt: 'Kanamo expedition trail' },
  { src: '/Images/Nun/IMG20230804151021.jpg', alt: 'Nun glacier view' },
  { src: '/Images/ExtraImages/DSC_0562 (1).jpg', alt: 'Expedition landscape view' },
  { src: '/Images/Bandarpoonch/ChatGPT Image Jun 30, 2026, 06_12_47 PM.png', alt: 'Bandarpoonch AI generated landscape' },
  { src: '/Images/Bandarpoonch/DSC_7378.jpg', alt: 'Bandarpoonch mountain landscape' },
  { src: '/Images/Nun/PXL_20230806_064955265.jpg', alt: 'Nun camp panorama' },
  { src: '/Images/ExtraImages/GOPR1680 (1).jpg', alt: 'Summit approach view' },
  { src: '/Images/Bandarpoonch/IMG_20180503_123855.jpg', alt: 'Bandarpoonch expedition view' },
  { src: '/Images/Nun/IMG20230806145326.jpg', alt: 'Nun evening glow' },
  { src: '/Images/ExtraImages/IMG_20180430_102352 (1).jpg', alt: 'Morning landscape view' },
  { src: '/Images/Bandarpoonch/DSC_0741.jpg', alt: 'Bandarpoonch expedition landscape' },
  { src: '/Images/Bandarpoonch/DSC_7714.jpg', alt: 'Bandarpoonch summit approach' },
  { src: '/Images/ExtraImages/PXL_20230806_064947607 (1).jpg', alt: 'High altitude camp view' },
  { src: '/Images/Satopanth/IMG20220826131401.jpg', alt: 'Satopanth mountain view' },
  { src: '/Images/Bandarpoonch/DSC_7357.jpg', alt: 'Bandarpoonch expedition base' },
  { src: '/Images/Nun/brightened_mountain_photo.jpg', alt: 'Nun brightened mountain view' },
  { src: '/Images/Kanamo/2017/20170820_074723.jpg', alt: 'Kanamo ridge walk' },
  { src: '/Images/Bandarpoonch/IMG_20180430_104240.jpg', alt: 'Bandarpoonch mountain vista' },
  { src: '/Images/ExtraImages/GOPR1666 (1).jpg', alt: 'Expedition action shot' },
  { src: '/Images/Bandarpoonch/DSC_7584.jpg', alt: 'Bandarpoonch trail view' },
  { src: '/Images/ExtraImages/DSC_0627 (1).jpg', alt: 'Mountain trail view' },
  { src: '/Images/Kanamo/2017/20170820_072501.jpg', alt: 'Kanamo morning ascent' },
  { src: '/Images/Satopanth/IMG20220826125500_01.jpg', alt: 'Satopanth glacier' },
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
