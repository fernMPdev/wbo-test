import Container from '@templates/Container'
import * as S from './styled'
import Image from '@atoms/Image'
import Text from '@atoms/Text'
import ContactForm from './ContactForm'
import WhiteboxCircleBg from '../../../../../public/svgs/WhiteboxCircleBg.svg'
import Anchor from '@atoms/Anchor'
import { motion } from 'framer-motion'

function Talento() {
  return (
    <Anchor id='contact'>
      <S.Root>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <S.Content>
              <S.StyleTags>
                <S.TitleContainer>
                  <Text tag='h2' font='title.8' color='text.strong'>
                    Buscamos <span style={{ color: '#70C056' }}>talento</span>
                  </Text>
                </S.TitleContainer>
                <Text tag='p' font='body.paragraph'>
                  En WhiteBox buscamos programadores con talento, proactivos y dinámicos, motivados
                  para crecer junto al resto del equipo.
                </Text>

                <Text tag='p' font='body.paragraph'>
                  Ofrecemos incorporación inmediata a un equipo joven y dinámico, magnífico ambiente
                  de trabajo, jornada completa y horario flexible.
                </Text>

                <Text tag='p' font='body.paragraph.strong'>
                  <strong>¡Si este es tu perfil no dudes en enviarnos tu CV!</strong>
                </Text>
              </S.StyleTags>
              <ContactForm />
            </S.Content>
          </motion.div>
        </Container>
        <S.ImageContainer>
          <Image src={WhiteboxCircleBg} alt='Whitebox Office' />
        </S.ImageContainer>
      </S.Root>
    </Anchor>
  )
}

export default Talento
