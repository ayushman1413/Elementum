import { useInView } from '../hooks/useInView'

// Photos that float around the testimonial card
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
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        ref={sectionRef}
        className="reveal max-w-7xl mx-auto px-6 lg:px-16"
      >
        {/* ── Heading ── */}
        <h2
          className="text-center font-sans mb-16"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.02em',
          }}
        >
          What our customer
          <br />
          says{' '}
          <span
            style={{
              borderBottom: '3px solid #F59E0B',
              paddingBottom: 2,
            }}
          >
            About Us
          </span>
        </h2>

        {/* ── Layout: scattered photos + center card ── */}
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
                className="profile-circle"
                style={{ width: p.size, height: p.size }}
              />
            </div>
          ))}

          {/* Testimonial card */}
          <div
            className="relative z-10 mx-auto"
            style={{
              background: '#f0fdf4',
              borderRadius: 20,
              padding: 'clamp(24px, 4vw, 44px)',
              maxWidth: 540,
              textAlign: 'center',
              boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
            }}
          >
            {/* Open quote */}
            <span
              className="block text-5xl leading-none mb-2"
              style={{ color: '#6b7280', fontFamily: 'Georgia, serif' }}
            >
              &#8220;
            </span>

            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}
            >
              Elementum delivered the site with inthe timeline as they requested.
              Inthe end, the client found a 50% increase in traffic with in days
              since its launch. They also had an impressive ability to use
              technologies that the company hasnt used, which have also proved to
              be easy to use and reliable
            </p>

            {/* Close quote */}
            <span
              className="block text-5xl leading-none mt-2"
              style={{ color: '#6b7280', fontFamily: 'Georgia, serif' }}
            >
              &#8221;
            </span>
          </div>
        </div>

        {/* Mobile: simple photo strip */}
        <div className="lg:hidden flex flex-wrap justify-center gap-3 mt-8">
          {SCATTERED_PHOTOS.slice(0, 5).map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt=""
              className="profile-circle"
              style={{ width: 56, height: 56 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
