import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const images = [
  '/Images/Bandarpoonch/IMG_20180430_104240.jpg',
  '/Images/Bandarpoonch/DSC_7714.jpg',
  '/Images/Bandarpoonch/DSC_7624.jpg',
  '/Images/Nun/PXL_20230806_064958997.jpg',
  '/Images/Satopanth/IMG20220826125459.jpg',
  '/Images/Satopanth/IMG20220826131401.jpg',
  '/Images/Nun/brightened_mountain_photo.jpg',
]

const slideLabels = [
  'Mt. Bandarpoonch, Garhwal Himalayas, Uttarakhand, India.',
  'Heading Home | Mt. Bandarpoonch, Garhwal Himalayas, Uttarakhand, India.',
  'Enroute | Mt. Bandarpoonch, Garhwal Himalayas, Uttarakhand, India.',
  'Mt. Nun, Suru Valley, Kargil, India.',
  'Mt. Satopanth, Garhwal Himalayas, Uttarakhand, India.',
  'Mt. Satopanth, Garhwal Himalayas, Uttarakhand, India.',
  'Mt. Nun, Suru Valley, Kargil, India.',
]

const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768
const imgPos = (i: number) => {
  if (!isMobile()) return 'center'
  if (i === 0) return '70% center'
  if (i === 1) return '60% center'
  if (i === 6) return '45% center'
  return '50% center'
}
const headings = [
  { line1: 'The summit is just', line2: 'the beginning' },
  { line1: 'Every mountain teaches', line2: 'a new lesson' },
  { line1: 'Chasing horizons beyond', line2: 'the ordinary' },
  { line1: 'Finding peace above', line2: 'the clouds' },
  { line1: 'Pushing limits, reaching', line2: 'the impossible' },
  { line1: 'Born to explore', line2: 'the highest peaks' },
  { line1: 'The wild calls and', line2: 'we must follow' },
]

