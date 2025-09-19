import React from "react";
import { easeOut, motion } from "motion/react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={banner1}
            animate={{ y: [20, 50, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-blue-600 border-b-4 border-l-4"
          /> 
          <motion.img
            src={banner2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-blue-600 border-b-4 border-l-4"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 30 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
