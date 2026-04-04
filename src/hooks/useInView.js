import { useEffect, useRef } from 'react'

/**
 * Adds .visible to element when it enters the viewport.
 * @param {string} className - class to add: 'reveal' | 'reveal-left' | 'reveal-right'
 * @param {number} threshold - 0-1, portion visible before triggering
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
