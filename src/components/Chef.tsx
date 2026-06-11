import { motion } from 'framer-motion'
import chefImg from '../assets/chef.png'

export function Chef() {
  return (
    <section id="chef" className="py-32 bg-text-primary overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div
              className="relative aspect-[3/4] bg-white/5 overflow-hidden"
              style={{ boxShadow: 'inset 0 0 70px 25px rgba(0,0,0,0.45)' }}
            >
              <img
                src={chefImg}
                alt="Chef Vanni Righi"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-gold p-8 max-w-xs"
            >
              <p className="font-serif italic text-white text-sm leading-relaxed">
                &ldquo;La cucina è memoria, creatività e rispetto per il territorio.&rdquo;
              </p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/70 mt-4">
                — Chef Vanni Righi
              </p>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">Lo Chef</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-white tracking-wide leading-tight mb-10"
            >
              Vanni
              <br />
              <em className="font-serif italic text-gold">Righi</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="font-sans text-sm leading-loose text-white/60 font-light tracking-wide">
                Uno chef dedito alla preservazione delle tradizioni regionali, 
                reinterpretandole attraverso una moderna prospettiva gastronomica. 
                La sua cucina è un dialogo costante tra passato e presente.
              </p>
              <p className="font-sans text-sm leading-loose text-white/60 font-light tracking-wide">
                Formatosi tra le cucine dell&apos;Emilia e della Lombardia, Vanni Righi ha 
                sviluppato un linguaggio culinario personale che onora il territorio 
                mantovano pur guardando verso orizzonti contemporanei.
              </p>
              <p className="font-sans text-sm leading-loose text-white/60 font-light tracking-wide">
                Ogni stagione porta nuova ispirazione — dal mercato locale, dai produttori 
                del territorio, dalla natura del Mincio e delle valli mantovane.
              </p>
            </motion.div>

            {/* Philosophy pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10"
            >
              {[
                { icon: '◎', label: 'Stagionalità' },
                { icon: '◈', label: 'Territorio' },
                { icon: '◐', label: 'Creatività' },
              ].map(p => (
                <div key={p.label} className="text-center">
                  <span className="text-gold text-xl block mb-2">{p.icon}</span>
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">{p.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
