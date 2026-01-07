import { MoveRight } from "lucide-react";
import React from "react";

function GetStarted() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-5">
        <div className="md:flex justify-between ">
          <div className="mb-10 sm:mb-0">
            <h2 className="md:text-2xl lg:text-[36px] font-bold text-darkBlue ">
              Ready to get started?
            </h2>
            <p className=" md:text-sm lg:text-[18px] text-darkBlue mt-5">
              Create an account instantly to get started or contact us to design
              a custom package for your business.
            </p>
            <div className="flex space-x-5 mt-8">
              <button className="bg-Green border border-black text-black text-sm lg:text-[16px] font-semibold px-3 lg:px-6 py-3 flex items-center gap-2 hover:bg-[#059669] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer">
                Read More
                <MoveRight />
              </button>
              <button className="bg-[#FCFDE6] border border-black text-black text-sm lg:text-[16px] font-semibold px-3 lg:px-6 py-3 flex items-center gap-2 hover:bg-yellow transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer">
                Contact Sales
                <MoveRight />
              </button>
            </div>
          </div>
          <div className="sm:flex gap-5 sm:mt-5 mt-0">
            <div className="bg-yellow p-5 border-2 my-2">
              <h3 className="md:text-2xl lg:text-[24px] font-bold text-[#0A2540] border-l-5 pl-3 border-[#02CD68] leading-tight">
                Always know what you pay
              </h3>
              <p className=" md:text-sm lg:text-[12px] text-darkBlue mt-5">
                Torem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="text-black text-sm lg:text-[16px] font-semibold flex items-center gap-2  cursor-pointer mt-5">
                Contact Sales
                <MoveRight />
              </button>
            </div>
            <div className="bg-yellow p-5 border-2 my-2">
              <h3 className="md:text-2xl lg:text-[24px] font-bold text-[#0A2540] border-l-5 pl-3 border-[#02CD68] leading-tight">
                Always know what you pay
              </h3>
              <p className=" md:text-sm lg:text-[12px] text-darkBlue mt-5">
                Torem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="text-black text-sm lg:text-[16px] font-semibold flex items-center gap-2  cursor-pointer mt-5">
                Contact Sales
                <MoveRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
