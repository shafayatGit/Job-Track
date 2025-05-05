import React from "react";

const Hero = () => {
  return (
    <div className="mt-28 flex items-center gap-7">
      <div class="flex flex-col gap-5 ">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Build Your Career with Top Tech Companies
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          Discover jobs, connect with innovative employers, and take your career
          to the next level. Your next opportunity starts here.
        </p>
        <button className="cursor-pointer relative inline-flex items-center justify-center w-[250px] p-4 px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group">
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
            Explore Jobs
          </span>
          <span className="relative invisible">Explore Jobs</span>
        </button>
      </div>
      <div class="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
        <img
          className="w-full rounded-2xl shadow-xl"
          src="hero.jpg"
          alt="Tech Career"
        />
        {/* <img src="https://example.com/hero-image.jpg" alt="Tech Career" class="w-full rounded-2xl shadow-xl"> */}
      </div>
    </div>
  );
};

export default Hero;
