import React from "react";
import { fadeIn, fadeInLeft, fadeInUp } from "./motionVariants";
import { motion } from "framer-motion";

const How_it_work = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <section class=" py-20 mulish ">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold  mb-4">How It Works</h2>
          <p class="  mx-auto mb-12">
            Find your dream job in just a few easy steps. Our platform makes the
            job search and application process simple and efficient.
          </p>

          <div class="grid md:grid-cols-3 gap-10">
            <div class=" p-8 rounded-2xl shadow hover:shadow-xl hover:scale-105  duration-300 transition">
              <div class="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 class="text-xl font-semibold mb-2">1. Browse Jobs</h3>
              <p class="">
                Explore job listings tailored to your skills and interests from
                top companies across various industries.
              </p>
            </div>

            <div class="p-8 rounded-2xl shadow hover:shadow-xl transition hover:scale-105  duration-300">
              <div class="text-green-600 text-4xl mb-4">📝</div>
              <h3 class="text-xl font-semibold mb-2">2. Apply Easily</h3>
              <p class="">
                Submit your application quickly with your resume and profile. No
                complicated forms or multiple steps.
              </p>
            </div>

            <div class=" p-8 rounded-2xl shadow hover:shadow-xl transition hover:scale-105  duration-300">
              <div class="text-purple-600 text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-semibold mb-2">3. Get Hired</h3>
              <p class="">
                Get contacted by employers, schedule interviews, and land your
                dream role with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default How_it_work;
