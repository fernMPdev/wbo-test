import { useEffect, useRef } from 'react'
import _debounce from 'lodash/debounce'

/**
 * Window resize listener hook.
 *
 * @param {(event: Event) => void} callback
 * @param {Object} [options] Debounce time is in ms. Defaults to 100.
 * @param {Number} [options.debounceTime]
 */
function useResize(callback, options = {}) {
  const { debounceTime = 100 } = options

  // Use callback ref to avoid unnecessary re-renders. Even when the callback function is passed as an anonymous function.
  const callbackRef = useRef()
  useEffect(() => {
    callbackRef.current = _debounce(callback, debounceTime)
  }, [callback, debounceTime])

  useEffect(() => {
    const handleResize = (event) => callbackRef.current(event)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

export default useResize
