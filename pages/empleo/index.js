import CareersPageComponent from '@pages/Careers'
import PageSeo from '@templates/PageSeo'
import { supabase } from 'lib/supabase/client'

function CareersPage({ jobsList }) {
  return (
    <>
      <PageSeo title='Empleo' description='Puestos de trabajo disponibles' />
      <CareersPageComponent jobs={jobsList} />
    </>
  )
}

export default CareersPage

export async function getStaticProps() {
  const { data: jobsList = [], error } = await supabase.from('jobs').select('*').eq('active', true)

  if (error) {
    return {
      props: { jobsList: [] },
      revalidate: 60
    }
  }

  return {
    props: { jobsList },
    revalidate: 60
  }
}
