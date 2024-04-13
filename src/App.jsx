import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planetas from "./pages/Planetas";
import Roberts from "./pages/Roberts";
import ImagenDelDia from "./pages/ImagenDelDia";
import Header from "./components/Header";
function App() {
  return (
    <main className="flex h-dvh bg-slate-200 dark:bg-gray-900 lg:flex-col ">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/inicio" element={<ImagenDelDia />} />
          <Route path="/" element={<Planetas />} />
          <Route path="/roberts" element={<Roberts />} />
          <Route path="/error" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
