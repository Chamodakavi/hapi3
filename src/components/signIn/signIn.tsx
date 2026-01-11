import React from "react";

function signIn() {
  return (
    <section className="bg-[#FFFDF2] min-h-screen py-10 mt-30 lg:mt-35">
      <div className="container mx-auto px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-5">
          {/* welcome */}
          <div className="bg-yellow border-1 p-10  sm:h-[600px]  lg:h-[600px]">
            <h2 className="text-xl md:text-3xl lg:text-[52px] font-bold text-[#0f172a] mb-6 leading-tight ">
              Welcome to hapi3
            </h2>
            <p className="text-[#334155] text-md lg:text-[20px] mb-8 leading-relaxed">
              Create your account to start turning customer experiences into
              measurable growth.
            </p>
            <form action="">
              <div className="my-4">
                <label className="block text-sm md:text-[20px] font-bold text-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-1 bg-white p-3 text-gray-800 focus:outline-none focus:border-black h-10 md:h-12"
                />
              </div>
              <div className="my-4">
                <label className="block text-sm md:text-[20px] font-bold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-1  bg-white p-3 text-gray-800 focus:outline-none focus:border-black h-10 md:h-12"
                />
              </div>
              <div className="my-4">
                <label className="block text-sm md:text-[20px] font-bold text-gray-800 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-1  bg-white p-3 text-gray-800 focus:outline-none focus:border-black h-10 md:h-12"
                />
              </div>
              <div className="bg-Green p-5 text-center font-bold border-1 flex justify-center gap-1 sm:gap-3 cursor-pointer">
                {/* google icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "3",
                    height: "100%",
                  }}
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <p className="text-sm"> Continue with Google</p>
              </div>
            </form>
          </div>
          {/* green bg image */}
          <div className="hidden md:flex justify-center w-full border bg-Green sm:h-[920px] md:h-[900px] lg:h-[850px] mt-10">
            <img className="h-150 mt-10" src="/images/signup.png" alt="" />
          </div>
        </div>
        {/* trusts */}
        <div className=" space-y-4  md:relative md:bottom-63 lg:bottom-72 bg-yellow p-5  border-2">
          <h3 className="md:text-xl lg:text-[32px] font-bold text-[#0A2540] border-l-5 pl-3 border-[#02CD68]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className="md:text-sm lg:text-[18px] text-[#0A2540] mt-4">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>
      </div>
    </section>
  );
}

export default signIn;
