import React, { memo } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
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
  hidden: { opacity: 0, y: 60 },
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
    <div className=" max-w-7xl mx-auto px-6 xl:px-28 flex flex-col py-16 items-center">
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1
            variants={contactTitle}
            className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Contact us
          </motion.h1>
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 py-16">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl text-center sm:text-left text-gray-300">
          <motion.p variants={contactContent} className="">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me.
          </motion.p>
        </motion.div>
        <div className="flex justify-center sm:justify-end">
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
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex w-full items-center space-x-6">
          <motion.h1
            variants={contactTitle}
            className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> web-design-categories
          </motion.h1>
        </motion.div>
      </div>
      <div className="pt-8 w-full">
        <motion.ul
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col space-y-2 text-gray-400">
          <motion.li variants={contactContent} className="hover:text-white">
            1. Blog Website.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            2. Business/Corporate Websites.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            3. NGO /Non-Profit Websites.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            4. E-Commerce Websites.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            5. Educational Websites.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            6. Entertainment Website.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            7. Portfolio Website.
          </motion.li>
          <motion.li variants={contactContent} className="hover:text-white">
            8. Social Media Websites.
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default memo(Contact);
