import { useCallback, useEffect, useState } from 'react'
import useResize from './useResize'
import useMutationObserver from './useMutationObserver'
import useElementResolver from './useElementResolver'

/**
Tracks the box of the passed in element.

@param extElem can be a ref created via useRef or an HTMLElement.

@returns {{
  observe: (element: HTMLElement) => void,
  x: Number,
  y: Number,
  width: Number,
  height: Number,
  top: Number,
  right: Number,
  bottom: Number,
  left: Number,
}}
The returned observe function can also be passed as the ref of the element you want to track the box of, or be called passing in that HTMLElement.
*/
function useElementBox(extElem) {
  const [element, observe] = useElementResolver(extElem)
  const [elementBox, setElementBox] = useState({})

  const updateBox = useCallback(() => {
    if (!element) return
    const box = element.getBoundingClientRect()
    setElementBox(box)
  }, [element])

  useResize(updateBox)
  useMutationObserver(updateBox, { element })
  useEffect(() => {
    setTimeout(updateBox, 250)
  }, [updateBox])

  return {
    // Set as ref of the element you want to know the height of
    observe,
    x: elementBox.x,
    y: elementBox.y,
    width: elementBox.width,
    height: elementBox.height,
    top: elementBox.top,
    right: elementBox.right,
    bottom: elementBox.bottom,
    left: elementBox.left
  }
}

export default useElementBox
