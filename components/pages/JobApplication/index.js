import * as S from './styled'
import PageLayout from '@templates/PageLayout'
import Container from '@templates/Container'
import Text from '@atoms/Text'
import Tag from '@atoms/Tag'
import Form from './form'
import Link from 'next/link'
import Linkedin from '@img/logos/linkedin.svg'
import Infojobs from '@img/logos/infojobs.svg'
import { IconClock, IconBriefcase, IconMapPin } from '@tabler/icons-react'

import Image from '@atoms/Image'
import RenderContent from './RenderDescription'

const JobApplication = (props) => {
  const { job } = props
  const { location, workSchedule, position, type, description, infojobsUrl, linkedinUrl } =
    job ?? {}
  const hasLinks = !!infojobsUrl && !!linkedinUrl

  return (
    <PageLayout showMenu={false}>
      <Container>
        <S.PageWrapper>
          <S.JobDescription>
            <S.TitlesWrapper>
              <S.Back>
                <Link href={`/empleo`}>
                  <Text font='body.small' color='link'>
                    Volver
                  </Text>
                </Link>
              </S.Back>

              <Text tag='h2' font='title.30' color='text.strong'>
                {position}
              </Text>
            </S.TitlesWrapper>
            <S.TagsLinksContainer>
              <S.TagsContainer>
                <Tag variant='success'>
                  <IconMapPin color='#fff' size={'21px'} />
                  {workSchedule}
                </Tag>
                <Tag variant='success'>
                  <IconClock color='#fff' size={'21px'} /> {location}
                </Tag>
                <Tag variant='error'>
                  <IconBriefcase color='#fff' size={'21px'} />
                  {type}
                </Tag>
              </S.TagsContainer>
              {hasLinks && (
                <S.WrapperLinks>
                  {linkedinUrl && (
                    <a
                      href='https://www.linkedin.com/company/whitebox-office/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image src={Linkedin} width={24} height={24} alt='linkedin' />
                    </a>
                  )}
                  {infojobsUrl && (
                    <a
                      href='https://www.linkedin.com/company/whitebox-office/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image src={Infojobs} width={24} height={24} alt='infojobs' />
                    </a>
                  )}
                </S.WrapperLinks>
              )}
            </S.TagsLinksContainer>
            {description?.content && (
              <S.Description>
                <RenderContent content={description.content} />
              </S.Description>
            )}
          </S.JobDescription>
          <S.ApplicationForm>
            <Form position={position} />
          </S.ApplicationForm>
        </S.PageWrapper>
      </Container>
    </PageLayout>
  )
}

export default JobApplication
