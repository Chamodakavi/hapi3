"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  const navRef = useRef<HTMLElement>(null);

  // 1. Defined IDs so the code knows what to look for on the page
  const navLinks = [
    { name: "Products", href: "/products", id: "products" },
    { name: "Solutions", href: "/solutions", id: "solutions" },
    { name: "Developers", href: "/developers", id: "developers" },
    { name: "Resources", href: "/resources", id: "resources" },
    { name: "Pricing", href: "/pricing", id: "pricing" },
  ];

  // 2. Click outside listener (Keep existing logic)
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

  // 3. Scroll Listener Logic (Imported from your request)
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      let current = "";
      // Navbar is roughly 90px, adding a buffer ensures the link highlights
      // just before the section hits the very top.
      const scrollY = window.scrollY + 120;

      navLinks.forEach((link) => {
        // Look for the element with the specific ID
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollY) {
          current = link.id;
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
        // Optional: Updates the URL hash without jumping
        if (current) {
          window.history.replaceState(null, "", `#${current}`);
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navLinks]); // Dependencies

  return (
    <nav
      ref={navRef}
      className="fixed w-full bg-[#E3F451] border-b border-gray-200 py-4 top-0 z-50 transition-all"
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-1">
          <div className="flex-shrink-0">
            <img
              src="/images/logo.png"
              className="h-[58px] w-[61px] bg-yellow flex items-center justify-center"
              alt="logo.png"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center md:space-x-5 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <div key={link.name} className="group relative cursor-pointer">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 font-bold text-[14px] transition-all
                    ${
                      isActive
                        ? "text-black border-b-2 border-black" // Active Style
                        : "text-[#2B320D] hover:text-gray-700" // Default Style
                    }
                  `}
                >
                  {link.name}
                  {/* Only show chevron if you actually have submenus, otherwise it might be confusing with scroll links */}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "rotate-180" : ""
                    } group-hover:rotate-180`}
                  />
                </Link>

                {/* Submenu (Optional) */}
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-black shadow-lg hidden group-hover:block p-2">
                  <div className="text-xs text-gray-500 p-2">
                    Submenu item...
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex-shrink-0">
          <Link href="/business-Registration">
            {" "}
            <div className="hidden md:block bg-[#FCFDE6] text-[16px] text-[#2B320D] font-bold py-2 px-6 border border-black hover:bg-gray-50 transition-colors cursor-pointer">
              Let's Talk
            </div>
          </Link>

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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#E3F451] border-b border-gray-200 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-lg hover:text-gray-600 ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-[#2B320D]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <button className="w-full bg-white text-black font-bold py-3 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
