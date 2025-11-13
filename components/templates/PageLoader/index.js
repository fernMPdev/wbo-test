import { motion } from 'framer-motion'
import Head from 'next/head'
import * as S from './styled'
import Text from '@atoms/Text'

function PageLoader({ progress }) {
  const textVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <>
      <Head>
        <style>{`body { overflow: hidden; }`}</style>
      </Head>

      <S.LoaderContainer key='loader' initial='hidden' animate='visible' exit='exit'>
        <S.LogoWrapper>
          <motion.div variants={textVariants}>
            <S.TextWrapper apper $progress={progress}>
              <Text tag='h1' font='title.6'>
                Whitebox Office
              </Text>
            </S.TextWrapper>
          </motion.div>
          <motion.div
            variants={textVariants}
            style={{
              width: '100%'
            }}
          >
            <S.ProgressText>
              <Text tag='span' font='body.paragraph' color='neutral.white'>
                Cargando... {progress} %
              </Text>
            </S.ProgressText>
          </motion.div>
        </S.LogoWrapper>
      </S.LoaderContainer>
    </>
  )
}

export default PageLoader
