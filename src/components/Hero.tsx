import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const images = [
  '/Images/Kanamo/2017/20170820_074723.jpg',
  '/Images/Bandarpoonch/IMG_20180430_104240.jpg',
  'https://static.wixstatic.com/media/4b485b_489dcb35e10b4673af582920559d704f~mv2.jpg/v1/fill/w_984,h_639,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b485b_489dcb35e10b4673af582920559d704f~mv2.jpg',
  '/Images/Kanamo/2017/20170820_074736.jpg',
  '/Images/Satopanth/IMG20220826125459.jpg',
  '/Images/Satopanth/IMG20220826131401.jpg',
  '/Images/Nun/IMG20230806122233.jpg',
]

const headings = [
  { line1: 'The summit is just', line2: 'the beginning', color: '#5B8DEF' },
  { line1: 'Every mountain teaches', line2: 'a new lesson', color: '#fff' },
  { line1: 'Chasing horizons beyond', line2: 'the ordinary', color: '#5B8DEF' },
  { line1: 'Finding peace above', line2: 'the clouds', color: '#fff' },
  { line1: 'Pushing limits, reaching', line2: 'the impossible', color: '#5B8DEF' },
  { line1: 'Born to explore', line2: 'the highest peaks', color: '#fff' },
]

const bodyTexts = [
  'Chasing horizons beyond the Himalayas — from the Western Ghats to the great ranges of the Himalaya.',
  'Every mountain is within reach if you just keep climbing. The summit is only the halfway point.',
  'Mountains are the beginning and the end of all natural scenery. In the mountains, I find my peace.',
  'The best view comes after the hardest climb. Each step upward is a step closer to the sky.',
  'High altitude, thin air, big dreams — the mountains teach you what you are truly made of.',
  'It is not the mountain we conquer but ourselves. The real summit lies within.',
  'Adventure awaits at every altitude. From the valleys to the peaks, the journey never ends.',
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
      slideTo((current + 1) % images.length, 1)
    }, 3000)
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
            willChange: 'transform',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.7) 100%)
            `,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <div
style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: 900,
          }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 28,
            padding: '8px 20px 8px 24px',
            borderRadius: 9999,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(8px)',
            opacity: current === images.length - 1 ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--accent)',
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
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Mountaineer &middot; Photographer &middot; Storyteller
          </span>
        </div>

        {current < headings.length && (
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 9vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: 28,
              letterSpacing: '-0.02em',
            }}
          >
            {headings[current].line1}<br />
            <span
              style={{
                fontStyle: 'italic',
                color: headings[current].color,
              }}
            >
              {headings[current].line2}
            </span>
          </h1>
        )}

        {current < headings.length && (
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 540,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            {bodyTexts[current]}
          </p>
        )}

        {current < headings.length && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginTop: 36,
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
              padding: '14px 32px',
              borderRadius: 9999,
              background: '#1C1C1A',
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
              e.currentTarget.style.background = '#000'
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1C1C1A'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Expeditions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              padding: '14px 32px',
              borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(4px)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              e.currentTarget.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            About Me
          </Link>
        </div>
        )}

        {current === images.length - 1 && (
          <div id="hero-sponsors" style={{ position: 'absolute', right: -150, bottom: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Sponsors</span>
            <img src="/Sponsor logos/2.png" alt="Logo" style={{ maxWidth: 250, opacity: 1, transition: 'opacity 0.4s ease' }} />
          </div>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 36,
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4), transparent)',
            marginBottom: 12,
            animation: 'scrollLine 2.5s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Explore
        </span>
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
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(6px)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.3)'
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
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(6px)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.3)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
        }}
        aria-label="Next image"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        @media (max-width: 768px) {
          #hero-section { min-height: 100dvh !important; }
          #hero-section > div:first-of-type { top: -30px !important; right: -30px !important; bottom: -30px !important; left: -30px !important; }
          #hero-section > div:first-of-type > img { object-position: 30% center !important; }
          #hero-section > div:nth-of-type(2) { padding: 0 20px !important; }
          #hero-section > div:nth-of-type(2) > div:first-of-type { margin-bottom: 20px !important; padding: 6px 16px 6px 18px !important; }
          #hero-section > div:nth-of-type(2) > h1 { font-size: clamp(1.6rem, 8vw, 2.2rem) !important; margin-bottom: 18px !important; }
          #hero-section > div:nth-of-type(2) > p { font-size: clamp(0.8rem, 2.8vw, 0.95rem) !important; max-width: 100% !important; line-height: 1.6 !important; }
          #hero-sponsors { position: relative !important; right: auto !important; bottom: auto !important; margin-top: 28px !important; }
          #hero-sponsors > img { max-width: 180px !important; }
          #hero-section > button { width: 34px !important; height: 34px !important; top: auto !important; bottom: 110px !important; transform: none !important; background: rgba(0,0,0,0.45) !important; }
          #hero-section > button:first-of-type { left: 10px !important; }
          #hero-section > button:last-of-type { right: 10px !important; }
          #hero-section > div:last-of-type { padding-bottom: 16px !important; }
          #hero-section > div:last-of-type > div { height: 22px !important; }
        }
        @media (max-width: 400px) {
          #hero-section > div:nth-of-type(2) > h1 { font-size: 1.4rem !important; }
          #hero-section > div:nth-of-type(2) > p { font-size: 0.75rem !important; }
          #hero-section > button { width: 30px !important; height: 30px !important; bottom: 90px !important; }
          #hero-section > button:first-of-type { left: 6px !important; }
          #hero-section > button:last-of-type { right: 6px !important; }
        }
      `}</style>
    </section>
  )
}
