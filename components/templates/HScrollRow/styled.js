import styled from 'styled-components'
import { generateCSSDataObject, getCSS } from '../../../config/theme/utils'

export const RowSizer = styled.div`
  display: grid;
`

export const ScrollContainer = styled.div`
  overflow-x: auto;
`

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`

export const PagePadding = styled.div`
  ${({ theme }) => getCSS(generateCSSDataObject({ 'padding-left': theme.pagePadding }))}
`
