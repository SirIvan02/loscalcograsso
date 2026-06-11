import { motion } from 'framer-motion'

const features = [
  { icon: '◉', title: 'Atmosfera Intima', desc: 'Spazi pensati per conversazioni autentiche e momenti indimenticabili.' },
  { icon: '◈', title: 'Design Contemporaneo', desc: 'Interni moderni che celebrano il territorio mantovano.' },
  { icon: '◎', title: 'Cucina a Vista', desc: 'L\'open kitchen ci connette ai nostri ospiti, rendendo ogni cena uno spettacolo.' },
  { icon: '◐', title: 'Abbinamenti Vino', desc: 'Il sommelier crea percorsi enologici personalizzati per ogni tavolo.' },
  { icon: '◑', title: 'LGBTQ+ Friendly', desc: 'Un ambiente accogliente e inclusivo dove tutti sono i benvenuti.' },
  { icon: '◒', title: 'Pet Friendly', desc: 'I vostri amici a quattro zampe sono i benvenuti nella nostra terrazza.' },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">L&apos;Esperienza</span>
            <span className="w-12 h-px bg-gold" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-text-primary tracking-wide"
          >
            Più di una cena.
            <br />
            <em className="font-serif italic text-gold">Un&apos;esperienza</em> sensoriale completa.
          </motion.h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group p-8 border border-black/6 hover:border-gold/40 hover:bg-surface transition-all duration-500"
              data-hover
            >
              <span className="text-gold text-2xl block mb-6">{f.icon}</span>
              <h3 className="font-display text-xl font-light text-text-primary mb-3 tracking-wide group-hover:text-gold transition-colors duration-300">
                {f.title}
              </h3>
              <p className="font-sans text-xs leading-loose text-text-secondary font-light">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recognition strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 py-16 px-12 bg-surface flex flex-wrap items-center justify-center gap-16"
        >
          {[
            { award: 'MICHELIN Guide', year: 'Segnalato', sub: 'Guida Michelin Italia' },
            { award: "Travellers' Choice", year: 'Award', sub: 'TripAdvisor' },
            { award: '4.8 / 5', year: 'Valutazione', sub: 'Migliaia di recensioni' },
            { award: 'Top 10', year: 'Mantova', sub: 'Ristoranti della città' },
          ].map((r, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl font-light text-text-primary tracking-wide">{r.award}</p>
              <p className="font-serif italic text-sm text-gold mt-1">{r.year}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-text-secondary mt-1">{r.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
