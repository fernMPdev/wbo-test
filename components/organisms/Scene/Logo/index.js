'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import { DitherShader } from '../shaders/DitherShader'
import * as THREE from 'three'

useGLTF.preload('/models/whiteboxoffice.glb')

export default function Logo() {
  const { nodes } = useGLTF('/models/whiteboxoffice.glb')
  const groupRef = useRef()
  const { viewport } = useThree()

  const responsiveScale = Math.min(Math.min(viewport.width, viewport.height) / 2, 10)

  useFrame((state) => {
    if (groupRef.current) {
      const { pointer } = state
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.3,
        0.05
      )
    }
  })

  return (
    <group ref={groupRef}>
      <Center>
        {Object.values(nodes).map((node) =>
          node.isMesh ? (
            <mesh
              key={node.uuid}
              geometry={node.geometry}
              position={node.position}
              rotation={node.rotation}
              scale={responsiveScale}
            >
              <shaderMaterial attach='material' args={[DitherShader]} />
            </mesh>
          ) : null
        )}
      </Center>
    </group>
  )
}
