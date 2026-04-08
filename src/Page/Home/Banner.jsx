import React from "react";
import BannerImage from "../../assets/images/hero.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoAppleAppstore } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <div className="pt-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:leading-21 mb-4">
            We Build <br />{" "}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
              Productive
            </span>{" "}
            Apps
          </h2>
          <p className="md:text-xl text-[#627382] mb-10">
            At HERO.IO we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="mb-10 flex items-center justify-center gap-4">
          <button className="btn items-center text-xl font-semibold ">
            <BiLogoPlayStore /> Google Play
          </button>
          <button className="btn items-center text-xl font-semibold ">
            <IoLogoAppleAppstore />
            App Store
          </button>
        </div>
      </div>
      <div className="">
        <img className="mx-auto object-cover " src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
