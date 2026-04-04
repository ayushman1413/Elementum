import { useInView } from '../hooks/useInView'

export default function Features() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div ref={leftRef} className="reveal-left relative flex justify-center lg:justify-start">
            {/* Red accent triangle - top left */}
            <div
              className="absolute"
              style={{
                top: '-24px',
                left: '-24px',
                width: 80,
                height: 80,
                background: '#ef4444',
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                zIndex: 2,
              }}
            />

            {/* Red accent triangle - bottom */}
            <div
              className="absolute"
              style={{
                bottom: '-32px',
                left: '25%',
                width: 120,
                height: 120,
                background: '#ef4444',
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                zIndex: 2,
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden z-10"
              style={{
                width: 'clamp(280px, 100%, 420px)',
                height: 'clamp(280px, 100%, 420px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Team working together"
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
              See how we can help you progress
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              We combine strategic thinking with creative execution to deliver solutions that drive real results. Whether it's brand transformation, digital design, or full-scale development, we're equipped to help you succeed.
            </p>

            <a href="#contact" className="inline-block font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Let's work together →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
