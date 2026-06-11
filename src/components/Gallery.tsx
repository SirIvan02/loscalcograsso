import { motion } from 'framer-motion'
import localeImg from '../assets/locale.png'
import viniImg from '../assets/vini.webp'
import egoImg from '../assets/ego.jpg'
import esternoImg from '../assets/esterno.jpg'
import dettagliImg from '../assets/dettagli.jpg'
import chefAlLavoroImg from '../assets/chef_al_lavoro.png'

const galleryItems = [
  { id: 1, label: 'Sala principale', size: 'tall',     gradient: 'from-amber-50 to-amber-100',     img: localeImg },
  { id: 2, label: 'Tiramisù di baccalà', size: 'wide', gradient: 'from-orange-50 to-amber-50',     img: egoImg },
  { id: 3, label: 'Dettaglio piatto', size: 'square',  gradient: 'from-stone-50 to-stone-100',     img: dettagliImg },
  { id: 4, label: 'La cantina', size: 'tall',          gradient: 'from-slate-50 to-gray-100',      img: viniImg },
  { id: 5, label: 'Chef al lavoro', size: 'square',    gradient: 'from-neutral-50 to-neutral-100', img: chefAlLavoroImg },
  { id: 6, label: 'Il locale', size: 'wide',           gradient: 'from-cream to-surface',          img: esternoImg },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">La Galleria</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-text-primary tracking-wide leading-tight"
            >
              Un racconto
              <br />
              <em className="font-serif italic text-gold">visivo</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block max-w-xs font-sans text-xs leading-loose text-text-secondary font-light self-end"
          >
            Ogni immagine racconta un frammento della nostra storia — di cibo, 
            di persone, di luoghi e di momenti indimenticabili.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className={`group relative overflow-hidden bg-gradient-to-br ${item.gradient} ${
                item.size === 'tall' ? 'row-span-2' : ''
              } ${item.size === 'wide' ? 'col-span-2 lg:col-span-1' : ''}`}
              style={{ aspectRatio: item.size === 'tall' ? '2/3' : '4/3' }}
              data-hover
            >
              {item.img
                ? <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                : <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-px bg-gold opacity-20" /></div>
              }

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/60 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-sans text-xs tracking-[0.25em] text-white uppercase">{item.label}</p>
                </div>
              </div>

              {/* Number label */}
              <span className="absolute top-4 left-4 font-sans text-[9px] tracking-[0.3em] text-text-secondary/30 uppercase">
                0{item.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
