import { useRef } from 'react'
import Portal from '../Portal'
import * as S from './styled'

const Overlay = ({ children, portalContainer = 'portal', active, onCloseRequest = () => {} }) => {
  const overlayRef = useRef()
  if (!active) return null

  return (
    <Portal container={portalContainer}>
      <S.Root>
        <S.Overlay ref={overlayRef} onClick={onCloseRequest} />
        {children}
      </S.Root>
    </Portal>
  )
}

export default Overlay
