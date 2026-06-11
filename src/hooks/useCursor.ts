import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement
    const ring = document.querySelector('.cursor-ring') as HTMLElement
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animId = requestAnimationFrame(animate)
    }

    const onHoverIn = () => ring.classList.add('hovering')
    const onHoverOut = () => ring.classList.remove('hovering')

    document.addEventListener('mousemove', onMouseMove)
    const hoverEls = document.querySelectorAll('a, button, [data-hover]')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onHoverIn)
      el.addEventListener('mouseleave', onHoverOut)
    })

    animId = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])
}
