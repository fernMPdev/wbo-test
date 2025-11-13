import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Card = styled(motion.div)`
  position: relative;
  height: 450px;
  cursor: pointer;
  transition: all 0.5s;
  width: 100%;

  filter: ${(props) => (props.$isSelected ? 'none' : 'grayscale(100%)')};
  ${({ theme }) => theme.media.xxl} {
    width: ${(props) => (props.$isSelected ? '250px' : '150px')};
  }
`

export const ImageComponent = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`
