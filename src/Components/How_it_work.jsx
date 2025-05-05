import React from "react";

const How_it_work = () => {
  return (
    <div>
      <section class="bg-gray-50 py-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p class="text-gray-600  mx-auto mb-12">
            Find your dream job in just a few easy steps. Our platform makes the
            job search and application process simple and efficient.
          </p>

          <div class="grid md:grid-cols-3 gap-10">
            <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div class="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 class="text-xl font-semibold mb-2">1. Browse Jobs</h3>
              <p class="text-gray-600">
                Explore job listings tailored to your skills and interests from
                top companies across various industries.
              </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div class="text-green-600 text-4xl mb-4">📝</div>
              <h3 class="text-xl font-semibold mb-2">2. Apply Easily</h3>
              <p class="text-gray-600">
                Submit your application quickly with your resume and profile. No
                complicated forms or multiple steps.
              </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div class="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-semibold mb-2">3. Get Hired</h3>
              <p class="text-gray-600">
                Get contacted by employers, schedule interviews, and land your
                dream role with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default How_it_work;
