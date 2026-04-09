import React, { useState } from "react";
import Card from "../../Shared/Card";
import useAppData from "../../Hooks/useAppData";
import { IoMdSearch } from "react-icons/io";
import { HashLoader } from "react-spinners";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [data, loading] = useAppData();

  const handleSearchInput = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    setSearch(searchValue);
  };
  const filteredData = data.filter((item) =>
    item?.title?.toLowerCase().includes(search),
  );
 
  return (
    <div className="bg-base-100 px-5  xl:px-0">
      <div className="w-full max-w-360 mx-auto pt-20">
        <div className="">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center  mb-4">
            Our All Applications
          </h2>
          <p className="md:text-xl text-[#627382] mb-10 text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="">
          <div className="mb-4 flex items-center justify-between">
            <div className="">
              <h2 className="text-2xl font-semibold">
                {" "}
                ({filteredData.length}) Apps Found
              </h2>
            </div>
            <div className="flex items-center border px-3 border-[#D2D2D2] rounded-sm text-base  ">
              <IoMdSearch className="mr-2 text-xl text-[#627382]" />
              <input
                onChange={handleSearchInput}
                className="p-3 focus:outline-0"
                type="search"
                placeholder="search Apps"
                name=""
                id=""
              />
            </div>
          </div>

          {loading ?
            <div className="mx-auto flex justify-center items-center">
              <h1>
                <HashLoader />
              </h1>
            </div>
          : !loading && search !== "" && filteredData.length === 0 ?
            <h2 className="text-center text-xl font-semibold my-10">
              No Apps Found 😢
            </h2>
          : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mx-auto gap-6 ">
              {filteredData.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Apps;
