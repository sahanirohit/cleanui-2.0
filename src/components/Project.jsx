import React from "react";
import { FaArrowRight } from "react-icons/fa";

// import project image
import ecommerce from "../assets/ecommerce-development.jpg";
import web from "../assets/website-development.jpg";
import marketing from "../assets/digital-marketing.jpg";
import { Link } from "react-router-dom";
const projectImage = [
  {
    img: ecommerce,
    skill: "HTML CSS Python Flash",
    title: "Ecommerce",
    desc: "This is my own portfolio website.",
  },
  {
    img: web,
    skill: "HTML CSS Python Flash",
    title: "Web Development",
    desc: "This is my own portfolio website.",
  },
  {
    img: marketing,
    skill: "HTML CSS Python Flash",
    title: "Digital Marketing",
    desc: "This is my own portfolio website.",
  },
];

const Project = () => {
  return (
    <div className=" max-w-7xl px-6 xl:px-28 mx-auto flex flex-col items-center">
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Project
          </h1>
          <div className="absoute h-px w-full bg-pink-500 max-w-sm hidden md:inline-flex"></div>
        </div>
        <div className="flex items-center space-x-4 w-full justify-end">
          <h1 className="">View All</h1>
          <Link to={"/portfolio"}>
            <FaArrowRight className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
        {projectImage.map((item, index) => {
          return (
            <div className="border" key={index}>
              <div className="w-full h-60">
                <img
                  src={item.img}
                  alt=""
                  className="w-full border h-full object-cover"
                />
              </div>
              <h3 className="px-6 py-2 border text-gray-400">{item.skill}</h3>
              <div className="border px-6 py-2 flex flex-col space-y-4">
                <h1 className=" font-semibold">{item.title}</h1>
                <p className=" text-gray-400">{item.desc}</p>
                <div className="">
                  <button className="px-6 inline-flex items-center space-x-2 py-1 border border-pink-500">
                    <span>Live</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
