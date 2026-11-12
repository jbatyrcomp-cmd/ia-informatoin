import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useOrientation } from '../../hooks/useOrientation';
import { Compass } from 'lucide-react';

interface ConstellationProps {
  pointer: { x: number; y: number };
}

const ConstellationMesh: React.FC<ConstellationProps> = ({ pointer }) => {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Generate 3D nodes
  const nodeCount = 65;
  const { positions, baseCoords } = useMemo(() => {
    const coords: [number, number, number][] = [];
    const pos = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 8 - 1;
      coords.push([x, y, z]);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return { positions: pos, baseCoords: coords };
  }, [nodeCount]);

  // Compute connections between nearby nodes (max distance 3.2)
  const lineGeometry = useMemo(() => {
    const lines: number[] = [];
    const maxDist = 3.2;

    for (let i = 0; i < baseCoords.length; i++) {
      for (let j = i + 1; j < baseCoords.length; j++) {
        const dx = baseCoords[i][0] - baseCoords[j][0];
        const dy = baseCoords[i][1] - baseCoords[j][1];
        const dz = baseCoords[i][2] - baseCoords[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDist) {
          lines.push(baseCoords[i][0], baseCoords[i][1], baseCoords[i][2]);
          lines.push(baseCoords[j][0], baseCoords[j][1], baseCoords[j][2]);
        }
      }
    }
    return new Float32Array(lines);
  }, [baseCoords]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth lerp to mouse / gyroscope orientation
    targetRotation.current.x = THREE.MathUtils.lerp(
      targetRotation.current.x,
      pointer.y * 0.45,
      delta * 2.5
    );
    targetRotation.current.y = THREE.MathUtils.lerp(
      targetRotation.current.y,
      pointer.x * 0.55,
      delta * 2.5
    );

    // Continuous subtle background breathing + pointer tilt
    groupRef.current.rotation.x =
      targetRotation.current.x + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    groupRef.current.rotation.y =
      targetRotation.current.y + state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic connection lines between nodes */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lineGeometry, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.22}
          linewidth={1}
        />
      </lineSegments>

      {/* Floating 3D Star/Neural Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.14}
          color="#4f46e5"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Secondary softer cyan particle dust */}
      <points position={[0, 0, -2]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#0ea5e9"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export const Global3DBackground: React.FC = () => {
  const { x, y, isGyroActive, needsPermission, requestGyroPermission } = useOrientation();

  return (
    <>
      {/* Full viewport WebGL Canvas fixed in background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 55 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={1.0} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
          <ConstellationMesh pointer={{ x, y }} />
        </Canvas>
      </div>

      {/* Optional subtle iOS Gyroscope activation pill */}
      {needsPermission && (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
          <button
            onClick={requestGyroPermission}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-indigo-600/90 text-white text-xs font-bold shadow-lg backdrop-blur-md border border-indigo-400 hover:bg-indigo-700 transition-all active:scale-95 animate-bounce"
            aria-label="3D Giroskopni yoqish"
          >
            <Compass className="w-4 h-4 animate-spin" />
            <span>3D Giroskopni yoqish</span>
          </button>
        </div>
      )}

      {/* Live Gyroscope active indicator on mobile */}
      {isGyroActive && (
        <div className="fixed top-20 right-4 z-30 pointer-events-none hidden sm:hidden">
          <span className="px-2 py-0.5 rounded-full bg-emerald-100/80 text-[9px] font-bold text-emerald-800 border border-emerald-300">
            Gyro 3D Active
          </span>
        </div>
      )}
    </>
  );
};

