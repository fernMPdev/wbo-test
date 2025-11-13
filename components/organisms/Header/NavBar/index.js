import { scrollToAnchor } from '@utils/utils'
import { menuLinks } from '../menuLinks'
import * as S from './styled'
import Link from 'next/link'

function Navbar() {
  const handleClick = (anchor) => () => scrollToAnchor(anchor)

  return (
    <S.NavContainer>
      <S.NavList>
        {menuLinks.map(({ anchor, link, name }) =>
          anchor ? (
            <S.NavLink key={anchor} tag='li' font='body.navLink' onClick={handleClick(anchor)}>
              {name}
            </S.NavLink>
          ) : (
            <li key={link}>
              <Link href={`/${link}`}>
                <S.NavLink font='body.navLink' $asLink>
                  {name}
                </S.NavLink>
              </Link>
            </li>
          )
        )}
      </S.NavList>
    </S.NavContainer>
  )
}

export default Navbar
