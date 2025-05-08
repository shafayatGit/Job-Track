import React from "react";
import { Link } from "react-router";
import { fadeInRight } from "./motionVariants";
import { motion } from "framer-motion";

const Cards = ({ cardData }) => {
  //   .log(cardData);
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-5 lg:mx-0 mulish "
    >
      <Link
        to={`/company-details/${cardData.id}`} // Replace with dynamic ID or route
        className=" border hover:text-black hover:bg-purple-100 border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
      >
        <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
          <img
            src={cardData.logo} // Replace with real logo
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold  mulish">{cardData.name}</h3>
          <h3 className="text-base font-semibold  mt-4 mulish">
            Industry:
            <span className="text-base font-normal ml-2 ">
              {cardData.industry}
            </span>
          </h3>
        </div>
      </Link>{" "}
    </motion.div>
  );
};

export default Cards;
