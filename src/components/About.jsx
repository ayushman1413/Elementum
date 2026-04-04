import { useInView } from '../hooks/useInView'

export default function About() {
  const leftRef  = useInView(0.2)
  const rightRef = useInView(0.2)

  return (
    <section id="studio" className="relative overflow-hidden py-20 lg:py-32 bg-white">
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
              Tomorrow should be better than today
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              We believe that progress happens when you refuse to play it safe. Our team combines strategic thinking with creative execution to deliver solutions that truly matter to our clients and their audiences.
            </p>

            <a href="#services" className="inline-block font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Read more →
            </a>
          </div>

          <div ref={rightRef} className="reveal-right relative flex justify-center lg:justify-end">
            {/* Red accent shape */}
            <div
              className="absolute"
              style={{
                top: '-16px',
                right: '-16px',
                width: 100,
                height: 100,
                background: '#ef4444',
                borderRadius: 12,
                zIndex: 0,
              }}
            />

            <div
              className="relative z-10 rounded-2xl overflow-hidden"
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
        </div>
      </div>
    </section>
  )
}
