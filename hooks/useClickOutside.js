import { isParent } from 'config/utils'
import useElementResolver from 'hooks/useElementResolver'
import { useEffect, useRef } from 'react'

/**
 * Hook that calls the passed in callback if a click is detected outside of the passed in element.
 *
 * @param {() => void} callback
 * @param {Object} [options] element can be a ref created via useRef or an HTMLElement.
 * @param {*} [options.element]
 *
 * @returns {(element: HTMLElement) => void} The returned callback function can be passed as the ref of the element you want to track, or be called passing in that HTMLElement.
 */
function useClickOutside(callback, options = {}) {
  const { element: refOrElem } = options
  const [element, setElement] = useElementResolver(refOrElem)

  const callbackRef = useRef()
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const elementRef = useRef()
  useEffect(() => {
    elementRef.current = element
  }, [element])

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (callbackRef.current) {
        if (isParent(elementRef.current, event.target) === false) {
          callbackRef.current()
        }
      }
    }

    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  return setElement
}

export default useClickOutside
