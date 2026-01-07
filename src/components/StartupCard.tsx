"use client";
import React, { useState } from "react";

interface cardProps {
  id: number;
  title: string;
  img1: string;
  img2: string;
  bgColor: string;
  desc: string;
}

function StartupCard({ id, title, img1, img2, bgColor, desc }: cardProps) {
  const [isId, setIsID] = useState(id);

  const isLeftImage = isId % 2 === 0;
  return (
    <div
      key={id}
      className={`w-full h-[400] sm:h-[450px] md:h-[400] lg:h-[470] ${
        isLeftImage ? "md:mt-20" : " "
      } `}
    >
      <div className="w-[85%] h-[100%] bg-Green border-1">
        <div className={`flex pt-10 ${isLeftImage ? "md:justify-end" : ""}`}>
          <img className="w-[85%]  object-contain" src={img1} alt={title} />
        </div>
        <div
          className={` ${
            isLeftImage ? "w-[110%] md:w-[118%] lg:w-[110%]" : "w-[110%]"
          }  p-5 border-1 ${isLeftImage ? "md:-ml-12.5" : ""} `}
          style={{ backgroundColor: bgColor }}
        >
          <img
            className="w-[80px] h-[20px] sm:w-[80px] sm:h-[20px] md:w-[100px] md:h-[30px] lg:w-[134px] lg:h-[35px] object-contain"
            src={img2}
            alt={title}
          />
          <p className="text-[#334155] text-sm lg:text-md ">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default StartupCard;
