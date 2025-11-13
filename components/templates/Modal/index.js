import * as S from './styled'
import { CSSTransition } from 'react-transition-group'
import Overlay from '@templates/Overlay'
import { useCallback, useEffect, useRef } from 'react'
import useBodyScroll from 'hooks/useBodyScroll'

// Add scroll body and scroll content options. TODO
const Modal = ({ children, open, onCloseRequest, fullScreen, width = 'md' }) => {
  const modalRef = useRef()
  const { observe, enable, disable } = useBodyScroll()

  const refCallback = useCallback(
    (elem) => {
      modalRef.current = elem
      observe(elem)
    },
    [observe]
  )

  useEffect(() => {
    if (open) disable()
    else enable()
  }, [disable, enable, open])

  return (
    <Overlay active={open} onCloseRequest={onCloseRequest} portalContainer='modals-portal'>
      <CSSTransition in={open} timeout={S.duration} appear nodeRef={modalRef}>
        <S.Modal sFullScreen={fullScreen} sWidth={width}>
          <S.Content ref={refCallback}>{children}</S.Content>
        </S.Modal>
      </CSSTransition>
    </Overlay>
  )
}

export default Modal
