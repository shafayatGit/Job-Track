import React from "react";
import { useNavigate } from "react-router";

const NoProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:gap-0 gap-5 md:flex-row p-10 rounded-3xl shadow-2xl w-full   mx-auto mt-9 mb-18 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <div className="mx-auto mulish p-8 rounded-lg shadow-lg max-w-md w-full hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl text-gray-800 font-bold  mb-4">
            You're not logged in!
          </h2>
          <p className="text-gray-800 mb-6">
            Please log in or register to view your account and access this
            section.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/signin")}
              className={`text-sm md:text-base cursor-pointer relative inline-flex items-center justify-center  md:px-8 px-2 py-1 md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group`}
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
            <button
              onClick={() => navigate("/signup")}
              className={`cursor-pointer relative inline-flex items-center justify-center p-4 md:px-8 px-2 py-1 text-sm md:text-base md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group`}
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
      </div>
    </div>
  );
};

export default NoProfile;
