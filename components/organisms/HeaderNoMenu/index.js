import * as S from './styled'
import Image from '@atoms/Image'
import WhiteboxLogo from '@img/logos/LogoWhiteBox.svg'

const HeaderNoMenu = () => {
  return (
    <S.Header>
      <S.LogoLink href='/'>
        <Image src={WhiteboxLogo} width={100} height={50} alt='whitebox' />
      </S.LogoLink>
    </S.Header>
  )
}

export default HeaderNoMenu
