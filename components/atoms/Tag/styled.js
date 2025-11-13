import styled, { css } from 'styled-components'
import Text from '@atoms/Text'

export const Tag = styled(Text)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 9999px;
  border: ${({ theme }) => `1px solid ${theme.colors.border.neutral}`};

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'error':
        return css`
          background-color: ${theme?.colors?.error};
          color: ${({ theme }) => theme.colors.neutral.white};
        `
      case 'success':
        return css`
          background-color: ${theme?.colors?.secondary?.green};
          color: ${({ theme }) => theme.colors.neutral.white};
        `
      case 'neutral':
        return css`
          background-color: ${({ theme }) => theme.colors.neutral[900]};
          color: ${({ theme }) => theme.colors.neutral.black};
        `
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.neutral[900]};
          color: ${({ theme }) => theme.colors.neutral.black};
        `
    }
  }}
`
