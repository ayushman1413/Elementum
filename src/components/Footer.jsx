const FOOTER_COLS = [
  {
    title: 'Company',
    links: ['About', 'Services', 'Blog', 'Careers'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Cookies', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Twitter', 'LinkedIn', 'Instagram', 'GitHub'],
  },
  {
    title: 'Get in Touch',
    isContact: true,
    lines: [
      '123 Design Street',
      'New York, NY 10001',
      '',
      '+1 (555) 123-4567',
      '',
      'hello@elementum.com',
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#e4f4e1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-gray-300 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4
                  className="font-semibold text-gray-900 mb-4 text-sm"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {col.title}
                </h4>

                {col.isContact ? (
                  <address className="not-italic text-sm text-gray-700 leading-relaxed space-y-1">
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
                          className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
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

          <div className="border-t border-gray-300 pt-8 text-center">
            <p
              className="text-sm text-gray-700"
              style={{ letterSpacing: '-0.01em' }}
            >
              © 2024 Elementum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
