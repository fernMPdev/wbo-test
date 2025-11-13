import NextImage from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import _isString from 'lodash/isString'
import Ratio from '@templates/Ratio'
import * as S from './styled'
import noImage from '@img/no-image.jpg'
import useResize from 'hooks/useResize'

function Image({ ratio, title, ...imageProps }) {
  const { src, width, height, layout, alt } = imageProps

  const defaultProps = useMemo(() => {
    const dfp = {}

    if (!src) {
      dfp.src = noImage
    }

    if (title && !alt) {
      dfp.alt = title
    }

    if (!width || !height) {
      if (_isString(src)) {
        dfp.layout = 'fill'
        dfp.objectFit = 'cover'
      }
    }

    if (ratio) {
      dfp.layout = 'fill'
      dfp.objectFit = 'cover'
    }

    return dfp
  }, [src, title, alt, width, height, ratio])

  // Auomatic handling of sizes prop for optimal image sizes.
  const isFill = layout === 'fill' || defaultProps.layout === 'fill'
  const isResponsive = layout === 'responsive'

  const wrapperRef = useRef()
  const [wrapperWidth, setWrapperWidth] = useState(undefined)

  const updateWrapperWidth = useCallback(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect()
      if (isFill || isResponsive) {
        setWrapperWidth(rect.width)
      }
    }
  }, [isFill, isResponsive])

  useEffect(() => {
    updateWrapperWidth()
  }, [updateWrapperWidth])

  useResize(updateWrapperWidth)

  // Rendering
  const ImageComponent = (
    <NextImage
      {...defaultProps}
      sizes={wrapperWidth && `${Math.round(wrapperWidth)}px`}
      {...imageProps}
    />
  )

  if (ratio) {
    return (
      <div ref={wrapperRef}>
        <Ratio ratio={ratio}>{ImageComponent}</Ratio>
      </div>
    )
  }

  return (
    <S.Wrapper sIsFill={isFill} sIsResponsive={isResponsive} ref={wrapperRef}>
      {ImageComponent}
    </S.Wrapper>
  )
}

export default Image
