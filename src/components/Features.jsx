import { useInView } from '../hooks/useInView'

export default function Features() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section className="relative overflow-hidden py-12 lg:py-24 bg-white">
      <svg
        className="absolute bottom-0 right-10 hidden lg:block pointer-events-none"
        width="200"
        height="250"
        viewBox="0 0 200 250"
        fill="none"
        style={{ zIndex: 0 }}
      >
        <path
          d="M0 100 Q50 40, 100 80 Q150 120, 200 60"
          stroke="#ff6b6b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M20 200 Q80 160, 140 190 Q180 210, 200 250"
          stroke="#a855f7"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div ref={leftRef} className="reveal-left relative flex justify-center lg:justify-start">
            <div
              className="relative rounded-full overflow-visible z-10"
              style={{
                width: 'clamp(280px, 100%, 420px)',
                height: 'clamp(280px, 100%, 420px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              }}
            >
              <svg
                className="absolute"
                style={{ top: '20px', left: '20px', zIndex: 3, pointerEvents: 'none' }}
                width="80" height="80" viewBox="0 0 80 80"
              >
                <polygon points="40,0 80,80 0,80" fill="#ef4444" />
              </svg>

              <svg
                className="absolute"
                style={{ bottom: '30px', right: '40px', zIndex: 20, pointerEvents: 'none' }}
                width="120" height="120" viewBox="0 0 120 120"
              >
                <polygon points="60,0 120,120 0,120" fill="#ef4444" />
              </svg>

              <div
                className="relative rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-400/40"
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 10,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div ref={rightRef} className="reveal-right">
            <h2
              className="font-sans leading-tight mb-6"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
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

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>

            <a href="#contact" className="inline-block font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
