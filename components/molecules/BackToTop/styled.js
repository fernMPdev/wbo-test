import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`

export const Circle = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InnerCircle = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
`

export const Text = styled.div`
  position: relative;
  z-index: 2;
  font-size: 12px;
  font-weight: bold;
`
