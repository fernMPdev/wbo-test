import * as S from './styled'
import Text from '@atoms/Text'
import Linkedin from '@img/logos/linkedin.svg'
import Image from '@atoms/Image'
import Container from '@templates/Container'

const Footer = () => {
  return (
    <Container>
      <S.Footer>
        <Text tag='small' font='body.small' color='neutral[500]'>
          © Whitebox Office 2025
        </Text>
        <S.WrapperLinkedin>
          <a
            href='https://www.linkedin.com/company/whitebox-office/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={Linkedin} width={24} height={24} alt='linkedin' />
          </a>
        </S.WrapperLinkedin>
      </S.Footer>
    </Container>
  )
}

export default Footer
