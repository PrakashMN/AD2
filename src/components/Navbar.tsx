import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Project 8K*2', path: '/project-8k-x-2' },
  { label: 'Project 7 in 3', path: '/project-7-in-3' },
  { label: 'Expeditions', path: '/previous-expeditions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isDarkPage = location.pathname === '/project-8k-x-2'
  const isTransparent = isHome && !isScrolled

  return (
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
          background: isTransparent ? 'transparent' : 'rgba(15,17,23,0.92)',
          backdropFilter: isTransparent ? 'none' : 'blur(8px)',
          WebkitBackdropFilter: isTransparent ? 'none' : 'blur(8px)',
          borderBottom: isTransparent ? '1px solid transparent' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: isDarkPage ? '0 1px 0 rgba(255,255,255,0.04)' : isTransparent ? 'none' : 'var(--shadow-sm)',
        }}
    >
      <nav
        style={{
          padding: '0 32px',
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
          }}
        >
          <img
            src="/AD Logos/akshay deshpande logo.png"
            alt="AD"
            style={{
              height: 28,
              width: 28,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                  fontSize: '1.2rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: isDarkPage ? '#fff' : isTransparent ? '#fff' : 'var(--text)',
                transition: 'color 0.3s ease',
                lineHeight: 1.2,
              }}
            >
              Akshay Deshpande
            </span>
            <span
              style={{
                  fontFamily: 'var(--font-sans)',
                    fontSize: '0.65rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: isDarkPage ? 'rgba(255,255,255,0.5)' : isTransparent ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                transition: 'color 0.3s ease',
                lineHeight: 1,
              }}
            >
              Mountaineer. Explorer. Storyteller
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: isDarkPage ? 'rgba(255,255,255,0.08)' : isTransparent ? 'rgba(255,255,255,0.08)' : 'var(--accent-subtle)',
            border: 'none',
            cursor: 'pointer',
            color: isDarkPage ? '#fff' : isTransparent ? '#fff' : 'var(--text)',
            padding: 10,
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 12h16M4 6h16M4 18h16" />
              </>
            )}
          </svg>
        </button>

        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: 4,
            alignItems: 'center',
          }}
          className="nav-links"
        >
          {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              const isContact = link.label === 'Contact'
              const isProject = link.label === 'Project 8K*2' || link.label === 'Project 7 in 3'
              return (
                <li key={link.path} style={{ position: 'relative' }}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    title={isProject ? (link.label === 'Project 8K*2' ? 'Everest (8,848m) + Lhotse (8,516m) in one season' : 'Seven Summits across all continents in 3 years') : undefined}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '0.04em',
                      color: isContact ? '#fff' : isActive
                        ? isDarkPage ? '#fff' : isTransparent ? '#fff' : 'var(--text)'
                        : isDarkPage ? 'rgba(255,255,255,0.8)' : isTransparent ? 'rgba(255,255,255,0.9)' : 'var(--text)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      padding: isContact ? '8px 22px' : '6px 14px',
                      borderRadius: isContact ? 8 : 0,
                      background: isContact ? 'var(--accent)' : 'transparent',
                      borderBottom: isActive && !isContact ? '2px solid var(--accent)' : '2px solid transparent',
                      paddingBottom: isActive && !isContact ? '4px' : '6px',
                      transition: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive && !isContact) {
                        e.currentTarget.style.color = isDarkPage ? '#fff' : isTransparent ? '#fff' : 'var(--text)'
                        e.currentTarget.style.borderColor = isDarkPage ? 'rgba(255,255,255,0.3)' : isTransparent ? 'rgba(255,255,255,0.3)' : 'var(--accent-subtle)'
                      }
                      if (isContact && !isActive) {
                        e.currentTarget.style.background = 'var(--accent-hover)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive && !isContact) {
                        e.currentTarget.style.color = isDarkPage ? 'rgba(255,255,255,0.8)' : isTransparent ? 'rgba(255,255,255,0.9)' : 'var(--text)'
                        e.currentTarget.style.borderColor = 'transparent'
                      }
                      if (isContact && !isActive) {
                        e.currentTarget.style.background = 'var(--accent)'
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
            )
          })}
        </ul>
      </nav>

      {menuOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(10,12,18,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: 8,
              border: 'none',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              padding: '0 24px',
              width: '100%',
              maxWidth: 400,
            }}
          >
            {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                const isContact = link.label === 'Contact'
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      padding: '16px 24px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.2rem',
                      fontWeight: isActive ? 700 : 400,
                      letterSpacing: '0.08em',
                      color: isActive
                        ? '#fff'
                        : isContact ? '#fff' : 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      background: isContact
                        ? 'var(--accent)'
                        : isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                      borderRadius: 12,
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isContact ? 'var(--accent-hover)' : 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.background = isContact
                        ? 'var(--accent)'
                        : isActive ? 'rgba(255,255,255,0.08)' : 'transparent'
                      e.currentTarget.style.color = isActive
                        ? '#fff'
                        : isContact ? '#fff' : 'rgba(255,255,255,0.6)'
                    }}
                  >
                    {link.label}
                  </Link>
              )
            })}
          </nav>
        </div>,
        document.body
      )}

      <style>{`
        @media (max-width: 900px) {
          .mobile-menu-btn { display: flex !important; }
          .nav-links { display: none !important; }
          nav > a > div > span:first-child { font-size: 0.9rem !important; letter-spacing: 0.12em !important; }
          nav > a > div > span:last-child { font-size: 0.45rem !important; letter-spacing: 0.1em !important; }
          nav { padding: 0 20px !important; }
        }
        @media (max-width: 480px) {
          nav > a > span { font-size: 0.8rem !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
