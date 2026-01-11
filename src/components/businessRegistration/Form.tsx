import React from "react";

function Form() {
  // Mock data for the Business Type grid
  const businessTypes = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    label: `Sample ${String(i + 1).padStart(2, "0")}`,
  }));

  return (
    <section className="bg-[#FFFDF2] min-h-screen py-10 mt-30 lg:mt-35">
      <div className="container mx-auto px-5 ">
        {/* Header */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#0f172a] mb-2 leading-tight">
          Set up your business
        </h2>
        <p className="text-gray-500 text-md mb-10">
          This helps us tailor campaigns, rewards, and visibility to your
          business and location.
        </p>

        <form action="" className="space-y-8">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`border border-gray-400 py-3 text-sm font-medium ${
                    type.id === 2 ? "bg-[#EBFD58]" : "bg-transparent"
                  } hover:bg-[#EBFD58] transition-colors text-gray-800`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Business Size & Contact */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Business Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className="border border-gray-400 py-3 text-sm font-medium bg-transparent text-gray-800 hover:bg-[#EBFD58]"
                >
                  0 - 50
                </button>
                <button
                  type="button"
                  className="border border-gray-400 py-3 text-sm font-medium bg-[#EBFD58] text-gray-800"
                >
                  50 - 150
                </button>
                <button
                  type="button"
                  className="border border-gray-400 py-3 text-sm font-medium bg-transparent text-gray-800 hover:bg-[#EBFD58]"
                >
                  150+
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Business Contact
              </label>
              <input
                type="text"
                placeholder="Sample Contact"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Business Location */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Location
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full border border-gray-400 bg-transparent p-3 mb-2 text-gray-800 focus:outline-none focus:border-black"
            />
            {/* Map Placeholder - Mimicking the blue border image in screenshot */}
            <div className="w-full h-64 bg-blue-50 border-4 border-blue-400 relative overflow-hidden">
              {/* This image mimics the map shown in your screenshot */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31691.04971870136!2d79.91983291876365!3d6.844820323611778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sccc!5e0!3m2!1sen!2slk!4v1768136304447!5m2!1sen!2slk"
                width="100%"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white px-3 py-1 rounded shadow text-xs font-bold">
                  Map Preview Area
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-4">
              Social profiles
            </label>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Instagram URL"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-800 font-medium"
              />
              <input
                type="text"
                placeholder="TikTok URL"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-800 font-medium"
              />
              <input
                type="text"
                placeholder="Website URL"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-800 font-medium"
              />
            </div>
          </div>

          {/* Business Logo */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Logo
            </label>
            <div className="w-full h-48 bg-[#EBFD58] border border-gray-400 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 w-8 h-8 text-gray-800"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 8L12 3L7 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold text-gray-800">Upload Image</span>
            </div>
          </div>

          {/* Business Banner */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Banner
            </label>
            <div className="w-full h-48 bg-[#EBFD58] border border-gray-400 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 w-8 h-8 text-gray-800"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 8L12 3L7 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold text-gray-800">Upload Image</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#00D678] text-black font-bold py-3 px-10 hover:bg-[#00b566] transition-colors shadow-sm"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
