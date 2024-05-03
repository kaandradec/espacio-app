
import React from "react";
import { Button, Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";

export function RobertsTabs() {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <Tabs aria-label="Default tabs" style="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active title="Curiosity" icon={FaXbox}>
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="Spirit" icon={FaPlaystation}>
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="Opportunity" icon={FaSteam}>
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="Nueva Tab" icon={FaSteam}>
          <Texto />
        </Tabs.Item>
      </Tabs>
      <div className="text-sm text-gray-500 dark:text-gray-400">Active tab: {activeTab}</div>
    </div>
  );
}

function Texto() {
  return <h1>Holo que hace Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae, est quos adipisci corporis aliquam eveniet cum, laborum autem dicta veniam eaque? Ipsa, architecto corporis voluptatibus molestiae exercitationem rerum enim!</h1>
}
