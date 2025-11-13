'use client'

import { AnimatedMessages } from './AnimatedMessages'
import * as S from './styled'

const Overlay = () => {
  return (
    <S.OverlayContainer>
      <S.TopGradient />
      <S.RadialVignette />
      <S.CenterContainer>
        <AnimatedMessages />
      </S.CenterContainer>
      <S.BottomGradient />
    </S.OverlayContainer>
  )
}

export default Overlay
