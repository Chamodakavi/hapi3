import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";

const MobileCardSmall = () => {
  return (
    <div className="my-10">
      <div className="relative bg-Green border p-5 text-right h-120 overflow-hidden">
        {/* image */}
        <img
          className="imgContainer absolute w-50 top-48"
          src="/images/mobile1.png"
          alt=""
        />
        {/* content */}
        <h3 className="text-2xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-5 leading-tight ">
          A loyalty system built around real customer content.
        </h3>
        <h3 className="text-[#334155] text-[12px] ">
          hapi3 helps businesses reward real customers for sharing their
          experiences on social media turning everyday posts into trusted
          visibility, repeat visits, and measurable growth.
        </h3>
        {/* small btn */}
        <div className="sm-btn justify-end">
          <div className="flex mt-3 justify-center pt-0.5 border w-25 h-6 ">
            <h4 className="text-[12px]"> Read More</h4>
            <MoveRight size={12} className="mt-1 ml-1" />
          </div>
        </div>
        {/* big btn */}
        <div
          className="
              flex 
              justify-end 
              max-[396px]:justify-start 
              max-[396px]:ml-[1px]
              mboile-card-btn
          "
        >
          <div className="flex mt-15 justify-center pt-1 border w-30 h-8 ">
            <h4 className="text-[12px]"> Read More</h4>
            <MoveRight size={12} className="mt-1 ml-1" />
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-5">
          <div className="relative imgContainer top-5">
            <img src="/images/mobile1.png" alt="" />
          </div>
          <div className="mboile-card-btn mt-15 ml-5 justify-center pt-2 border w-35 h-10">
            Read More
            <MoveRight />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobileCardSmall;
