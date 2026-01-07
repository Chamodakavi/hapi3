"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react"; // 1. Import useEffect and useRef

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "Products", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Developers", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  //   listner for drawer close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="relative w-full bg-[#E3F451] border-b border-gray-200  py-4"
    >
      <div className=" container mx-auto px-5 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/images/logo.png"
              className="h-[58px] w-[61px] bg-yellow flex items-center justify-center"
              alt="logo.png"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center md:space-x-5 lg:space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative cursor-pointer">
              <div className="flex items-center gap-1 text-yellowBlack font-bold text-[14px] hover:text-gray-700 transition-colors">
                {link.name}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </div>

              <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-black shadow-lg hidden group-hover:block p-2">
                <div className="text-xs text-gray-500 p-2">Submenu item...</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-shrink-0">
          <button className="hidden md:block bg-[#FCFDE6] text-[16px] text-[#2B320D] font-bold py-2 px-6 border border-black hover:bg-gray-50 transition-colors cursor-pointer">
            Let's Talk
          </button>

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-[#2B320D]"
            >
              {isOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#E3F451] border-b border-gray-200 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black font-bold text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="w-full bg-white text-black font-bold py-3 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
