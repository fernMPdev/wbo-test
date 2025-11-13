import styled, { css } from 'styled-components'

export const Checkbox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: transparent;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.neutral.white};

  /* Icon */
  > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const InfoBox = styled.div`
  margin-left: 0.5rem;
`

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.neutral.dark};
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.neutral.normal};
`

export const InputBox = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;

  ${({ hasDescription }) =>
    hasDescription &&
    css`
      align-items: flex-start;

      ${InfoBox} {
        margin-top: 0.2rem;
      }
    `}

  ${({ sIsActive }) =>
    sIsActive &&
    css`
      ${Checkbox} {
        background-color: ${({ theme }) => theme.colors.primary.red};
        border-color: ${({ theme }) => theme.colors.primary.red};
        color: ${({ theme }) => theme.colors.neutral.white};
      }
    `}
`

export const Input = styled.input`
  display: none;

  :checked + div {
    ${Checkbox} {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.neutral.white};
    }
  }

  :disabled + div {
    opacity: 0.4;
    cursor: default;

    ${Label} {
      color: ${({ theme }) => theme.colors.neutral.normal};
    }

    ${Checkbox} {
      border-color: ${({ theme }) => theme.colors.neutral.normal};
    }
  }
`
