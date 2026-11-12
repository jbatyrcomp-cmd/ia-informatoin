import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface NeuralProps {
  eraKey: string;
}

const NeuralMesh: React.FC<NeuralProps> = ({ eraKey }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Configure layers based on era
  const layerCounts = useMemo(() => {
    switch (eraKey) {
      case 'symbolic':
        return [2, 1]; // Perceptron
      case 'winters':
        return [3, 4, 2]; // Early multi-layer
      case 'ml':
        return [4, 6, 6, 3];
      case 'deeplearning':
        return [5, 8, 10, 8, 4];
      case 'transformer':
      case 'generative':
      case 'agentic':
      default:
        return [5, 9, 12, 9, 5]; // Deep attention network
    }
  }, [eraKey]);

  // Compute node coordinates
  const nodes = useMemo(() => {
    const list: { pos: [number, number, number]; layerIdx: number; id: number }[] = [];
    let id = 0;
    const layerSpacing = 1.4;
    const startX = -((layerCounts.length - 1) * layerSpacing) / 2;

    layerCounts.forEach((count, lIdx) => {
      const x = startX + lIdx * layerSpacing;
      const height = (count - 1) * 0.55;
      const startY = -height / 2;
      for (let i = 0; i < count; i++) {
        const y = startY + i * 0.55;
        // slight z jitter for 3D depth
        const z = (Math.sin(lIdx * 1.5 + i * 0.8) * 0.45);
        list.push({ pos: [x, y, z], layerIdx: lIdx, id: id++ });
      }
    });
    return list;
  }, [layerCounts]);

  // Compute connections between adjacent layers
  const connections = useMemo(() => {
    const lines: number[] = [];
    for (let l = 0; l < layerCounts.length - 1; l++) {
      const currentLayer = nodes.filter((n) => n.layerIdx === l);
      const nextLayer = nodes.filter((n) => n.layerIdx === l + 1);

      currentLayer.forEach((fromNode) => {
        nextLayer.forEach((toNode) => {
          lines.push(fromNode.pos[0], fromNode.pos[1], fromNode.pos[2]);
          lines.push(toNode.pos[0], toNode.pos[1], toNode.pos[2]);
        });
      });
    }
    return new Float32Array(lines);
  }, [nodes, layerCounts]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Synapse connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* Neurons */}
      {nodes.map((node) => {
        const isInput = node.layerIdx === 0;
        const isOutput = node.layerIdx === layerCounts.length - 1;
        const color = isInput ? '#0ea5e9' : isOutput ? '#10b981' : '#6366f1';

        return (
          <mesh key={node.id} position={node.pos}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export const NeuralNetwork3D: React.FC<NeuralProps> = ({ eraKey }) => {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white/80 to-slate-50/60 border border-indigo-100/60">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 46 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#818cf8" />
        <NeuralMesh eraKey={eraKey} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 text-xs text-slate-600 font-medium flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
        <span>3D Neural Architecture (Active weights)</span>
      </div>
    </div>
  );
};
