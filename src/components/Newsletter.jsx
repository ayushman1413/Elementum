import { useInView } from '../hooks/useInView'

export default function Newsletter() {
  const ref = useInView(0.2)

  return (
    <section
      id="contact"
      style={{ background: '#e4f4e1' }}
      className="relative overflow-hidden py-12 lg:py-24"
    >
      <svg
        className="absolute bottom-0 left-32 hidden lg:block pointer-events-none"
        width="280"
        height="200"
        viewBox="0 0 280 200"
        fill="none"
      >
        <path
          d="M0 80 Q70 30, 140 90 Q210 150, 280 100"
          stroke="#ff6b6b"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M20 150 Q100 120, 180 160 Q240 190, 280 200"
          stroke="#a855f7"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
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
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none bg-white shadow-md hover:shadow-lg transition-all duration-300 focus:border-red-400 focus:shadow-lg focus:shadow-red-200"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-400/30 hover:scale-105 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  )
}
