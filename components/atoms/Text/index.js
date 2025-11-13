import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const allowedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'li', 'small']
const Text = forwardRef(({ children, tag, font, color, transform, align, ...rest }, fdRef) => {
  if (!allowedTags.includes(tag)) return false

  return (
    <S.Text
      ref={fdRef}
      as={tag}
      sFont={font}
      sColor={color}
      sTransform={transform}
      sAlign={align}
      {...rest}
    >
      {children}
    </S.Text>
  )
})

Text.propTypes = {
  tag: PropTypes.string,
  font: PropTypes.string,
  color: PropTypes.string,
  transform: PropTypes.string
}

Text.defaultProps = {
  tag: 'span'
}

export default Text
