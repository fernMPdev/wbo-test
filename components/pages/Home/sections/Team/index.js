import { useState } from 'react'
import Text from '@atoms/Text'
import Container from '@templates/Container'
import * as S from './styled'
import Anchor from '@atoms/Anchor'
import WorkerInfo from './WorkerInfo'
import TeamSlider from './Slider'
import { motion } from 'framer-motion'

const Team = ({ teamMembers }) => {
  const [selected, setSelected] = useState(teamMembers[0])

  return (
    <Anchor id='team'>
      <div>
        <S.Root>
          <Container withoutPadding>
            <S.Content>
              <S.TitleContainer>
                <S.Line />
                <Text tag='h2' font='title.8' color='neutral.white'>
                  Detras de WhiteB
                  <span style={{ color: '#EEE648' }}>o</span>x
                </Text>
                <Text tag='p' font='body.paragraph'  color='neutral[400]'>
                  Colaboramos estrechamente con nuestros clientes para comprender sus objetivos y
                  ofrecer soluciones únicas y personalizadas.
                </Text>
              </S.TitleContainer>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <S.WrapperSlider>
                  <WorkerInfo worker={selected} />
                  <TeamSlider members={teamMembers} selected={selected} setSelected={setSelected} />
                </S.WrapperSlider>
              </motion.div>
            </S.Content>
          </Container>
        </S.Root>
        <S.RootWave>
          <S.Wave>
            <svg
              style={{
                display: 'inline-block',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1
              }}
              viewBox='0 0 700 500'
              preserveAspectRatio='xMinYMin meet'
            >
              <path
                d='M0,10 C100,100 950,30 700,150 L800,0 L0,0 Z'
                style={{
                  stroke: 'none',
                  fill: '#181826'
                }}
                transform='scale(1,0.5)'
              />
            </svg>
          </S.Wave>
          <S.Container>
            <S.WaveContainer></S.WaveContainer>
          </S.Container>
        </S.RootWave>
      </div>
    </Anchor>
  )
}

export default Team
