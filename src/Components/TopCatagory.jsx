import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "./motionVariants";

const TopCatagory = () => {
  return (
    <div>
      <section className=" py-16 px-4 text-center mulish">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-3 ">Browse by Category</h2>
          <p className=" max-w-xl mx-auto mb-12">
            Explore job opportunities by industry. Find your dream job faster by
            browsing through job categories.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {/* Card: Agriculture */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🌱
            </div>
            <h3 className="text-lg font-semibold ">Agriculture</h3>
            <p className="text-green-600 mt-2 font-medium">1254 jobs</p>
          </div>

          {/* Card: Metal Production */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🛠️
            </div>
            <h3 className="text-lg font-semibold ">Metal Production</h3>
            <p className="text-green-600 mt-2 font-medium">816 jobs</p>
          </div>

          {/* Card: Commerce */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🛍️
            </div>
            <h3 className="text-lg font-semibold ">Commerce</h3>
            <p className="text-green-600 mt-2 font-medium">2082 jobs</p>
          </div>

          {/* Card: Construction */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🏗️
            </div>
            <h3 className="text-lg font-semibold ">Construction</h3>
            <p className="text-green-600 mt-2 font-medium">1520 jobs</p>
          </div>

          {/* Card: Hotels & Tourism */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🏨
            </div>
            <h3 className="text-lg font-semibold ">Hotels & Tourism</h3>
            <p className="text-green-600 mt-2 font-medium">1022 jobs</p>
          </div>

          {/* Card: Education */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🎓
            </div>
            <h3 className="text-lg font-semibold ">Education</h3>
            <p className="text-green-600 mt-2 font-medium">1496 jobs</p>
          </div>

          {/* Card: Financial Services */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              💼
            </div>
            <h3 className="text-lg font-semibold ">Financial Services</h3>
            <p className="text-green-600 mt-2 font-medium">1529 jobs</p>
          </div>

          {/* Card: Transport */}
          <div className=" p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🚚
            </div>
            <h3 className="text-lg font-semibold ">Transport</h3>
            <p className="text-green-600 mt-2 font-medium">1244 jobs</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TopCatagory;
