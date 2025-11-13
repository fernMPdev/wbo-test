'use client'

import { inSphere } from 'maath/random'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => inSphere(new Float32Array(5000 * 3), { radius: 30 }))
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color='#EEE648' size={0.05} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

export default Stars
