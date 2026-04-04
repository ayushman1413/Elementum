const FOOTER_COLS = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    isContact: true,
    lines: [
      '1498w Fluton ste, STE',
      '2D Chicago, IL 63867.',
      '',
      '(123) 456789000',
      '',
      'info@elementum.com',
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#e4f4e1' }}>
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.12)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {FOOTER_COLS.map((col) => (
            <div key={col.title + (col.isContact ? '-contact' : '')}>
              <h4
                className="font-sans font-semibold text-sm mb-4 text-gray-800"
                style={{ letterSpacing: '0.01em' }}
              >
                {col.title}
              </h4>

              {col.isContact ? (
                <address className="not-italic text-xs text-gray-500 leading-relaxed space-y-1">
                  {col.lines.map((line, i) =>
                    line ? (
                      <p key={i}>{line}</p>
                    ) : (
                      <br key={i} />
                    )
                  )}
                </address>
              ) : (
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-gray-500 hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-center text-xs text-gray-400 mt-14"
          style={{ letterSpacing: '0.01em' }}
        >
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  )
}
