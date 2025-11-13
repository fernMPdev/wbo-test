import fonts from './fonts'
import media from './media'

const colors = {
  neutral: {
    white: '#FFFFFF',
    950: '#F3F3F3',
    900: '#D7D7D7',
    550: '#ACACAC',
    500: '#818181',
    black: '#25282A'
  },
  primary: '#EEE648',
  secondary: {
    green: '#70C056',
    blue: '#181826'
  },
  error: '#CA5050',
  link: '#3D74CC',
  border: {
    neutral: '#D9DFE3'
  }
}

const colorConfig = {
  text: {
    default: colors.neutral[500],
    strong: colors.neutral.black
  },
  input: {
    border: colors.primary,
    fill: colors.neutral[500],
    text: colors.neutral.black
  },
  background: colors.neutral[950]
}

const theme = {
  media,
  fonts,
  iconFontFamily: 'font-whitebox-icons',
  fixedLayoutBreakpoint: 'lg',
  colors: {
    ...colors,
    ...colorConfig
  },
  contentWidth: {
    default: '1510px'
  },
  pagePadding: {
    default: '16px',
    md: '48px',
    lg: '96px'
  }
}

export default theme
