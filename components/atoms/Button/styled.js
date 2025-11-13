import styled, { css, keyframes } from 'styled-components'
import _get from 'lodash/get'
import { getFontCSS } from '../../../theme/utils'

export const Root = styled.div`
  display: inline-flex;
  ${({ theme, sWidth, sResponsive, sBreakpoint }) => {
    if (sResponsive) {
      return `
        width: 100%;
        ${theme.media[sBreakpoint]} {
          ${sWidth ? `max-width: ${sWidth};` : 'width: inherit;'}
        }
      `
    } else
      return `
      ${
        sWidth
          ? `
        width: 100%;
        max-width: ${sWidth};
      `
          : 'width: inherit;'
      }
    `
  }}

  a {
    display: flex;
    text-decoration: none;
  }
`

const RotationKeyframes = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`

export const Loading = styled.div`
  text-align: center;
  &:before {
    display: inline-block;
    content: '';
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border-left: 0.16em solid white;
    border-top: 0.16em solid white;
    animation: ${RotationKeyframes} 1000ms infinite;
  }
`

export const Button = styled.button`
  border: none;
  user-select: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getFontCSS('button')}
  ${({ sVariant }) => getVariantCSS(sVariant)}

  > i {
    flex-shrink: 0;

    :first-child {
      margin-right: 0.8rem;
    }
    :last-child {
      margin-left: 0.8rem;
    }
  }
`

const buttonVariants = {
  solid: {
    style: css`
      border-radius: 4px;
      transition:
        background-color 150ms ease-out,
        border-color 150ms ease-out,
        opacity 150ms ease-out;

      ${({ size }) => {
        if (size === 'small')
          return `
          padding: 0.8rem 0.8rem;
        `
        else if (size === 'large')
          return `
          padding: 1rem 1rem;
        `
        else return ''
      }}

      :disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }
    `,
    positive: css`
      color: ${({ theme }) => theme.colors.neutral.black};
      background-color: ${({ theme }) => theme.colors.primary};

      :hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.neutral.black};
        color: ${({ theme }) => theme.colors.neutral.white};
      }
    `,
    negative: css`
      color: ${({ theme }) => theme.colors.neutral.black};
      background-color: ${({ theme }) => theme.colors.primary};
      :hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.neutral.white};
      }
    `
  }
}

function getVariantCSS(variant, subObject = buttonVariants) {
  const [rootPath, variantPath] = variant.split('.', 2)
  const commonStyles = _get(subObject, rootPath + '.style', null)
  return css`
    ${commonStyles || ''}
    ${variantPath
      ? getVariantCSS(variantPath, _get(subObject, rootPath, null))
      : _get(subObject, rootPath, '')}
  `
}
