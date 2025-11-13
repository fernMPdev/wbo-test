import _get from 'lodash/get'
import styled from 'styled-components'
import { getFontCSS } from 'theme/utils'

export const Text = styled.span`
  ${({ sColor, theme }) => sColor && `color: ${_get(theme.colors, sColor, sColor)};`}
  ${({ sAlign }) => sAlign && `text-align: ${sAlign};`}
  ${({ sTransform }) => sTransform && `text-transform: ${sTransform};`}
  ${({ sFont }) => sFont && getFontCSS(sFont)}
`
