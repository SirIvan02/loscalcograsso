import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Loader } from './components/Loader'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Chef } from './components/Chef'
import { Wine } from './components/Wine'
import { Experience } from './components/Experience'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useCursor } from './hooks/useCursor'
import { useScrollProgress } from './hooks/useScrollProgress'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useCursor()
  useScrollProgress()

  useEffect(() => {
    if (loaded) {
      ScrollTrigger.refresh()
    }
  }, [loaded])

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="scroll-progress" />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Menu />
          <Chef />
          <Wine />
          <Experience />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
