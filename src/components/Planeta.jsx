/* eslint-disable react/no-unknown-property */
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";
import "../App.css";
import useKeyPressed from "../hooks/useKeyPressed";

export default function Planeta() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Esfera />
      </Suspense>
      <Environment preset="sunset" />
      <ContactShadows
        opacity={0.5}
        scale={15}
        far={10}
        resolution={256}
        color={"#000000"}
        position={[0, -2.5, 0]}
      />
    </Canvas>
  );
}

export function Esfera(props) {
  const colorMap = useLoader(TextureLoader, [
    "/textures/tierra-texture.jpeg",
    "/textures/marte-texture.png",
  ]);

  const { keyPlanet, planetRef } = useKeyPressed();

  return (
    <group {...props} dispose={null}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        {keyPlanet === 1 ? <meshStandardMaterial map={colorMap[0]} /> : ""}
        {keyPlanet === 2 ? <meshStandardMaterial map={colorMap[1]} /> : ""}
      </mesh>
    </group>
  );
}
