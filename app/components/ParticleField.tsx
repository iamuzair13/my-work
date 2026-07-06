"use client";

import { useSyncExternalStore, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/app/hooks/useMousePosition";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { lerp } from "@/app/lib/utils";

function createParticles(count: number) {
  return Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 12,
    z: (Math.random() - 0.5) * 8,
    speed: 0.1 + Math.random() * 0.2,
    scale: 0.02 + Math.random() * 0.04,
  }));
}

function Particles({ count }: { count: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useMousePosition();
  const smoothMouse = useRef({ x: 0, y: 0 });
  const particles = useRef(createParticles(count));
  const dummy = useRef(new THREE.Object3D());

  useFrame((state) => {
    if (!meshRef.current) return;

    smoothMouse.current.x = lerp(smoothMouse.current.x, mouse.x, 0.1);
    smoothMouse.current.y = lerp(smoothMouse.current.y, mouse.y, 0.1);

    const offsetX = (smoothMouse.current.x / window.innerWidth - 0.5) * -0.4;
    const offsetY = (smoothMouse.current.y / window.innerHeight - 0.5) * -0.4;

    particles.current.forEach((particle, i) => {
      particle.y +=
        Math.sin(state.clock.elapsedTime * particle.speed + i) * 0.002;
      particle.x +=
        Math.cos(state.clock.elapsedTime * particle.speed * 0.5 + i) * 0.001;

      dummy.current.position.set(
        particle.x + offsetX,
        particle.y + offsetY,
        particle.z,
      );
      dummy.current.scale.setScalar(particle.scale);
      dummy.current.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.current.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function getParticleCount() {
  if (typeof window === "undefined") return 0;
  if (window.innerWidth < 640) return 30;
  if (window.innerWidth < 1024) return 60;
  return 100;
}

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback, { passive: true });
  return () => window.removeEventListener("resize", callback);
}

function useParticleCount() {
  return useSyncExternalStore(
    subscribeToResize,
    getParticleCount,
    () => 0,
  );
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ParticleField() {
  const reducedMotion = useReducedMotion();
  const count = useParticleCount();
  const isClient = useIsClient();

  if (!isClient || reducedMotion || count === 0) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent-primary/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={count} />
      </Canvas>
    </div>
  );
}
