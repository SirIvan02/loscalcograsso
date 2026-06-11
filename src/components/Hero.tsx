import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { AmbientCanvas } from './AmbientCanvas'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 })

    // decorative line
    tl.fromTo(decorRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }
    )

    // subtitle reveal
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.3'
    )

    // Split headline into chars for stagger
    if (titleRef.current) {
      const text1 = titleRef.current.querySelector('.line1') as HTMLElement
      const text2 = titleRef.current.querySelector('.line2') as HTMLElement
      ;[text1, text2].forEach((el, i) => {
        if (!el) return
        const words = el.textContent?.split(' ') ?? []
        el.innerHTML = words
          .map(w => `<span class="inline-block overflow-hidden"><span class="inline-block word-reveal">${w}</span></span>`)
          .join(' ')
        tl.fromTo(
          el.querySelectorAll('.word-reveal'),
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1, stagger: 0.06, ease: 'power4.out' },
          i === 0 ? '-=0.2' : '-=0.8'
        )
      })
    }

    tl.fromTo(taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.4'
    )
    tl.fromTo(descRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.5'
    )
    tl.fromTo(ctasRef.current?.children ?? [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
      '-=0.4'
    )
    tl.fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    )

    // Scroll parallax
    gsap.to(titleRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Ambient 3D canvas */}
      <AmbientCanvas />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Corner lines */}
      <div className="absolute top-24 left-12 w-16 h-px bg-gold opacity-30" />
      <div className="absolute top-24 left-12 w-px h-16 bg-gold opacity-30" />
      <div className="absolute top-24 right-12 w-16 h-px bg-gold opacity-30" style={{ transformOrigin: 'right' }} />
      <div className="absolute top-24 right-12 w-px h-16 bg-gold opacity-30" style={{ transformOrigin: 'top', marginLeft: 'auto', marginRight: 0 }} />
      <div className="absolute bottom-12 left-12 w-16 h-px bg-gold opacity-30" />
      <div className="absolute bottom-28 left-12 w-px h-16 bg-gold opacity-30" />
      <div className="absolute bottom-12 right-12 w-16 h-px bg-gold opacity-30" />
      <div className="absolute bottom-28 right-12 w-px h-16 bg-gold opacity-30" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

        {/* Eyebrow label */}
        <div
          ref={subtitleRef}
          className="opacity-0 flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-gold" />
          <span className="font-sans text-xs tracking-[0.5em] text-gold uppercase">
            Mantova — Italia
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        {/* Decorative line above title */}
        <div
          ref={decorRef}
          className="w-px h-16 bg-gold mx-auto mb-8"
          style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
        />

        {/* Main headline */}
        <div ref={titleRef}>
          <h1 className="font-display leading-none">
            <span
              className="line1 block text-[clamp(3.2rem,9vw,8rem)] font-light tracking-[0.08em] text-text-primary"
            >
              Lo Scalco Grasso
            </span>
            <span
              className="line2 block font-serif italic text-[clamp(1.2rem,3vw,2.8rem)] font-light tracking-[0.3em] text-gold mt-2"
            >
              Osteria Contemporanea
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="opacity-0 font-serif italic text-[clamp(1rem,1.8vw,1.4rem)] text-text-secondary mt-8 tracking-wide"
        >
          &ldquo;Tradizione Mantovana. Creatività Contemporanea.&rdquo;
        </p>

        {/* Description */}
        <p
          ref={descRef}
          className="opacity-0 font-sans text-sm tracking-wider text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed font-light"
        >
          A contemporary culinary journey where Mantuan tradition meets innovation,<br />
          seasonal ingredients and refined craftsmanship.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex items-center justify-center gap-6 mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-text-primary text-white font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold transition-all duration-400 group"
          >
            <span>Prenota un Tavolo</span>
            <span className="block w-4 h-px bg-white group-hover:w-6 transition-all duration-300" />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-3 border border-black/20 text-text-primary font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 hover:border-gold hover:text-gold transition-all duration-400 group"
          >
            <span>Esplora il Menu</span>
            <span className="block w-4 h-px bg-current group-hover:w-6 transition-all duration-300" />
          </a>
        </div>

        {/* Motto */}
        <p className="mt-16 font-serif italic text-xs tracking-[0.3em] text-black/25">
          &ldquo;Piatti chiari, amicizia lunga.&rdquo;
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.4em] text-text-secondary uppercase">Scorri</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" style={{
          animation: 'scrollPulse 2s ease-in-out infinite'
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}
