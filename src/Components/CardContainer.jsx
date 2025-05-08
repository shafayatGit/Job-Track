import React from "react";
import { Link } from "react-router";
import Cards from "./Cards";
import { motion } from "framer-motion";
import { FaDeleteLeft } from "react-icons/fa6";
import { fadeInLeft, fadeInRight } from "./motionVariants";

const CardContainer = ({ data }) => {
  return (
    <div id="cards_container" className="mulish mt-32 mb-32">
      <div className="text-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 class="text-4xl font-bold mb-4">All Available Companies</h2>
          <p class=" mb-8">
            Discover top-rated companies hiring now. Learn more about their
            culture, open roles, and what makes them great places to work.
          </p>
        </motion.div>
        <div className="lg:p-0 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded mt-10 mb-10">
          {data.map((cardData) => (
            <Cards key={cardData.id} cardData={cardData}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
