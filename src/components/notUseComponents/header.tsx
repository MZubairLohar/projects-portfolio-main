"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Company", href: "#" },
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
  {
    name: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
    href: "#",
  },
];

const mobNavigation = [
  { name: "Company", href: "#" },
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  function classNames(
    ...classes: (string | boolean | undefined | null | TemplateStringsArray)[]
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-full md:max-w-xs flex-col overflow-y-auto bg-[#333333] pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center outline-none rounded-md p-4 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-8 w-8 ml-1 md:mt-1 -mt-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-400 px-4 py-10 md:text-left text-center">
                  {mobNavigation.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        onClick={() => setOpen(false)}
                        className="-m-2 block p-2 font-medium text-white py-4 px-6"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-black opacity-80">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-5 py-2">
          <div>
            <div className="flex h-16 items-center justify-between">
              <button
                type="button"
                className="relative rounded-md p-2 text-white lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
              <div className="ml-4 flex lg:ml-0">
                <a href="#" className="flex items-center">
                  <span className="sr-only">BawdicSoft Pvt Ltd</span>
                  <img
                    className="h-8 w-auto"
                    src="assets/logo.png"
                    alt="BawdicSoft"
                  />
                  <p className="text-white text-xl md:block hidden">
                    BawdicSoft
                  </p>
                </a>
              </div>
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8 items-center">
                  {navigation.map((page, index) => (
                    <a
                      key={index}
                      href={page.href}
                      className={`flex items-center text-lg font-medium text-white h-8
                      ${
                        page.name === "Contact"
                          ? "bg-white text-black px-4"
                          : ""
                      }
                      `}
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}