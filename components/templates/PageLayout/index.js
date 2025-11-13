import { useState, useEffect } from 'react'

import Footer from '@organisms/Footer'
import Header from '@organisms/Header'
import BackToTop from '@molecules/BackToTop'
import HeaderNoMenu from '@organisms/HeaderNoMenu'

function PageLayout({ children, showMenu = true }) {
  const [offset, setOffset] = useState(0)
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    if (offset > 135) {
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return (
    <>
      {showMenu ? <Header /> : <HeaderNoMenu showMenu={showMenu} />}
      <main>{children}</main>
      {backToTop && <BackToTop />}
      <Footer />
    </>
  )
}

export default PageLayout
