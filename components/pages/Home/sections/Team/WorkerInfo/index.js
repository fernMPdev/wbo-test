import Button from '@atoms/Button'
import Text from '@atoms/Text'
import * as S from './styled'
import { scrollToAnchor } from '@utils/utils'

const WorkerInfo = ({ worker }) => {
  return (
    <S.InfoContainer>
      <S.TitleContainer
        key={worker?.name}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
      >
        <Text tag='h2' font='title.20' color='neutral.white'>
          {worker?.name}
        </Text>
        <S.Line
          initial={{ width: 0 }}
          animate={{
            width: '100%',
            transition: { duration: 0.4, delay: 0.4 }
          }}
        />
      </S.TitleContainer>
      <div>
        <S.DescContainer
          key={worker?.id + '-role'}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.5 }
          }}
        >
          <Text tag='p' font='body.paragraph'>
            {worker?.role}
          </Text>
        </S.DescContainer>
        <S.DescContainer
          key={worker?.description}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.5 }
          }}
        >
          <Text tag='p' font='body.paragraph'>
            {worker?.description}
          </Text>
        </S.DescContainer>
      </div>
      <S.ButtonContainer
        key={worker?.id}
        animate={{ scale: [0.8, 1, 0.8, 1] }}
        transition={{ duration: 1, times: [0, 0.5, 0.75, 1], delay: 0.75 }}
      >
        <Button size='small' variant='solid.negative' onClick={() => scrollToAnchor('contact')}>
          Únete al equipo
        </Button>
      </S.ButtonContainer>
    </S.InfoContainer>
  )
}

export default WorkerInfo
