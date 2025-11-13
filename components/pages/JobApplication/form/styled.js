import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 140px;
`

export const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 2rem;

  & > div {
    flex: 1;
    max-width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '600px')};
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 0;
  }
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;

  ${(props) =>
    props.required &&
    `
    &::after {
      content: ' *';
      color: #ef4444;
    }
  `}
`
export const FormSectionTitle = styled.div`
  margin-bottom: 1rem;
`

export const SubmitContainer = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.colors.border.neutral}`};
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  margin-top: -1.5rem;
  align-items: center;
  gap: 1rem;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`
