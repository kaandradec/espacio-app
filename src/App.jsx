import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planetas from "./pages/Planetas";
import Rovers from "./pages/Rovers";
import Gamepad from "./pages/Gamepad";
import ImagenDelDia from "./pages/ImagenDelDia";
import Header from "./components/Header";
import useGamepad from "./hooks/useGamepad";
import { useEffect } from "react";
function App() {
  const { aPressed, bPressed, xPressed, yPressed } = useGamepad();

  useEffect(() => {
    if (xPressed && window.location.pathname !== "/inicio")
      window.location.href = "/inicio";
    if (yPressed && window.location.pathname !== "/")
      window.location.href = "/";
    if (bPressed && window.location.pathname !== "/rovers")
      window.location.href = "/rovers";
  }, [aPressed, bPressed, xPressed, yPressed]);

  return (
    <main className="flex h-dv bg-slate-200 dark:bg-gray-900 lg:flex-col ">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/inicio" element={<ImagenDelDia />} />
          <Route path="/" element={<Planetas />} />
          <Route path="/rovers" element={<Rovers />} />
          <Route path="/gamepad" element={<Gamepad />} />
          <Route path="/error" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
