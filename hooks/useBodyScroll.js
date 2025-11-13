import { useCallback, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import useElementResolver from './useElementResolver'

/**
body-scroll-lock wrapper hook.
The passed element must be the one with the overflow: auto, of it won't work on iOS.

@param extElem can be a ref created via useRef or an HTMLElement.

@returns {{
  observe: (element: HTMLElement) => void,
  enable: () => void,
  disable: () => void,
}}
The returned observe function can also be passed as the ref of the element that will scroll instead of the body, or be called passing in that HTMLElement.
*/
function useBodyScroll(extElem) {
  const [element, observe] = useElementResolver(extElem)

  const enable = useCallback(() => {
    if (element) {
      enableBodyScroll(element)
    }
  }, [element])

  const disable = useCallback(() => {
    if (element) {
      disableBodyScroll(element, { reserveScrollBarGap: true })
    }
  }, [element])

  // For safety, enable scroll when component unmounts or element changes.
  useEffect(() => {
    const ebl = enable
    return () => {
      ebl()
    }
  }, [enable])

  return {
    observe,
    enable,
    disable
  }
}

export default useBodyScroll
