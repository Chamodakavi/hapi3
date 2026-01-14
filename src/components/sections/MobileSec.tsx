import { MoveRight } from "lucide-react";
import React from "react";
import MobileCard from "../MobileCard";
import MobileCardSmall from "../MobileCardSmall";

const details = [
  {
    id: 1,
    image: "/images/mobile1.png",
    title: "A loyalty system built around real customer content.",
    desc: "hapi3 helps businesses reward real customers for sharing their experiences on social media turning everyday posts into trusted visibility, repeat visits, and measurable growth.",
    bgcolor: "#A6E66E",
    btnColor: "#04D36C",
  },
  {
    id: 2,
    image: "/images/mobile2.png",
    title: "Because people trust people - not ads.",
    desc: "Content shared by real customers is seen as more trustworthy and drives higher engagement and conversions than paid ads or sponsored influencer posts. When businesses reward this behaviour, it creates a repeatable source of trusted visibility.",
    bgcolor: "#C2BDEB",
    btnColor: "#8173F5",
  },
  {
    id: 3,
    image: "/images/mobile3.png",
    title: "A more predictable alternative to ads and influencers",
    desc: "Paid ads and influencer campaigns rely on rented reach rising costs, declining trust, and unpredictable results. hapi3 shifts that spend into rewarding real customers, creating content you can rely on and growth you can repeat",
    bgcolor: "#63D1D9",
    btnColor: "#1ED6E3",
  },
  {
    id: 4,
    image: "/images/mobile4.png",
    title: "Built to drive repeat visits and sustainable growth",
    desc: "By rewarding customers with points they redeem in your business, hapi3 increases repeat visits while turning every shared experience into a new acquisition opportunity all with controlled, measurable costs.",
    bgcolor: "#E998D8",
    btnColor: "#FA62DA",
  },
];

const trusts = [
  {
    id: 1,
    title: "50%",
    semiTitle: "More Trusted",
    desc: "Customer content is trusted more than ads or sponsored posts.",
  },
  {
    id: 2,
    title: "29%",
    semiTitle: "Higher Conversions",
    desc: "Businesses using real customer content convert better.",
  },
  {
    id: 3,
    title: "73%",
    semiTitle: "Campaign Failure Rate",
    desc: "Most influencer campaigns fail to meet their goals.",
  },
  {
    id: 4,
    title: "77%",
    semiTitle: "Willing to Participate",
    desc: "Customers are open to sharing content when rewarded.",
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
              id={id}
              image={detail.image}
              title={detail.title}
              desc={detail.desc}
              bgColor={detail.bgcolor}
              btnColor={detail.btnColor}
            />
          ))}
        </div>

        {/* people */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
              <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight ">
                Proven by how people actually behave
              </h2>
              <p className="text-[#334155] text-md lg:text-[20px] mb-8 leading-relaxed">
                Independent research across marketing, loyalty, and social
                commerce consistently shows that people respond more strongly to
                real customer experiences than to paid ads or sponsored content.
                These numbers reflect how trust, engagement, and conversion
                actually work in the real world.
              </p>
            </div>
            <div className="hidden md:block w-full border bg-Green sm:h-[580px] lg:h-[600px]"></div>
          </div>
          {/* trusts */}
          <div className="sm:flex space-y-4 md:flex md:relative md:bottom-60 bg-yellow p-5  border-2">
            {trusts.map((trust, id) => (
              <div key={id}>
                <div className="flex">
                  <h2 className="md:text-2xl lg:text-[36px] font-bold text-[#0A2540] border-l-5 pl-3 border-[#02CD68]">
                    {trust.title}
                  </h2>
                  <span className="text-sm sm:text-[10px] lg:text-md font-normal ml-1 mt-2 md:mt-1 lg:mt-4">
                    {trust.semiTitle}
                  </span>
                </div>
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
