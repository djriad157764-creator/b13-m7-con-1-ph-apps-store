import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import FooterImage from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <div className="w-full max-w-360 mx-auto py-8 px-5  text-white text-center">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img className="w-10 h-10" src={FooterImage} alt="" />
            <h2 className="text-base font-bold">HERO.IO</h2>
          </div>
          <div className="">
            <h3 className="font-medium text-xl mb-4">Social Links</h3>
            <div className="flex items-center gap-4">
              <RiTwitterXFill />
              <FaLinkedinIn />
              <TiSocialFacebook />
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[#E5E7EB]/20 my-7.5"></div>
        <div className="">
          <small>Copyright © 2025 - All right reserved</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
