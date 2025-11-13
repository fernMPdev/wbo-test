import * as S from './styles'
import Text from '@atoms/Text'

const InputErrors = ({ errors }) => {
  const getErrors = () => {
    if (errors?.types) {
      return Object.values(errors?.types).map((errorMessage, index) => (
        <S.Error key={index}>
          <Text translate>{errorMessage}</Text>
        </S.Error>
      ))
    }
    if (errors?.message) {
      return (
        <S.Error>
          <Text translate>{errors?.message}</Text>
        </S.Error>
      )
    }
    return undefined
  }

  return <S.Errors>{getErrors()}</S.Errors>
}

export default InputErrors
