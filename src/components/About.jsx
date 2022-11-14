import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// import about section image
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className=" max-w-7xl flex flex-col items-center mx-auto py-16 px-6 xl:px-28">
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> About Me
          </h1>
          <div className="absoute h-px w-full bg-pink-500 max-w-sm hidden md:inline-flex"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-4">
        <div className="pt-8 flex items-center text-center lg:items-start lg:text-left flex-col space-y-4 text-xl text-gray-300">
          <p className="">Hello, I'm Rohit!</p>
          <p className="">
            I'm a self-taught front-end developer based in Gujarat, India. I can
            develop responsive websites from scratch and raise them into modern
            user- friendly web experiences.
          </p>
          <p className="">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div className="w-full">
            <Link
              to={"/contact"}
              className="px-4 text-sm py-1 border border-pink-500 inline-flex items-center space-x-2">
              <span>Read More</span> <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end relative">
          <img src={aboutImage} alt="" className="border-b border-pink-500" />
          <div className="absolute lg:left-44 left-64 duration-500 flex space-x-3">
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute lg:right-0 duration-500 right-64 bottom-8 flex space-x-5">
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
