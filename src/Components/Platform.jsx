import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "./motionVariants";
import { motion } from "framer-motion";

const Platform = () => {
  const { ref, inView } = useInView();
  return (
    <div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className=" py-20 mulish"
      >
        <div className="container mx-auto text-center" ref={ref}>
          <h2 className="text-4xl font-bold  mb-6">Our Impact So Far</h2>
          <p className=" mb-12">
            Trusted by professionals and companies across the country.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div>
              <div className="mulish   text-3xl font-bold ">
                {inView && (
                  <CountUp
                    start={0}
                    end={12000}
                    duration={2}
                    delay={0}
                  ></CountUp>
                )}{" "}
                +
              </div>
              <p className="mt-2 text-sm ">Jobs Posted</p>
            </div>
            <div>
              <div className="mulish  text-3xl font-bold ">
                {inView && (
                  <CountUp
                    start={0}
                    end={1500}
                    duration={2}
                    delay={0}
                  ></CountUp>
                )}{" "}
                +
              </div>
              <p className="mt-2 text-sm ">Companies</p>
            </div>
            <div>
              <div className="mulish  text-3xl font-bold ">
                {inView && (
                  <CountUp
                    start={0}
                    end={30000}
                    duration={2}
                    delay={0}
                  ></CountUp>
                )}{" "}
                +
              </div>
              <p className="mt-2 text-sm ">Job Seekers</p>
            </div>
            <div>
              <div className="mulish  text-3xl font-bold ">
                {inView && (
                  <CountUp
                    start={0}
                    end={50000}
                    duration={2}
                    delay={0}
                  ></CountUp>
                )}{" "}
                +
              </div>
              <p className="mt-2 text-sm ">Applications Sent</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Platform;
