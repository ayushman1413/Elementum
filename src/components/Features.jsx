import { useInView } from '../hooks/useInView'

export default function Features() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section id="services" className="relative overflow-hidden py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Circular image + triangles ── */}
          <div ref={leftRef} className="reveal-left relative flex justify-center lg:justify-start">
            {/* Top-left small red triangle */}
            <svg
              className="absolute"
              style={{ top: '-10px', left: '-10px', zIndex: 2 }}
              width="60" height="60" viewBox="0 0 60 60"
            >
              <polygon points="30,0 60,60 0,60" fill="#ef4444" />
            </svg>

            {/* Bottom-center large red triangle */}
            <svg
              className="absolute"
              style={{ bottom: '-20px', left: '30%', zIndex: 2 }}
              width="110" height="110" viewBox="0 0 110 110"
            >
              <polygon points="55,0 110,110 0,110" fill="#ef4444" />
            </svg>

            <div
              className="relative rounded-full overflow-hidden z-10"
              style={{
                width: 'clamp(260px, 35vw, 400px)',
                height: 'clamp(260px, 35vw, 400px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div ref={rightRef} className="reveal-right">
            <h2
              className="font-sans leading-tight mb-5"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                letterSpacing: '-0.02em',
              }}
            >
              See how we can
              <br />
              help you{' '}
              <span
                style={{
                  borderBottom: '3px solid #F59E0B',
                  paddingBottom: 2,
                }}
              >
                progress
              </span>
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-md">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            <a href="#" className="read-more">
              Read more <span className="read-more-line" /> →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
