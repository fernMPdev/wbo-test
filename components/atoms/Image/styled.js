import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  ${({ sIsFill, sIsResponsive }) => {
    if (sIsResponsive)
      return css`
        display: block;
      `
    if (sIsFill)
      return css`
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
      `
  }}
`
