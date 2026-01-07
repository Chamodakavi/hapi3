import { MoveRight } from "lucide-react";
import React from "react";

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
function IntegratedSuite() {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* left */}
          <div>
            <div className="p-3 bg-Green mb-3 border">
              <img src="/images/code1.png" alt="" />
            </div>
            <div className="hidden md:block w-full border bg-Green sm:h-[580px] lg:h-[430px]">
              <div className="p-3">
                <img src="/images/code2.png" alt="" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="mt-5 ml-5">
            <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight ">
              A fully integrated suite of financial and payments products
            </h2>
            <p className="text-[#334155] text-md lg:text-[20px] mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis egestas metus, vitae lacinia leo. Sed scelerisque ipsum vel
              justo feugiat, id sodales libero suscipit. Mauris lacus sem,
              pharetra sed pellentesque et, maximus vel leo. Aenean non commodo
              leo. Phasellus.a
            </p>
            <button className="bg-Green border border-black text-black text-sm lg:text-[16px] font-semibold px-3 lg:px-6 py-3 flex items-center gap-2 hover:bg-[#059669] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer mb-8">
              Read More
              <MoveRight />
            </button>
          </div>
        </div>
        {/* trusts */}
        <div className="sm:flex space-y-4 md:flex md:relative md:bottom-55 bg-yellow p-5  border-2">
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
    </section>
  );
}

export default IntegratedSuite;
