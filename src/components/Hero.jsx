import { useInView } from '../hooks/useInView'

const PROFILE_PHOTOS = [
  { id: 1, src: 'https://i.pravatar.cc/200?img=65', size: 88 },
  { id: 2, src: 'https://i.pravatar.cc/200?img=11', size: 76 },
  { id: 3, src: 'https://i.pravatar.cc/200?img=33', size: 124 },
  { id: 4, src: 'https://i.pravatar.cc/200?img=15', size: 100 },
  { id: 5, src: 'https://i.pravatar.cc/200?img=53', size: 104 },
  { id: 6, src: 'https://i.pravatar.cc/200?img=3',  size: 88 },
  { id: 7, src: 'https://i.pravatar.cc/200?img=5',  size: 128 },
  { id: 8, src: 'https://i.pravatar.cc/200?img=44', size: 104 },
]

const PHOTO_POSITIONS = [
  { left: '1%',   bottom: '8%',  delay: 0.2 },
  { left: '7%',   bottom: '26%', delay: 0.3 },
  { left: '25%',  top:    '4%',  delay: 0.4 },
  { left: '39%',  top:    '12%', delay: 0.5 },
  { left: '50%',  top:    '6%',  delay: 0.55 },
  { right: '24%', top:    '4%',  delay: 0.6 },
  { right: '4%',  top:    '2%',  delay: 0.65 },
  { right: '13%', bottom: '8%',  delay: 0.7 },
]

export default function Hero() {
  const ref = useInView(0.2)

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-0 min-h-screen flex flex-col"
    >
      {/* Decorative: left squiggle */}
      <svg
        className="absolute left-0 top-40 hidden lg:block pointer-events-none"
        width="60"
        height="260"
        viewBox="0 0 60 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'fadeIn 1.2s ease 0.5s both' }}
      >
        <path
          d="M30 10 C10 40, 50 70, 30 100 C10 130, 50 160, 30 190 C10 220, 50 240, 30 260"
          stroke="#ef4444"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative: pink oval */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          left: '10%',
          top: '28%',
          width: 100,
          height: 170,
          border: '2px solid #f9a8d4',
          borderRadius: '50%',
          transform: 'rotate(-20deg)',
          animation: 'fadeIn 1s ease 0.8s both',
        }}
      />

      {/* Decorative: purple shape */}
      <div
        className="absolute right-10 top-40 hidden lg:block pointer-events-none"
        style={{ animation: 'fadeIn 1s ease 0.6s both' }}
      >
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
          <path
            d="M55 5 C55 5 55 60 30 85 C10 65 5 40 5 20 C5 10 15 2 30 2 C45 2 55 5 55 5Z"
            fill="#a855f7"
          />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Main heading */}
        <h1
          className="text-center font-sans leading-tight px-4 mx-auto mb-6"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 7vw, 5.5rem)',
            letterSpacing: '-0.02em',
            maxWidth: '1000px',
            animation: 'fadeUp 0.7s ease 0.1s both',
          }}
        >
          The{' '}
          <span style={{ borderBottom: '2px solid #111' }}>thinkers</span> and
          <br />
          doers were{' '}
          <span style={{ background: '#fce7f3', padding: '0 10px', borderRadius: '8px' }}>changing</span>
          <br />
          the status Quo with
        </h1>

        {/* Subtitle */}
        <p
          className="text-center text-gray-600 mx-auto text-base leading-relaxed mb-12"
          style={{
            maxWidth: '500px',
            animation: 'fadeUp 0.7s ease 0.2s both',
          }}
        >
          We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Scattered Profile Photos (desktop) */}
        <div
          className="relative w-full hidden lg:block"
          style={{ height: 320, animation: 'fadeUp 0.8s ease 0.3s both' }}
        >
          {PROFILE_PHOTOS.map((photo, i) => {
            const pos = PHOTO_POSITIONS[i]
            return (
              <div
                key={photo.id}
                className="absolute"
                style={{
                  ...pos,
                  zIndex: i % 2 === 1 ? 2 : 1,
                  animation: `scaleIn 0.6s ease ${pos.delay}s both`,
                }}
              >
                <img
                  src={photo.src}
                  alt=""
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                  style={{ width: photo.size, height: photo.size }}
                />
              </div>
            )
          })}
        </div>

        {/* Mobile: simple photo row */}
        <div className="lg:hidden flex flex-wrap justify-center gap-4 mt-8 pb-8">
          {PROFILE_PHOTOS.slice(0, 5).map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt=""
              className="rounded-full object-cover border-4 border-white shadow-md"
              style={{ width: 72, height: 72 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
