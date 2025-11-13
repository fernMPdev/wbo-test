import theme from 'theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'theme/globalStyles'
import 'public/static/fonts.css'
import 'public/static/style.css'
import { DeviceProvider } from 'context/DeviceContext'
import { DefaultSeo } from 'next-seo'
import RouteLoader from '@organisms/RouteLoader'
import { SEO_DESCRIPTION, SEO_TITLE } from '../constants/constants'

function CustomApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DeviceProvider>
        <DefaultSeo
          titleTemplate={`%s | ${SEO_TITLE}`}
          defaultTitle={SEO_TITLE}
          description={SEO_DESCRIPTION}
        />
        <RouteLoader />
        <Component {...pageProps} />
      </DeviceProvider>
    </ThemeProvider>
  )
}

export default CustomApp
