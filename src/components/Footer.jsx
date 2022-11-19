import React, { memo } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerContent = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Footer = () => {
  const copyrightYear = new Date();
  return (
    <div className=" border-t">
      <div className=" max-w-7xl px-6 xl:px-28 mx-auto flex flex-col md:flex-row items-center text-center md:justify-between">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="py-8 flex flex-col items-center md:items-start space-y-4">
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            className="flex space-x-8">
            <motion.h1 variants={footerContent} className="text-xl font-bold">
              Clean UI
            </motion.h1>
            <motion.a
              variants={footerContent}
              href="mailto: rohitjobeis@gmail.com"
              target="_blank"
              className=" inline-flex items-center space-x-2 text-gray-500 hover:text-gray-100"
              rel="noopener noreferrer">
              <FaEnvelope /> <span>rohitjobeis@gmail</span>
            </motion.a>
          </motion.div>
          <motion.p variants={footerContent} className=" text-gray-400">
            Web designer and front-end developer based in Gujarat, India.
          </motion.p>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="py-8 flex flex-col items-center md:items-start space-y-4">
          <motion.h1 variants={footerContent} className=" text-xl font-bold">
            Social Media
          </motion.h1>
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            className=" flex space-x-4 text-lg">
            <motion.a
              variants={footerContent}
              href="http://github.com/sahanirohit/"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              variants={footerContent}
              href="http://instagram.com/rkhdigital"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-xl" />
            </motion.a>
            <motion.a
              variants={footerContent}
              href="http://wa.me/918957912038"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp className="text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl px-6 xl:px-28 mx-auto flex text-center justify-center p-8 items-center">
        <motion.p variants={footerContent} className=" text-gray-400">
          &copy; Copyright {copyrightYear.getFullYear()}. Made by{" "}
          <Link
            className="hover:text-pink-500 text-white border-b border-pink-500"
            to={"/"}>
            Rohit Sahani.
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default memo(Footer);
