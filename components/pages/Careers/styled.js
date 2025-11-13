import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`

export const Title = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.blue};
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 1rem;
  text-align: center;
  padding: 32px 16px 32px 16px;

  ${({ theme }) => theme.media.md} {
    padding: 64px 16px 64px 16px;
  }
`
export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  align-items: center;
  height: 100%;
  margin-top: 32px;
  padding: 8px;
  ${({ theme }) => theme.media.md} {
    margin-top: 72px;
  }
`

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme.colors.border.neutral}`};
  max-width: 1400px;
  text-align: center;
`
