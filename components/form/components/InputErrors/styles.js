import styled from 'styled-components'
import { getFontCSS } from 'theme/utils'

export const Errors = styled.ul`
  padding: 0;
  margin: 8px 0px;
  list-style: none;
  color: ${({ theme }) => theme.colors.error};
  min-height: 2rem;

  ${getFontCSS('body.small')}
`

export const Error = styled.li``
