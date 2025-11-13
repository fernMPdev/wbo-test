import useRefSync from 'hooks/useRefSync'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import breakpoints, { getBreakpointForWidth, getBreakpointIndex } from 'theme/breakpoints'
import { mediaConditions } from 'theme/media'

const DeviceContext = createContext()

function getCurrentBreakpoint() {
  if (typeof window !== 'undefined') {
    return getBreakpointForWidth(window.innerWidth).name
  }
}

export function DeviceProvider({ children }) {
  const [device, setDevice] = useState(getCurrentBreakpoint())
  const getDevice = useRefSync(device)

  useEffect(() => {
    function handleMediaChange() {
      setDevice(getCurrentBreakpoint())
    }

    const mediaListeners = []
    breakpoints.forEach((breakpoint) => {
      const mql = window.matchMedia(mediaConditions[breakpoint.name])
      const listener = mql.addEventListener('change', handleMediaChange)
      mediaListeners.push({ mql, listener })
    })

    handleMediaChange()

    return () => {
      mediaListeners.forEach((matcher) => {
        matcher.mql.removeEventListener('change', matcher.listener)
      })
    }
  }, [])

  const isOnly = useCallback(
    (name) => {
      return getDevice() === name
    },
    [getDevice]
  )

  const isUp = useCallback(
    (name) => {
      const deviceIndex = getBreakpointIndex(getDevice())
      const targetIndex = getBreakpointIndex(name)
      return deviceIndex >= targetIndex
    },
    [getDevice]
  )

  const isDown = useCallback(
    (name) => {
      const deviceIndex = getBreakpointIndex(getDevice())
      const targetIndex = getBreakpointIndex(name)
      return deviceIndex < targetIndex
    },
    [getDevice]
  )

  const contextValue = useMemo(() => {
    return {
      device,
      isUp,
      isDown,
      isOnly
    }
  }, [device, isDown, isOnly, isUp])

  return <DeviceContext.Provider value={contextValue}>{children}</DeviceContext.Provider>
}

export function useDevice() {
  const deviceContext = useContext(DeviceContext)
  return deviceContext
}

export default DeviceContext
