import React from "react";

const companies = [
  {
    id: 1,
    image: "/images/company1.png",
    alt: "company image 1",
  },
  {
    id: 2,
    image: "/images/company2.png",
    alt: "company image 2",
  },
  {
    id: 3,
    image: "/images/company3.png",
    alt: "company image 3",
  },
  {
    id: 4,
    image: "/images/company4.png",
    alt: "company image 4",
  },
];
function Companies() {
  return (
    <section className="container mx-auto px-5">
      <div className="flex justify-center md:justify-end my-10 md:w-[80%] md:ml-auto">
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-track ">
            {/* First copy */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[150px] md:h-[80px] lg:w-[230px] lg:h-[90px] border p-2 bg-yellow flex justify-center items-center"
                >
                  <img
                    src={company.image}
                    alt={company.alt}
                    className="w-[100px] h-[30px] sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[40px] lg:w-[154px] lg:h-[48px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second copy for infinite loop */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 ml-5">
              {companies.map((company) => (
                <div
                  key={`${company.id}-duplicate`}
                  className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[150px] md:h-[80px] lg:w-[230px] lg:h-[90px] border p-2 bg-yellow flex justify-center items-center"
                >
                  <img
                    src={company.image}
                    alt={company.alt}
                    className="w-[100px] h-[30px] sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[40px] lg:w-[154px] lg:h-[48px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="hidden md:flex my-10 w-[80%] mr-auto">
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-track ">
            {/* First copy */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[150px] md:h-[80px] lg:w-[230px] lg:h-[90px] border p-2 bg-yellow flex justify-center items-center"
                >
                  <img
                    src={company.image}
                    alt={company.alt}
                    className="w-[100px] h-[30px] sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[40px] lg:w-[154px] lg:h-[48px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second copy for infinite loop */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 ml-5">
              {companies.map((company) => (
                <div
                  key={`${company.id}-duplicate`}
                  className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[150px] md:h-[80px] lg:w-[230px] lg:h-[90px] border p-2 bg-yellow flex justify-center items-center"
                >
                  <img
                    src={company.image}
                    alt={company.alt}
                    className="w-[100px] h-[30px] sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[40px] lg:w-[154px] lg:h-[48px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
