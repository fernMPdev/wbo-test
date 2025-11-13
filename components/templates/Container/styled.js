import styled, { css } from 'styled-components'

export const Root = styled.div`
  height: 100%;
  ${({ $withoutPadding }) =>
    !$withoutPadding &&
    css`
      padding: 0 var(--page-padding);
    `}
`

export const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  max-width: ${({ theme, $width }) => theme.contentWidth[$width || 'default']};
`
