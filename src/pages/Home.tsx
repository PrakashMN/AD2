import Hero from '../components/Hero'
import About from '../components/About'
import Expeditions from '../components/Expeditions'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

const videoId = 'bFntZkHcZHE'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expeditions />
      <Sponsors />
      <section
        style={{
          padding: '60px 24px',
          background: 'var(--bg)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              aspectRatio: '16 / 9',
              border: 'none',
              borderRadius: 12,
            }}
          />
        </div>
      </section>
      <Contact />
    </>
  )
}
