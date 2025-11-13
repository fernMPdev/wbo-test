'use client'

import dynamic from 'next/dynamic'
import * as S from './styled'
import Anchor from '@atoms/Anchor'
import PageLoader from '@templates/PageLoader'
import { useState, useEffect } from 'react'
import { useProgress } from '@react-three/drei'
import { AnimatePresence } from 'framer-motion'

const Scene = dynamic(() => import('@organisms/Scene'), { ssr: false })

const Hero = () => {
  const { progress } = useProgress()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <Anchor id='hero'>
      <S.Root>
        <AnimatePresence>
          {loading && <PageLoader key='loader' progress={progress} />}
        </AnimatePresence>
        <Scene />
      </S.Root>
    </Anchor>
  )
}

export default Hero
