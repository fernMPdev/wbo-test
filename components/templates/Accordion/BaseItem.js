import { cloneElement, useCallback } from 'react'
import useAccordion from './useAccordion'
import Expandible from '../Expandible'

const AccordionItem = ({ itemId, Header, children }) => {
  const { isActive, requestToggle } = useAccordion({
    id: itemId
  })

  const handleRequestToggle = useCallback(() => {
    requestToggle(itemId)
  }, [requestToggle, itemId])

  return (
    <div>
      {cloneElement(Header, { requestToggle: handleRequestToggle, isActive })}
      <Expandible expanded={isActive}>{children}</Expandible>
    </div>
  )
}

export default AccordionItem
