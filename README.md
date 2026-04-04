# Elementum — React Landing Page

A pixel-faithful React implementation of the Elementum Figma design.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icons
- **Nginx** — production static file server
- **Docker** — containerised deployment

---

## Running with Docker (Submission)

```bash
# Build and start
docker-compose up --build

# App runs at:
http://localhost:3000
```

To stop:
```bash
docker-compose down
```

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:5173
```

Build for production:
```bash
npm run build
npm run preview   # → http://localhost:3000
```

---

## Project Structure

```
elementum/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed nav with mobile hamburger
│   │   ├── Hero.jsx          # Hero with heading highlights + scattered photos
│   │   ├── About.jsx         # "Tomorrow should be better than today"
│   │   ├── Features.jsx      # "See how we can help you progress"
│   │   ├── Services.jsx      # "What we can offer you!" — 3 service rows
│   │   ├── Testimonials.jsx  # Customer testimonial + scattered avatars
│   │   ├── Newsletter.jsx    # Subscribe CTA (mint green)
│   │   └── Footer.jsx        # 4-column footer
│   ├── hooks/
│   │   └── useInView.js      # Intersection Observer scroll reveal hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Global styles + animations
├── Dockerfile                # Multi-stage: Node build → Nginx serve
├── docker-compose.yml
└── nginx.conf                # SPA routing + gzip + cache headers
```

---

## Features Implemented

- ✅ All 7 sections from Figma
- ✅ Responsive — mobile / tablet / desktop
- ✅ Pixel-close typography, colours, spacing
- ✅ Word highlights (yellow underline, pink bg, green bg)
- ✅ Scattered circular profile photos in Hero & Testimonials
- ✅ Red triangle decorations in Features section
- ✅ Decorative SVG squiggles and curved lines
- ✅ Mint green Newsletter + Footer sections
- ✅ 4-column Footer with contact info
- ✅ Sticky navbar with scroll shadow
- ✅ Mobile hamburger menu

### Bonus Animations
- ✅ Scroll-reveal (fade-up, slide-in from left/right) via IntersectionObserver
- ✅ Hero heading word highlights animate on load
- ✅ Profile photos scale in with stagger delay
- ✅ Navbar links animated underline on hover
- ✅ Service rows slide arrow on hover
- ✅ Subscribe button lift + shadow on hover
- ✅ Hamburger morphs to ✕ on open
