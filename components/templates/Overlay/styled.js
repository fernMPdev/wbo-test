import styled from 'styled-components'

export const duration = 300

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.neutral.dark};
  z-index: -1;

  /* Transition styles */
  opacity: 0;
  transition: opacity ${duration}ms ease-out;

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 0.3;
  }

  &.enter-done {
    opacity: 0.3;
  }

  &.exit {
    opacity: 0.3;
  }

  &.exit-active {
    opacity: 0;
  }

  &.exit-done {
    opacity: 0;
  }
`
