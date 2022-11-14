import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// import hero image
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div className=" max-w-7xl px-6 xl:px-28 w-full flex flex-col items-center mx-auto py-16">
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col items-start justify-center space-y-6">
          <h1 className="text-4xl">
            Clean UI is a{" "}
            <strong className="text-pink-500">web designer</strong> and <br />{" "}
            <strong className="text-pink-500">front-end developer</strong>
          </h1>
          <p className="text-xl text-gray-400">
            We crafts responsive websites where technologies <br /> meet
            creativity
          </p>
          <div className="">
            <Link
              className="px-4 py-1.5 border border-pink-500"
              to={"/contact"}>
              Contact me!!
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-end justify-end">
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-contain"
          />
          <div className="w-full border py-1.5 px-3 flex items-center space-x-4">
            <div className="w-4 h-4 bg-pink-500"></div>
            <h5 className="text-xl">Currently working on Clean UI</h5>
          </div>
        </div>
      </div>
      <div className="py-16 text-3xl relative">
        <div className="relative border px-8 py-4">
          <div className="absolute p-1 -top-5 bg-gray-900">
            <FaQuoteLeft className="text-2xl" />
          </div>

          <h1 className="tracking-wider">Good design is good business.</h1>
        </div>

        <div className="w-full flex justify-end text-2xl">
          <div className="relative border max-w-sm text-right px-8 py-4">
            <div className="absolute p-1 -top-4 bg-gray-900 right-3">
              <FaQuoteRight className="text-xl" />
            </div>
            <h1 className="">- Thomas Watson Jr.</h1>
          </div>
        </div>
      </div>
      <div className="absolute border w-20 h-16 right-0 bottom-0"></div>
    </div>
  );
};

export default Hero;
