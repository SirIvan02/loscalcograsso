import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Il Ristorante', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Chef', href: '#chef' },
  { label: 'Cantina', href: '#wine' },
  { label: 'Galleria', href: '#gallery' },
  { label: 'Contatti', href: '#contact' },
]

export function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 2.8 }
    )

    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'py-7'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group">
            <img src={logoImg} alt="Lo Scalco Grasso" className="h-20 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-white bg-text-primary px-6 py-3 hover:bg-gold transition-colors duration-400"
          >
            Prenota
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-px bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center lg:hidden"
          >
            <div className="text-center">
              <p className="font-serif text-xs tracking-[0.4em] text-gold uppercase mb-12">Menu</p>
              <ul className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-3xl font-light tracking-wide text-text-primary hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-12 inline-block font-sans text-xs tracking-[0.2em] uppercase text-white bg-text-primary px-8 py-4"
              >
                Prenota un Tavolo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
