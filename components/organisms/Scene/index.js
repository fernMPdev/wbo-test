'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import Logo from './Logo'
import { DitherShader } from './shaders/DitherShader'
import Stars from './Stars'
import Overlay from './Overlay'
import { AdaptiveDpr, AdaptiveEvents, Preload, useProgress } from '@react-three/drei'
import { useTheme } from 'styled-components'

export default function Scene() {
  const { progress } = useProgress()
  const isCompleted = progress === 100
  const theme = useTheme()

  const canvasRef = useRef()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) observer.observe(canvasRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
        <Canvas
          ref={canvasRef}
          frameloop={visible ? 'always' : 'never'}
          camera={{ position: [0, 0, 30], fov: 45, near: 0.1, far: 50 }}
          dpr={[1, 1.5]}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            background: theme.colors.secondary.blue
          }}
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Logo />
            <Stars />
            <mesh position={[0, 0, -20]}>
              <planeGeometry args={[100, 100]} />
              <shaderMaterial
                uniforms={{
                  uColor: { value: new THREE.Color(theme.colors.secondary.blue) },
                  uLightDirection: { value: new THREE.Vector3(0.5, 0.5, 1) }
                }}
                vertexShader={DitherShader.vertexShader}
                fragmentShader={DitherShader.fragmentShader}
                side={THREE.DoubleSide}
              />
            </mesh>
            <Preload all />
          </Suspense>
          <EffectComposer>
            <Bloom intensity={0.9} luminanceThreshold={0.5} luminanceSmoothing={0.9} height={600} />
          </EffectComposer>
        </Canvas>
        {isCompleted && <Overlay />}
      </div>
    </>
  )
}
