import Button from '@atoms/Button'
import Text from '@atoms/Text'
import * as S from './styled'

export default function Error({ statusCode }) {
  return (
    <S.Root>
      <Text tag='h1' font='title.7' color='text.strong'>
        {statusCode ? `Error ${statusCode}` : 'Ha ocurrido un error'}
      </Text>
      <Text tag='p' font='body.paragraph'>
        Lo sentimos, algo salió mal.
      </Text>

      <div>
        <Button
          size='small'
          linkProps={{
            href: '/'
          }}
        >
          Ir al inicio
        </Button>
      </div>
    </S.Root>
  )
}
