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
      className="grid w-full grid-cols-4 md:grid-cols-5 p-2 md:p-8  gap-2 h-full"
      style={{ gridTemplateRows: "auto auto auto 1fr" }}
    >
      <h1 className="md:text-2xl lg:text-4xl text-black/90 dark:text-white/80 font-semibold col-span-4 md:col-span-5 text-center mb-0 lg:mb-4">
        Sistema solar
      </h1>
      <BotonPlaneta
        text="Sol"
        url="/imagenes/sol.webp"
        keyNumber={0}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(0)}
      />
      <BotonPlaneta
        text="Mercurio"
        url="/imagenes/mercurio.webp"
        keyNumber={1}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(1)}
      />
      <BotonPlaneta
        text="Venus"
        url="/imagenes/venus.webp"
        keyNumber={2}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(2)}
      />
      <BotonPlaneta
        text="Tierra"
        url="/imagenes/tierra.webp"
        keyNumber={3}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(3)}
      />
      <BotonPlaneta
        text="Luna"
        url="/imagenes/luna.webp"
        keyNumber={4}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(4)}
      />
      <BotonPlaneta
        text="Marte"
        url="/imagenes/marte.webp"
        keyNumber={5}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(5)}
      />
      <BotonPlaneta
        text="Jupiter"
        url="/imagenes/jupiter.webp"
        keyNumber={6}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(6)}
      />
      <BotonPlaneta
        text="Saturno"
        url="/imagenes/saturno.webp"
        keyNumber={7}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(7)}
      />
      <BotonPlaneta
        text="Urano"
        url="/imagenes/urano.webp"
        keyNumber={8}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(8)}
      />
      <BotonPlaneta
        text="Neptuno"
        url="/imagenes/neptuno.webp"
        keyNumber={9}
        keyPlanet={keyPlanet}
        handleClick={() => setKeyPlanet(9)}
      />
      <div className="col-span-4 md:col-span-5 overflow-auto lg:mt-2 lg:mx-4">
        <ParagraphDropCap text={planetInfo[keyPlanet]?.p1} />
        <Paragraph text={planetInfo[keyPlanet]?.p2} />
        <Paragraph text={planetInfo[keyPlanet]?.p3} />
      </div>
    </div>
  );
}
