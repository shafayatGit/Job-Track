import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Navber = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleJobs = () => {
    const cards_container = document.getElementById("cards_container");
    cards_container.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="navbar shadow-sm mulish max-w-6xl mx-auto py-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" cursor-pointer mr-3 lg:hidden"
          >
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-medium" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/jobs"}
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-medium" : ""
                }
              >
                Jobs
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-medium" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1 ">
          <img
            className="w-10 h-10 lg:w-16 lg:h-16"
            src="https://i.ibb.co.com/Ps3m36sZ/sticker.webp"
            alt=""
          />
          <NavLink
            to={"/"}
            className="cursor-pointer text-transparent text-base lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-semibold"
          >
            JobTrack
          </NavLink>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px]  font-light">
          <li className="hover:scale-105  duration-300">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-semibold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:scale-105  duration-300">
            <NavLink to={"/"} onClick={handleJobs}>
              Jobs
            </NavLink>
          </li>

          <li className="hover:scale-105  duration-300">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-semibold"
                  : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end mulish gap-2 lg:gap-6">
        {/* Sign IN Button */}
        <button
          onClick={() => navigate("/signin")}
          className={`cursor-pointer relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group ${
            pathname == "/signin" ? "border-b-8 border-purple-700" : ""
          }`}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-linear-65 from-blue-400 to-pink-300 group-hover:translate-x-0 ease `}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            className={`absolute flex items-center justify-center w-full h-full text-white font-medium transition-all duration-300 transform group-hover:translate-x-full ease bg-linear-65 from-blue-700 to-pink-600 `}
          >
            Login
          </span>
          <span className="relative invisible">Login</span>
        </button>

        {/* Register Btn */}
        <button
          onClick={() => navigate("/signup")}
          className={`cursor-pointer relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group ${
            pathname == "/signup" ? "border-b-8 border-purple-700" : ""
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-linear-65 from-blue-400 to-pink-300 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white font-medium transition-all duration-300 transform group-hover:translate-x-full ease bg-linear-65 from-blue-700 to-pink-600">
            Register
          </span>
          <span className="relative invisible">Register</span>
        </button>
      </div>
    </div>
  );
};

export default Navber;
