import React from 'react';
import Card from '../../Shared/Card';
import useAppData from '../../Hooks/useAppData';
import { IoMdSearch } from 'react-icons/io';

const Apps = () => {

     const [data] = useAppData();

    return (
      <div className="bg-base-100 px-5  xl:px-0">
        <div className="w-full max-w-360 mx-auto pt-20">
          <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center  mb-4">
              Our All Applications
            </h2>
            <p className="md:text-xl text-[#627382] mb-10 text-center">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="">
            <div className="mb-4 flex items-center justify-between">
              <div className="">
                <h2 className="text-2xl font-semibold">
                  {" "}
                  ({data.length}) Apps Found
                </h2>
              </div>
              <div className="flex items-center border px-3 border-[#D2D2D2] rounded-sm text-base  ">
                <IoMdSearch className="mr-2 text-xl text-[#627382]" />
                <input
                  className="p-3 focus:outline-0"
                  type="search"
                  placeholder="search Apps"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mx-auto gap-6 ">
              {data.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Apps;