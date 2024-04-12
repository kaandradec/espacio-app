import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planetas from "./pages/Planetas";
import Roberts from "./pages/Roberts";
import ImagenDelDia from "./pages/ImagenDelDia";
import Header from "./components/Header";
import { KeyPressedProvider } from "./contexts/KeyContext";
function App() {
  return (
    <KeyPressedProvider>
      <main className="flex h-screen bg-slate-200 lg:flex-col">
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
    </KeyPressedProvider>
  );
}

export default App;
