import Container from '@templates/Container'
import { AnimatePresence, useScroll, motion, useTransform } from 'framer-motion'
import * as S from './styled'
import { useDevice } from 'context/DeviceContext'
import { scrollToAnchor } from '@utils/utils'

const BackToTop = () => {
  const { scrollYProgress } = useScroll()
  const { isUp } = useDevice()
  const isLg = isUp('lg')

  const size = isLg ? 60 : 50
  const radius = isLg ? 24 : 20
  const innerSvgSize = isLg ? 20 : 16
  const strokeWidth = isLg ? 5 : 4

  const circumference = 2 * Math.PI * radius
  const dashOffset = useTransform(scrollYProgress, [0, 1], [circumference, 0])

  let anchorElement = document.getElementById('hero')
  if (!anchorElement) return

  return (
    <Container>
      <AnimatePresence>
        <S.Container onClick={() => scrollToAnchor('hero')}>
          <S.Circle as={motion.div} style={{ width: size, height: size, position: 'relative' }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke='#c6dabfff'
                strokeWidth={strokeWidth}
                fill='#f3f3f3'
              />
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke='#70C056'
                strokeWidth={strokeWidth}
                fill='transparent'
                strokeDasharray={circumference}
                style={{ strokeDashoffset: dashOffset }}
                strokeLinecap='round'
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </svg>

            <S.InnerCircle
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={innerSvgSize}
                height={innerSvgSize}
                viewBox='0 0 24 24'
                fill='none'
                stroke='#000'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='12' y1='20' x2='12' y2='4' />
                <polyline points='6 10 12 4 18 10' />
              </svg>
            </S.InnerCircle>
          </S.Circle>
        </S.Container>
      </AnimatePresence>
    </Container>
  )
}

export default BackToTop
