import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  height: 100%;
  ${({ theme }) => theme.media.xl} {
    display: flex;
    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary.blue};
  gap: 32px;
  ${({ theme }) => theme.media.xl} {
    gap: 64px;
  }
`
