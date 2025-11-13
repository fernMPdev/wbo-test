import PropTypes from 'prop-types'
import * as S from './styled'

const Tag = ({ children, variant, ...rest }) => {
  return (
    <S.Tag font='body.small' $variant={variant} {...rest}>
      {children}
    </S.Tag>
  )
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['error', 'success', 'neutral'])
}

Tag.defaultProps = {
  variant: 'neutral'
}

export default Tag
