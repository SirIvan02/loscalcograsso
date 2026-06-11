import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import saporiImg from '../assets/sapori.webp'
import luccioImg from '../assets/luccio.webp'
import piattoImg from '../assets/piatto.jpg'
import egoImg from '../assets/ego.webp'


gsap.registerPlugin(ScrollTrigger)

const dishes = [
  {
    id: 1,
    name: 'Bigoli con Gamberoni',
    subtitle: 'Roquefort e Noci',
    description: 'Pasta fresca di grano duro, gamberi rossi di Sicilia, crema di Roquefort affinato, gherigli di noce tostati e olio al dragoncello.',
    type: 'Primo Piatto',
    gradient: 'from-amber-50 via-orange-50 to-amber-100',
    accent: '#B8860B',
    img: saporiImg,
  },
  {
    id: 2,
    name: 'Tortelli di Zucca',
    subtitle: 'Mantovani',
    description: 'Il grande classico mantovano. Pasta all\'uovo sfogliata, ripieno di zucca marina di Chioggia, mostarda, amaretti e parmigiano 36 mesi.',
    type: 'Piatto Signature',
    gradient: 'from-orange-50 via-amber-50 to-yellow-50',
    accent: '#B5683C',
    featured: true,
    img: piattoImg,
  },
  {
    id: 3,
    name: 'Luccio in Salsa',
    subtitle: 'alla Moda dello Scalco',
    description: 'Ricetta della tradizione mantovana rivisitata. Luccio del Mincio, salsa verde alle erbe, capperi di Pantelleria e olive taggiasche.',
    type: 'Secondo Piatto',
    gradient: 'from-green-50 via-emerald-50 to-teal-50',
    accent: '#2D6A4F',
    img: luccioImg,
  },
  {
    id: 4,
    name: 'Spaghetti al Nero',
    subtitle: 'Capesante e Guanciale',
    description: 'Spaghetti trafilati al bronzo al nero di seppia, capesante bretoni scottate, guanciale croccante di Norcia, crema di topinambur.',
    type: 'Primo Piatto',
    gradient: 'from-slate-100 via-gray-50 to-slate-50',
    accent: '#374151',
    img: egoImg,
  },
]

function DishCard({ dish, index }: { dish: typeof dishes[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      className="group relative cursor-pointer"
    >
      {/* Image area */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${dish.gradient} overflow-hidden`}>
        {dish.img
          ? <img src={dish.img} alt={dish.name} className="absolute inset-0 w-full h-full object-cover" />
          : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div
                  className="w-40 h-40 rounded-full border transition-all duration-700"
                  style={{
                    borderColor: dish.accent + '30',
                    boxShadow: hovered ? `0 0 40px ${dish.accent}15` : 'none',
                  }}
                />
                <div className="absolute inset-4 rounded-full border" style={{ borderColor: dish.accent + '20' }} />
                <div className="absolute inset-8 rounded-full" style={{ background: `radial-gradient(circle, ${dish.accent}18, transparent)` }} />
                <p className="absolute inset-0 flex items-center justify-center font-serif italic text-[10px] tracking-widest text-center leading-loose" style={{ color: dish.accent + 'aa' }}>
                  {dish.type}
                </p>
              </div>
            </div>
          )
        }

        {/* Featured badge */}
        {dish.featured && (
          <div className="absolute top-4 right-4 bg-gold text-white font-sans text-[9px] tracking-[0.3em] uppercase px-3 py-1.5">
            Signature
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-text-primary/90 flex items-center justify-center p-8"
        >
          <p className="font-sans text-xs text-white/80 text-center leading-loose tracking-wide">
            {dish.description}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="pt-6 pb-2">
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-2">{dish.type}</p>
        <h3 className="font-display text-2xl font-light text-text-primary tracking-wide">
          {dish.name}
        </h3>
        <p className="font-serif italic text-sm text-text-secondary mt-0.5">{dish.subtitle}</p>
        <div
          className="mt-4 flex items-center gap-2 text-text-primary group-hover:text-gold transition-colors duration-300"
        >
          <span className="font-sans text-xs tracking-[0.25em] uppercase">Scopri</span>
          <span
            className="h-px bg-current transition-all duration-300"
            style={{ width: hovered ? '32px' : '16px' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function Menu() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="menu" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">I Nostri Piatti</span>
            <span className="w-12 h-px bg-gold" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-text-primary tracking-wide leading-tight"
          >
            Piatti d&apos;Autore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif italic text-base text-text-secondary mt-4 tracking-wide"
          >
            Ingredienti stagionali. Tecnica raffinata. Sapori autentici.
          </motion.p>
        </div>

        {/* Dishes grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 border border-black/15 font-sans text-xs tracking-[0.3em] uppercase text-text-primary px-12 py-5 hover:bg-text-primary hover:text-white hover:border-text-primary transition-all duration-400"
          >
            Prenota la tua Esperienza
            <span className="w-8 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  )
}
