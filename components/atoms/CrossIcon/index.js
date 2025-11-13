import { onClickCross } from 'animations/animations'
import { motion } from 'framer-motion'

const CrossIcon = ({ isMenuOpen }) => {
  return (
    <motion.svg
      variants={onClickCross}
      animate={isMenuOpen ? 'open' : 'closed'}
      whileHover='rotation'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.21878 5.78103L5.77979 7.22003L14.5628 16L5.77979 24.781L7.21978 26.22L15.9998 17.437L24.7808 26.219L26.2188 24.781L17.4368 16L26.2188 7.21903L24.7798 5.78003L15.9998 14.563L7.21878 5.78103Z'
        fill='white'
      />
    </motion.svg>
  )
}

export default CrossIcon
