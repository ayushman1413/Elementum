import { useInView } from '../hooks/useInView'

export default function Newsletter() {
  const ref = useInView(0.2)

  return (
    <section
      style={{ background: '#e4f4e1' }}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Red arrow decoration (top-left area) */}
      <svg
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: '20px', left: '35%' }}
        width="140"
        height="80"
        viewBox="0 0 140 80"
        fill="none"
      >
        <path
          d="M10 10 C40 10, 80 30, 100 60"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M40 20 C60 20, 90 38, 100 60"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arrow tip */}
        <path
          d="M96 50 L104 62 L88 64"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Purple teardrop shape */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <path
            d="M75 25 C75 25 75 80 40 115 C12 90 5 60 5 35 C5 16 20 3 40 3 C60 3 75 12 75 25Z"
            fill="#a855f7"
          />
        </svg>
      </div>

      <div ref={ref} className="reveal text-center max-w-2xl mx-auto px-6">
        <h2
          className="font-sans leading-tight mb-4"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="text-gray-600 text-sm mb-8">
          To make your stay special and even more memorable
        </p>

        <button className="subscribe-btn">Subscribe Now</button>
      </div>
    </section>
  )
}
