import { useInView } from '../hooks/useInView'

export default function Features() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div ref={leftRef} className="reveal-left relative flex justify-center lg:justify-start">
            <svg
              className="absolute"
              style={{ top: '-10px', left: '-10px', zIndex: 2 }}
              width="60" height="60" viewBox="0 0 60 60"
            >
              <polygon points="30,0 60,60 0,60" fill="#ef4444" />
            </svg>

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
                width: 'clamp(280px, 100%, 420px)',
                height: 'clamp(280px, 100%, 420px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
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
