import PropTypes from 'prop-types'
import * as S from './styled'
import { getHeightToWidthRatio } from './utils'

const Ratio = ({ ratio, minHeight, children }) => (
  <S.Ratio sPaddingTop={getHeightToWidthRatio(ratio)} sMinHeight={minHeight}>
    <S.Content>{children}</S.Content>
  </S.Ratio>
)

Ratio.defaultProps = {
  minHeight: 'initial'
}

Ratio.propTypes = {
  ratio: PropTypes.string.isRequired, // Ratio format "width:height"
  minHeight: PropTypes.string
}

export default Ratio
