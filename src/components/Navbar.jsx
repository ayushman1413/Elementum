import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
      style={{ animation: 'fadeIn 0.6s ease both' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-black"
          style={{ letterSpacing: '-0.02em' }}
        >
          Elementum
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex flex-col gap-[5px] p-2 group"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-[2px] bg-black rounded-full transition-all duration-300 ${
                i === 0
                  ? menuOpen
                    ? 'w-6 rotate-45 translate-y-[7px]'
                    : 'w-6'
                  : i === 1
                  ? menuOpen
                    ? 'w-0 opacity-0'
                    : 'w-4 group-hover:w-6'
                  : menuOpen
                  ? 'w-6 -rotate-45 -translate-y-[7px]'
                  : 'w-5 group-hover:w-6'
              }`}
            />
          ))}
        </button>
      </div>

      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
