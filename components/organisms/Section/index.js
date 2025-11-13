import Anchor from '@atoms/Anchor'
import * as S from './styled'

function Section({ children, name, anchorOffset }) {
  return (
    <S.Root>
      <Anchor id={name} offset={anchorOffset} />
      {children}
    </S.Root>
  )
}

export default Section
