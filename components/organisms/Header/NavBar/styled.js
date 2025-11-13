import styled from 'styled-components'
import { motion } from 'framer-motion'
import Text from '@atoms/Text'

export const NavContainer = styled.nav`
  position: relative;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.neutral.white};
`

export const NavLink = styled(motion(Text))`
  position: relative;
  cursor: pointer;
  display: inline-block;
  line-height: 30px;

  ${({ $asLink }) =>
    !$asLink &&
    `
    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, #f7f293ff, #f5ee73ff, #eee648);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.35s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  `}

  ${({ $asLink, theme }) =>
    $asLink &&
    `
    background-color: ${theme.colors.primary};
    padding: 0 6px;
    color: ${theme.colors.neutral.black};
    border-radius: 4px;
  `}
`
