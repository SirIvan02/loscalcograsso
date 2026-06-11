import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-text-primary pt-24 pb-12">
      <div className="max-w-screen-xl mx-auto px-8">

        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif text-[10px] tracking-[0.4em] text-gold uppercase mb-3">
              Osteria Contemporanea
            </p>
            <h2 className="font-display text-3xl font-light tracking-widest text-white mb-6">
              Lo Scalco Grasso
            </h2>
            <p className="font-serif italic text-base text-white/40 leading-relaxed mb-8">
              &ldquo;Piatti chiari, amicizia lunga.&rdquo;
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/30 hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-6">Dove Siamo</p>
            <div className="space-y-3">
              <p className="font-sans text-xs text-white/50 leading-relaxed">
                Via Trieste 55<br />
                46100 Mantova (MN)<br />
                Italia
              </p>
              <a href="tel:+393493747958" className="block font-sans text-xs text-white/50 hover:text-gold transition-colors">
                +39 349 374 7958
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-6">Orari</p>
            <div className="space-y-2">
              {[
                { day: 'Mar – Sab', hours: '12:30 – 22:30' },
                { day: 'Domenica', hours: '12:30 – 14:30' },
                { day: 'Lunedì', hours: 'Chiuso' },
              ].map(h => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span className="font-sans text-xs text-white/30">{h.day}</span>
                  <span className="font-sans text-xs text-white/50">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[9px] tracking-widest text-white/20 uppercase">
            © {new Date().getFullYear()} Lo Scalco Grasso. Tutti i diritti riservati.
          </p>
  
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-4 h-px bg-gold/30" />
            <span className="font-serif italic text-[10px] text-white/20">Mantova, Italia</span>
            <span className="w-4 h-px bg-gold/30" />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
