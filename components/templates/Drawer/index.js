import Overlay from '../Overlay'
import * as S from './styled'
import { AnimatePresence } from 'framer-motion'
import useBodyScroll from '@hooks/useBodyScroll'
import { useCallback, useEffect, useState } from 'react'
import useWindowSize from '@hooks/useWindowSize'

const Drawer = ({ open, children, onCloseRequest, fullScreen, fill }) => {
  const { observe, enable, disable } = useBodyScroll()
  const [isMounted, setIsMounted] = useState(open)
  const sSize = useWindowSize()

  const showMenu = {
    closed: { x: '100vw', transition: { x: { duration: 0.5, delay: 0.3 } } },
    open: {
      x: sSize.width >= 900 ? '0' : sSize.width >= 820 && !fill ? '50vw' : '0',
      transition: { x: { duration: 0.5 } }
    }
  }

  useEffect(() => {
    if (open) setIsMounted(true)
  }, [open])

  useEffect(() => {
    open ? disable() : enable()
  }, [open, disable, enable])

  const handleAnimationComplete = useCallback((definition) => {
    if (definition === 'closed') setIsMounted(false)
  }, [])

  return (
    <Overlay
      active={open || isMounted}
      portalContainer='drawers-portal'
      onCloseRequest={onCloseRequest}
    >
      <AnimatePresence>
        {isMounted && (
          <S.Drawer
            variants={showMenu}
            initial='closed'
            animate={open ? 'open' : 'closed'}
            exit='closed'
            onAnimationComplete={handleAnimationComplete}
            fullScreen={fullScreen}
            ref={observe}
          >
            {children}
          </S.Drawer>
        )}
      </AnimatePresence>
    </Overlay>
  )
}

export default Drawer
