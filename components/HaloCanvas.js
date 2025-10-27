"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function HaloRing() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.003;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.1, 16, 100]} />
      <meshBasicMaterial color="#b87cff" />
    </mesh>
  );
}

export default function HaloCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      className="absolute bottom-0 w-full h-[300px] z-0"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <HaloRing />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
