import styled from 'styled-components'

export const Root = styled.div`
  margin-top: 32px;
  padding: 3rem 1rem;
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  max-width: 580px;
  margin-right: auto;
  ${({ theme }) => theme.media.md} {
    margin-left: auto;
    max-width: 100%;
  }
  ${({ theme }) => theme.media.lg} {
    margin-left: 0;
    max-width: 680px;
  }
`

export const TitleContainer = styled.div``

export const StyleTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    max-width: 436px;
  }
  ${({ theme }) => theme.media.md} {
    p {
      max-width: 100%;
    }
  }
  ${({ theme }) => theme.media.lg} {
    p {
      max-width: 536px;
    }
  }
`
export const ImageContainer = styled.div`
  display: none;
  ${({ theme }) => theme.media.xxl} {
    display: block;
    position: absolute;
    top: 200px;
    right: 0;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
`
