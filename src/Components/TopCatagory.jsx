import React from "react";

const TopCatagory = () => {
  return (
    <div>
      <section className="bg-[#f4fbf9] py-16 px-4 text-center mulish">
        <h2 className="text-4xl font-bold mb-3 text-gray-800">
          Browse by Category
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Explore job opportunities by industry. Find your dream job faster by
          browsing through job categories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card: Agriculture */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🌱
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Agriculture</h3>
            <p className="text-green-600 mt-2 font-medium">1254 jobs</p>
          </div>

          {/* Card: Metal Production */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🛠️
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Metal Production
            </h3>
            <p className="text-green-600 mt-2 font-medium">816 jobs</p>
          </div>

          {/* Card: Commerce */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🛍️
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Commerce</h3>
            <p className="text-green-600 mt-2 font-medium">2082 jobs</p>
          </div>

          {/* Card: Construction */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🏗️
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Construction
            </h3>
            <p className="text-green-600 mt-2 font-medium">1520 jobs</p>
          </div>

          {/* Card: Hotels & Tourism */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🏨
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Hotels & Tourism
            </h3>
            <p className="text-green-600 mt-2 font-medium">1022 jobs</p>
          </div>

          {/* Card: Education */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🎓
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Education</h3>
            <p className="text-green-600 mt-2 font-medium">1496 jobs</p>
          </div>

          {/* Card: Financial Services */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              💼
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Financial Services
            </h3>
            <p className="text-green-600 mt-2 font-medium">1529 jobs</p>
          </div>

          {/* Card: Transport */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🚚
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Transport</h3>
            <p className="text-green-600 mt-2 font-medium">1244 jobs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCatagory;
