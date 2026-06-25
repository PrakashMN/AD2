import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
          maxWidth: 'var(--container)',
          margin: '0 auto',
          padding: '0 24px',
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
                fontSize: '0.8rem',
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
                fontSize: '0.55rem',
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

      {menuOpen && (
        <div
          style={{
            background: isDarkPage ? 'rgba(0,0,0,0.85)' : 'var(--glass)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: isDarkPage ? '1px solid rgba(255,255,255,0.06)' : '1px solid var(--glass-border)',
            padding: '8px 24px 16px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              const isContact = link.label === 'Contact'
              const isProject = link.label === 'Project 8K*2' || link.label === 'Project 7 in 3'
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  title={isProject ? (link.label === 'Project 8K*2' ? 'Everest (8,848m) + Lhotse (8,516m) in one season' : 'Seven Summits across all continents in 3 years') : undefined}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isContact ? '#fff' : (isActive ? (isDarkPage ? '#fff' : 'var(--accent)') : (isDarkPage ? 'rgba(255,255,255,0.8)' : 'var(--text)')),
                    textDecoration: 'none',
                    borderLeft: isActive && !isContact ? '3px solid var(--accent)' : '3px solid transparent',
                    borderBottom: isDarkPage ? '1px solid rgba(255,255,255,0.06)' : '1px solid var(--border-light)',
                    background: isContact ? 'var(--accent)' : (isActive && isDarkPage ? 'rgba(255,255,255,0.08)' : 'transparent'),
                    paddingLeft: isActive && !isContact ? '13px' : '16px',
                    borderRadius: 0,
                    margin: '4px 0',
                  }}
                  onMouseEnter={(e) => {
                    if (isContact) {
                      e.currentTarget.style.background = 'var(--accent-hover)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isContact) {
                      e.currentTarget.style.background = 'var(--accent)'
                    }
                  }}
                >
                  {link.label}
                </Link>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .mobile-menu-btn { display: flex !important; }
          .nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          nav > a > span { font-size: 0.7rem !important; }
          header > div > a { font-size: 0.82rem !important; padding: 10px 0 !important; }
        }
        @media (max-width: 380px) {
          header > div { max-height: 60vh !important; overflow-y: auto !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
