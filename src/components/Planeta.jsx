/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useContext, useRef } from "react";
import { TextureLoader } from "three";
import "../App.css";
import useGamepad from "../hooks/useGamepad";
import useKeyboard from "../hooks/useKeyboard";
import { KeyPlanetContext } from "../contexts/keyPlanetContext";

export default function Planeta() {
  return (
    <section className="aspect-square bg-slate-300 dark:bg-black/50">
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
    </section>
  );
}

export function Esfera(props) {
  const colorMap = useLoader(TextureLoader, [
    "/textures/tierra-texture.jpeg",
    "/textures/marte-texture.png",
  ]);
  const { keyPlanet, setKeyPlanet } = useContext(KeyPlanetContext);

  const planetRef = useRef("planeta");

  const {
    axisLeftX,
    axisLeftY,
    axisRightX,
    axisRightY,
    lsPressed,
    rsPressed,
    lPressed,
    rPressed,
  } = useGamepad();

  const { keyPressed, setKeyPressed } = useKeyboard();

  useFrame((state, delta) => {
    const planet = planetRef.current;

    // KEYBOARD
    const keyboardActions = {
      w: () => (planet.position.z -= delta / 2),
      s: () => (planet.position.z += delta / 2),
      a: () => (planet.position.x -= delta / 2),
      d: () => (planet.position.x += delta / 2),
      i: () => (planet.rotation.x -= delta / 2),
      k: () => (planet.rotation.x += delta / 2),
      j: () => (planet.rotation.y -= delta / 2),
      l: () => (planet.rotation.y += delta / 2),
      r: () => resetPosition(planet),
      p: () => resetRotation(planet),
    };

    if (keyboardActions[keyPressed]) {
      keyboardActions[keyPressed]();
    }

    // GAMEPAD
    // position
    if (axisLeftX > 0.5) planet.position.x += delta / 2;
    if (axisLeftX < -0.5) planet.position.x -= delta / 2;
    if (axisLeftY > 0.5) planet.position.z += delta / 2;
    if (axisLeftY < -0.5) planet.position.z -= delta / 2;
    // rotation
    if (axisRightX > 0.5) planet.rotation.y += delta / 2;
    if (axisRightX < -0.5) planet.rotation.y -= delta / 2;
    if (axisRightY > 0.5) planet.rotation.x += delta / 2;
    if (axisRightY < -0.5) planet.rotation.x -= delta / 2;
    // reset
    if (lsPressed) resetPosition(planet);
    if (rsPressed) resetRotation(planet);

    // CHANGE PLANET
    if (lPressed) {
      setKeyPlanet(1);
    }

    if (rPressed) {
      setKeyPlanet(2);
    }
  });

  const resetPosition = (planet) => {
    planet.position.x = 0;
    planet.position.y = 0;
    planet.position.z = 0;
    setKeyPressed("");
  };

  const resetRotation = (planet) => {
    planet.rotation.x = 0;
    planet.rotation.y = 0;
    planet.rotation.z = 0;
    setKeyPressed("");
  };

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
