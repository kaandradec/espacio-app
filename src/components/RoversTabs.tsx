import React from "react";
import { Tabs } from "flowbite-react";
import { GiMarsCuriosity } from "react-icons/gi";
import { RoberCard } from "./RoberCard";

export function RoversTabs({ setActiveTab, roberInfo }) {

  const { status, total_photos } = roberInfo;

  const translateData = (data: string) => {
    const roverInfo = {
      "active": "Activo",
      "complete": "Completo",
      "inactive": "Inactivo",
      "lost": "Perdido",
    }

    return roverInfo[data];
  }

  return (
    <div className="flex flex-col">
      <Tabs
        aria-label="Default tabs"
        style="default"
        onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        <Tabs.Item active title="Curiosity" icon={GiMarsCuriosity}>
          <RoberCard
            imgSrc="/imagenes/curiosity.webp"
            name="Curiosity"
            landingDate="2012-08-06"
            launchDate='2011-11-26'
            status={translateData(status)}
            maxDate="2024-02-19"
            totalPhotos={total_photos}
          />
        </Tabs.Item>
        <Tabs.Item active title="Opportunity" icon={GiMarsCuriosity}>
          <RoberCard
            imgSrc="/imagenes/opportunity.webp"
            name="Opportunity"
            landingDate="2004-01-25"
            launchDate='2003-07-07'
            status={translateData(status)}
            maxDate="2018-06-11"
            totalPhotos={total_photos}
          />
        </Tabs.Item>
        <Tabs.Item active title="Spirit" icon={GiMarsCuriosity}>
          <RoberCard
            imgSrc="/imagenes/spirit.webp"
            name="Spirit"
            landingDate="2004-01-04"
            launchDate='2003-06-10'
            status={translateData(status)}
            maxDate="2010-03-2"
            totalPhotos={total_photos}
          />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
