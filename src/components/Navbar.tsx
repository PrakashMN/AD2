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
          background: isDarkPage ? (isScrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.3)') : isTransparent ? 'rgba(250, 249, 246, 0.05)' : '#FAF9F6',
          backdropFilter: isDarkPage ? 'blur(18px)' : 'blur(12px)',
          WebkitBackdropFilter: isDarkPage ? 'blur(18px)' : 'blur(12px)',
          borderBottom: isDarkPage ? '1px solid rgba(255,255,255,0.06)' : isTransparent ? '1px solid transparent' : '1px solid var(--glass-border)',
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
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
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
                    borderRadius: 8,
                    background: isContact ? '#000' : isActive
                      ? isDarkPage ? 'rgba(255,255,255,0.12)' : isTransparent ? 'rgba(255,255,255,0.1)' : 'var(--accent-subtle)'
                      : 'transparent',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      if (isContact) {
                        e.currentTarget.style.background = '#222'
                      } else if (isDarkPage) {
                        e.currentTarget.style.color = '#fff'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                      } else {
                        e.currentTarget.style.color = isTransparent ? '#fff' : 'var(--text)'
                        e.currentTarget.style.background = isTransparent ? 'rgba(255,255,255,0.06)' : 'var(--accent-subtle)'
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      if (isContact) {
                        e.currentTarget.style.background = '#000'
                      } else if (isDarkPage) {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                        e.currentTarget.style.background = 'transparent'
                      } else {
                        e.currentTarget.style.color = isTransparent ? 'rgba(255,255,255,0.9)' : 'var(--text)'
                        e.currentTarget.style.background = 'transparent'
                      }
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
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isContact ? '#fff' : (isActive ? (isDarkPage ? '#fff' : 'var(--accent)') : (isDarkPage ? 'rgba(255,255,255,0.8)' : 'var(--text)')),
                  textDecoration: 'none',
                  borderBottom: isDarkPage ? '1px solid rgba(255,255,255,0.06)' : '1px solid var(--border-light)',
                  background: isContact ? '#000' : (isActive && isDarkPage ? 'rgba(255,255,255,0.08)' : 'transparent'),
                  borderRadius: 8,
                  margin: '4px 0',
                }}
                onMouseEnter={(e) => {
                  if (isContact) {
                    e.currentTarget.style.background = '#222'
                  }
                }}
                onMouseLeave={(e) => {
                  if (isContact) {
                    e.currentTarget.style.background = '#000'
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
