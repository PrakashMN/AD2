import Sponsors from '../components/Sponsors'
import ContactForm from '../components/ContactForm'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <>
      <section style={{ paddingTop: 140 }}>
        <Gallery />
      </section>
      <Sponsors />
      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <ContactForm />
      </section>
    </>
  )
}
