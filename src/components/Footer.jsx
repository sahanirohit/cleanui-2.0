import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" border-t">
      <div className=" max-w-7xl px-6 xl:px-28 mx-auto flex justify-between">
        <div className="py-8 flex flex-col space-y-4">
          <div className="flex space-x-8">
            <h1 className="text-xl font-bold">Clean UI</h1>
            <a
              href="mailto: rohitjobeis@gmail.com"
              target="_blank"
              className=" inline-flex items-center space-x-2 text-gray-500"
              rel="noopener noreferrer">
              <FaEnvelope /> <span>rohitjobeis@gmail</span>
            </a>
          </div>
          <p className=" text-gray-400">
            Web designer and front-end developer based in Gujarat, India.
          </p>
        </div>
        <div className="py-8 flex flex-col space-y-4">
          <h1 className=" text-xl font-bold">Social Media</h1>
          <div className=" flex space-x-4 text-lg">
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-6 xl:px-28 mx-auto flex justify-center p-8 items-center">
        <p className="">&copy; Copyright 2022. Made by Rohit Sahani.</p>
      </div>
    </div>
  );
};

export default Footer;
