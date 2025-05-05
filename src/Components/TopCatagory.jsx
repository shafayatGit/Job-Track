import React from "react";

const TopCatagory = () => {
  return (
    <div>
      <section class="bg-white py-16 mulish">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">
            Explore Top Categories
          </h2>
          <p class="text-gray-600 mb-10">
            Quickly find jobs by your area of interest and expertise.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div class="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              💻
              <p class="mt-2 text-base font-medium text-gray-700">
                Development
              </p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              🎨
              <p class="mt-2 text-base font-medium text-gray-700">Design</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              📢
              <p class="mt-2 text-base font-medium text-gray-700">Marketing</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              🧮
              <p class="mt-2 text-base font-medium text-gray-700">Finance</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              🛠️
              <p class="mt-2 text-base font-medium text-gray-700">
                Engineering
              </p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              📱
              <p class="mt-2 text-base font-medium text-gray-700">Product</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCatagory;
