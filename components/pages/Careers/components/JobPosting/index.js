import Text from '@atoms/Text'
import * as S from './styled'
import Button from '@atoms/Button'
import { generateSlug } from '@utils/utils'
import Tag from '@atoms/Tag'

import { IconClock, IconArrowUpRight, IconMapPin } from '@tabler/icons-react'

const JobPosting = ({ id, position, location, workSchedule } = {}) => {
  return (
    <S.Card>
      <S.Header>
        <S.Info>
          <Text tag='h3' font='title.40' color='text.strong'>
            {position}
          </Text>
        </S.Info>
        <S.TagsContainer>
          <Tag variant={'success'}>
            <IconMapPin color='#fff' size={'21px'} />
            {location}
          </Tag>
          <Tag variant={'success'}>
            <IconClock color='#fff' size={'21px'} />
            {workSchedule}
          </Tag>
        </S.TagsContainer>
      </S.Header>
      <S.WrapperButton>
        <Button
          size='small'
          linkProps={{
            href: {
              pathname: '/empleo/[slug]',
              query: { slug: generateSlug(id, position) }
            }
          }}
          variant='solid.negative'
        >
          <S.WrapperInnerButton>
            <Text font='button' color='text.strong'>
              INSCRIBIRSE
            </Text>
            <IconArrowUpRight size={'24px'} />
          </S.WrapperInnerButton>
        </Button>
      </S.WrapperButton>
    </S.Card>
  )
}

export default JobPosting
