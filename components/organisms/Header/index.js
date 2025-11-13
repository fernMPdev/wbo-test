import { useState } from 'react'
import * as S from './styled'
import Image from '@atoms/Image'
import WhiteboxLogo from '@img/logos/LogoWhiteBox.svg'
import Drawer from '@templates/Drawer'
import Menu from './MenuMobile'
import BurgerIcon from '@atoms/BurgerIcon'
import Navbar from './NavBar'
import useWindowSize from '@hooks/useWindowSize'
import useIsSectionVisibleById from '@hooks/useSectionVisibleById'
import CrossIcon from '@atoms/CrossIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)
  const isHeroVisible = useIsSectionVisibleById('hero', 90, true)
  const { width } = useWindowSize()
  const isMobile = width <= 899

  if (isMobile) {
    return (
      <S.Root>
        <S.Header $withBg={!isHeroVisible}>
          <Drawer open={isMenuOpen} onCloseRequest={handleToggleMenu} fullScreen fill>
            <Menu handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
          </Drawer>

          <S.Wrapper>
            <S.LogoLink href='/'>
              <Image src={WhiteboxLogo} width={100} height={55} alt='whitebox' />
            </S.LogoLink>
            <>
              {!isMenuOpen ? (
                <S.BurgerContainer onClick={handleToggleMenu}>
                  <BurgerIcon />
                </S.BurgerContainer>
              ) : (
                <S.CrossContainer onClick={handleToggleMenu}>
                  <CrossIcon isMenuOpen={isMenuOpen} />
                </S.CrossContainer>
              )}
            </>
          </S.Wrapper>
        </S.Header>
      </S.Root>
    )
  }

  return (
    <S.Root>
      <S.Header $withBg={!isHeroVisible}>
        <S.LogoLink href='/'>
          <Image src={WhiteboxLogo} width={100} height={50} alt='whitebox' />
        </S.LogoLink>
        <Navbar />
      </S.Header>
    </S.Root>
  )
}

export default Header
