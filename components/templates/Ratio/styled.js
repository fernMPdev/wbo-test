import styled from 'styled-components'

export const Ratio = styled.div`
  position: relative;
  padding-top: ${({ sPaddingTop }) => sPaddingTop}%;
  min-height: ${({ sMinHeight }) => sMinHeight};
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
