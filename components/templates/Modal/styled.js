import styled, { css } from 'styled-components'
import breakpoints from '../../../config/theme/breakpoints'

export const duration = 150
const slide = -30

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  ${({ sWidth, sFullScreen }) => {
    let height = 'auto'
    if (sFullScreen) {
      height = '100%'
    }

    let maxWidth = 'none'
    if (!sFullScreen) {
      const breakpointWidth = breakpoints.get(sWidth)
      if (breakpointWidth) maxWidth = breakpointWidth + 'px'
      else maxWidth = sWidth
    }

    let margin = '0.7rem'
    if (sFullScreen) margin = '0'

    let maxHeight = 'calc(100% - 1.4rem)'
    if (sFullScreen) maxHeight = '100%'

    return css`
      --height: ${height};
      --max-height: ${maxHeight};
      --max-width: ${maxWidth};
      --margin: ${margin};
    `
  }}
`

export const Content = styled.div`
  pointer-events: initial;
  overflow: auto;
  width: 100%;
  max-width: var(--max-width);
  height: var(--height);
  margin: var(--margin);
  max-height: var(--max-height);

  /* Transition styles */
  opacity: 0;
  transform: translateY(${slide}px);

  transition:
    opacity ${duration}ms ease-out,
    transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.appear {
    opacity: 0;
    transform: translateY(${slide}px);
  }

  &.appear-active {
    opacity: 1;
    transform: translateY(0px);
  }

  &.appear-done {
    opacity: 1;
    transform: translateY(0px);
  }

  &.exit {
    opacity: 1;
    transform: translateY(0px);
  }

  &.exit-active {
    opacity: 0;
    transform: translateY(${slide}px);
  }

  &.exit-done {
    opacity: 0;
    transform: translateY(${slide}px);
  }
`
