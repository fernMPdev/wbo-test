import styled from 'styled-components'

export const Root = styled.div`
  margin: 2rem 0;
`

export const Input = styled.div``

export const InputFile = styled(Input)`
  position: relative;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 0;
  margin-right: auto;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 0;
  }
`
