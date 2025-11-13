import useElementBox from 'hooks/useElementBox'
import * as S from './styled'

const Expandible = ({ expanded, closedHeight = 0, children }) => {
  const { observe, height = 0 } = useElementBox()
  closedHeight = Math.min(closedHeight, height)

  return (
    <S.Root
      style={{
        height: expanded ? height + 'px' : closedHeight + 'px'
      }}
    >
      <div ref={observe}>{children}</div>
    </S.Root>
  )
}

export default Expandible
