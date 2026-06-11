import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress') as HTMLElement
    if (!bar) return

    const update = () => {
      const scroll = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress = scroll / maxScroll
      bar.style.width = `${progress * 100}%`
    }

    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])
}
