import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-full ">
      <div className="w-full max-w-360 mx-auto px-5 sm:px-0 py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center  mb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-3 text-center gap-1 mx-auto ">
          <div className="">
            <p className="text-[12px] sm:text-base">Total Downloads</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold ">
              29.6M
            </h2>
            <p className="text-white/80 text-[12px] sm:text-base">
              21% more than last month
            </p>
          </div>
          <div className="">
            <p className="text-[12px] sm:text-base">Total Reviews</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold ">
              906K
            </h2>
            <p className="text-white/80 text-[12px] sm:text-base">
              46% more than last month
            </p>
          </div>
          <div className="">
            <p className="text-[12px] sm:text-base">Active Apps</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold ">
              132+
            </h2>
            <p className="text-white/80 text-[12px] sm:text-base">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
