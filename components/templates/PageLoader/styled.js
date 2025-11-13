import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LoaderContainer = styled(motion('div'))`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: #09090e;
  z-index: 99999;
`

export const LogoWrapper = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const TextWrapper = styled.div`
  color: transparent;
  text-align: center;
  background: linear-gradient(to top, #555, 50%, #fff 50%);
  background-size: 100% 200%;
  background-position-y: ${(props) => props.$progress - 100}%;

  -webkit-background-clip: text;
  background-clip: text;
  transition: background-position-y 0.5s ease-out;
`

export const ProgressText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: white;
  width: 100%;
`
