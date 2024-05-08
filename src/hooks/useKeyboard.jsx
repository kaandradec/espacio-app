import { useEffect, useState } from "react";

export default function useKeyboard() {
  const [keyPressed, setKeyPressed] = useState("");

  const cargarKeyboard = () => {
    document.addEventListener("keypress", (e) => {
      setKeyPressed(e.key);
    });
    document.addEventListener("keyup", () => {
      setKeyPressed(null);
    });
  };

  const quitarKeyboard = () => {
    document.removeEventListener("keypress", () => {
      setKeyPressed("");
    });
  };

  useEffect(() => {
    // console.log("useEffect useKeyboard");
    cargarKeyboard();

    return quitarKeyboard;
  }, []);

  return { keyPressed, setKeyPressed };
}
