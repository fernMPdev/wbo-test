import { supabaseAdmin } from '@lib/supabase/admin'
import HomePageComponent from '@pages/Home'
import PageSeo from '@templates/PageSeo'
import { supabase } from 'lib/supabase/client'

function HomePage({ teamMembers }) {
  return (
    <>
      <PageSeo />
      <HomePageComponent teamMembers={teamMembers} />
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const SIGNED_URL_EXPIRATION = 24 * 60 * 60 // 24 horas
  const REVALIDATION_INTERVAL = 6 * 60 * 60 // 6 horas

  async function getSignedUrl(imagePath) {
    if (!imagePath) return null

    const imageName = imagePath.trim().replace(/^photos\//, '')

    try {
      const { data: signedData, error: signedError } = await supabaseAdmin.storage
        .from('photos')
        .createSignedUrl(imageName, SIGNED_URL_EXPIRATION)

      if (signedError) {
        return null
      }
      return signedData.signedUrl
    } catch (err) {
      return null
    }
  }
  try {
    const { data: teamMembers, error: membersError } = await supabase
      .from('team_members')
      .select('*')

    if (membersError) {
      return {
        props: { teamMembers: [] },
        revalidate: 60
      }
    }

    const teamMembersWithUrls = await Promise.all(
      teamMembers.map(async (member) => ({
        ...member,
        signedImageUrl: await getSignedUrl(member.image)
      }))
    )

    return {
      props: { teamMembers: teamMembersWithUrls },
      revalidate: REVALIDATION_INTERVAL
    }
  } catch (error) {
    return {
      props: { teamMembers: [] },
      revalidate: 60
    }
  }
}
