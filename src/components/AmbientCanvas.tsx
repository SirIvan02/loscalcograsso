import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 320

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.018
    meshRef.current.rotation.x = t * 0.006
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#B5683C"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.3
    meshRef.current.position.x = Math.cos(t * 0.3) * 0.2
    meshRef.current.rotation.z = t * 0.08
  })

  return (
    <mesh ref={meshRef} position={[2.5, 0, -2]}>
      <torusGeometry args={[1.2, 0.008, 16, 120]} />
      <meshBasicMaterial color="#B5683C" transparent opacity={0.12} />
    </mesh>
  )
}

function FloatingOrb2() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.position.y = Math.cos(t * 0.35) * 0.4
    meshRef.current.position.x = Math.sin(t * 0.25) * 0.3 - 2.5
  })

  return (
    <mesh ref={meshRef} position={[-2.5, 0.5, -3]}>
      <torusGeometry args={[0.8, 0.005, 16, 80]} />
      <meshBasicMaterial color="#B5683C" transparent opacity={0.08} />
    </mesh>
  )
}

export function AmbientCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles />
        <FloatingOrb />
        <FloatingOrb2 />
        <ambientLight intensity={0.6} />
      </Canvas>
    </div>
  )
}
