"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen && event.target) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="pt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white hover:text-gray-300 cursor-pointer outline-none z-40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`top-0 left-0 ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full ease-in-out duration-300"
          }  transition-sidebar fixed z-50 bg-gradient-to-r from-[#32cccb] via-[#389dc0] shadow-2xl to-[#3f71b8] w-[100vw] md:w-[45vw] lg:w-[32vw] xl:w-[25vw] h-screen pt-4`}
        >
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white hover:text-gray-300 cursor-pointer md:ml-7 ml-4 mt-2 outline-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-72 mx-auto">
            <div className="pt-10 uppercase text-xl font-medium">
              <ul>
                {/* <li className="border-b-4 cursor-pointer text-white border-[#9217ca] w-72 pb-2 mb-8">
                  Home
                </li>
                <li className="border-b-4 cursor-pointer text-gray-400 hover:text-white transition duration-700 ease-in-out  border-[#9217ca] w-72 pb-2 mb-8">
                  About Us
                </li> */}
                <Link
                  href={"/"}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <li className="border-b-4 cursor-pointer text-gray-300 hover:text-white transition duration-700 ease-in-out border-gray-300  hover:border-white w-72 pb-2 mb-8">
                    Our Projects
                  </li>
                </Link>
                {/* <li className="border-b-4 cursor-pointer text-gray-400 hover:text-white transition duration-700 ease-in-out  border-[#9217ca] w-72 pb-2 mb-8">
                  Contact Us
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
