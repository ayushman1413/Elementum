import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    meta: 'Brand Strategy',
    title: 'Brand Development',
  },
  {
    meta: 'Design & Creative',
    title: 'Digital Design',
  },
  {
    meta: 'Development',
    title: 'Web Applications',
  },
]

export default function Services() {
  const headRef = useInView(0.2)
  const listRef = useInView(0.15)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div ref={headRef} className="reveal mb-16">
          <h2
            className="font-sans leading-tight"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            What we can offer you!
          </h2>
        </div>

        <div ref={listRef} className="reveal space-y-0">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="border-b border-gray-200 py-8 hover:bg-gray-50 px-4 -mx-4 transition-colors cursor-pointer group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                {svc.meta}
              </p>

              <div className="flex items-center justify-between gap-4">
                <h3
                  className="font-sans font-bold"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {svc.title}
                </h3>

                <span className="text-2xl text-gray-300 group-hover:text-gray-600 transition-colors flex-shrink-0">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
