import PropTypes from 'prop-types'
import * as S from './styled'

const HScrollRow = ({ children, withoutPadding }) => {
  return (
    <S.RowSizer>
      <S.ScrollContainer>
        <S.LayoutGrid>
          {withoutPadding ? <div /> : <S.PagePadding />}
          <div>{children}</div>
          {withoutPadding ? <div /> : <S.PagePadding />}
        </S.LayoutGrid>
      </S.ScrollContainer>
    </S.RowSizer>
  )
}

HScrollRow.defaultProps = {
  withoutPadding: false
}
HScrollRow.propTypes = {
  withoutPadding: PropTypes.bool
}

export default HScrollRow
