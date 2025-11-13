import PageLayout from '@templates/PageLayout'
import * as S from './styled'
import Text from '@atoms/Text'
import JobPosting from './components/JobPosting'
import RecruitmentProcess from './components/RecruitmentProcess'
import Container from '@templates/Container'
import { useTheme } from 'styled-components'
import Link from 'next/link'

function CareersPage({ jobs = [] }) {
  const theme = useTheme()

  return (
    <PageLayout showMenu={false}>
      <Container width={'100%'} withoutPadding>
        <S.Root>
          <S.Title>
            <Text tag='h1' font='title.8' color='neutral.white'>
              ¡TRABAJA CON{' '}
              <span
                style={{
                  color: theme.colors.secondary.green,
                  textDecoration: `underline solid ${theme.colors.secondary.green}`,
                  textDecorationThickness: '6px',
                  textUnderlineOffset: '6px'
                }}
              >
                NOSOTROS!
              </span>
            </Text>
            <Text
              tag='p'
              font='body.paragraph'
              style={{
                fontWeight: 'bolder'
              }}
            >
              Crecer, aprender y crear — sin importar el punto de partida, lo que cuenta es la
              pasión por construir algo significativo.
            </Text>
          </S.Title>
          <RecruitmentProcess />
          <S.JobList>
            {jobs.length === 0 && (
              <S.Empty>
                <Text font='body.paragraph' color='text.strong'>
                  Actualmente no tenemos ofertas de empleo activas
                </Text>
                <Link href='/#contact'>Contacta con nosotros</Link>
              </S.Empty>
            )}
            {jobs.map((job) => (
              <JobPosting key={job.id} {...job} />
            ))}
          </S.JobList>
        </S.Root>
      </Container>
    </PageLayout>
  )
}

export default CareersPage
