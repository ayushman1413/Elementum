import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    meta:  'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    meta:  'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    meta:  'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function Services() {
  const headRef = useInView(0.2)
  const listRef = useInView(0.15)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <svg
        className="absolute right-0 top-0 pointer-events-none hidden lg:block"
        width="200"
        height="260"
        viewBox="0 0 200 260"
        fill="none"
        style={{ zIndex: 0 }}
      >
        <path
          d="M200 0 C140 40, 80 60, 100 130 C120 200, 60 220, 80 260"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div ref={headRef} className="reveal mb-14">
          <h2
            className="font-sans leading-tight"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
            }}
          >
            What we{' '}
            <span
              className="inline-block px-3 rounded-xl"
              style={{ background: '#d1fae5' }}
            >
              can
            </span>
            <br />
            <span
              style={{
                borderBottom: '3px solid #F59E0B',
                paddingBottom: 2,
              }}
            >
              offer
            </span>{' '}
            you!
          </h2>
        </div>

        <div ref={listRef} className="reveal space-y-0">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="service-row"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="service-meta text-xs text-gray-400 leading-relaxed" style={{ maxWidth: 200 }}>
                {svc.meta}
              </p>

              <h3
                className="service-title font-sans font-bold"
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                {svc.title}
              </h3>

              <span className="service-arrow text-xl font-light text-gray-700">
                &#8594;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
