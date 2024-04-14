/* eslint-disable react/prop-types */
import { KeyPlanetContext } from "../contexts/keyPlanetContext";
import BotonPlaneta from "./elements/BotonPlaneta";
import { useContext } from "react";
import ParagraphDropCap from "./elements/ParagraphDropCap";
import Paragraph from "./elements/Paragraph";
import { planetInfo } from "../mocks/planetInfo";

export default function BentoPlanetas() {
  const { keyPlanet, setKeyPlanet } = useContext(KeyPlanetContext);
  return (
    <div
      className="grid w-full grid-cols-5 p-8 gap-2 h-full"
      style={{ gridTemplateRows: "auto auto auto 1fr" }}
    >
      <h1 className="text-2xl lg:text-5xl text-white/80 font-semibold col-span-5 text-center mb-0 lg:mb-4">
        Planetas
      </h1>
      <BotonPlaneta
        text="Sol"
        url="/imagenes/sol.png"
        keyNumber={0}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(0)}
      />
      <BotonPlaneta
        text="Mercurio"
        url="/imagenes/mercurio.png"
        keyNumber={1}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(1)}
      />
      <BotonPlaneta
        text="Venus"
        url="/imagenes/venus.png"
        keyNumber={2}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(2)}
      />
      <BotonPlaneta
        text="Tierra"
        url="/imagenes/tierra.png"
        keyNumber={3}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(3)}
      />
      <BotonPlaneta
        text="Luna"
        url="/imagenes/luna.png"
        keyNumber={4}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(4)}
      />
      <BotonPlaneta
        text="Marte"
        url="/imagenes/marte.png"
        keyNumber={5}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(5)}
      />
      <BotonPlaneta
        text="Jupiter"
        url="/imagenes/jupiter.png"
        keyNumber={6}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(6)}
      />
      <BotonPlaneta
        text="Saturno"
        url="/imagenes/saturno.png"
        keyNumber={7}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(7)}
      />
      <BotonPlaneta
        text="Urano"
        url="/imagenes/urano.png"
        keyNumber={8}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(8)}
      />
      <BotonPlaneta
        text="Neptuno"
        url="/imagenes/neptuno.png"
        keyNumber={9}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(9)}
      />
      <div className="col-span-5 overflow-auto m-1 lg:m-8 mt-1 lg:mt-8">
        <ParagraphDropCap text={planetInfo[keyPlanet].p1} />
        <Paragraph text={planetInfo[keyPlanet].p2} />
        <Paragraph text={planetInfo[keyPlanet].p3} />
      </div>
    </div>
  );
}
