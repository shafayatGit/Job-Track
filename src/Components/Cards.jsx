import React from "react";
import { Link } from "react-router";

const Cards = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="mx-5 lg:mx-0 mulish bg-purple-100">
      <Link
        to="/company/123" // Replace with dynamic ID or route
        className="bg-white border hover:bg-purple-200 border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
      >
        <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
          <img
            src={cardData.logo} // Replace with real logo
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-black mulish">
            {cardData.name}
          </h3>
          <h3 className="text-base font-semibold text-gray-800 mt-4 mulish">
            Industry:
            <span className="text-base font-normal ml-2 text-gray-500">
              {cardData.industry}
            </span>
          </h3>
        </div>
      </Link>{" "}
    </div>
  );
};

export default Cards;
