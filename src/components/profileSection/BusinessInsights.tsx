import React from "react";

function BusinessInsights() {
  // Data for the sections
  const insightSections = [
    {
      title: "Product Promotion",
      buttons: [
        "Sample 16",
        "Sample 16",
        "Sample 16",
        "Sample 16",
        "Sample 16",
        "Sample 16",
      ],
    },
    {
      title: "Product Promotion",
      buttons: ["Sample 16", "Sample 16", "Add These"],
    },
    {
      title: "Billing",
      buttons: ["Sample 16", "Sample 16", "Sample 16", "Sample 16"],
    },
  ];

  return (
    <section className="my-20 py-10">
      <div>
        {/* Main Card Container */}
        <div className="bg-[#F0F899] border-2 border-[#0B1C33] p-8 md:p-12 shadow-sm">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              {/* Green Vertical Bar Accent */}
              <div className="w-1.5 h-8 bg-[#00C853] rounded-sm"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1C33]">
                Business Insights
              </h2>
            </div>

            <p className="text-[#0B1C33]/80 leading-relaxed max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>

          {/* Dynamic Sections Loop */}
          <div className="space-y-10">
            {insightSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-[#0B1C33] mb-4">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {section.buttons.map((btnText, btnIndex) => {
                    // Check if this is the special "Add These" button
                    const isAddButton = btnText === "Add These";

                    return (
                      <button
                        key={btnIndex}
                        className={`
                          px-6 py-3 border-2 border-[#0B1C3] font-medium text-sm rounded shadow-sm transition-transform hover:-translate-y-0.5
                          ${
                            isAddButton
                              ? "bg-[#00C853] text-white hover:bg-[#00b54b] border-black" // Green style
                              : "bg-yellow text-[#0B1C33] hover:bg-[#d2dd6e]" // Yellow style
                          }
                        `}
                      >
                        {btnText}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessInsights;
