import React from "react";
import { Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";
import { RoberCard } from "./RoberCard";

export function RoversTabs({ activeTab, setActiveTab, roberInfo }) {
  const tabsRef = useRef();

  const { status, total_photos } = roberInfo;

  return (
    <div className="flex flex-col gap-3">
      <Tabs
        aria-label="Default tabs"
        style="default"
        onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        <Tabs.Item active title="Curiosity" icon={FaXbox}>
          <RoberCard
            imgSrc="/imagenes/curiosity.webp"
            name="Curiosity"
            landingDate="2012-08-06"
            launchDate='2011-11-26'
            status={status}
            maxDate="2024-02-19"
            totalPhotos={total_photos}
          />
        </Tabs.Item>
        <Tabs.Item active title="Opportunity" icon={FaXbox}>
          <RoberCard
            imgSrc="/imagenes/opportunity.webp"
            name="Opportunity"
            landingDate="2004-01-25"
            launchDate='2003-07-07'
            status={status}
            maxDate="2018-06-11"
            totalPhotos={total_photos}
          />
        </Tabs.Item>
        <Tabs.Item active title="Spirit" icon={FaXbox}>
          <RoberCard
            imgSrc="/imagenes/spirit.webp"
            name="Spirit"
            landingDate="2004-01-04"
            launchDate='2003-06-10'
            status={status}
            maxDate="2010-03-2"
            totalPhotos={total_photos}
          />
        </Tabs.Item>
      </Tabs>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Active tab: {activeTab}
      </div>
    </div>
  );
}
