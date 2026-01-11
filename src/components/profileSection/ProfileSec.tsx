import React from "react";
// Importing icons from lucide-react
import { Check, CheckCircle2, Heart, Star, Volume2 } from "lucide-react";
import PromoCard from "./PromoCard";
import BusinessInsights from "./BusinessInsights";
import CampaignCard from "./CampaignCard";

const campaignCards = [
  {
    id: 1,
    title: "Product Promotion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et velit interdum.",
    bgColor: "bg-[#A6E66E]", // Light Green
  },
  {
    id: 2,
    title: "Product Promotion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et velit interdum.",
    bgColor: "bg-[#C2BDEB]", // Light Purple
  },
  {
    id: 3,
    title: "Product Promotion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et velit interdum.",
    bgColor: "bg-[#63D1D9]", // Light Teal
  },
  {
    id: 4,
    title: "Product Promotion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et velit interdum.",
    bgColor: "bg-[#E998D8]", // Light Pink
  },
];

function ProfileSec() {
  return (
    <section className="bg-[#FFFDF2] min-h-screen py-10 mt-30 lg:mt-35 font-sans">
      <div className="container mx-auto px-5 font-montserrat">
        {/* User */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10  mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full lg:w-auto">
            {/* Profile Image */}
            <div className="shrink-0 relative">
              <div className="w-40 h-40 rounded-full border-[5px] border-[#0B1C33] p-1 overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/confident-business-leader-portrait-office-setting_171965-18635.jpg"
                  alt="Chathura Sampath"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text Details */}
            <div className="flex flex-col items-center md:items-start gap-4">
              {/* Name & Verified Status */}
              <div className="text-center md:text-left">
                <h2 className=" font-bold text-darkBlue">Chathura Sampath</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-darkBlue" />
                  <span className="text-md md:text-[25px]">
                    Business Owner Name
                  </span>
                </div>
              </div>

              {/*  Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {/* Green  Badge */}
                <div className="bg-[#00C853] text-white px-5 py-2.5 rounded shadow-sm flex items-center gap-2 font-semibold cursor-pointer">
                  <div className="border-2 border-white rounded-full p-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  <span>Subscription Active</span>
                </div>

                {/* Red  Badge */}
                <div className="border-2 border-[#FF5252] text-[#FF5252] px-5 py-2.5 rounded shadow-sm flex items-center gap-2 font-semibold bg-white cursor-pointer">
                  <Heart className="w-5 h-5" />
                  <span>Subscription Active</span>
                </div>
              </div>

              {/* Premium User Badge */}
              <div className="border-2 border-slate-400 text-slate-600 px-6 py-2 rounded shadow-sm flex items-center gap-2 font-medium bg-transparent cursor-pointer">
                <Star className="w-5 h-5" />
                <span>Premium User</span>
              </div>
            </div>
          </div>

          {/* --- Right Column --- */}
          <div className="w-full max-w-md border-2 border-slate-400 bg-transparent">
            {/* Top Section */}
            <div className="p-8 flex flex-col items-center justify-center gap-3">
              <h3 className="text-xl md:text-[30px] font-bold text-darkBlue">
                Business Trust Score
              </h3>

              <div className="flex items-center gap-3">
                {/* Stars */}
                <div className="flex gap-1 text-[#FFC107]">
                  <Star className="w-6 h-6 fill-[#FFC107]" />
                  <Star className="w-6 h-6 fill-[#FFC107]" />
                  <Star className="w-6 h-6 fill-[#FFC107]" />
                  <Star className="w-6 h-6 fill-[#FFC107]" />
                  <Star className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-darkBlue ml-1">
                  4.6
                </span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-yellow p-5 text-center border-t border-slate-400">
              <p className="text-TransBlue font-medium leading-tight text-md md:text-[22px]">
                Higher trust increases <br />
                campaign reach & visibility
              </p>
            </div>
          </div>
        </div>

        {/* Campaign */}
        {/* --- Top Banner  --- */}
        <div className="bg-[#E3F263] border-2 border-[#0B1C33] p-8 md:p-12 flex flex-col items-center text-center my-15 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="w-8 h-8 text-[#0B1C33]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1C33]">
              Launch a Campaign for Your Business
            </h2>
          </div>

          <p className="text-TransBlue text-lg mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
            velit interdum.
          </p>

          <button className="bg-[#00C853] hover:bg-[#00b54b] text-white font-bold py-3 px-8 rounded shadow-sm transition-colors cursor-pointer hover:bg-white hover:text-Green">
            Create New Campaign
          </button>
        </div>

        {/* --- Cards   --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaignCards.map((card) => (
            <PromoCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>

        {/* insights */}
        <BusinessInsights />

        {/* campaign  */}
        <CampaignCard />
      </div>
    </section>
  );
}

export default ProfileSec;
