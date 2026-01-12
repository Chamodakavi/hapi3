import { MoveRight } from "lucide-react";
import React from "react";
import MobileCard from "../MobileCard";

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
  {
    id: 5,
    image: "/images/company1.png",
    alt: "company image 4",
  },
];

const cards = [
  {
    id: 1,
    step: "STEP 01",
    title: "Launch a campaign",
    desc: "Create a simple campaign and choose the rewards you’re happy to give back. we handle the structure and setup.",
    color: "#A6E66E",
  },
  {
    id: 2,
    step: "STEP 02",
    title: "Customers share their experience",
    desc: "Real customers post about their visit on their own social media and earn points for authentic content.",
    color: "#C2BDEB",
  },

  {
    id: 3,
    step: "STEP 03",
    title: "Turn content into growth",
    desc: "Shared experience drive trusted visibility, bring in new customers, and encourage repeat visits when points are redeemed.",
    color: "#5CDAE3",
  },
];

function BusinessType() {
  return (
    <section id="businessType" className="my-10">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className=" text-darkBlue font-bold">How it works</h2>
          <p className="text-md md:text-lg text-darkBlue leading-relaxed max-w-2xl">
            Set up a campaign, let customers share their experiences, and turn
            that content into repeat visits and measurable growth.
          </p>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between  gap-6">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight">
              Support for any business type
            </h2>
            <p className="text-[#334155] text-md lg:text-[20px] mb-0 md:mb-5 leading-relaxed">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. litora
              torquent per conubia nostra.
            </p>
          </div>

          <div className="shrink-0">
            <button className="border bg-yellow border-black text-black text-sm lg:text-[16px] font-semibold px-3 lg:px-6 py-3 flex items-center gap-2 hover:bg-[#059669] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer mb-8">
              Read More
              <MoveRight />
            </button>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* card */}
          {cards.map((card, id) => (
            <div
              key={id}
              className="border-2 border-black p-0 bg-[#02CD68] shadow-[6px_6px_0px_0px_rgba(255,245,157,1)]"
            >
              {/* Purple Title Bar */}
              <div
                className="p-1 border border-black m-5"
                style={{ backgroundColor: card.color }}
              >
                <h2 className="text-center text-darkBlue font-bold">
                  {card.step}
                </h2>
              </div>

              {/* Main Content Area */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl text-darkBlue font-bold border-l-4 border-yellow pl-4 mb-4">
                  {card.title}
                </h3>
                <p className="text-md md:text-lg text-darkBlue leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* single card */}
        {/* <MobileCard
          key={2}
          id={2}
          image={"/images/mobile5.png"}
          title={"A fully integrated suite of financial and payments products"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel justo feugiat, id sodales libero suscipit. Mauris lacus sem, pharetra sed pellentesque et, maximus vel leo. Aenean non commodo leo. Phasellus."
          }
          bgColor={"#E0F24B"}
          btnColor={"#02CD68"}
        /> */}
        {/* companies */}
        {/* <div className="flex flex-wrap justify-center gap-3 md:gap-5 my-10 overflow-hidden">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[150px] md:h-[80px] lg:w-[230px] lg:h-[90px] border p-2 bg-yellow flex justify-center items-center"
            >
              <img
                src={company.image}
                alt={company.alt}
                className="w-[100px] h-[30px] sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[40px] lg:w-[154px] lg:h-[48px] object-contain"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default BusinessType;
