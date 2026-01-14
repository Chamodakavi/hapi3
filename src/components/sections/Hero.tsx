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
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-30 lg:gap-1">
          {/* sm image */}
          <div className="block md:hidden items-center justify-center">
            <div className="flex items-center justify-center md:w-[300px] lg:w-auto md:h-[600px] lg:h-[650px] md:-mt-10">
              <img
                className="w-[auto] md:h-[600px] lg:h-[650px] object-cover"
                src="/images/image.png"
                alt="Hero 1"
              />
            </div>

            <div className="hidden flex items-center justify-center w-[405px] h-[605px] bg-Green border border-black -ml-16 -mt-32 z-20">
              <img
                className="w-[284px] h-[560px] shadow-2xl rounded-[30px]"
                src="/images/hero2.png"
                alt="Hero 2"
              />
            </div>
          </div>
          {/* middle content */}
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[80px] text-darkBlue leading-12 sm:leading-15 md:leading-13 lg:leading-17 block sm:flex flex-col items-start space-x-3">
              <span>Turn</span>

              <span className="bg-yellow border md:leading-22 lg:leading-30 px-1 md:px-3 md:mt-3 inline-block md:mb-3">
                Customers
              </span>

              <span>into trusted </span>
              <span>growth.</span>
            </h1>
            <p className="text-yellowBlack text-md md:text-[20px] mt-5">
              We help businesses reward real customers for sharing real
              experiences turning everyday content into trusted visibility,
              repeat visits, and measurable growth.
            </p>
            <button className="flex border p-3 w-30 justify-center mt-5 bg-yellow text-yellowBlack cursor-pointer hover:bg-white hover:text-darkBlue">
              Get Started
            </button>
          </div>
          {/* hero image */}
          <div className="hidden md:block items-center justify-center">
            <div className="flex items-center justify-center md:w-[300px] lg:w-auto md:h-[600px] lg:h-[650px] md:-mt-10">
              <img
                className="w-[auto] md:h-[600px] lg:h-[650px] object-cover"
                src="/images/image.png"
                alt="Hero 1"
              />
            </div>

            <div className="hidden flex items-center justify-center w-[405px] h-[605px] bg-Green border border-black -ml-16 -mt-32 z-20">
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
