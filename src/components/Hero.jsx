import React, { memo } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import hero image
import heroImage from "../assets/hero.png";

const heroItem = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const heroQuote = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className=" max-w-7xl overflow-hidden px-6 xl:px-28 w-full flex flex-col items-center mx-auto pb-16">
      <div className="grid md:grid-cols-2 w-full gap-8 md:gap-0">
        {/* Hero Section Content Area */}
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col items-center text-center md:text-left md:items-start justify-center space-y-6">
          <motion.h1 variants={heroItem} className="text-5xl ">
            I'm a <strong className="text-pink-500">web designer</strong> and{" "}
            <br />{" "}
            <strong className="text-pink-500">front-end developer</strong>
          </motion.h1>
          <motion.p variants={heroItem} className="text-xl text-gray-400">
            We crafts responsive websites where technologies <br /> meet
            creativity
          </motion.p>
          <motion.div variants={heroItem} className="">
            <Link
              className="px-4 py-2 hover:text-pink-500 hover:bg-white font-bold border border-pink-500"
              to={"/contact"}>
              Contact me!!
            </Link>
          </motion.div>
        </motion.div>
        {/* Hero Section Image Area */}
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full h-full flex flex-col items-end justify-end">
          <motion.img
            variants={heroItem}
            src={heroImage}
            alt="hero"
            loading="lazy"
            className="w-full h-80 md:h-full object-contain"
          />
          <motion.div
            variants={heroItem}
            className="w-full border py-1.5 px-3 flex items-center space-x-4">
            <div className="w-4 h-4 bg-pink-500"></div>
            <h5 className="text-xl">Currently working on Clean UI</h5>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        transition={{ staggerChildren: 0.2 }}
        className="pt-8 text-2xl relative font-[lobster]">
        <motion.div variants={heroQuote} className="relative border px-8 py-2">
          <div className="absolute p-1 -top-5 bg-gray-800">
            <FaQuoteLeft className="text-2xl" />
          </div>

          <h1 className="tracking-wider">Good design is good business.</h1>
        </motion.div>

        <motion.div
          variants={heroQuote}
          className="w-full flex justify-end text-2xl">
          <div className="relative border border-t-0 max-w-sm text-right px-8 py-2">
            <div className="absolute p-1 -top-4 bg-gray-800 right-3">
              <FaQuoteRight className="text-xl" />
            </div>
            <h1 className="">- Thomas Watson Jr.</h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default memo(Hero);
