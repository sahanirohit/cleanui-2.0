import React, { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const url = useLocation();
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="h-16 flex flex-col items-center">
      <motion.div
        initial={{ y: -400 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        animate={{ y: 0 }}
        className="fixed top-0 left-8 hidden xl:flex flex-col items-center space-y-4">
        <div className="w-px h-36 bg-white"></div>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
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
      </motion.div>
      <motion.div
        initial={{ y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        animate={{ y: 0 }}
        className="flex items-center fixed top-0 bg-gray-800 z-50 w-full h-16 justify-between max-w-7xl mx-auto px-6 xl:px-28">
        <div className="flex md:w-auto w-full justify-between z-50">
          <h1 className=" text-xl font-bold">Clean UI</h1>
          <div className="flex items-center md:hidden space-x-8">
            <a
              href="http://wa.me/918957912038"
              target="_blank"
              className="border hidden sm:block px-4 py-1.5 border-pink-500"
              rel="noopener noreferrer">
              Hire Me
            </a>
            {mobileNav ? (
              <AiOutlineClose
                onClick={() => setMobileNav(!mobileNav)}
                className={`cursor-pointer md:hidden`}
              />
            ) : (
              <FaBars
                onClick={() => setMobileNav(!mobileNav)}
                className={`cursor-pointer md:hidden`}
              />
            )}
          </div>
        </div>
        {/* Desktop Nav */}
        <ul className="md:flex hidden text-gray-400">
          <li
            className={`${
              url.pathname === "/" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`${
              url.pathname === "/portfolio" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li
            className={`${
              url.pathname === "/about" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/about"}>About Me</Link>
          </li>
          <li
            className={`${
              url.pathname === "/contact" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Nav */}
        <ul
          className={`${
            mobileNav ? "translate-x-0" : "translate-x-full"
          } flex duration-500 flex-col inset-0 w-full h-full bg-gray-800 py-28 px-8 fixed top-0 md:hidden text-gray-400`}>
          <li
            onClick={() => setMobileNav(!mobileNav)}
            className={`${
              url.pathname === "/" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/"}>Home</Link>
          </li>
          <li
            onClick={() => setMobileNav(!mobileNav)}
            className={`${
              url.pathname === "/portfolio" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li
            onClick={() => setMobileNav(!mobileNav)}
            className={`${
              url.pathname === "/about" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/about"}>About Me</Link>
          </li>
          <li
            onClick={() => setMobileNav(!mobileNav)}
            className={`${
              url.pathname === "/contact" ? "text-white" : ""
            } px-4 py-2 cursor-pointer hover:text-white`}>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <div className="pt-6 pl-4 text-white">
            <a
              onClick={() => setMobileNav(!mobileNav)}
              href="http://wa.me/918957912038"
              target="_blank"
              className="border px-4 inline-flex items-center space-x-3 py-1.5 border-pink-500"
              rel="noopener noreferrer">
              <span>Hire Me</span>
              <FaWhatsapp />
            </a>
          </div>
        </ul>
        <a
          href="http://wa.me/918957912038"
          target="_blank"
          className="border hidden md:block px-4 py-1.5 border-pink-500"
          rel="noopener noreferrer">
          Hire Me
        </a>
      </motion.div>
    </header>
  );
};

export default memo(Header);
