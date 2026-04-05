import { useInView } from '../hooks/useInView'

export default function About() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section id="studio" className="relative overflow-hidden py-20 lg:py-32 bg-white">
      <div
        className="absolute pointer-events-none"
        style={{
          right: '30%',
          top: '10%',
          width: 360,
          height: 360,
          background: 'radial-gradient(circle, rgba(252,231,243,0.7) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <svg
        className="absolute right-0 top-1/2 pointer-events-none hidden lg:block"
        width="260"
        height="400"
        viewBox="0 0 260 400"
        fill="none"
        style={{ zIndex: 0 }}
      >
        <path
          d="M260 20 C200 80, 80 100, 60 180 C40 260, 180 300, 140 380"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div ref={leftRef} className="reveal-left">
            <h2
              className="font-sans leading-tight mb-6"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              <span
                style={{
                  borderBottom: '3px solid #F59E0B',
                  paddingBottom: 2,
                }}
              >
                Tomorrow
              </span>{' '}
              should
              <br />
              be better than{' '}
              <span className="highlight-green" style={{ padding: '0 6px' }}>
                today
              </span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              We are a team of strategists, designers communicators, researchers. Together, we belive that progress only happens when you refuse to play things safe.
            </p>

            <a href="#services" className="inline-block font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Read more →
            </a>
          </div>

          <div ref={rightRef} className="reveal-right relative flex justify-center lg:justify-end">
            <div
              className="absolute"
              style={{
                top: '-20px',
                right: '0px',
                width: 90,
                height: 90,
                background: '#ef4444',
                borderRadius: 6,
                zIndex: 0,
              }}
            />

            <div
              className="relative z-10 rounded-full overflow-hidden"
              style={{
                width: 'clamp(260px, 35vw, 400px)',
                height: 'clamp(260px, 35vw, 400px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <svg className="section-curve" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 Q360,120 720,60 T1440,60" />
      </svg>
    </section>
  )
}
