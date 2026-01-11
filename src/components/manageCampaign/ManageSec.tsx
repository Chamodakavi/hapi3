import React from "react";
import { Pencil } from "lucide-react";
import Rewards from "./Rewards";

function ManageSec() {
  return (
    <section className=" py-10 mt-30 lg:mt-35">
      <div className="container mx-auto px-5 ">
        {/* ---  Header --- */}
        <div className="mb-8">
          <h2 className=" font-extrabold text-darkBlue mb-4">
            Manage Campaigns
          </h2>
          <p className="text-[#0B1C33]/80 text-lg leading-relaxed max-w-4xl">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* --- Main Content  --- */}

        <div className="bg-yellow border-2 border-[#0B1C33] p-8 md:p-10 shadow-sm">
          <div className="flex flex-col gap-8">
            {/* Field 1: Campaign Description */}
            <div>
              <h3 className="text-xl font-bold text-[#0B1C33] mb-3">
                Campaign Description
              </h3>
              <div className="bg-white border border-[#0B1C33] p-6 relative shadow-sm">
                <p className="text-[#0B1C33]/80 leading-relaxed pr-8">
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                {/* Edit Icon */}
                <div className="absolute bottom-4 right-4 text-[#0B1C33] hover:text-[#00C853] transition-colors">
                  <Pencil className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Field 2: Content Requirements */}
            <div>
              <h3 className="text-xl font-bold text-[#0B1C33] mb-3">
                Content Requirements
              </h3>
              <div className="bg-white border border-[#0B1C33] p-6 relative shadow-sm">
                <p className="text-[#0B1C33]/80 leading-relaxed pr-8">
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                {/* Edit Icon */}
                <div className="absolute bottom-4 right-4 text-[#0B1C33] hover:text-[#00C853] transition-colors">
                  <Pencil className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards */}
        <Rewards />
      </div>
    </section>
  );
}

export default ManageSec;
