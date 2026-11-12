import { useState, useEffect, useCallback } from 'react';

export interface OrientationData {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
  isGyroActive: boolean;
  needsPermission: boolean;
  requestGyroPermission: () => Promise<void>;
}

export const useOrientation = (): OrientationData => {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isGyroActive, setIsGyroActive] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);

  // Check if iOS DeviceOrientation requires permission
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: unknown }).requestPermission === 'function'
    ) {
      setNeedsPermission(true);
    }
  }, []);

  // Mouse move listener on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // If gyroscope is actively tilting, let gyro handle it
      if (isGyroActive) return;

      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      setCoords({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isGyroActive]);

  // Touch move fallback on mobile
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isGyroActive || e.touches.length === 0) return;
      const touch = e.touches[0];
      const normX = (touch.clientX / window.innerWidth) * 2 - 1;
      const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
      setCoords({ x: normX, y: normY });
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => window.removeEventListener('touchmove', handleTouchMove);
  }, [isGyroActive]);

  // Device orientation (gyroscope) handler
  const handleOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;

    setIsGyroActive(true);
    setNeedsPermission(false);

    // gamma is left-to-right tilt [-90, 90]
    // beta is front-to-back tilt [-180, 180]
    const normX = Math.max(-1, Math.min(1, (e.gamma || 0) / 35));
    // Center around natural phone holding angle (~45 degrees tilt)
    const normY = Math.max(-1, Math.min(1, ((e.beta || 0) - 45) / 35));

    setCoords({ x: normX, y: -normY });
  }, []);

  // Request Gyro Permission (for iOS 13+)
  const requestGyroPermission = async () => {
    const devOrient = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof devOrient.requestPermission === 'function') {
      try {
        const response = await devOrient.requestPermission();
        if (response === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation, true);
          setNeedsPermission(false);
          setIsGyroActive(true);
        } else {
          setNeedsPermission(false);
        }
      } catch (err) {
        console.warn('Gyroscope permission error:', err);
        setNeedsPermission(false);
      }
    } else {
      // Standard Android or non-permissioned browsers
      window.addEventListener('deviceorientation', handleOrientation, true);
      setNeedsPermission(false);
    }
  };

  // Attempt auto-attaching on Android / supporting browsers without prompt
  useEffect(() => {
    const devOrient = DeviceOrientationEvent as unknown as {
      requestPermission?: unknown;
    };

    if (typeof window !== 'undefined' && !devOrient.requestPermission) {
      window.addEventListener('deviceorientation', handleOrientation, true);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, [handleOrientation]);

  return {
    x: coords.x,
    y: coords.y,
    isGyroActive,
    needsPermission,
    requestGyroPermission,
  };
};

