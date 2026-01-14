"use client";

import React, { useState } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

interface mobileProps {
  id: number;
  image: string;
  title: string;
  desc: string;
  bgColor: string;
  btnColor: string;
}

const MobileCardSmall = ({
  id,
  image,
  title,
  desc,
  bgColor,
  btnColor,
}: mobileProps) => {
  const [isId, setIsID] = useState(id);

  const isLeftImage = isId % 2 === 0;

  return (
    <div className="my-10">
      <div
        className="relative border p-5  h-120 overflow-hidden"
        style={{
          backgroundColor: bgColor,
          textAlign: isLeftImage ? "right" : "left",
        }}
      >
        {/* image */}
        <img
          className="imgContainer absolute w-50 top-48"
          src={image}
          alt=""
          style={{
            left: isLeftImage ? "1%" : "45%",
          }}
        />

        {/* content */}
        <h3 className="text-2xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-5 leading-tight ">
          {title}
        </h3>
        <h3 className="text-[#334155] text-[12px] ">{desc}</h3>
        {/* small btn */}
        <div className="sm-btn justify-end">
          <div
            className="flex mt-3 justify-center pt-0.5 border w-25 h-6 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
            style={{
              backgroundColor: btnColor,
            }}
          >
            <h4 className="text-[12px]"> Read More</h4>
            <MoveRight size={12} className="mt-1 ml-1" />
          </div>
        </div>
        {/* big btn */}
        <div
          className={`
            mboile-card-btn
            flex 
            ${isLeftImage ? "justify-end" : "justify-start"}
            max-[396px]:${isLeftImage ? "justify-end" : "justify-start"}
            `}
        >
          <div
            className="flex mt-15 justify-center pt-2 border w-30 h-8 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
            style={{
              backgroundColor: btnColor,
            }}
          >
            <h4 className="text-[12px]"> Read More</h4>
            <MoveRight size={12} className="mt-1 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCardSmall;
