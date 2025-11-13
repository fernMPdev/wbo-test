import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as S from './styled.js'

const messages = ['Diseño Innovador', 'Desarrollo Eficaz', 'Experiencia Única', 'Somos WhiteBox']

const textContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.04
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
}

const letterVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 }
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { type: 'spring', damping: 12, stiffness: 100 }
  }
}

export const AnimatedMessages = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < messages.length - 1) {
      const nextMessageTimer = setTimeout(() => {
        setIndex(index + 1)
      }, 3500)
      return () => clearTimeout(nextMessageTimer)
    }
  }, [index])

  const currentMessage = messages[index]

  return (
    <S.MessageContainer>
      <AnimatePresence mode='wait'>
        <S.AnimatedText
          key={index}
          variants={textContainerVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {currentMessage.split('').map((char, i) => {
            const isWhiteBox = currentMessage === messages[3]
            const isHighlighted =
              isWhiteBox && char.toLowerCase() === 'o' && i === currentMessage.lastIndexOf('o')

            return (
              <S.AnimatedLetter
                key={`${char}-${i}`}
                variants={letterVariants}
                isHighlighted={isHighlighted}
              >
                {char}
              </S.AnimatedLetter>
            )
          })}
        </S.AnimatedText>
      </AnimatePresence>
    </S.MessageContainer>
  )
}
