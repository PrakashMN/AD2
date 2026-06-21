import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      style={{
        maxWidth: 480,
        margin: '0 auto',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: 'var(--accent)',
          marginBottom: 8,
          textAlign: 'center',
        }}
      >
        Get in Touch
      </div>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 36,
          lineHeight: 1.3,
        }}
      >
        Mountains are calling!
        <br />
        <span className="accent-italic">Join me</span> on my next adventure
      </p>

      {submitted ? (
        <div
          style={{
            textAlign: 'center',
            padding: '48px 24px',
            background: 'var(--accent-subtle)',
            borderRadius: 16,
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 16px', display: 'block' }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text)',
              fontWeight: 600,
              fontSize: '1.05rem',
            }}
          >
            Thanks for reaching out!
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginTop: 4,
            }}
          >
            I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: '15px 18px',
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text)',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)'
              e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.boxShadow = 'none'
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: '15px 18px',
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text)',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)'
              e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.boxShadow = 'none'
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            style={{
              padding: '15px 18px',
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text)',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)'
              e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.boxShadow = 'none'
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            style={{
              padding: '15px 18px',
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text)',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)'
              e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.boxShadow = 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '15px 28px',
              borderRadius: 12,
              background: 'var(--accent)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
              marginTop: 4,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(59,130,246,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
