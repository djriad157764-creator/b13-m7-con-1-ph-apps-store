import React from "react";
import Navbar from "../Page/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Page/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
