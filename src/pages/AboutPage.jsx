import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

// import about section image
import aboutImage from "../assets/about.png";

const aboutTitle = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const aboutContent = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const aboutImageAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutPage = () => {
  return (
    <div className=" max-w-7xl flex flex-col items-center mx-auto py-16 px-6 xl:px-28">
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1 variants={aboutTitle} className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> About Me
          </motion.h1>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 text-center items-center md:text-left md:items-start md:gap-4">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="pt-8 flex flex-col space-y-4 text-xl text-gray-300">
          <motion.p variants={aboutContent} className="">
            Hello, I'm Rohit!
          </motion.p>
          <motion.p variants={aboutContent} className="">
            I'm a self-taught front-end developer based in Gujarat, India. I can
            develop responsive websites from scratch and raise them into modern
            user- friendly web experiences.
          </motion.p>
          <motion.p variants={aboutContent} className="">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </motion.p>
          <motion.div variants={aboutContent} className="w-full">
            <Link
              to={"/contact"}
              className="px-4 text-sm py-1 border border-pink-500 inline-flex items-center space-x-2">
              <span>Read More</span> <FaLongArrowAltRight />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center md:justify-end relative">
          <motion.div variants={aboutImageAnimation} className="h-96">
            <img
              loading="lazy"
              src={aboutImage}
              alt=""
              className="border-b w-full h-full object-contain border-pink-500"
            />
          </motion.div>
          <motion.div
            variants={aboutImageAnimation}
            className="absolute left-44 sm:left-56 flex space-x-3">
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
          </motion.div>
          <motion.div
            variants={aboutImageAnimation}
            className="absolute md:right-0 right-28 bottom-8 flex space-x-5">
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
          </motion.div>
        </motion.div>
      </div>
      <div className="flex items-center pt-16 justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1 variants={aboutTitle} className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Skills
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="grid sm:grid-cols-3 max-w-xs sm:max-w-none md:grid-cols-5 gap-4 w-full pt-8">
        <motion.div variants={aboutContent} className="border">
          <h1 className="border-b px-4 py-2">Language</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">JavaScript</p>
            <p className="">Python</p>
          </div>
        </motion.div>
        <motion.div variants={aboutContent} className="border">
          <h1 className="border-b px-4 py-2">Other</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">HTML CSS SCSS</p>
            <p className="">Tailwind</p>
          </div>
        </motion.div>
        <motion.div variants={aboutContent} className="border">
          <h1 className="border-b px-4 py-2">Tools</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">VSCode</p>
            <p className="">Figma</p>
            <p className="">Git Font Awesome</p>
          </div>
        </motion.div>
        <motion.div variants={aboutContent} className="border">
          <h1 className="border-b px-4 py-2">Database</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">Mysql</p>
            <p className="">Mongo DB</p>
          </div>
        </motion.div>
        <motion.div variants={aboutContent} className="border">
          <h1 className="border-b px-4 py-2">Frameworks</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">React Django</p>
            <p className="">Express</p>
            <p className="">Tailwind</p>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex items-center pt-16 justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1 variants={aboutTitle} className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> my-fun-facts
          </motion.h1>
        </motion.div>
      </div>
      <div className="flex w-full text-gray-400">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col space-y-3 pt-8">
          <motion.p
            variants={aboutContent}
            className="px-4 shrink-0 border py-2">
            I like summer more than winter
          </motion.p>
          <motion.p
            variants={aboutContent}
            className="px-4 shrink-0 border py-2">
            I'm still studing in school
          </motion.p>
          <motion.p
            variants={aboutContent}
            className="px-4 shrink-0 border py-2">
            My favorite movie is Avenger End Game
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
