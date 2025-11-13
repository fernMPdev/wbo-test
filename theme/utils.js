import PropTypes from 'prop-types'
import theme from '.'

import breakpoints from './breakpoints'

import _get from 'lodash/get'
import _set from 'lodash/set'
import _isString from 'lodash/isString'

// PropType definition for props that are used to generate media queries in Styled components
export const QUERY_PROPTYPE = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.exact(
    breakpoints.reduce(
      (out, breakpoint) => {
        out[breakpoint.name] = PropTypes.oneOfType([PropTypes.string])
        return out
      },
      {
        default: PropTypes.oneOfType([PropTypes.string])
      }
    )
  )
]).isRequired

function printCssProps(cssProps) {
  let css = ''
  for (const eachProp in cssProps) {
    css += `${eachProp}: ${cssProps[eachProp]};`
  }
  return css
}

/*
  dataObject: {
    default: {
      [cssProp]: [cssValue]
    }
    [breakpoint]: {
      [cssProp]: [cssValue]
    }
  }
*/
export function getCSS(dataObject) {
  let cssString = ''

  if (dataObject.default) {
    cssString += printCssProps(dataObject.default)
  }
  breakpoints.forEach((breakpoint) => {
    if (dataObject[breakpoint.name]) {
      cssString += theme.media[breakpoint.name] + '{'
      cssString += printCssProps(dataObject[breakpoint.name])
      cssString += '}'
    }
  })

  return cssString
}

// Generates and memoizes CSS strings for every font definition in config/fonts.js
const generatedCSSStrings = {}

export function getFontCSS(fontPath) {
  let cssString = _get(generatedCSSStrings, fontPath, '')

  if (cssString === '') {
    const fontData = _get(theme.fonts, fontPath, undefined)

    if (fontData) {
      const { breakpointConfig, ...defaultValues } = fontData
      cssString = getCSS({ default: defaultValues, ...breakpointConfig })
      _set(generatedCSSStrings, fontPath, cssString)
    }
  }

  return cssString
}

/*
  Merges an object of property descriptions {
    margin: {default: '2px', md: '5px'},
    padding: {md: '5em', lg: '8em'}
  }
  Into an object with the format expected by getCSS {
    default: {
      margin: '2px'
    },
    md: {
      padding: '5em',
      margin: '5px
    },
    lg: {
      padding: '8em'
    }
  }
*/
export function generateCSSDataObject(propertiesToMerge) {
  const dataObject = {}

  for (const property in propertiesToMerge) {
    const propertyData = propertiesToMerge[property]

    if (propertyData) {
      // Single value
      if (_isString(propertyData)) {
        if (!dataObject.default) dataObject.default = {}
        dataObject.default[property] = propertyData
      }
      // Values per breakpoint
      else {
        for (const breakpoint in propertyData) {
          const breakpointData = propertyData[breakpoint]
          if (!dataObject[breakpoint]) dataObject[breakpoint] = {}
          dataObject[breakpoint][property] = breakpointData
        }
      }
    }
  }

  return dataObject
}
