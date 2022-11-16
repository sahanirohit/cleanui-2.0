import React, { memo } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import hero image
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div className=" max-w-7xl overflow-hidden px-6 xl:px-28 w-full flex flex-col items-center mx-auto py-16">
      <div className="grid md:grid-cols-2 w-full gap-8 md:gap-0">
        <motion.div
          initial={{ x: -700 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{ x: 0 }}
          className="flex flex-col items-center text-center md:text-left md:items-start justify-center space-y-6">
          <h1 className="text-5xl ">
            I'm a <strong className="text-pink-500">web designer</strong> and{" "}
            <br />{" "}
            <strong className="text-pink-500">front-end developer</strong>
          </h1>
          <p className="text-xl text-gray-400">
            We crafts responsive websites where technologies <br /> meet
            creativity
          </p>
          <div className="">
            <Link
              className="px-4 py-2 hover:text-pink-500 hover:bg-white font-bold border border-pink-500"
              to={"/contact"}>
              Contact me!!
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 700 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{ x: 0 }}
          className="w-full h-full flex flex-col items-end justify-end">
          <img
            src={heroImage}
            alt="hero"
            loading="lazy"
            className="w-full h-80 md:h-full object-contain"
          />
          <div className="w-full border py-1.5 px-3 flex items-center space-x-4">
            <div className="w-4 h-4 bg-pink-500"></div>
            <h5 className="text-xl">Currently working on Clean UI</h5>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 110, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        animate={{ y: 0, opacity: 1 }}
        className="py-16 text-3xl relative font-[lobster]">
        <div className="relative border px-8 py-4">
          <div className="absolute p-1 -top-5 bg-gray-800">
            <FaQuoteLeft className="text-2xl" />
          </div>

          <h1 className="tracking-wider">Good design is good business.</h1>
        </div>

        <div className="w-full flex justify-end text-2xl">
          <div className="relative border max-w-sm text-right px-8 py-4">
            <div className="absolute p-1 -top-4 bg-gray-800 right-3">
              <FaQuoteRight className="text-xl" />
            </div>
            <h1 className="">- Thomas Watson Jr.</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(Hero);
