import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Features     from './components/Features'
import Services     from './components/Services'
import Testimonials from './components/Testimonials'
import Newsletter   from './components/Newsletter'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
