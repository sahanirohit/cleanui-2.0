import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col items-center py-16 px-6 xl:px-28">
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Contact
          </h1>
          <div className="absoute h-px w-full bg-pink-500 max-w-sm inline-flex"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="py-16 text-xl text-gray-300">
          <p className="">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me.
          </p>
        </div>
        <div className="flex justify-center py-16">
          <div className=" space-y-4 border p-4">
            <h2 className="text-xl">Message me here</h2>
            <div className="flex items-center space-x-2 text-gray-300">
              <FaWhatsapp />{" "}
              <a
                href="http://wa.me/918957912038"
                target="_blank"
                rel="noopener noreferrer">
                +91 89579 12038
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <FaEnvelope />{" "}
              <a
                href="mailto:rohitjobeis@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                rohitjobeis@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
