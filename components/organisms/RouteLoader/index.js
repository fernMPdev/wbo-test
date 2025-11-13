import { useCallback, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import * as S from './styled'

const animation = {
  show: {
    opacity: 1,
    display: 'flex'
  },
  hide: {
    opacity: 0,
    transitionEnd: { display: 'none' }
  }
}

export default function RouteLoader() {
  const router = useRouter()
  const [isPageLoaded, setIsPageLoaded] = useState(true)
  const timerRef = useRef(null)

  const setPageLoaded = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setIsPageLoaded(true)
  }, [])

  const unsetPageLoaded = useCallback(
    (url) => {
      if (router.asPath !== url) {
        timerRef.current = setTimeout(() => {
          setIsPageLoaded(false)
        }, 200)
      }
    },
    [router.asPath]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', unsetPageLoaded)
    router.events.on('hashChangeStart', unsetPageLoaded)
    router.events.on('routeChangeComplete', setPageLoaded)
    router.events.on('hashChangeComplete', setPageLoaded)
    router.events.on('routeChangeError', setPageLoaded)

    return () => {
      router.events.off('routeChangeStart', unsetPageLoaded)
      router.events.off('hashChangeStart', unsetPageLoaded)
      router.events.off('routeChangeComplete', setPageLoaded)
      router.events.off('hashChangeComplete', setPageLoaded)
      router.events.off('routeChangeError', setPageLoaded)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [router.events, setPageLoaded, unsetPageLoaded])

  if (isPageLoaded) return null

  return (
    <S.Overlay initial={animation.show} animate={!isPageLoaded ? animation.show : animation.hide}>
      <S.Spinner />
    </S.Overlay>
  )
}
