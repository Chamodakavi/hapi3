import React from "react";

const companies = [
  {
    id: 1,
    image: "/images/company1.png",
    alt: "company image 1",
  },
  {
    id: 2,
    image: "/images/company2.png",
    alt: "company image 2",
  },
  {
    id: 3,
    image: "/images/company3.png",
    alt: "company image 3",
  },
  {
    id: 4,
    image: "/images/company4.png",
    alt: "company image 4",
  },
];

function Hero() {
  return (
    <section id="home" className="mt-30 lg:mt-35">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[80px] text-darkBlue leading-12 sm:leading-15 md:leading-13 lg:leading-17 block sm:flex flex-col items-start space-x-3">
              <span>Financial</span>

              <span className="bg-yellow border md:leading-20 lg:leading-30 px-1 md:px-3 md:mt-3 inline-block">
                Infrastructure
              </span>

              <span>to Grow Your</span>
              <span>Revenue</span>
            </h1>
            <p className="text-yellowBlack text-md md:text-[20px] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel
              justo feugiat, id sodales libero suscipit. Mauris lacus sem,
              pharetra sed pellentesque et, maximus vel leo. Aenean non commodo
              leo. Phasellus.
            </p>
            <button className="flex border p-3 w-30 justify-center mt-5 bg-yellow text-yellowBlack cursor-pointer hover:bg-white hover:text-darkBlue">
              Get Started
            </button>
          </div>
          <div className="hidden items-center justify-center pt-20">
            <div className="relative z-30 flex items-center justify-center w-[433px] h-[595px] bg-yellow border border-black">
              {/* You don't actually need z-50 here anymore, but keeping it is fine */}
              <img
                className="w-[344px] h-[574px] transform -rotate-6 shadow-2xl rounded-[30px]"
                src="/images/hero1.png"
                alt="Hero 1"
              />
            </div>

            <div className="relative flex items-center justify-center w-[405px] h-[605px] bg-Green border border-black -ml-16 -mt-32 z-20">
              <img
                className="w-[284px] h-[560px] shadow-2xl rounded-[30px]"
                src="/images/hero2.png"
                alt="Hero 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
