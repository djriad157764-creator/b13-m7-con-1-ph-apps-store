import React from "react";
import useAppData from "../../../Hooks/useAppData";
import Card from "../../../Shared/Card";
import { NavLink } from "react-router";

const TrendingApps = () => {
  const [data] = useAppData();

  return (
    <div className="bg-base-200 px-5  xl:px-0">
      <div className="w-full max-w-360 mx-auto pt-20">
        <div className="">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center  mb-4">
            Trending Apps
          </h2>
          <p className="md:text-xl text-[#627382] mb-10 text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mx-auto gap-6 ">
          {data.slice(0,8).map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <NavLink to={"/apps"}>
          <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white  btn ">
            Show All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default TrendingApps;
