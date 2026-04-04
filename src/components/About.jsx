import { useInView } from '../hooks/useInView'

export default function About() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section id="studio" className="relative overflow-hidden py-24 lg:py-32">
      {/* Pink gradient blob */}
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

      {/* Red decorative curved line */}
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

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div ref={leftRef} className="reveal-left">
            <h2
              className="font-sans leading-tight mb-5"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
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

            <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-md">
              We are a team of strategists, designers communicators, researchers.
              Togeather, we belive that progress only happens when you refuse to
              play things safe.
            </p>

            <a href="#services" className="read-more">
              Read more <span className="read-more-line" /> →
            </a>
          </div>

          {/* ── Right: Circular image + red square ── */}
          <div
            ref={rightRef}
            className="reveal-right relative flex justify-center lg:justify-end"
          >
            {/* Red square accent */}
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
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=600&fit=crop&crop=faces"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
