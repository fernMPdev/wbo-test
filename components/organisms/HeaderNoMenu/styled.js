import Link from 'next/link'
import styled from 'styled-components'

export const Header = styled.div`
  height: var(--header-height);
  background-color: ${({ theme }) => theme.colors.secondary.blue};
  width: 100%;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  z-index: 9999;
  display: flex;
  align-items: center;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  ${({ theme }) => theme.media.lg} {
    padding-left: 3rem;
  }
`
