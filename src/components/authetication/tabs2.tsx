"use client";

import { useState } from "react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName = "",
  activeTabClassName = "bg-primary text-white",
  tabClassName = "btn btn-ghost",
  contentClassName = "p-4 bg-base-100 rounded shadow",
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState<Tab>(propTabs[0]);

  return (
    <div className="w-full">
      <div
        className={`tabs flex flex-row items-center justify-start border-b ${containerClassName}`}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={`tab transition-all duration-200 ease-in-out ${
              activeTab.value === tab.value ? activeTabClassName : tabClassName
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <FadeInDiv className={contentClassName} active={activeTab} />
    </div>
  );
};

export const FadeInDiv = ({
  className = "",
  active,
}: {
  className?: string;
  active: Tab;
}) => {
  return (
    <div
      className={`mt-4 transition-all duration-300 ease-in-out ${className}`}
    >
      {active.content}
    </div>
  );
};
