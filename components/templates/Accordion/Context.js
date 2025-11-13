import { createContext, useCallback, useMemo, useState } from 'react'

const AccordionContext = createContext()

export const AccordionProvider = ({ children }) => {
  const [activeItemId, setActiveItemId] = useState(null)

  const requestToggle = useCallback(
    (itemId) => {
      if (activeItemId === itemId) setActiveItemId(null)
      else setActiveItemId(itemId)
    },
    [activeItemId]
  )

  const contextValue = useMemo(() => {
    return {
      activeItemId,
      requestToggle
    }
  }, [activeItemId, requestToggle])

  return <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>
}

export default AccordionContext
