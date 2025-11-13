import styled from 'styled-components'
import { motion } from 'framer-motion'
import Text from '@atoms/Text'

export const MessageContainer = styled.div`
  position: relative;
  width: 90vw;
  max-width: 550px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black calc(50% - 0.6em),
    black calc(50% + 0.6em),
    transparent
  );
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black calc(50% - 0.6em),
    black calc(50% + 0.6em),
    transparent
  );

  @media (max-width: 768px) {
    height: 70px;
  }
  @media (max-width: 480px) {
    height: 60px;
  }
`

export const AnimatedText = styled(motion('div'))`
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: bold;
  display: flex;
  white-space: pre;
  color: #fff;
  text-shadow:
    0 0 0.1vw #f7e380ff,
    0 0 0.2vw #fce46eff,
    0 0 0.5vw #fde047,
    0 0 0.8vw #fde047;
`

export const AnimatedLetter = styled(motion(Text))`
  position: relative;
  display: inline-block;
  color: ${({ isHighlighted }) => (isHighlighted ? '#FDE047' : 'inherit')};
`
