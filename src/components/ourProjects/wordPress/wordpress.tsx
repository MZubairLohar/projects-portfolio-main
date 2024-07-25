"use client";
import React, { useState } from "react";
import Others from "./others";
import Ecommerce from "./ecommerce";
import Blog from "./blog";

const WordPress = () => {
  const WordpressTabs = [
    { id: 1, label: "E-commerce" },
    { id: 2, label: "Blog" },
    { id: 3, label: "Others" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col gap-7 lg:w-[40%] md:w-[80%] w-[90%] justify-between mx-auto text-white font-bold">
        {WordpressTabs.map((tab) => {
          return(

          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id
                ? "active decoration-4 text-sm md:text-lg underline underline-offset-8 decoration-[#3e78b9] font-bold outline-none "
                : "text-sm lg:text-lg"
            }`}
          >
            {tab.label}
          </button>
          )
          })}
      </div>
      <div className="md:w-[85%] py-8 mx-auto">
        {/* For Ecommerce */}
        <div>{activeTab === 1 && <Ecommerce />}</div>
        {/* For Blog */}
        <div>{activeTab === 2 && <Blog />}</div>
        {/* For Others */}
        <div>{activeTab === 3 && <Others />}</div>
      </div>
    </div>
  );
};

export default WordPress;
