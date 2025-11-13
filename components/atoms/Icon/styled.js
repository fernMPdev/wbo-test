import styled from 'styled-components'
import _get from 'lodash/get'
import { getCSS } from '../../../theme/utils'
export const Icon = styled.i`
  display: inline-flex;
  font-size: ${({ sSize }) => sSize}em;
  color: ${({ theme, sColor }) => _get(theme.colors, sColor, 'inherit')};
  ${({ sCSSData }) => getCSS(sCSSData)}
`
