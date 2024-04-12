/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useContext, useRef, useState } from "react";
import { TextureLoader } from "three";
import "../App.css";
import { KeyPressedContext } from "../contexts/KeyContext";

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
  const [keyPlanet, setKeyPlanet] = useState(1);

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
    ltPressed,
    rtPressed,
    aPressed,
    bPressed,
    xPressed,
    yPressed,
    dPad,
    selectPressed,
    startPressed,
  } = useContext(KeyPressedContext);

  useFrame((state, delta) => {
    const planet = planetRef.current;

    // ROTATION
    // keyboard
    // if (keyPressed === "w") planet.rotation.x -= delta / 2;
    // if (keyPressed === "s") planet.rotation.x += delta / 2;
    // if (keyPressed === "a") planet.rotation.y -= delta / 2;
    // if (keyPressed === "d") planet.rotation.y += delta / 2;

    // gamepad
    if (axisRightX > 0.5) planet.rotation.y += delta / 2;
    if (axisRightX < -0.5) planet.rotation.y -= delta / 2;
    if (axisRightY > 0.5) planet.rotation.x += delta / 2;
    if (axisRightY < -0.5) planet.rotation.x -= delta / 2;

    // POSITION

    // keyboard
    // if (keyPressed === "i") planet.position.z -= delta / 2;
    // if (keyPressed === "k") planet.position.z += delta / 2;
    // if (keyPressed === "j") planet.position.x -= delta / 2;
    // if (keyPressed === "l") planet.position.x += delta / 2;

    // gamepad
    if (axisLeftX > 0.5) planet.position.x += delta / 2;
    if (axisLeftX < -0.5) planet.position.x -= delta / 2;
    if (axisLeftY > 0.5) planet.position.z += delta / 2;
    if (axisLeftY < -0.5) planet.position.z -= delta / 2;

    // RESET
    // keyboard
    // if (keyPressed === "p") {
    //   planet.position.x = 0;
    //   planet.position.y = 0;
    //   planet.position.z = 0;
    //   setKeyPressed(null);
    // }
    // if (keyPressed === "r") {
    //   planet.rotation.x = 0;
    //   planet.rotation.y = 0;
    //   planet.rotation.z = 0;
    //   setButtonPressed(null);
    // }
    // gamepad
    if (rsPressed) {
      planet.rotation.x = 0;
      planet.rotation.y = 0;
      planet.rotation.z = 0;
    }
    if (lsPressed) {
      planet.position.x = 0;
      planet.position.y = 0;
      planet.position.z = 0;
    }

    // CHANGE PLANET
    if (lPressed) {
      setKeyPlanet(1);
    }

    if (rPressed) {
      setKeyPlanet(2);
    }
  });

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
