import { useInView } from '../hooks/useInView'

const SCATTERED_PHOTOS = [
  { src: 'https://i.pravatar.cc/200?img=13', size: 70,  style: { top: '10%', left: '2%'  } },
  { src: 'https://i.pravatar.cc/200?img=20', size: 56,  style: { top: '45%', left: '4%'  } },
  { src: 'https://i.pravatar.cc/200?img=45', size: 96,  style: { top: '20%', left: '10%' } },
  { src: 'https://i.pravatar.cc/200?img=25', size: 60,  style: { bottom:'8%', left: '6%' } },
  { src: 'https://i.pravatar.cc/200?img=30', size: 64,  style: { top: '5%',  right: '14%'} },
  { src: 'https://i.pravatar.cc/200?img=8',  size: 80,  style: { top: '32%', right: '4%' } },
  { src: 'https://i.pravatar.cc/200?img=60', size: 110, style: { bottom:'5%', right:'2%' } },
]

export default function Testimonials() {
  const sectionRef = useInView(0.15)

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div
        ref={sectionRef}
        className="reveal max-w-7xl mx-auto px-6 lg:px-8"
      >
        <h2
          className="text-center font-sans mb-16"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          What our customer<br />
          says About Us
        </h2>

        <div className="relative flex items-center justify-center" style={{ minHeight: 360 }}>

          {/* Scattered photos – hidden on small screens */}
          {SCATTERED_PHOTOS.map((p, i) => (
            <div
              key={i}
              className="absolute hidden lg:block"
              style={{ ...p.style, animation: `scaleIn 0.5s ease ${0.2 + i * 0.08}s both` }}
            >
              <img
                src={p.src}
                alt=""
                className="rounded-full object-cover border-4 border-white shadow-md"
                style={{ width: p.size, height: p.size }}
              />
            </div>
          ))}

          {/* Testimonial card */}
          <div
            className="relative z-10 mx-auto"
            style={{
              background: '#f0fdf4',
              borderRadius: 24,
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: 540,
              textAlign: 'center',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            }}
          >
            <p
              className="text-gray-700 leading-relaxed mb-6"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
            >
              "Elementum transformed our entire digital presence. The team was professional, creative, and delivered results that exceeded our expectations. Within months, we saw significant growth in both engagement and conversions."
            </p>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-gray-900">Sarah Mitchell</p>
              <p className="text-sm text-gray-600">Founder, Creative Studio</p>
            </div>
          </div>
        </div>

        {/* Mobile: simple photo strip */}
        <div className="lg:hidden flex flex-wrap justify-center gap-4 mt-8">
          {SCATTERED_PHOTOS.slice(0, 5).map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt=""
              className="rounded-full object-cover border-4 border-white shadow-sm"
              style={{ width: 56, height: 56 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
