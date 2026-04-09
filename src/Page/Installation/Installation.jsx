import React, { useContext, useState } from "react";
import { InstallAppArray } from "../../InstalledApp/installedApp";
import InstallAppDetails from "./InstallAppDetails";
import VectorImage from "../../assets/images/Vector (1).png";

const Installation = () => {
  const [apps] = useContext(InstallAppArray);
  const [sortType, setSortType] = useState("");

  const sortedApps = [...apps].sort((a, b) => {
    if (sortType === "name") {
      return a.title.localeCompare(b.title);
    }

    if (sortType === "size") {
      return a.size - b.size;
    }

    if (sortType === "type") {
      return a.category?.localeCompare(b.category);
    }

    return 0;
  });

  return (
    <div className="">
      <div className=" my-20 w-full max-w-360 mx-auto px-5">
        <div className="">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center  mb-4">
            Your Installed Apps
          </h2>
          <p className="md:text-xl text-[#627382] mb-10 text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex items-center mb-4 justify-between">
          <h3 className="font-semibold text-2xl ">{apps.length} Apps Found</h3>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-1 m-1 cursor-pointer"
            >
              <p>Sort By {sortType ? sortType : "Size"}</p>
              <img src={VectorImage} alt="" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => setSortType("name")}>Sort By Name</a>
              </li>
              <li>
                <a onClick={() => setSortType("type")}>Sort By Item Type</a>
              </li>
              <li>
                <a onClick={() => setSortType("size")}>Sort By Size</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          {sortedApps.length === 0 ?
            <div className="flex justify-center items-center min-h-[50vh]">
              <h1 className="text-xl sm:text-2xl font-semibold text-neutral/50 md:text-3xl lg:text-4xl ">
                No Install Apps Here!
              </h1>
            </div>
          : sortedApps.map((app) => (
              <InstallAppDetails app={app} key={app.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Installation;
