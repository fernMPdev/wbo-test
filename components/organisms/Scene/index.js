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
import Text from '@atoms/Text'

function getWebGLInfo() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

    if (!gl) return null

    let vendor, renderer

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')

    if (debugInfo) {
      //  La extensión proporciona el nombre real (no enmascarado)
      // del fabricante y el renderizador de la GPU, esencial para detectar fallbacks de CPU.
      vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    } else {
      // Fallback: Si la extensión no está disponible (por seguridad/privacidad del navegador),
      // se usan los parámetros estándar. Estos a menudo son genéricos y menos útiles.
      vendor = gl.getParameter(gl.VENDOR)
      renderer = gl.getParameter(gl.RENDERER)
    }

    return {
      vendor: vendor ? vendor.toString() : '',
      renderer: renderer ? renderer.toString() : ''
    }
  } catch (e) {
    return null
  }
}

function SceneContent() {
  const { progress } = useProgress()
  const isCompleted = progress === 100
  const theme = useTheme()
  const canvasRef = useRef()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1
    })

    if (canvasRef.current) observer.observe(canvasRef.current)
    return () => observer.disconnect()
  }, [])

  return (
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
  )
}

export default function SceneWrapper() {
  const [canUseWebGL, setCanUseWebGL] = useState(null)

  useEffect(() => {
    const info = getWebGLInfo()

    if (!info) {
      setCanUseWebGL(false)
      return
    }

    /**
     *
     * - 'swiftshader': Fallback común de Chrome/Edge cuando la GPU no está disponible.
     * - 'llvmpipe' / 'mesa' / 'swrast': Renderizadores OpenGL/WebGL por software comunes en entornos Linux o headless.
     * - 'basic render driver' / 'gdi generic': Fallbacks de Windows (Direct3D/GDI) basados en CPU.
     * - 'cpu': Patrón genérico que algunos fallbacks usan.
     * - 'virtualbox': A menudo indica un entorno virtualizado con aceleración limitada.
     */

    const SW_RENDERERS = [
      'swiftshader',
      'llvmpipe',
      'mesa',
      'basic render driver',
      'swrast',
      'cpu',
      'gdi generic',
      'virtualbox'
    ]

    const isSoftware = SW_RENDERERS.some((pattern) => info.renderer.toLowerCase().includes(pattern))

    setCanUseWebGL(!isSoftware)
  }, [])

  if (canUseWebGL === null) return null

  if (!canUseWebGL) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <Text tag='p' font='body.paragraph' color='neutral.white'>
          Tu dispositivo o navegador no soporta WebGL con GPU real.
          <br />
          Para la mejor experiencia, habilita aceleración de hardware o usa un dispositivo
          compatible.
        </Text>
      </div>
    )
  }

  return <SceneContent />
}
