"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useRef, useState } from "react"
import type { Mesh } from "three"

function FloatingShape({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        args={[1, 32, 32]}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.2} />
      </Sphere>
    </Float>
  )
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-50">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <FloatingShape position={[-3, 2, -2]} color="#FFD1DC" scale={1.2} />
        <FloatingShape position={[3, -2, -1]} color="#FFE4E1" scale={1.5} />
        <FloatingShape position={[-2, -3, -4]} color="#FFB6C1" scale={0.8} />
        <FloatingShape position={[4, 2, -3]} color="#FFC0CB" scale={1} />
      </Canvas>
    </div>
  )
}
