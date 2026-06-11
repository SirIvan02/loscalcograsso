import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import viniImg from '../assets/vini.webp'

const wineCategories = [
  { label: 'Vini Naturali', count: '80+', desc: 'Produttori artigianali, metodi biodinamici e sostenibili' },
  { label: 'Produttori Locali', count: '60+', desc: 'Il meglio delle cantine mantovane e lombarde' },
  { label: 'Eccellenze Italiane', count: '40+', desc: 'Barolo, Brunello, Amarone, Sagrantino e oltre' },
  { label: 'Selezioni Internazionali', count: '30+', desc: 'Borgogna, Champagne, vini del Nuovo Mondo' },
]


export function Wine() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section ref={sectionRef} id="wine" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">La Cantina</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-text-primary tracking-wide leading-tight mb-10"
            >
              Oltre 200
              <br />
              <em className="font-serif italic text-gold">etichette</em> selezionate
              <br />
              con cura e passione.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-sans text-sm leading-loose text-text-secondary font-light tracking-wide mb-10"
            >
              La nostra cantina è il risultato di anni di ricerca e di dialogo diretto 
              con produttori che condividono la nostra filosofia: rispetto per il territorio, 
              artigianalità, sostenibilità. Il sommelier è a vostra disposizione per guidarvi 
              in un abbinamento personalizzato e indimenticabile.
            </motion.p>

            {/* Categories */}
            <div className="space-y-4">
              {wineCategories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="flex items-start gap-6 py-4 border-b border-black/6 group"
                  data-hover
                >
                  <span className="font-display text-2xl font-light text-gold min-w-[3rem]">{cat.count}</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-text-primary tracking-wide group-hover:text-gold transition-colors">{cat.label}</p>
                    <p className="font-sans text-xs text-text-secondary mt-0.5 leading-relaxed">{cat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: decorative wine display */}
          <motion.div style={{ y }} className="relative">
            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ boxShadow: 'inset 0 0 70px 25px rgba(0,0,0,0.45)' }}
            >
              <img
                src={viniImg}
                alt="La cantina - selezione vini"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
