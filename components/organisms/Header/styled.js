import { motion } from 'framer-motion'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Root = styled.div``
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const BurgerContainer = styled.div`
  cursor: pointer;
`

export const CrossContainer = styled.div`
  cursor: pointer;
`

export const Header = styled(motion.header)`
  height: var(--header-height);
  ${({ $withBg }) =>
    $withBg
      ? css`
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(60px) saturate(100%);
          -webkit-backdrop-filter: blur(60px) saturate(100%);
        `
      : css`
          background-color: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  z-index: 9999;
  ${({ theme }) => theme.media.lg} {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    padding-left: 0;
  }
`

export const LogoLink = styled(Link)`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  width: fit-content;
  ${({ theme }) => theme.media.lg} {
    padding-left: 3rem;
  }
`
