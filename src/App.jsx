import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planetas from "./pages/Planetas";
import Roberts from "./pages/Roberts";
import Gamepad from "./pages/Gamepad";
import ImagenDelDia from "./pages/ImagenDelDia";
import Header from "./components/Header";
import useGamepad from "./hooks/useGamepad";
import { useEffect } from "react";
function App() {
  const {
    aPressed,
    bPressed,
    setBPressed,
    xPressed,
    yPressed,
    atLeastOnePressed,
  } = useGamepad();

  useEffect(() => {
    console.log("useEffect App.jsx");
    if (xPressed && window.location.pathname !== "/inicio")
      window.location.href = "/inicio";
    if (yPressed && window.location.pathname !== "/")
      window.location.href = "/";
    if (bPressed && window.location.pathname !== "/roberts")
      window.location.href = "/roberts";
  }, [aPressed, bPressed, xPressed, yPressed]);

  return (
    <main className="flex h-dv bg-slate-200 dark:bg-gray-900 lg:flex-col ">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/inicio" element={<ImagenDelDia />} />
          <Route path="/" element={<Planetas />} />
          <Route path="/roberts" element={<Roberts />} />
          <Route path="/gamepad" element={<Gamepad />} />
          <Route path="/error" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
