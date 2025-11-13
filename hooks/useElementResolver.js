import { useCallback, useEffect, useMemo, useState } from 'react'

/**
Resolves an HTMLElement that can be passed as a ref, as an element or via callback ref.

@param refOrElem can be a ref created via useRef or an HTMLElement.

@returns {[
  element: HTMLElement,
  callbackRef: (element: HTMLElement) => void,
]}
The returned callbackRef function can be passed as the ref of an element, or be called passing in an HTMLElement.
*/
function useElementResolver(refOrElem) {
  const [element, setElement] = useState()

  const callbackRef = useCallback((elem) => {
    if (elem instanceof HTMLElement) setElement(elem)
  }, [])

  useEffect(() => {
    if (refOrElem instanceof HTMLElement) setElement(refOrElem)
    else if (refOrElem?.current instanceof HTMLElement) setElement(refOrElem.current)
  }, [refOrElem])

  return useMemo(() => [element, callbackRef], [element, callbackRef])
}

export default useElementResolver
