import styled, { css } from 'styled-components'

export const Root = styled.div`
  ${({ sText, makeBold }) => css`
    text-align: center;
    font-weight: ${makeBold ? 'bold' : 'normal'};

    ::after {
      content: '${sText}';
      font-weight: bold;
      display: block;
      overflow: hidden;
      visibility: hidden;
      height: 0;
      user-select: none;
      pointer-events: none;
    }
  `}
`
