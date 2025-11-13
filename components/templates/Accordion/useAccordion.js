import { useContext } from 'react'
import AccordionContext from './Context'

const useAccordion = ({ id }) => {
  const { activeItemId, requestToggle } = useContext(AccordionContext)

  return {
    isActive: activeItemId === id,
    requestToggle
  }
}

export default useAccordion
