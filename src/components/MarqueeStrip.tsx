import { motion } from 'framer-motion'

export default function MarqueeStrip() {
  const peaks = [
    { name: 'Mount Everest', elevation: '8,849m' },
    { name: 'K2', elevation: '8,611m' },
    { name: 'Kangchenjunga', elevation: '8,586m' },
    { name: 'Lhotse', elevation: '8,516m' },
    { name: 'Makalu', elevation: '8,485m' },
    { name: 'Cho Oyu', elevation: '8,188m' },
    { name: 'Dhaulagiri', elevation: '8,167m' },
    { name: 'Manaslu', elevation: '8,163m' },
    { name: 'Nanga Parbat', elevation: '8,126m' },
    { name: 'Annapurna', elevation: '8,091m' },
    { name: 'Gasherbrum I', elevation: '8,080m' },
    { name: 'Broad Peak', elevation: '8,051m' },
    { name: 'Shivling', elevation: '6,543m' },
    { name: 'Mount Meru', elevation: '6,660m' },
    { name: 'Aconcagua', elevation: '6,961m' },
    { name: 'Denali', elevation: '6,190m' },
    { name: 'Mount Kilimanjaro', elevation: '5,895m' },
    { name: 'Mount Elbrus', elevation: '5,642m' },
    { name: 'Mount Vinson', elevation: '4,892m' },
    { name: 'Carstensz Pyramid', elevation: '4,884m' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '18px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'var(--surface)',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, var(--surface) 0%, transparent 8%, transparent 92%, var(--surface) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: 48,
          width: 'max-content',
          animation: 'slide 100s linear infinite',
          paddingLeft: 24,
        }}
      >
        {[...peaks, ...peaks].map((peak, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 8,
              fontFamily: 'var(--font-serif)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              whiteSpace: 'nowrap',
            }}
          >
            {peak.name}
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.05em',
                color: 'rgba(59,130,246,0.5)',
                fontWeight: 500,
              }}
            >
              {peak.elevation}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      </div>
    </motion.div>
  )
}
