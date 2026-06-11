import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase">Prenotazioni</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light text-text-primary tracking-wide leading-tight mb-10"
            >
              Riservate la
              <br />
              vostra <em className="font-serif italic text-gold">serata</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-2">Indirizzo</p>
                <p className="font-serif text-lg text-text-primary">Via Trieste 55</p>
                <p className="font-sans text-sm text-text-secondary">46100 Mantova (MN), Italia</p>
              </div>

              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-2">Telefono</p>
                <a
                  href="tel:+393493747958"
                  className="font-serif text-lg text-text-primary hover:text-gold transition-colors"
                >
                  +39 349 374 7958
                </a>
              </div>

              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-2">Orari</p>
                <div className="space-y-1">
                  <p className="font-sans text-sm text-text-secondary">Martedì – Sabato: 12:30 – 14:30 / 19:30 – 22:30</p>
                  <p className="font-sans text-sm text-text-secondary">Domenica: 12:30 – 14:30</p>
                  <p className="font-sans text-sm text-text-secondary">Lunedì: chiuso</p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 relative overflow-hidden border border-black/8"
            >
              <iframe
                title="Mappa — Lo Scalco Grasso, Via Trieste 55, Mantova"
                src="https://www.google.com/maps?q=Via+Trieste+55,+46100+Mantova+MN,+Italia&z=15&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  display: 'block',
                  filter: 'grayscale(0.55) sepia(0.12) contrast(0.95) brightness(1.02)',
                }}
              />
              {/* Elegant frame overlay */}
              <div className="pointer-events-none absolute inset-0 border border-gold/15" />
              {/* Address chip */}
              <div className="pointer-events-none absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-sm">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-0.5">Lo Scalco Grasso</p>
                <p className="font-serif text-sm text-text-primary leading-tight">Via Trieste 55 · Mantova</p>
              </div>
            </motion.div>

            {/* Directions link */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Via+Trieste+55,+46100+Mantova+MN,+Italia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.3em] uppercase text-text-primary hover:text-gold transition-colors duration-300 group"
            >
              <span>Indicazioni stradali</span>
              <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
            </a>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="bg-surface p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-6">
                    <span className="text-gold text-xl">✓</span>
                  </div>
                  <p className="font-display text-2xl font-light text-text-primary mb-3">Grazie!</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    La vostra richiesta è stata ricevuta.<br />
                    Vi contatteremo a breve per confermare la prenotazione.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-light text-text-primary mb-8 tracking-wide">
                    Richiesta di Prenotazione
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-text-secondary mb-2">
                          Nome e Cognome
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-black/10 px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
                          placeholder="Mario Rossi"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-text-secondary mb-2">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-black/10 px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
                          placeholder="+39 000 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-text-secondary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-black/10 px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
                        placeholder="mario@email.it"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-text-secondary mb-2">
                          Data
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white border border-black/10 px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-text-secondary mb-2">
                          Ospiti
                        </label>
                        <select
                          value={formData.guests}
                          onChange={e => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-white border border-black/10 px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
                        >
                          {[1,2,3,4,5,6,7,8].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'ospite' : 'ospiti'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-text-secondary mb-2">
                        Note speciali
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        className="w-full bg-white border border-black/10 px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Allergie, occasioni speciali, richieste particolari..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-text-primary text-white font-sans text-xs tracking-[0.3em] uppercase py-4 hover:bg-gold transition-colors duration-400"
                    >
                      Invia Richiesta
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
