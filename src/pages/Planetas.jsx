/* eslint-disable react/prop-types */
import BentoPlanetas from "../components/BentoPlanetas";
import Planeta from "../components/Planeta";
import KeyPlanetProvider from "../contexts/keyPlanetContext";
import "../styles/PlanetasStyle.css";

export default function Planetas() {
  return (
    <KeyPlanetProvider>
      <div className="planetasContenedor ">
        <BentoPlanetas />
        <Planeta />
      </div>
    </KeyPlanetProvider>
  );
}
