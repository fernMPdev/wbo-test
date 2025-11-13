import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(17, 16, 16, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  pointer-events: all;
  transition: opacity 0.2s ease;
`

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  border: 6px solid transparent;

  border-top-color: ${({ theme }) => theme.colors.primary};
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`
