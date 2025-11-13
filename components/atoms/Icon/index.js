import PropTypes from 'prop-types'
import theme from '../../../theme'
import { generateCSSDataObject, QUERY_PROPTYPE } from '../../../theme/utils'
import * as S from './styled'
const Icon = ({ iconName, size, color }) => {
  return (
    <S.Icon
      sColor={color}
      sCSSData={generateCSSDataObject({ 'font-size': size })}
      className={`${theme.iconFontFamily} icon-${iconName}`}
    />
  )
}
Icon.defaultProps = {
  size: '1em'
}
Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, QUERY_PROPTYPE])
}
export default Icon
