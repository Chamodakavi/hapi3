import React from "react";
import StartupCard from "../StartupCard";

const cards = [
  {
    id: 1,
    img1: "/images/startup.png",
    img2: "/images/company4.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
    bgColor: "#A6E66E",
  },
  {
    id: 2,
    img1: "/images/startup.png",
    img2: "/images/company4.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
    bgColor: "#C2BDEB",
  },
  {
    id: 3,
    img1: "/images/startup.png",
    img2: "/images/company4.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
    bgColor: "#5CDAE3",
  },
  {
    id: 4,
    img1: "/images/startup.png",
    img2: "/images/company4.png",
    title: "Incorporate your company",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. litora torquent per conubia nostra, ",
    bgColor: "#F193DD",
  },
];

function Startup() {
  return (
    <section className="my-20">
      <div className="container mx-auto justify-between px-4">
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight">
            Take your startup further, faster
          </h2>
          <p className="text-[#334155] text-md lg:text-[20px] mb-10 leading-relaxed">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API-based
            integration or use our low- to no-code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* cards */}
          {cards.map((card, id) => (
            <StartupCard
              key={id}
              id={card.id}
              title={card.title}
              img1={card.img1}
              img2={card.img2}
              bgColor={card.bgColor}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Startup;
