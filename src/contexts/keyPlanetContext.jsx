/* eslint-disable react/prop-types */
// key plenet context
import { createContext, useState } from "react";

export const KeyPlanetContext = createContext();

export default function KeyPlanetProvider({ children }) {
  const [keyPlanet, setKeyPlanet] = useState(1);
  return (
    <KeyPlanetContext.Provider value={{ keyPlanet, setKeyPlanet }}>
      {children}
    </KeyPlanetContext.Provider>
  );
}
