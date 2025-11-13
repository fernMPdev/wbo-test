import styled from 'styled-components'

export const Card = styled.div`
  padding: 1rem;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border.neutral}`};
  max-width: 1400px;

  ${({ theme }) => theme.media.md} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 1rem;
`

export const Info = styled.div``

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const WrapperButton = styled.div`
  justify-self: flex-end;
`

export const WrapperInnerButton = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
