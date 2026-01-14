import { MoveRight } from "lucide-react";
import React from "react";
import MobileCard from "../MobileCard";
import MobileCardSmall from "../MobileCardSmall";

const details = [
  {
    id: 1,
    image: "/images/mobile1.png",
    title: "A fully integrated suite of financial and payments products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel justo feugiat, id sodales libero suscipit. Mauris lacus sem, pharetra sed pellentesque et, maximus vel leo. Aenean non commodo leo. Phasellus.",
    bgcolor: "#A6E66E",
    btnColor: "#04D36C",
  },
  {
    id: 2,
    image: "/images/mobile2.png",
    title: "A fully integrated suite of financial and payments products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel justo feugiat, id sodales libero suscipit. Mauris lacus sem, pharetra sed pellentesque et, maximus vel leo. Aenean non commodo leo. Phasellus.",
    bgcolor: "#C2BDEB",
    btnColor: "#8173F5",
  },
  {
    id: 3,
    image: "/images/mobile3.png",
    title: "A fully integrated suite of financial and payments products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel justo feugiat, id sodales libero suscipit. Mauris lacus sem, pharetra sed pellentesque et, maximus vel leo. Aenean non commodo leo. Phasellus.",
    bgcolor: "#63D1D9",
    btnColor: "#1ED6E3",
  },
  {
    id: 4,
    image: "/images/mobile4.png",
    title: "A fully integrated suite of financial and payments products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel justo feugiat, id sodales libero suscipit. Mauris lacus sem, pharetra sed pellentesque et, maximus vel leo. Aenean non commodo leo. Phasellus.",
    bgcolor: "#E998D8",
    btnColor: "#FA62DA",
  },
];

const trusts = [
  {
    id: 1,
    title: "500M+",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "500M+",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "500M+",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "500M+",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function MobileSec() {
  return (
    <section className="mt-20">
      <div className="container mx-auto px-5">
        <div className="hidden sm:block">
          {details.map((detail, id) => (
            <MobileCard
              key={id}
              id={id}
              image={detail.image}
              title={detail.title}
              desc={detail.desc}
              bgColor={detail.bgcolor}
              btnColor={detail.btnColor}
            />
          ))}
        </div>
        <div className="block sm:hidden">
          {details.map((detail, id) => (
            <MobileCardSmall
              key={id}
              // id={id}
              // image={detail.image}
              // title={detail.title}
              // desc={detail.desc}
              // bgColor={detail.bgcolor}
              // btnColor={detail.btnColor}
            />
          ))}
        </div>

        {/* people */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
              <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight ">
                A fully integrated suite of financial and payments products
              </h2>
              <p className="text-[#334155] text-md lg:text-[20px] mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel
                justo feugiat, id sodales libero suscipit. Mauris lacus sem,
                pharetra sed pellentesque et, maximus vel leo. Aenean non
                commodo leo. Phasellus.a
              </p>
            </div>
            <div className="hidden md:block w-full border bg-Green sm:h-[580px] lg:h-[600px]"></div>
          </div>
          {/* trusts */}
          <div className="sm:flex space-y-4 md:flex md:relative md:bottom-60 bg-yellow p-5  border-2">
            {trusts.map((trust, id) => (
              <div key={id}>
                <h2 className="md:text-2xl lg:text-[36px] font-bold text-[#0A2540] border-l-5 pl-3 border-[#02CD68]">
                  {trust.title}
                </h2>
                <p className="md:text-sm lg:text-[18px] text-[#0A2540] mt-4">
                  {trust.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileSec;
