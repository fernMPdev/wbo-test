import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 900px) {
    width: 90%;
  }
`

export const TitleContainer = styled(motion.div)`
  width: fit-content;
  ${({ theme }) => theme.media.xxl} {
    text-align: left;
    margin-left: 0;
  }
`

export const Line = styled(motion.div)`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const DescContainer = styled(motion.div)`
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.xxl} {
    text-align: left;
  }
`

export const ButtonContainer = styled(motion.div)`
  width: 160px;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  @media (min-width: 900px) {
    margin-left: 0;
    width: 331px;
  }
`
