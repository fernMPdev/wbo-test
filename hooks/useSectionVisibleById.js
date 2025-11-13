import { useState, useEffect, useMemo } from 'react'

/**
 * Hook para detectar si un elemento con un ID específico está visible.
 *
 * @param {string} sectionId -
 * @param {number} thresholdPercentage
 * @param {boolean} [initialIsVisible]
 * @returns {boolean|null} -
 */
function useIsSectionVisibleById(sectionId, thresholdPercentage = 40, initialIsVisible) {
  const [isVisible, setIsVisible] = useState(() =>
    typeof initialIsVisible === 'boolean' ? initialIsVisible : false
  )

  const [elementExists, setElementExists] = useState(true)

  const rootMargin = useMemo(
    () => `-${thresholdPercentage}% 0px -${thresholdPercentage}% 0px`,
    [thresholdPercentage]
  )

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    if (!sectionId) {
      console.warn('useIsSectionVisibleById: sectionId no proporcionado')
      setIsVisible(false)
      setElementExists(false)
      return
    }

    const element = document.getElementById(sectionId)

    if (!element) {
      console.warn(`useIsSectionVisibleById: No se encontró el elemento con ID "${sectionId}".`)
      setIsVisible(false)
      setElementExists(false)
      return
    }

    setElementExists(true)

    if (typeof initialIsVisible !== 'boolean') {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const isInitiallyVisible = rect.top < windowHeight && rect.bottom >= 0
      setIsVisible(isInitiallyVisible)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible((prev) => (prev !== entry.isIntersecting ? entry.isIntersecting : prev))
      },
      {
        root: null,
        rootMargin,
        threshold: 0
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [sectionId, rootMargin, initialIsVisible])

  if (!elementExists) return null

  return Boolean(isVisible)
}

export default useIsSectionVisibleById
