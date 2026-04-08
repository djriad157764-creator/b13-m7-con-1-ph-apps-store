import React from "react";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router";

const navItem = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/apps", name: "Apps" },
  { id: 3, path: "/installation", name: "Installation" },
];

const Navbar = () => {
  return (
    <div className=" bg-white shadow-sm">
      <div className="navbar w-full max-w-360 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItem.map((item) => (
                <li className="mb-1">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ?
                        "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold text-base border-b-2 p-0 w-fit rounded-none border-[#632EE3] "
                      : "font-medium text-base p-0 "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img className="object-cover w-10 h-10" src={Logo} alt="" />
            <p className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-base font-bold ">
              HERO.IO
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem.map((item) => (
              <li className="mr-8">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ?
                      "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold text-base border-b-2 p-0 rounded-none border-[#632EE3] "
                    : "font-medium text-base p-0 "
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
