import JobApplication from '@pages/JobApplication'
import PageSeo from '@templates/PageSeo'
import { generateSlug, getIdFromSlug } from '@utils/utils'
import { supabase } from 'lib/supabase/client'

function CareerDetailPage({ job }) {
  return (
    <>
      <PageSeo
        title={job?.position}
        description={`Estamos buscando un ${job?.position} para unirse a nuestro equipo y ayudar a crear experiencias digitales de alta calidad, optimizadas y atractivas para nuestros clientes.`}
      />
      <JobApplication job={job} />
    </>
  )
}

export default CareerDetailPage

export async function getStaticPaths() {
  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('id, position')
    .eq('active', true)

  if (error || !jobs?.length) {
    return { paths: [], fallback: 'blocking' }
  }

  const paths = jobs.map((job) => ({
    params: { slug: generateSlug(job.id, job.position) }
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const id = getIdFromSlug(slug)

  const { data: job, error } = await supabase.from('jobs').select('*').eq('id', id).single()

  if (error || !job || !job.active) {
    return { notFound: true }
  }

  return {
    props: { job },
    revalidate: 300
  }
}
