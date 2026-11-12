import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Stack3DProps {
  activeStep: number;
  onSelectStep: (step: number) => void;
}

const layerMeta = [
  { step: 1, y: -1.8, label: 'L1: Hardware & Silicon', color: '#64748b' },
  { step: 2, y: -0.9, label: 'L2: OS & Kernel', color: '#0ea5e9' },
  { step: 3, y: 0.0, label: 'L3: Compilers & Code', color: '#6366f1' },
  { step: 4, y: 0.9, label: 'L4: TCP/IP & Network', color: '#10b981' },
  { step: 5, y: 1.8, label: 'L5: Cloud & AI Apps', color: '#8b5cf6' },
];

const LayerPlate: React.FC<{
  step: number;
  y: number;
  label: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ y, label, color, isActive, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const targetScaleY = isActive ? 1.3 : 1.0;
      meshRef.current.scale.y = THREE.MathUtils.damp(meshRef.current.scale.y, targetScaleY, 6, delta);
    }
  });

  return (
    <group position={[0, y, 0]} onClick={onClick}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      >
        <boxGeometry args={[3.8, 0.28, 2.2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 0.6 : 0.15}
          roughness={0.25}
          metalness={0.7}
          transparent
          opacity={isActive ? 0.95 : 0.8}
        />
      </mesh>

      {/* Floating 3D text label */}
      <Text
        position={[0, 0, 1.25]}
        fontSize={0.16}
        color={isActive ? '#0f172a' : '#475569'}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

export const Stack3DView: React.FC<Stack3DProps> = ({ activeStep, onSelectStep }) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 border border-slate-200">
      <Canvas camera={{ position: [4.2, 2.5, 4.8], fov: 46 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[6, 8, 4]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-4, 2, -2]} intensity={0.6} color="#c7d2fe" />

        {layerMeta.map((layer) => (
          <LayerPlate
            key={layer.step}
            step={layer.step}
            y={layer.y}
            label={layer.label}
            color={layer.color}
            isActive={activeStep === layer.step}
            onClick={() => onSelectStep(layer.step)}
          />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 text-xs text-slate-600 font-medium">
        Qatlamni tanlash uchun 3D plitalar ustiga bosing
      </div>
    </div>
  );
};

