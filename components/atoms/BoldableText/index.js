import * as S from './styled'

function BoldableText({ text, makeBold }) {
  return (
    <S.Root makeBold={makeBold} sText={text}>
      {text}
    </S.Root>
  )
}

export default BoldableText