function preloadImage(src: string) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = src
  document.head.appendChild(link)
}
export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [prevImage, setPrevImage] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const dirRef = useRef(1)
  const animatingRef = useRef(false)
  const enteringRef = useRef<HTMLImageElement>(null)
  const leavingRef = useRef<HTMLImageElement>(null)
  const hoveringRef = useRef(false)
  useEffect(() => {
    preloadImage(images[(current + 1) % images.length])
    preloadImage(images[(current - 1 + images.length) % images.length])
  }, [current])
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const offset = window.scrollY
      bgRef.current.style.transform = `translateY(${offset * 0.35}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const slideTo = (to: number, dir: 1 | -1) => {
    if (animatingRef.current) return
    dirRef.current = dir
    animatingRef.current = true
    setAnimating(true)
    setPrevImage(current)
    setCurrent(to)
  }
  const prev = () => slideTo((current - 1 + images.length) % images.length, -1)
  const next = () => slideTo((current + 1) % images.length, 1)
  useEffect(() => {
    if (!animating || prevImage === null) return
    const d = dirRef.current
    const enter = enteringRef.current
    const leave = leavingRef.current
    if (!enter || !leave) return
    enter.style.transition = 'none'
    leave.style.transition = 'none'
    enter.style.transform = `translateX(${d * 100}%)`
    leave.style.transform = 'translateX(0)'
    void enter.offsetHeight
    enter.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    leave.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    enter.style.transform = 'translateX(0)'
    leave.style.transform = `translateX(${-d * 100}%)`
  }, [animating, prevImage, current])
  const handleSlideEnd = () => {
    animatingRef.current = false
    setAnimating(false)
    setPrevImage(null)
  }
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoveringRef.current) {
        slideTo((current + 1) % images.length, 1)
      }
    }, 5000)
    return () => clearInterval(id)
  }, [current])
  return (
    <section id="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 700,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--nav-height)',
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          bottom: -80,
          left: -80,
          overflow: 'hidden',
          willChange: 'transform',
        }}
      >
        {prevImage !== null && (
          <img
            ref={leavingRef}
            src={images[prevImage]}
            alt=""
            decoding="async"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: imgPos(prevImage),
              willChange: 'transform',
            }}
          />
        )}
        <img
          ref={enteringRef}
          src={images[current]}
          alt=""
          decoding="async"
          fetchPriority={current === 0 ? 'high' : 'auto'}
          onTransitionEnd={handleSlideEnd}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
              objectPosition: imgPos(current),
            willChange: 'transform',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: current === 0
            ? 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)'
            : current === 2
            ? 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 45%, transparent 70%)'
            : current >= 4
            ? 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
            : 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 45%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          zIndex: 2,
          textAlign: 'left',
          ...(current === 0
            ? { position: 'relative', padding: '0 24px 0 24px', maxWidth: 800, marginTop: -40, marginLeft: -550 }
            : current === 5 && isMobile()
            ? { position: 'relative', alignSelf: 'flex-start', marginTop: 30 }
            : isMobile()
            ? { position: 'relative', alignSelf: 'flex-start', marginTop: 100 }
            : current === 4
            ? { position: 'absolute', left: 80, top: 80, padding: '0 24px 0 0', maxWidth: 600 }
            : { position: 'absolute', left: 80, top: '50%', transform: 'translateY(-50%)', padding: '0 24px 0 0', maxWidth: 600 }
          ),
        }}
      >
        {current === 0 && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 32,
              padding: '8px 20px 8px 24px',
              borderRadius: 9999,
              border: '1px solid #1d4ed8',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(12px)',
            transition: 'opacity 0.4s ease',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#1d4ed8',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#111827',
            }}
          >
            Mountaineer &middot; Photographer &middot; Storyteller
          </span>
        </div>
        )}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: current === 0 ? 'clamp(2.75rem, 9vw, 6rem)' : 'clamp(1.85rem, 4.2vw, 3.3rem)',
            fontWeight: current >= 4 ? 700 : 700,
            lineHeight: current >= 4 ? 1.15 : 1.05,
            color: current === 0 ? '#111827' : '#F8F8FF',
            marginBottom: current >= 4 ? 20 : 28,
            letterSpacing: '-0.02em',
          }}
        >
          {headings[current].line1}{headings[current].line2 && <><br /><span style={{ fontWeight: 600, color: current === 0 || current >= 4 ? '#1d4ed8' : '#60A5FA' }}>{headings[current].line2}</span></>}
        </h1>
        {current === 0 && (
          <>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: 600,
                color: '#1d4ed8',
                maxWidth: 540,
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              Mountaineer | Photographer | Storyteller
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: 500,
                color: '#374151',
                maxWidth: 540,
                lineHeight: 1.8,
              }}
            >
              Chasing horizons beyond the Himalayas — from the Western Ghats to the great ranges of the Himalaya.
            </p>
          </>
        )}
        {current === 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 20,
              marginTop: 42,
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/previous-expeditions"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '15px 38px',
                borderRadius: 9999,
                background: '#111827',
                color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              border: 'none',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              hoveringRef.current = true
              e.currentTarget.style.background = '#1e3a8a'
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.35)'
            }}
            onMouseLeave={(e) => {
              hoveringRef.current = false
              e.currentTarget.style.background = '#111827'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Expeditions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
                padding: '15px 38px',
                borderRadius: 9999,
                border: '1.5px solid #111827',
              color: '#111827',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              background: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              hoveringRef.current = true
              e.currentTarget.style.background = 'rgba(17,24,39,0.08)'
              e.currentTarget.style.borderColor = '#1d4ed8'
              e.currentTarget.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={(e) => {
              hoveringRef.current = false
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#111827'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            About Me
          </Link>
        </div>
        )}
      </div>

      <button
        onClick={prev}
        style={{
          position: 'absolute',
          left: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          hoveringRef.current = true
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        }}
        onMouseLeave={(e) => {
          hoveringRef.current = false
          e.currentTarget.style.background = 'rgba(0,0,0,0.5)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
        }}
        aria-label="Previous image"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        style={{
          position: 'absolute',
          right: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          hoveringRef.current = true
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        }}
        onMouseLeave={(e) => {
          hoveringRef.current = false
          e.currentTarget.style.background = 'rgba(0,0,0,0.5)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
        }}
        aria-label="Next image"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Location Badge */}
      <div
        className="hero-location-badge"
        style={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          padding: '8px 16px',
          borderRadius: 9999,
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'opacity 0.4s ease',
          opacity: animating ? 0 : 1,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          {slideLabels[current]}
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          #hero-section { height: 100dvh !important; min-height: 100dvh !important; }
          #hero-section > div:first-of-type { top: -30px !important; right: -30px !important; bottom: -30px !important; left: -30px !important; }
          #hero-section > div:nth-of-type(2) { background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 100%) !important; }
          #hero-section > div:nth-of-type(3) { padding: 0 24px !important; max-width: 100% !important; margin-left: 0 !important; text-align: center !important; }
          #hero-section > div:nth-of-type(3) > div:first-of-type { margin-bottom: 16px !important; padding: 6px 14px 6px 16px !important; }
          #hero-section > div:nth-of-type(3) > div:first-of-type > span { font-size: 0.55rem !important; }
          #hero-section > div:nth-of-type(3) > h1 { font-size: clamp(1.4rem, 6.5vw, 1.8rem) !important; margin-bottom: 12px !important; color: #fff !important; }
          #hero-section > div:nth-of-type(3) > h1 > span { color: #93c5fd !important; }
          #hero-section > div:nth-of-type(3) > p { font-size: clamp(0.8rem, 2.8vw, 0.95rem) !important; max-width: 100% !important; line-height: 1.6 !important; color: rgba(255,255,255,0.85) !important; }
          #hero-section > button { width: 36px !important; height: 36px !important; top: auto !important; bottom: 24px !important; transform: none !important; background: rgba(0,0,0,0.45) !important; }
          #hero-section > button:first-of-type { left: 10px !important; }
          #hero-section > button:last-of-type { right: 10px !important; }
          .hero-location-badge { bottom: 20px !important; left: 16px !important; right: auto !important; max-width: calc(100% - 32px) !important; }
          .hero-location-badge span { font-size: 0.65rem !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }
          #hero-section > div:nth-of-type(3) > div:last-child { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; margin-top: 28px !important; }
          #hero-section > div:nth-of-type(3) > div:last-child > a { justify-content: center !important; padding: 13px 24px !important; font-size: 0.8rem !important; }
          #hero-section > div:nth-of-type(3) > div:last-child > a:last-child { color: #fff !important; border-color: rgba(255,255,255,0.4) !important; }
        }
        @media (max-width: 400px) {
          #hero-section > div:nth-of-type(3) { padding: 0 16px !important; }
          #hero-section > div:nth-of-type(3) > h1 { font-size: 1.3rem !important; }
          #hero-section > div:nth-of-type(3) > p { font-size: 0.7rem !important; }
          #hero-section > button { width: 30px !important; height: 30px !important; bottom: 16px !important; }
          #hero-section > button:first-of-type { left: 6px !important; }
          #hero-section > button:last-of-type { right: 6px !important; }
          #hero-section > div:nth-of-type(3) > div:last-child > a { padding: 12px 20px !important; font-size: 0.75rem !important; }
        }
      `}</style>
    </section>
  )
}
