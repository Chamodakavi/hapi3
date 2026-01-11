import Link from "next/link";
import React from "react";

function CampaignCard() {
  return (
    <section className="bg-[#FFFDF2] py-5">
      <div>
        {/* Section Title */}
        <h2 className=" font-extrabold text-[#0B1C33] mb-8">
          Current Campaign
        </h2>

        {/* Main Card */}
        <div className="bg-[#F0F899] border-2 border-[#0B1C33] p-8 md:p-12 shadow-sm">
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex items-start gap-4">
              {/* Green Vertical Accent Bar */}
              <div className="w-1.5 h-10 bg-[#00C853] rounded-sm mt-1 shrink-0"></div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1C33]">
                  Campaign Name
                </h3>
                <p className=" text-md md:text-[20px] text-[#0B1C33]/80 max-w-xl">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Live Status Badge */}
                <div className="mt-2">
                  <span className="bg-[#00C853] text-white font-bold px-8 py-2 rounded-sm shadow-sm inline-block text-center text-sm tracking-wide">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid (Date & Location) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8">
            {/* Date Column */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#0B1C33] font-bold text-lg">Date</h4>
              <div className="bg-yellow border border-[#0B1C33] p-4  w-full  shadow-sm">
                <span className="text-[#0B1C33] text-sm md:text-md  font-bold">
                  Duration : 10 Days
                </span>
              </div>
            </div>

            {/* Location Column */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[#0B1C33] font-bold text-lg">Location</h4>
              <div className="bg-yellow border border-[#0B1C33] p-4 w-full shadow-sm">
                <span className="text-[#0B1C33] text-sm md:text-md  font-bold">
                  Target Area : Colombo
                </span>
              </div>
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="flex justify-end mt-12">
            <Link href={"/manage-Campaign"}>
              <button className="bg-[#00C853] border-2 border-[#0B1C33] text-[#0B1C33] font-bold py-3 px-8 rounded shadow-sm hover:bg-[#00b54b] hover:text-white transition-colors cursor-pointer text-sm md:text-[15px] ">
                Manage Campaign
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampaignCard;
