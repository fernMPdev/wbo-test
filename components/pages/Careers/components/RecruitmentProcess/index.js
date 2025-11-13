import * as S from './styled'
import Text from '@atoms/Text'
import {
  IconFileText,
  IconUsersGroup,
  IconUserScreen,
  IconHeartHandshake
} from '@tabler/icons-react'
import { useTheme } from 'styled-components'
const processData = [
  {
    number: 1,
    icon: <IconFileText size='3.5rem' />,
    title: '¡ENVIANOS TU CV!',
    description:
      'Envía tu CV. Revisamos y analizamos cada solicitud, y si despierta interés, te contactaremos por email o teléfono.'
  },
  {
    number: 2,
    icon: <IconUsersGroup size='3.5rem' />,
    title: '¡HABLEMOS!',
    description:
      'Queremos conocerte mejor: preguntaremos sobre tu experiencia, motivaciones y lo que te impulsa profesionalmente.'
  },
  {
    number: 3,
    icon: <IconUserScreen size='3.5rem' />,
    title: '¡DEMUESTRA!',
    description:
      'Algunos puestos requieren conocimientos y habilidades específicas; podríamos pedirte que las demuestres.'
  },
  {
    number: 4,
    icon: <IconHeartHandshake size='3.5rem' />,
    title: '¡EMPECEMOS!',
    description:
      'Te informaremos directamente del resultado del proceso por teléfono o email. Si es positivo, te invitaremos formalmente.'
  }
]

const RecruitmentProcess = () => {
  const theme = useTheme()
  return (
    <S.SectionWrapper>
      <svg
        class='section-divider section-divider-auto'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 34'
        style={{
          height: 'auto',
          position: 'absolute',
          width: '100%',
          zIndex: 0,
          top: -1,
          transform: 'rotate(180deg)'
        }}
      >
        <path
          d='M0 34h1200V0S929.487 24.5 726.977 24.5C524.467 24.5 363.459 0 187.951 0 12.442 0 0 34 0 34Z'
          fill={theme.colors.secondary.blue}
        ></path>
      </svg>
      <S.HeaderContainer>
        <Text tag='h2' font='title.20' color='primary'>
          Proceso para unirse a Whitebox Office
        </Text>
        <Text tag='p' font='body.paragraph' color='neutral.white'>
          Sabemos que el tiempo es oro, y por eso nos adaptamos para hacer un proceso lo más
          eficiente y rápido posible.
        </Text>
      </S.HeaderContainer>

      <S.ProcessContainer>
        {processData.map((item) => (
          <S.ProcessItem key={item.number}>
            <S.IconWrapper>
              <S.NumberCircle>{item.number}</S.NumberCircle>
              {item.icon}
            </S.IconWrapper>
            <div>
              <Text
                tag='h3'
                font='title.50'
                color='primary'
                style={{
                  marginBottom: '4px',
                  textAlign: 'center'
                }}
              >
                {item.title}
              </Text>
              <Text tag='p' font='body.paragraph' color='neutral.white'>
                {item.description}
              </Text>
            </div>
          </S.ProcessItem>
        ))}
      </S.ProcessContainer>
    </S.SectionWrapper>
  )
}

export default RecruitmentProcess
