import React, { useState } from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router";
// import Jobs from "./Jobs";
import Navber from "./Navber";

const CardsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const singleJob = data.find((job) => job.id === id);
  const { name, logo, website, jobs, industry } = singleJob;

  //   console.log(jobs);

  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <div className=" mt-32 flex items-center justify-center lg:shadow-md hover:lg:shadow-xl hover:scale-[1.02] transition ">
        <div className="h-[400px] px-0 gap-5 lg:gap-22   shadow-sm flex flex-col md:flex-row">
          <img
            className="md:h-[350px] mx-auto md:w-[350px] block rounded-lg "
            src={logo}
            alt=""
          />

          <div className=" flex flex-col gap-10 ">
            <div className=" mt-5 flex flex-col">
              <h2 className="card-title  font-extrabold text-2xl">{name}</h2>
              <p className=" text-purple-500">{industry}</p>
            </div>

            <div className="">
              <span className=" font-bold text-xl ">Title:</span>
              <div className="flex gap-12">
                {jobs.map((job) => (
                  <div className=" flex flex-col gap-5" key={job.id}>
                    <p className="text-gray-500 font-medium text-base">
                      {job.title}
                    </p>
                    <div className="flex gap-5 items-center">
                      <p className=" font-bold text-xl ">Jobtype:</p>
                      <p className="text-gray-500 font-medium text-base border border-gray-400 bg-gray-200 rounded-2xl px-5 mt-3">
                        {job.jobType}
                      </p>
                    </div>
                    <div>
                      <p className=" font-bold text-xl">Salary Range:</p>
                      <p className="text-gray-500 font-medium text-base border border-gray-400 bg-gray-200 rounded-2xl px-5 mt-3">
                        {job.salary}
                      </p>
                      <button
                        onClick={() => setShowModal(true)}
                        className=" mt-5 w-full cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group mb-28"
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
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease bg-linear-65 from-blue-700 to-pink-600 ">
                          Details
                        </span>
                        <span className="relative invisible">Details</span>
                      </button>
                    </div>
                    {showModal && (
                      <div className="fixed inset-0  backdrop-blur-md bg-opacity-100 flex items-center justify-center z-50 mulish">
                        <div className=" rounded-xl  max-w-md w-full p-6 relative shadow-lg animate-fadeIn">
                          <div className="flex flex-col gap-4 bg-gray-300 p-9 rounded-lg mt-10">
                            <div className="flex justify-between items-center">
                              <h3 className="text-2xl font-semibold text-black ">
                                {job.title}
                              </h3>
                              <p className="text-gray-700 font-medium text-base border border-gray-400 rounded-2xl px-2 py-2">
                                {job.salary}
                              </p>
                            </div>
                            <p className="text-black text-2xl font-semibold mb-3 mt-2">
                              Requirements:
                              {job.requirements.map((req) => (
                                <p className="text-gray-700 text-base mb-2 font-normal">
                                  {req}
                                </p>
                              ))}
                            </p>
                            <p className="text-black font-bold text-xl mr-2">
                              Location:{" "}
                              <span className="text-gray-700  font-medium text-base border border-gray-400  rounded-2xl px-5 py-2">
                                {job.location}
                              </span>{" "}
                            </p>
                          </div>

                          <div className="mt-6 flex justify-between">
                            <NavLink
                              to={website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="mt-5 w-full cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group mb-28">
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
                                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease bg-linear-65 from-blue-700 to-pink-600 ">
                                  Apply
                                </span>
                                <span className="relative invisible">
                                  Apply
                                </span>
                              </button>
                            </NavLink>
                            <button
                              onClick={() => setShowModal(false)}
                              className="mt-5 w-[100px] cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group mb-28"
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
                              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease bg-linear-65 from-blue-700 to-pink-600 ">
                                Close
                              </span>
                              <span className="relative invisible">Close</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
