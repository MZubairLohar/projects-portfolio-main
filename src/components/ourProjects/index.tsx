"use client";
import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import All from "./all";
import WordPress from "./wordPress/wordpress";
import WebApp from "./webApp";
import BlockChain from "./blockchain";
import Ai from "./ai";
import ThreeDWeb from "./threeDWeb";

const tabs = [
  { id: 1, label: "All" },
  { id: 2, label: "Wordpress" },
  // { id: 3, label: "Web App" },
  // { id: 4, label: "Blockchain" },
  { id: 5, label: "AI" },
  { id: 6, label: "3D Model Website" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
  };

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0, delayChildren: 0 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        striffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        striffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto shadow-inner border-4 box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05) text-center py-3 md:py-5 md:mt-10 mt-5 md:w-[30rem] w-[18rem] rounded-full text-white md:text-3xl text-xl bg-gradient-to-r from-[#32cccb] via-[#389dc0] to-[#3f71b8]"
      >
        <motion.h1 variants={child}>Portfolio</motion.h1>
      </motion.div>
      <div className="md:pt-16 pt-8">
        <div className="flex md:flex-row flex-col gap-7  lg:w-[50%] md:w-[80%] w-[90%]  justify-between mx-auto text-white font-bold">
          {tabs.map((tab) => (
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
          ))}
        </div>
        <div className="md:w-[85%] py-8 mx-auto">
          {/* For All */}
          <div>{activeTab === 1 && <All />}</div>
          {/* For Wordpress */}
          <div>{activeTab === 2 && <WordPress />}</div>
          {/* For WebApp */}
          <div>{activeTab === 3 && <WebApp />}</div>
          {/* For Blockchain */}
          <div>{activeTab === 4 && <BlockChain />}</div>
          {/* For AI */}
          <div>{activeTab === 5 && <Ai />}</div>
          {/* For 3D Model Website */}
          <div>{activeTab === 6 && <ThreeDWeb />}</div>
        </div>
      </div>
    </>
  );
};

export default Index;