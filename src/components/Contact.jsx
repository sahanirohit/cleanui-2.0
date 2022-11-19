import React, { memo } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const contactTitle = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const contactContent = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col items-center py-16 px-6 xl:px-28">
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1
            variants={contactTitle}
            className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Contact
          </motion.h1>
          <motion.div
            variants={contactTitle}
            className="absoute h-px w-full bg-pink-500 max-w-sm hidden md:inline-flex"></motion.div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 pt-16 gap-4">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl text-gray-300">
          <motion.p variants={contactContent} className="">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me.
          </motion.p>
        </motion.div>
        <div className="flex md:justify-end pb-16">
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
            className=" space-y-4 border p-4">
            <motion.h2 variants={contactContent} className="text-xl">
              Message me here
            </motion.h2>
            <motion.div
              variants={contactContent}
              className="flex items-center space-x-2 text-gray-300">
              <FaWhatsapp />{" "}
              <a
                href="http://wa.me/918957912038"
                target="_blank"
                rel="noopener noreferrer">
                +91 89579 12038
              </a>
            </motion.div>
            <motion.div
              variants={contactContent}
              className="flex items-center space-x-2 text-gray-300">
              <FaEnvelope />{" "}
              <a
                href="mailto:rohitjobeis@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                rohitjobeis@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
