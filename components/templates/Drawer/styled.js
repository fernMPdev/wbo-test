import styled from 'styled-components'
import { motion } from 'framer-motion'

export const inDuration = 300
export const outDuration = 200

export const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${({ fullScreen }) => fullScreen && 'height: 100%;'}
  background-color: ${({ theme }) => theme.colors.body};
  overflow: auto;
`
