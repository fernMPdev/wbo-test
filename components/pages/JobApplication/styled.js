import styled from 'styled-components'
import { getFontCSS } from 'theme/utils'

export const PageWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 48px;
  display: flex;
  gap: 4rem;
  flex-direction: column;
`
export const TitlesWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 24px;
`

export const JobDescription = styled.div`
  flex: 1.2;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`
export const TagsLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  margin: -16px 0;
  overflow-x: auto;
  margin-top: 2.5rem;
  ${getFontCSS('body.paragraph')}
  color: ${({ theme }) => theme.colors.neutral.black};
`

export const ApplicationForm = styled.div`
  flex: 1;
`
export const Back = styled.div`
  display: flex;
  align-items: center;
  & > a {
    text-decoration-color: ${({ theme }) => theme.colors.link};
  }
`

export const WrapperLinks = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
  a {
    display: flex;
    text-decoration: none;
  }

  ${({ theme }) => theme.media.md} {
    margin-top: 0;
  }
`
