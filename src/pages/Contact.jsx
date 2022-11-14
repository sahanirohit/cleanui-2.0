import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" max-w-7xl mx-auto px-6 xl:px-28 flex flex-col py-16 items-center">
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Contact-us
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 py-16">
        <div className="text-xl text-center sm:text-left text-gray-300">
          <p className="">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me.
          </p>
        </div>
        <div className="flex justify-center sm:justify-end">
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
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> web-design-categories
          </h1>
        </div>
      </div>
      <div className="pt-8 w-full">
        <ul className="flex flex-col space-y-2 text-gray-400">
          <li className="hover:text-white">1. Blog Website.</li>
          <li className="hover:text-white">2. Business/Corporate Websites.</li>
          <li className="hover:text-white">3. NGO /Non-Profit Websites.</li>
          <li className="hover:text-white">4. E-Commerce Websites.</li>
          <li className="hover:text-white">5. Educational Websites.</li>
          <li className="hover:text-white">6. Entertainment Website.</li>
          <li className="hover:text-white">7. Portfolio Website.</li>
          <li className="hover:text-white">8. Social Media Websites.</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
