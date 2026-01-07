import React from "react";

const details = [
  {
    id: "1",
    img: "/images/noone1.png",
    img2: "/images/company4.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
  },
  {
    id: "2",
    img: "/images/noone1.png",
    img2: "/images/company1.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
  },
  {
    id: "3",
    img: "/images/noone1.png",
    img2: "/images/company2.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
  },
];

function NocodeSec() {
  return (
    <section className="mt-10 md:-mt-15 mb-5">
      <div className="container mx-auto justify-center px-5">
        <div className="max-w-4xl">
          <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight ">
            Low-and no-code options for getting started
          </h2>
          <p>
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. litora
            torquent per conubia nostra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-10">
          {details.map((detail, id) => (
            <div
              key={id}
              className="sm:w-md md:w-full bg-Green shadow-[6px_6px_0px_0px_rgba(255,255,0,1)]"
            >
              <div className="p-1">
                <img src={detail.img} alt="" />
              </div>
              <div className=" p-6 pb-10">
                <img
                  className="w-[80px] h-[20px] sm:w-[80px] sm:h-[20px] md:w-[100px] md:h-[30px] lg:w-[134px] lg:h-[35px] object-contain my-3"
                  src={detail.img2}
                  alt=""
                />
                <h3 className="text-darkBlue font-bold text-xl md:text-2xl mb-2">
                  {detail.title}
                </h3>
                <p className="text-xl md:text-[18px] text-darkBlue">
                  {detail.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NocodeSec;
