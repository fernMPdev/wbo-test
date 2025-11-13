import Text from '@atoms/Text'
import * as S from './styles'

const InputLabel = (props) => {
  return (
    <S.Label htmlFor={props.for}>
      <Text translate>{props.text}</Text>
    </S.Label>
  )
}

export default InputLabel
