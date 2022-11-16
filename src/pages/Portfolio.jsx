import React, { memo } from "react";

// import project image
import ecommerce from "../assets/ecommerce-development.jpg";
import web from "../assets/website-development.jpg";
import marketing from "../assets/digital-marketing.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

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

const Portfolio = () => {
  return (
    <div className=" max-w-7xl flex items-center flex-col py-16 px-6 xl:px-28 mx-auto">
      <div className="flex items-center justify-between w-full pb-16">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Completed Projects
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectImage.map((item, index) => {
          return (
            <div className="border" key={index}>
              <div className="h-60">
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="border-b px-4 py-2">{item.skill}</p>
              <div className="px-4 py-2 flex flex-col space-y-4">
                <h2 className="">{item.title}</h2>
                <p className="">{item.desc}</p>
                <div className="pb-2">
                  <a
                    href="https://rohitsahani.in/"
                    target="_blank"
                    className="px-6 inline-flex items-center space-x-2 py-1.5 border border-pink-500"
                    rel="noopener noreferrer">
                    <span>Live</span>
                    <FaLongArrowAltRight />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Portfolio);
