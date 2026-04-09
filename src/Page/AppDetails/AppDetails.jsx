import React from "react";
import useAppData from "../../Hooks/useAppData";
import { useParams } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import RattingChart from "../RattingChart/RattingChart";
import { HashLoader } from "react-spinners";

const AppDetails = () => {
  const { id } = useParams();
  const [appDetails, loading] = useAppData();
  const app = appDetails.find((app) => app.id === parseInt(id));

  const ratings = app?.ratings;
  console.log(app);

  return loading ?
      <div className="mx-auto flex justify-center items-center">
        <h1>
          <HashLoader />
        </h1>
      </div>
    : <div className="bg-base-200">
        <div className=" w-full pb-20 max-w-360 mx-auto px-5  xl:px-2">
          <div className=" lg:flex  items-center  gap-10 w-full max-w-360 mx-auto pt-20">
            <div className="bg-white rounded-md">
              <img
                className="w-80 p-7.5 object-cover bg-white rounded-full"
                src={app?.image}
                alt=""
              />
            </div>
            <div className="">
              <div className="">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-2">
                  {app?.title}
                </h2>
                <p className="text-xl">
                  Developed by{" "}
                  <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    {app?.companyName}
                  </span>
                </p>
              </div>
              <div className="divider"></div>

              <div className="flex items-center gap-10  ">
                <div className="">
                  <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] p-1 rounded-md inline-block">
                    <MdOutlineFileDownload className="text-white text-2xl md:text-3xl lg:text-4xl" />
                  </div>
                  <p className="text-[12px] sm:text-[14px] lg:text-base">
                    Downloads
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#001931]">
                    8M
                  </h3>
                </div>
                <div className="">
                  <div className="bg-white p-1 rounded-md inline-block ">
                    <IoMdStar className="text-4xl text-[#FF8811]" />
                  </div>
                  <p>Downloads</p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#001931]">
                    {app?.ratingAvg}
                  </h3>
                </div>
                <div className="">
                  <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-1 rounded-md inline-block">
                    <AiFillLike className="text-white text-4xl" />
                  </div>
                  <p>Downloads</p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#001931]">
                    {app?.reviews}
                  </h3>
                </div>
              </div>
              <div className="">
                <button
                  className="btn bg-[#00D390] text-white md:text-lg text-base lg:text-xl font-semibold p-3 sm:p-4 md:p-5 lg:p-6 rounded-sm mt-7.5
             "
                >
                  Install Now ({app?.size} MB)
                </button>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 my-10 mt-20  mx-auto"></div>
          <div className="mt-20">{<RattingChart ratting={ratings} />}</div>
          <div className="border-b border-gray-300 my-10 mt-20 "></div>
          <div className="">
            <h3 className="text-2xl font-semibold mb-6">Description</h3>
            <p className="text-xl text-[#627382] leading-8">
              {" "}
              {app?.description}
            </p>
          </div>
        </div>
      </div>;
};

export default AppDetails;
