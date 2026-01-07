"use client";

import { MoveRight } from "lucide-react";
import React, { useState } from "react";

interface mobileProps {
  id: number;
  image: string;
  title: string;
  desc: string;
  bgColor: string;
  btnColor: string;
}

function MobileCard({
  id,
  image,
  title,
  desc,
  bgColor,
  btnColor,
}: mobileProps) {
  const [isId, setIsID] = useState(id);

  const isLeftImage = isId % 2 === 0;
  return (
    <div
      key={id}
      className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-16 my-8 sm:my-20 md:my-28 lg:my-8"
    >
      {/* left image */}
      {isLeftImage && (
        <div className="lg:w-[422px] lg:h-[633px]  justify-center hidden sm:flex">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[350px] lg:max-w-[400px] object-contain drop-shadow-2xl"
          />
        </div>
      )}

      {/* --- Content --- */}
      <div
        className="w-full lg:w-1/2 bg-lightYellow border border-black p-8 md:p-12 shadow-sm"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight ">
          {title}
        </h2>
        <p className="text-[#334155] text-md lg:text-[20px] mb-8 leading-relaxed">
          {desc}
        </p>
        <button
          className=" border border-black text-black text-sm lg:text-[16px] font-semibold px-3 lg:px-6 py-3 flex items-center gap-2 hover:bg-[#059669] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
          style={{ backgroundColor: btnColor }}
        >
          Read More
          <MoveRight />
        </button>
      </div>
      {/* right image */}
      {!isLeftImage && (
        <div className="lg:w-[422px] lg:h-[633px] hidden sm:flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[350px] lg:max-w-[400px] object-contain drop-shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default MobileCard;
