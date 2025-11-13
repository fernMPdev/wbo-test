import { motion } from 'framer-motion'

const BurgerIcon = () => {
  return (
    <motion.svg
      width='32'
      height='18'
      viewBox='0 0 32 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <line x1='0' x2='32' y1='1' y2='1' stroke='#fff' strokeWidth='2' />

        <line x1='0' x2='32' y1='9' y2='9' stroke='#fff' strokeWidth='2' />
        <line initial='center' x1='0' x2='32' y1='17' y2='17' stroke='#fff' strokeWidth='2' />
      </g>
    </motion.svg>
  )
}

export default BurgerIcon
