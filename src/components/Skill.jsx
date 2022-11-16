import React, { memo } from "react";
import { motion } from "framer-motion";

const skillTitle = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillContent = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Skill = () => {
  return (
    <div className=" max-w-7xl px-6 xl:px-28 mx-auto flex flex-col items-center py-16">
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1 variants={skillTitle} className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Skills
          </motion.h1>
          <motion.div
            variants={skillTitle}
            className="absoute hidden h-px w-full bg-pink-500 max-w-sm md:inline-flex"></motion.div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full pt-8">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="relative hidden lg:block">
          <motion.div
            variants={skillContent}
            className="absolute w-28 h-28 border right-12"></motion.div>
          <motion.div
            variants={skillContent}
            className="absolute w-16 h-16 border right-0 bottom-20"></motion.div>
          <motion.div variants={skillContent} className="absolute bottom-28">
            <div className="relative">
              <div className="absolute w-24 h-36 border border-pink-500 flex items-center justify-end">
                <div className="absolute w-12 h-12 border-r-0 border border-pink-500"></div>
              </div>
            </div>
            <div className="relative bottom-12 left-24">
              <div className="absolute w-24 h-36 border border-pink-500 flex items-center">
                <div className="absolute w-12 h-12 border border-l-0 border-pink-500"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={skillContent}
            className="absolute top-12 flex space-x-3">
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
        </motion.div>
        <div className=" lg:col-span-2 w-full">
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 text-xl gap-4 w-full">
            <motion.div variants={skillContent} className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
              </div>
            </motion.div>
            <motion.div variants={skillContent} className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">SQLite PostgreSQL</p>
                <p className="">Mongo</p>
              </div>
            </motion.div>
            <motion.div variants={skillContent} className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
                <p className="">Git Font Awesome</p>
              </div>
            </motion.div>
            <motion.div variants={skillContent} className=""></motion.div>
            <motion.div variants={skillContent} className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">SQLite PostgreSQL</p>
                <p className="">Mongo</p>
              </div>
            </motion.div>
            <motion.div variants={skillContent} className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
                <p className="">Git Font Awesome</p>
              </div>
            </motion.div>
            <motion.div variants={skillContent} className=""></motion.div>
            <motion.div variants={skillContent} className=""></motion.div>
            <motion.div variants={skillContent} className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
                <p className="">Git Font Awesome</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(Skill);
