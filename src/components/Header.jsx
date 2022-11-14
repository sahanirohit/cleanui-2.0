import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 flex flex-col items-center">
      <div className="fixed top-0 left-8 flex flex-col items-center space-y-4">
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
      </div>
      <div className="flex items-center fixed top-0 bg-gray-900 z-50 w-full h-16 justify-between max-w-7xl mx-auto px-6 xl:px-28">
        <div className="">
          <h1 className=" text-xl font-bold">Clean UI</h1>
        </div>
        <ul className="flex">
          <li className="px-4 py-2 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 py-2 cursor-pointer">
            <Link to={"/"}>Portfolio</Link>
          </li>
          <li className="px-4 py-2 cursor-pointer">
            <Link to={"/"}>About Me</Link>
          </li>
          <li className="px-4 py-2 cursor-pointer">
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
        <Link
          className=" flex items-center justify-center space-x-2 border px-4 py-1.5 border-pink-500"
          to={"/login"}>
          <FaUser /> <span>Login</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
