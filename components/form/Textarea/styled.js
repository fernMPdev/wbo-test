import styled, { css } from 'styled-components'
import { getFontCSS } from 'theme/utils'
import _get from 'lodash/get'
import { Label } from '@form/components/InputLabel/styles'

export const Textarea = styled.textarea`
  padding: 0.6em 1.2em 0.6em 1.2em;
  color: ${({ theme }) => _get(theme.colors, 'input.text', 'black')};
  background-color: ${({ theme }) => _get(theme.colors, 'input.fill', 'white')};
  border: 2px solid ${({ theme }) => _get(theme.colors, 'input.border', 'yellow')};
  border-radius: 4px;
  width: 100%;
  min-height: 168px;
  resize: none;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.neutral.white};

  ::placeholder {
    color: ${({ theme }) => _get(theme.colors, 'colors.neutral[550]', 'colors.neutral[550]')};
    ${getFontCSS('form.input.placeholder')}
    font-family: inherit;
  }

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.neutral.dark};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.neutral.medium};
    background: ${({ theme }) => theme.colors.neutral.white};
  }

  ${getFontCSS('form.input.value')}
`

export const InputBox = styled.div`
  /* Error styles */
  ${({ theme, hasErrors }) =>
    hasErrors &&
    css`
      ${Label} {
        color: ${theme.colors.primary.red};
      }
      ${Textarea} {
        color: ${theme.colors.primary.red};
        border-color: ${theme.colors.primary.red};

        :focus {
          border-color: ${theme.colors.primary.red};
        }
        ::placeholder {
          color: ${theme.colors.primary.red};
        }
      }
    `}

  /* Disabled styles */
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
    `}

  /* Required styles */
  ${({ isRequired }) =>
    isRequired &&
    css`
      ${Label}:after {
        content: '*';
        margin-left: 0.3em;
      }
    `}
`
