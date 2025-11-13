import * as S from './styled'

const Card = ({ member, isSelected, onClick }) => {
  return (
    <S.Card onClick={onClick} $isSelected={isSelected}>
      <S.ImageComponent src={member.signedImageUrl} alt={member.name} width={400} height={400} />
    </S.Card>
  )
}

export default Card
