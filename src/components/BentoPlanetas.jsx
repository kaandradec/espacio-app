/* eslint-disable react/prop-types */
import { KeyPlanetContext } from "../contexts/keyPlanetContext";
import BotonPlaneta from "./elements/BotonPlaneta";
import { useContext } from "react";

export default function BentoPlanetas() {
  const { keyPlanet, setKeyPlanet } = useContext(KeyPlanetContext);
  return (
    <div className="grid w-full grid-cols-4 lg:grid-cols-5 grid-rows-3 p-8">
      <BotonPlaneta
        text="Tierra"
        url="/imagenes/tierra.png"
        keyNumber={1}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(1)}
      />
      <BotonPlaneta
        text="Marte"
        url="/imagenes/marte.png"
        keyNumber={2}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(2)}
      />
      {/* <BotonPlaneta
        text="Venus"
        url="/imagenes/marte.png"
        keyNumber={3}
        keyPlanet={keyPlanet}
        handleClick={setKeyPlanet(3)}
      />
      <BotonPlaneta
        text="Jupiter"
        url="/imagenes/marte.png"
        keyNumber={4}
        keyPlanet={keyPlanet}
        handleClick={setKeyPlanet(4)}
      /> */}
    </div>
  );
}
