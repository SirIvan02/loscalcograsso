import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(barRef.current, {
      scaleX: 1,
      duration: 1.8,
      ease: 'power2.inOut',
    })
    .to(percentRef.current, {
      textContent: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      snap: { textContent: 1 },
      modifiers: { textContent: (v: string) => `${Math.round(Number(v))}` },
    }, '<')
    .to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
      delay: 0.4,
      onComplete,
    })
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <div
        ref={logoRef}
        className="opacity-0 translate-y-4 text-center mb-16"
      >
        <p className="font-serif text-xs tracking-[0.4em] text-gold uppercase mb-3">Osteria Contemporanea</p>
        <h1 className="font-display text-4xl font-light tracking-widest text-text-primary">
          Lo Scalco Grasso
        </h1>
      </div>

      <div className="w-64 h-px bg-gray-100 relative overflow-hidden">
        <div
          ref={barRef}
          className="loader-bar absolute inset-0"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <span
        ref={percentRef}
        className="mt-4 font-sans text-xs tracking-widest text-text-secondary"
      >0</span>
    </div>
  )
}
