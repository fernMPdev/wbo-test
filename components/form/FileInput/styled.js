import styled from 'styled-components'
import { getFontCSS } from 'theme/utils'
import _get from 'lodash/get'

export const InputFile = styled.div`
  position: relative;
`

export const InputFileContainer = styled.div`
  position: relative;
`

export const FakeInputFile = styled.div`
  position: relative;
  .fakeInput {
    padding: 0.6em 1.2em 0.6em 1.2em;
    color: ${({ theme }) => _get(theme.colors, 'input.text', 'black')};
    background-color: ${({ theme }) => theme.colors.neutral.white};
    border: 2px solid ${({ theme }) => _get(theme.colors, 'input.border', 'yellow')};
    border-radius: 4px;
    width: 100%;
    font-family: inherit;
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
  }
`
export const ImageContainer = styled.div`
  position: absolute;
  top: 20%;
  right: 16px;
`

export const ErrorsFileInput = styled.div`
  height: 2rem;
  margin: 8px 0;
`
