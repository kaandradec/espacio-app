import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { KeyPressedProvider } from "./contexts/KeyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <KeyPressedProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KeyPressedProvider>
);
