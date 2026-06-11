import { useEffect, useRef } from 'react'
import localeImg from '../assets/locale.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const mottoRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: headlineRef.current, start: 'top 80%' }
        }
      )
      gsap.fromTo(textRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(imageRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%' }
        }
      )
      gsap.fromTo(statsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' }
        }
      )
      gsap.fromTo(mottoRef.current,
        { opacity: 0, scaleX: 0.95 },
        {
          opacity: 1, scaleX: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: mottoRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-px bg-gold" />
          <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">Il Ristorante</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <h2
              ref={headlineRef}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight tracking-wide text-text-primary mb-10"
            >
              Un viaggio culinario
              <br />
              <em className="font-serif italic text-gold">contemporaneo</em>
              <br />
              nel cuore di Mantova.
            </h2>

            <div ref={textRef} className="space-y-6">
              <p className="font-sans text-sm leading-loose text-text-secondary font-light tracking-wide">
                Lo Scalco Grasso è un ristorante italiano contemporaneo situato a Mantova, 
                guidato dallo Chef Vanni Righi. La sua filosofia affonda le radici nella 
                tradizione culinaria mantovana, in continua evoluzione attraverso la 
                sperimentazione, la stagionalità e la creatività.
              </p>
              <p className="font-sans text-sm leading-loose text-text-secondary font-light tracking-wide">
                La cucina celebra gli ingredienti locali, trasformandoli in piatti raffinati 
                che bilanciano autenticità e innovazione. Ogni piatto racconta una storia — 
                di territorio, di stagione, di tecnica e di passione.
              </p>
              <p className="font-serif italic text-base text-text-primary tracking-wide leading-relaxed">
                &ldquo;Non una trattoria tradizionale, ma un'Osteria Contemporanea che reinterpreta 
                la cucina mantovana e lombarda attraverso creatività e raffinata esecuzione.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-black/8">
              {[
                { num: '200+', label: 'Etichette in Cantina' },
                { num: '2015', label: 'Anno di fondazione' },
                { num: '★', label: 'MICHELIN Listed' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-light text-gold">{s.num}</div>
                  <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-text-secondary mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: editorial image placeholder */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative aspect-[3/4] bg-surface overflow-hidden"
              style={{ boxShadow: 'inset 0 0 90px 35px rgba(0,0,0,0.55)' }}
            >
              <img
                src={localeImg}
                alt="Lo Scalco Grasso - locale"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-8">
                <p className="font-sans text-xs tracking-[0.3em] text-white uppercase">Via Trieste 55, Mantova</p>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white flex items-center justify-center shadow-lg">
              <div className="text-center">
                <p className="font-serif italic text-[10px] tracking-widest text-gold">est.</p>
                <p className="font-display text-2xl font-light text-text-primary">2015</p>
              </div>
            </div>
          </div>
        </div>

        {/* Motto banner */}
        <div
          ref={mottoRef}
          className="mt-24 py-10 px-12 bg-text-primary text-center"
        >
          <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light italic tracking-wide text-gold">
            &ldquo;Piatti chiari, amicizia lunga.&rdquo;
          </span>
        </div>
      </div>
    </section>
  )
}
