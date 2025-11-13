import { createGlobalStyle } from 'styled-components'
import { generateCSSDataObject, getCSS, getFontCSS } from './utils'

const GlobalStyles = createGlobalStyle`

	:root {
      --header-height: 80px;

    ${({ theme }) =>
      getCSS(
        generateCSSDataObject({
          '--page-padding': theme.pagePadding
        })
      )}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
		font-size: 1rem;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-variant-numeric: tabular-nums;

    -ms-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    -webkit-font-smoothing: subpixel-antialiased;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.default};

    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    padding: 0;
    margin: 0;

    ${getFontCSS('body.paragraph')}
  }


#__next {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    margin: 0 auto;
  }

  #__next > main {
    grid-row: 2;
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
  }




  h1,h2,h3,h4,h5,h6,p,span {
    margin: 0;
  }

  #drawers-portal {
    z-index: 9000;
  }

  #modals-portal {
    z-index: 10000;
  }

  .grecaptcha-badge {
    display: none !important;
  }
  #contact {
  scroll-margin-top: 80px; 
}
`

export default GlobalStyles
