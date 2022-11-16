import React, { memo } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const copyrightYear = new Date();
  return (
    <div className=" border-t">
      <div className=" max-w-7xl px-6 xl:px-28 mx-auto flex flex-col md:flex-row items-center text-center md:justify-between">
        <div className="py-8 flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-8">
            <h1 className="text-xl font-bold">Clean UI</h1>
            <a
              href="mailto: rohitjobeis@gmail.com"
              target="_blank"
              className=" inline-flex items-center space-x-2 text-gray-500 hover:text-gray-100"
              rel="noopener noreferrer">
              <FaEnvelope /> <span>rohitjobeis@gmail</span>
            </a>
          </div>
          <p className=" text-gray-400">
            Web designer and front-end developer based in Gujarat, India.
          </p>
        </div>
        <div className="py-8 flex flex-col items-center md:items-start space-y-4">
          <h1 className=" text-xl font-bold">Social Media</h1>
          <div className=" flex space-x-4 text-lg">
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-xl" />
            </a>
            <a
              href="http://instagram.com/rkhdigital"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="http://wa.me/918957912038"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-6 xl:px-28 mx-auto flex text-center justify-center p-8 items-center">
        <p className=" text-gray-400">
          &copy; Copyright {copyrightYear.getFullYear()}. Made by{" "}
          <Link
            className="hover:text-pink-500 text-white border-b border-pink-500"
            to={"/"}>
            Rohit Sahani.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
