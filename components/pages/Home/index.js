import PageLayout from '@templates/PageLayout'
import SectionTalento from './sections/Talento'
import SectionHero from './sections/Hero'
import SectionTeam from './sections/Team'
import * as S from './styled'
import Section from '@organisms/Section'
import Services from './sections/Services'
import { useEffect } from 'react'

function HomePage({ teamMembers }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <PageLayout>
      <S.Root>
        <Section>
          <SectionHero />
        </Section>
        <S.Wrapper>
          <Section>
            <Services />
          </Section>
          <Section>
            <SectionTeam teamMembers={teamMembers} />
          </Section>
        </S.Wrapper>
        <Section>
          <SectionTalento />
        </Section>
      </S.Root>
    </PageLayout>
  )
}

export default HomePage
