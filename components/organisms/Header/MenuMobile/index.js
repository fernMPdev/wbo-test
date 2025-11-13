import Text from '@atoms/Text'
import Container from '@templates/Container'
import * as S from './styled'
import { motion } from 'framer-motion'
import { linkAnim } from 'animations/animations'
import { menuLinks } from '../menuLinks'
import Link from 'next/link'
import { scrollToAnchor } from '@utils/utils'

const MenuMobile = ({ handleToggleMenu }) => {
  return (
    <S.Menu>
      <Container>
        <S.Container>
          <S.MenuLinks>
            {menuLinks.map(({ anchor, name, link }) => (
              <Text
                key={name}
                tag='li'
                font='body.navLinkMobile'
                onClick={() => {
                  handleToggleMenu()
                  scrollToAnchor(anchor, true)
                }}
              >
                {anchor ? (
                  <motion.span
                    variants={linkAnim}
                    whileHover='hovered'
                    style={{
                      display: 'inline-block'
                    }}
                  >
                    {name}
                  </motion.span>
                ) : (
                  <Link href={`/${link}`}>
                    <S.LinkPainted
                      variants={linkAnim}
                      whileHover='hovered'
                      style={{
                        display: 'inline-block'
                      }}
                    >
                      {name}
                    </S.LinkPainted>
                  </Link>
                )}
              </Text>
            ))}
          </S.MenuLinks>
        </S.Container>
      </Container>
    </S.Menu>
  )
}

export default MenuMobile
