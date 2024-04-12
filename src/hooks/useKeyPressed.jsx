import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function useKeyPressed() {
  const planetRef = useRef("planeta");

  const [keyPressed, setKeyPressed] = useState("");
  const [keyPlanet, setKeyPlanet] = useState(1);

  const [gamepadConnected, setGamepadConnected] = useState(false);
  const [gamepadAxes0, setGamepadAxes0] = useState([]);
  const [gamepadAxes1, setGamepadAxes1] = useState([]);
  const [gamepadAxes2, setGamepadAxes2] = useState([]);
  const [gamepadAxes5, setGamepadAxes5] = useState([]);

  const [controllerIndex, setControllerIndex] = useState(null);
  const [buttonPressed, setButtonPressed] = useState("");

  useFrame((state, delta) => {
    const planet = planetRef.current;

    if (controllerIndex !== null) {
      const gamepad = navigator.getGamepads()[controllerIndex];
      handleButtons(gamepad.buttons);
      handleAxes(gamepad.axes);
    }

    // ROTATION
    // keyboard
    if (keyPressed === "w") planet.rotation.x -= delta / 2;
    if (keyPressed === "s") planet.rotation.x += delta / 2;
    if (keyPressed === "a") planet.rotation.y -= delta / 2;
    if (keyPressed === "d") planet.rotation.y += delta / 2;

    // gamepad
    if (gamepadAxes2 > 0.5) planet.rotation.y += delta / 2;
    if (gamepadAxes2 < -0.5) planet.rotation.y -= delta / 2;
    if (gamepadAxes5 > 0.5) planet.rotation.x += delta / 2;
    if (gamepadAxes5 < -0.5) planet.rotation.x -= delta / 2;

    // POSITION

    // keyboard
    if (keyPressed === "i") planet.position.z -= delta / 2;
    if (keyPressed === "k") planet.position.z += delta / 2;
    if (keyPressed === "j") planet.position.x -= delta / 2;
    if (keyPressed === "l") planet.position.x += delta / 2;

    // gamepad
    if (gamepadAxes0 > 0.5) planet.position.x += delta / 2;
    if (gamepadAxes0 < -0.5) planet.position.x -= delta / 2;
    if (gamepadAxes1 > 0.5) planet.position.z += delta / 2;
    if (gamepadAxes1 < -0.5) planet.position.z -= delta / 2;

    // RESET
    // keyboard
    if (keyPressed === "p") {
      planet.position.x = 0;
      planet.position.y = 0;
      planet.position.z = 0;
      setKeyPressed(null);
    }
    if (keyPressed === "r") {
      planet.rotation.x = 0;
      planet.rotation.y = 0;
      planet.rotation.z = 0;
      setButtonPressed(null);
    }
    // gamepad
    if (buttonPressed === 14) {
      planet.rotation.x = 0;
      planet.rotation.y = 0;
      planet.rotation.z = 0;
      setButtonPressed(null);
    }
    if (buttonPressed === 13) {
      planet.position.x = 0;
      planet.position.y = 0;
      planet.position.z = 0;
      setButtonPressed(null);
    }

    // CHANGE PLANET
    if (buttonPressed === 8) {
      setKeyPlanet(1);
    }

    if (buttonPressed === 9) {
      setKeyPlanet(2);
    }

    // CHANGE SCREEN
    // if (buttonPressed === 3) {
    //   window.location.href = "/inicio";
    // }
    // if (buttonPressed === 4) {
    //   window.location.href = "/";
    // }
    // if (buttonPressed === 1) {
    //   window.location.href = "/roberts";
    // }
  });

  function handleButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].pressed) {
        console.log(`Button ${i} pressed`);
        setButtonPressed(i);
      }
    }
  }

  function handleAxes(axes) {
    setGamepadAxes0(axes[0]);
    setGamepadAxes1(axes[1]);
    setGamepadAxes2(axes[2]);
    setGamepadAxes5(axes[5]);
  }

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      setKeyPressed(e.key);
      if (e.key === "1") setKeyPlanet(1);
      if (e.key === "2") setKeyPlanet(2);
    });
    document.addEventListener("keyup", () => {
      setKeyPressed(null);
    });

    // GAMEPAD
    window.addEventListener("gamepadconnected", (e) => {
      setGamepadConnected(true);
      setControllerIndex(e.gamepad.index);
      console.log("Gamepad connected", e.gamepad);
    });

    window.addEventListener("gamepaddisconnected", (e) => {
      setGamepadConnected(false);
      console.log("Gamepad disconnected", e.gamepad);
    });

    return () => {
      document.removeEventListener("keydown", () => {
        setKeyPressed("");
      });
      document.removeEventListener("keyup", () => {
        setKeyPressed(null);
      });

      window.removeEventListener("gamepadconnected", () => {
        setControllerIndex(null);
      });
    };
  }, []);

  return { keyPressed, keyPlanet, planetRef };
}
