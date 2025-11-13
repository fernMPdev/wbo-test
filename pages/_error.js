import Error from '@organisms/Error'

export default function ErrorPage({ statusCode }) {
  return <Error statusCode={statusCode} />
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
