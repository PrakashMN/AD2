import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    const size = 22
    const seg = 120
    const geo = new THREE.PlaneGeometry(size, size, seg, seg)
    geo.rotateX(-Math.PI / 2)

    const pos = geo.attributes.position
    const colors = new Float32Array(pos.count * 3)

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const r = Math.sqrt(x * x + z * z)

      const y =
        Math.sin(x * 0.5 + z * 0.35) * 1.0 +
        Math.cos(z * 0.6 - x * 0.25) * 0.7 +
        Math.sin((x + z) * 0.7) * 0.6 +
        Math.cos(x * 0.85 + z * 0.75) * 0.4 +
        Math.sin(x * 1.3 - z * 0.7) * 0.25 +
        Math.max(0, 1 - r / 8) * 1.8

      pos.setY(i, y)

      const h = (y + 2) / 5.5

      if (h < 0.3) {
        const t = h / 0.3
        colors[i * 3] = 0.12 + t * 0.2
        colors[i * 3 + 1] = 0.1 + t * 0.15
        colors[i * 3 + 2] = 0.08 + t * 0.06
      } else if (h < 0.55) {
        const t = (h - 0.3) / 0.25
        colors[i * 3] = 0.32 + t * 0.25
        colors[i * 3 + 1] = 0.25 + t * 0.25
        colors[i * 3 + 2] = 0.14 + t * 0.3
      } else {
        const t = Math.min(1, (h - 0.55) / 0.45)
        const g = 0.55 + t * 0.45
        colors[i * 3] = g
        colors[i * 3 + 1] = g
        colors[i * 3 + 2] = g + t * 0.05
      }
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.computeVertexNormals()

    return geo
  }, [])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -2, 0]}>
      <meshStandardMaterial vertexColors roughness={0.7} metalness={0.0} flatShading />
    </mesh>
  )
}

function Stars() {
  const geometry = useMemo(() => {
    const count = 1500
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.12} color="#ffffff" transparent opacity={0.5} />
    </points>
  )
}

export default function MountainScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 5, 13], fov: 50, near: 0.1, far: 60 }}
      gl={{ antialias: true, alpha: false }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#0b0b1a']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[8, 12, 4]} intensity={1.0} color="#ffe4b5" />
      <directionalLight position={[-4, 6, -8]} intensity={0.2} color="#7799dd" />
      <fog attach="fog" args={['#0b0b1a', 12, 28]} />
      <Stars />
      <Terrain />
    </Canvas>
  )
}
