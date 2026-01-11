import React from "react";
import { Plus } from "lucide-react";

function Rewards() {
  return (
    <section className=" py-20">
      <div>
        <h2 className="text-4xl font-extrabold text-[#0B1C33] mb-8">Rewards</h2>

        <div className="flex flex-col gap-6">
          <div className="h-24 bg-yellow border-2 border-[#0B1C33] shadow-sm w-full"></div>

          <div className="h-24 bg-yellow border-2 border-[#0B1C33] shadow-sm w-full"></div>

          {/* + Add Reward Button */}
          <button className="flex items-center justify-center gap-2 w-full md:w-1/3 py-4 border-2 border-[#0B1C33] bg-transparent text-[#0B1C33] font-bold text-md md:text-lg hover:bg-slate-100 transition-colors shadow-sm mt-2 cursor-pointer">
            <Plus className="w-5 h-5" strokeWidth={3} />
            Add Reward
          </button>

          {/* Spacer */}
          <div className="mt-2 md:mt-8"></div>

          {/* Save Campaign Button */}
          {/* Note: Text color is dark blue/black to match the specific design in the image */}
          <button className="w-full py-3 sm:py-5 bg-[#00C853] border-2 border-[#0B1C33] text-[#0B1C33] font-extrabold text-sm sm:text-md md:text-xl shadow-sm hover:bg-[#00b54b] transition-colors cursor-pointer">
            Save Campaign
          </button>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
