import { useCallback, useRef } from 'react'

function useRefSync(value) {
  const valueRef = useRef(value)
  valueRef.current = value

  const getValue = useCallback(() => {
    return valueRef.current
  }, [])

  return getValue
}

export default useRefSync
