import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const PageSeo = ({
  title,
  titleTemplate,
  canonical,
  description,
  noIndex = false,
  noFollow,
  openGraph
}) => {
  const hostname = process.env.NEXT_PUBLIC_SITE_URL || 'https://whiteboxoffice.com'
  const router = useRouter()

  const resolvedCanonical = canonical || `${hostname}${router.asPath === '/' ? '' : router.asPath}`

  const resolvedNoFollow = noFollow ?? noIndex

  return (
    <NextSeo
      title={title}
      titleTemplate={titleTemplate}
      canonical={resolvedCanonical}
      description={description}
      noindex={noIndex}
      nofollow={resolvedNoFollow}
      openGraph={{
        title,
        description,
        url: resolvedCanonical,
        locale: 'es_ES',
        site_name: 'WhiteBox Office',
        images: [
          {
            url: `${hostname}/static/img/logos/vector.png`,
            width: 1200,
            height: 630,
            alt: title || 'WhiteBox Office',
            type: 'image/png'
          }
        ],
        ...openGraph
      }}
    />
  )
}

export default PageSeo
