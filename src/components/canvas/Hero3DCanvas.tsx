import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CentralCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.4;
      ringRef1.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y += delta * 0.35;
      ringRef2.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central intelligent crystal / sphere */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            color="#4f46e5"
            attach="material"
            distort={0.32}
            speed={2}
            roughness={0.15}
            metalness={0.7}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Orbiting Tech Ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Tech Ring 2 */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[3.0, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

// Satellites representing IT & AI pillars
const SatelliteNodes: React.FC = () => {
  const nodes = [
    { pos: [2.8, 1.2, 0.5] as [number, number, number], color: '#0ea5e9', label: 'Cloud' },
    { pos: [-2.6, -1.0, 0.8] as [number, number, number], color: '#10b981', label: 'Data' },
    { pos: [1.5, -2.2, -0.6] as [number, number, number], color: '#ec4899', label: 'Vision' },
    { pos: [-1.8, 2.0, -0.8] as [number, number, number], color: '#f59e0b', label: 'Logic' },
  ];

  return (
    <>
      {nodes.map((node, i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={node.pos}>
            <octahedronGeometry args={[0.32, 0]} />
            <meshStandardMaterial
              color={node.color}
              roughness={0.1}
              metalness={0.9}
              emissive={node.color}
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

// Particle field
const ParticleDust: React.FC = () => {
  const count = 70;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#818cf8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
};

export const Hero3DCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={0.9} color="#60a5fa" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#c7d2fe" />

        <CentralCore />
        <SatelliteNodes />
        <ParticleDust />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      {/* Decorative gradient badges around 3D canvas */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-xs font-medium text-slate-600 shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Interactive 3D Core • WebGL</span>
      </div>
    </div>
  );
};

