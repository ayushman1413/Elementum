import { useInView } from '../hooks/useInView'

export default function Newsletter() {
  const ref = useInView(0.2)

  return (
    <section
      style={{ background: '#e4f4e1' }}
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Purple teardrop accent */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <path
            d="M75 25 C75 25 75 80 40 115 C12 90 5 60 5 35 C5 16 20 3 40 3 C60 3 75 12 75 25Z"
            fill="#a855f7"
          />
        </svg>
      </div>

      <div ref={ref} className="reveal text-center max-w-2xl mx-auto px-6 lg:px-8">
        <h2
          className="font-sans leading-tight mb-4"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Subscribe to our newsletter
        </h2>

        <p className="text-gray-600 text-base mb-8" style={{ lineHeight: 1.7 }}>
          Get curated insights on design, technology, and digital strategy delivered to your inbox
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  )
}
