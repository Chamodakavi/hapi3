import { Gem, Rocket } from "lucide-react";
import React from "react";

function RiskFree() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-4 font-montserrat">
        {/* title */}
        <div className="mb-10">
          <h2 className=" text-darkBlue font-bold">Try it. Risk Free</h2>
          <p className="text-md md:text-lg text-darkBlue leading-relaxed max-w-2xl">
            Set up a campaign, let customers share their experiences, and turn
            that content into repeat visits and measurable growth.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-20 sm:space-y-10">
          {/* card 1 */}
          <div className=" w-full h-[400] sm:h-[450px] md:h-[400] lg:h-[470] ">
            <div className="w-[85%] h-[100%] bg-Green border-1 p-5">
              <div className="grid grid-cols-2">
                <div className="">
                  <h3 className="text-lg md:text-[34px] text-darkBlue font-bold">
                    Free Trial
                  </h3>
                  <div className="flex items-start text-darkBlue mt-7 ">
                    <span className="text-2xl font-semibold mt-2">$</span>{" "}
                    <span className="text-[45px] sm:text-[60px] font-semibold leading-none">
                      {" "}
                      0
                    </span>
                    <span className="text-md md:text-[22px] self-end mb-4 font-semibold">
                      /Monthly
                    </span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Rocket
                    size={120}
                    color="yellow"
                    className="hidden md:block"
                  />
                  <Rocket
                    size={60}
                    color="yellow"
                    className="block md:hidden"
                  />
                </div>
              </div>
            </div>
            {/* card bottom */}
            <div className="relative bottom-65 sm:bottom-60 md:bottom-50 lg:bottom-70 bg-yellow border-1 p-5 w-[95%]">
              <h3 className="text-[23px] text-darkBlue font-semibold">
                Free for your first 2 months.
              </h3>
              <p className="text-TransBlue my-3">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                litora torquent per conubia nostra,{" "}
              </p>
              <div className="cursor-pointer w-30 font-semibold text-darkBlue">
                <p className="hover:text-white">Learn more</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className=" w-full h-[400] sm:h-[450px] md:h-[400] lg:h-[470] ">
            <div className="w-[85%] h-[100%] bg-Green border-1 p-5">
              <div className="grid grid-cols-2">
                <div className="">
                  <h3 className="text-lg md:text-[34px] text-darkBlue font-bold">
                    Free Trial
                  </h3>
                  <div className="flex items-start text-darkBlue mt-7 ">
                    <span className="text-xl lg:text-2xl font-semibold mt-2">
                      $
                    </span>{" "}
                    <span className=" text-[45px] sm:text-[60px] font-semibold leading-none">
                      {" "}
                      49.99
                    </span>
                    <span className="text-md sm:text-[22px] self-end mb-4 font-semibold">
                      /Monthly
                    </span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Gem size={100} color="yellow" className="hidden md:block" />
                  <Gem size={50} color="yellow" className="block md:hidden" />
                </div>
              </div>
            </div>
            <div className="relative bottom-65 sm:bottom-60 md:bottom-50 lg:bottom-70 bg-yellow border-1 p-5 w-[95%]">
              <h3 className="text-[23px] text-darkBlue font-semibold">
                Free for your first 2 months.
              </h3>
              <p className="text-TransBlue my-3">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                litora torquent per conubia nostra,{" "}
              </p>
              <div className="cursor-pointer w-30 font-semibold text-darkBlue ">
                <p className="hover:text-white ">Learn more</p>
              </div>
            </div>
          </div>
        </div>
        {/* card end */}

        {/* bottom banner */}
        <div className="bg-[#00D084] border-2 border-black p-10 md:p-16 text-center mt-20 md:mt-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#001D3D] mb-4">
            No setup fees. No long- term contracts.
          </h3>
          <p className="text-[#001D3D] text-lg max-w-3xl mx-auto mb-10">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. litora
            torquent per conubia nostra.
          </p>
          <button className="bg-[#D7F051] text-[#001D3D] font-bold py-3 px-12 border-2 border-black  cursor-pointer  transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default RiskFree;
