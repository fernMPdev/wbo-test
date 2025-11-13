import { useEffect, useRef } from 'react'

function useUpdateEffect(fn, deps) {
  const hasRendered = useRef(false)

  useEffect(() => {
    if (!hasRendered.current) {
      hasRendered.current = true
    } else {
      return fn()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useUpdateEffect
