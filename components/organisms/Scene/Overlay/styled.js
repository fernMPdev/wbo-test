import styled from 'styled-components'

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary.blue},
    transparent
  );
  z-index: 2;
`

export const RadialVignette = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 80%);
  z-index: 1;
`

export const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: auto;
`

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.secondary.blue}, transparent);
  z-index: 2;
`
