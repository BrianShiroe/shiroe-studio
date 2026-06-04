"use client";

import { Points, PointMaterial, type PointsInstancesProps } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);

  // Math/random's inSphere requires groups of 3 (x, y, z). 5000 is not divisible by 3.
  // Using 5001 avoids internal index truncations. We then sanitize any NaN values.
  const [sphere] = useState(() => {
    const rawPoints = random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array;
    return rawPoints.map((val) => (isNaN(val) ? 0 : val));
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* sphere is already a Float32Array, passing it directly avoids redundant wrapping 
        and prevents double-instantiation errors.
      */}
      <Points ref={ref} stride={3} positions={sphere} frustumCulled {...props}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);