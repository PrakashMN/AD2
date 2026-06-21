import { Link } from 'react-router-dom'

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

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/akshay.deshpande.735/', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z' },
  { label: 'Twitter', href: 'https://twitter.com/clicksakshay', icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
  { label: 'Instagram', href: 'https://www.instagram.com/akshayydeshpande/', icon: 'M12 2c2.7 0 3 .01 4.07.06 1.04.04 1.75.21 2.37.45.64.25 1.18.58 1.72 1.12.54.54.87 1.08 1.12 1.72.24.62.41 1.33.45 2.37.05 1.06.06 1.37.06 4.07s-.01 3-.06 4.07c-.04 1.04-.21 1.75-.45 2.37-.25.64-.58 1.18-1.12 1.72-.54.54-1.08.87-1.72 1.12-.62.24-1.33.41-2.37.45-1.06.05-1.37.06-4.07.06s-3-.01-4.07-.06c-1.04-.04-1.75-.21-2.37-.45-.64-.25-1.18-.58-1.72-1.12-.54-.54-.87-1.08-1.12-1.72-.24-.62-.41-1.33-.45-2.37C2.01 15 2 14.69 2 12s.01-3 .06-4.07c.04-1.04.21-1.75.45-2.37.25-.64.58-1.18 1.72-1.12.54-.54 1.08-.87 1.72-1.12.62-.24 1.33-.41 2.37-.45C9 2.01 9.31 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCbryBt3sZC7fyO_l-OcrtsQ', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.75 3.02z' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: '#000',
        padding: '40px 24px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr',
          gap: 32,
          paddingBottom: 28,
        }}
      >
        {/* Brand */}
        <div>
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              display: 'inline-block',
              marginBottom: 16,
            }}
          >
            Akshay Deshpande
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 24,
              maxWidth: 320,
            }}
          >
            Mountaineer, photographer, and storyteller exploring the unknown.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.8)',
                  transition: 'background 0.25s ease, color 0.25s ease, transform 0.25s ease',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#3B82F6'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.borderColor = '#3B82F6'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 20,
            }}
          >
            Quick Links
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.8)',
                  transition: 'color 0.2s ease',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 20,
            }}
          >
            Contact
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href="mailto:akshayy.deshpande@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.8)',
                width: 'fit-content',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              akshayy.deshpande@gmail.com
            </a>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Belagavi, Karnataka, India
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            &copy; {new Date().getFullYear()} Akshay Deshpande. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
