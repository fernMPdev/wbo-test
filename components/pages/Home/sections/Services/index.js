import { motion } from 'framer-motion'
import * as S from './styled'
import Container from '@templates/Container'
import Text from '@atoms/Text'
import Anchor from '@atoms/Anchor'
import { IconComponents, IconServerCog, IconBulb, IconUserShield } from '@tabler/icons-react'

const services = [
  {
    id: 1,
    title: 'Webs modernas y adaptables',
    description:
      'Diseñamos y desarrollamos sitios web rápidos, responsive y con experiencias digitales que conectan con tus clientes.',
    icon: <IconComponents />
  },
  {
    id: 2,
    title: 'Sistemas y plataformas robustas',
    description:
      'Creamos backends seguros y escalables, con bases de datos e integraciones a medida para tu negocio.',
    icon: <IconServerCog />
  },
  {
    id: 3,
    title: 'Consultoría tecnológica',
    description:
      'Te ayudamos a elegir las herramientas e infraestructuras adecuadas para impulsar tu transformación digital.',
    icon: <IconBulb />
  },
  {
    id: 4,
    title: 'Mantenimiento & Soporte TI',
    description:
      'Supervisión proactiva, resolución de incidencias y soporte continuo para garantizar la estabilidad de tu proyecto.',
    icon: <IconUserShield />
  }
]

export default function Services() {
  return (
    <Anchor id='services'>
      <S.ServicesSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <S.TitleWrapper>
              <Text tag='h2' font='title.8' color='neutral.white'>
                Nuestros servicios
              </Text>
              <Text tag='p' font='body.paragraph' color='neutral[400]'>
                Comunicación, diseño y soluciones digitales adaptadas a tu negocio.
              </Text>
            </S.TitleWrapper>
          </motion.div>
          <S.Grid>
            {services.map(({ id, icon, title, description }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <S.Card>
                  <S.IconWrapper>{icon}</S.IconWrapper>
                  <Text tag='h3' font='title.50' color='neutral.white'>
                    {title}
                  </Text>
                  <Text tag='p' font='body.paragraph' color='neutral[400]'>
                    {description}
                  </Text>
                </S.Card>
              </motion.div>
            ))}
          </S.Grid>
        </Container>
      </S.ServicesSection>
    </Anchor>
  )
}
