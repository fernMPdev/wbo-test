import { useEffect, useRef } from 'react'
import useElementResolver from './useElementResolver'
import _debounce from 'lodash/debounce'

const defaultOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true
}

/**
 * Hook wrapping the MutationObserver Browser API
 *
 * @param {(event: Event) => void} callback
 * @param {Object} [options] element can be a ref created via useRef or an HTMLElement.
 * @param {*} [options.element]
 * @param {MutationObserverInit} [options.observerOptions]
 * @param {Number} [options.debounceTime]
 *
 * @returns {(element: HTMLElement) => void} The returned callback function can be passed as the ref of the element you want to track, or be called passing in that HTMLElement.
 */
function useMutationObserver(callback, options = {}) {
  const { element: refOrElem, observerOptions = defaultOptions, debounceTime = 100 } = options

  const [element, setElement] = useElementResolver(refOrElem)

  // Use callback ref to avoid unnecessary re-renders. Even when the callback function is passed as an anonymous function.
  const callbackRef = useRef()
  useEffect(() => {
    callbackRef.current = _debounce(callback, debounceTime)
  }, [callback, debounceTime])

  useEffect(() => {
    if (!element || !callbackRef.current) return

    const handleMutation = () => callbackRef.current()

    const observer = new MutationObserver(handleMutation)
    observer.observe(element, observerOptions)

    return () => {
      observer.disconnect()
    }
  }, [element, observerOptions])

  return setElement
}

export default useMutationObserver
