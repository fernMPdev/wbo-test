import PropTypes from 'prop-types'
import Link from 'next/link'
import * as S from './styled'
import { useMemo } from 'react'

const Button = ({
  children,
  type,
  onClick,
  linkProps,
  disabled = false,
  loading = false,
  width,
  responsive = true,
  breakpoint = 'md',
  variant = 'solid.positive',
  iconPosition = 'right',
  size = 'large',
  ...rest
}) => {
  const isDisabled = loading || disabled

  const ButtonContent = useMemo(() => {
    return (
      <S.Button
        type={type}
        disabled={isDisabled}
        sVariant={variant}
        iconPosition={iconPosition}
        size={size}
        {...rest}
      >
        {loading ? <S.Loading /> : <span>{children}</span>}
      </S.Button>
    )
  }, [type, isDisabled, variant, iconPosition, size, rest, loading, children])

  return (
    <S.Root onClick={onClick} sWidth={width} sResponsive={responsive} sBreakpoint={breakpoint}>
      {linkProps ? <Link {...linkProps}>{ButtonContent}</Link> : ButtonContent}
    </S.Root>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  variant: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  width: PropTypes.string,
  responsive: PropTypes.bool,
  breakpoint: PropTypes.string,
  linkProps: PropTypes.object
}

export default Button
