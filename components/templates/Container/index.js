import * as S from './styled'

const Container = ({ className, children, withoutPadding, width }) => (
  <S.Root className={className} $withoutPadding={withoutPadding}>
    <S.Content $width={width}>{children}</S.Content>
  </S.Root>
)

export default Container
