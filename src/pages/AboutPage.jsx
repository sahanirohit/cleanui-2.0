import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

// import about section image
import aboutImage from "../assets/about.png";

const AboutPage = () => {
  return (
    <div className=" max-w-7xl flex flex-col items-center mx-auto py-16 px-6 xl:px-28">
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> About Me
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 text-center items-center md:text-left md:items-start md:gap-4">
        <div className="pt-8 flex flex-col space-y-4 text-xl text-gray-300">
          <p className="">Hello, I'm Rohit!</p>
          <p className="">
            I'm a self-taught front-end developer based in Gujarat, India. I can
            develop responsive websites from scratch and raise them into modern
            user- friendly web experiences.
          </p>
          <p className="">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div className="w-full">
            <Link
              to={"/contact"}
              className="px-4 text-sm py-1 border border-pink-500 inline-flex items-center space-x-2">
              <span>Read More</span> <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end relative">
          <img
            loading="lazy"
            src={aboutImage}
            alt=""
            className="border-b border-pink-500"
          />
          <div className="absolute left-44 flex space-x-3">
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute md:right-0 right-28 bottom-8 flex space-x-5">
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pt-16 justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Skills
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 max-w-xs sm:max-w-none md:grid-cols-5 gap-4 w-full pt-8">
        <div className="border">
          <h1 className="border-b px-4 py-2">Language</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">JavaScript</p>
            <p className="">Python</p>
          </div>
        </div>
        <div className="border">
          <h1 className="border-b px-4 py-2">Other</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">HTML CSS SCSS</p>
            <p className="">Tailwind</p>
          </div>
        </div>
        <div className="border">
          <h1 className="border-b px-4 py-2">Tools</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">VSCode</p>
            <p className="">Figma</p>
            <p className="">Git Font Awesome</p>
          </div>
        </div>
        <div className="border">
          <h1 className="border-b px-4 py-2">Database</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">Mysql</p>
            <p className="">Mongo DB</p>
          </div>
        </div>
        <div className="border">
          <h1 className="border-b px-4 py-2">Frameworks</h1>
          <div className="px-4 py-2 text-gray-400">
            <p className="">React Django</p>
            <p className="">Express</p>
            <p className="">Tailwind</p>
          </div>
        </div>
      </div>
      <div className="flex items-center pt-16 justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> my-fun-facts
          </h1>
        </div>
      </div>
      <div className="flex w-full text-gray-400">
        <div className="flex flex-col space-y-3 pt-8">
          <p className="px-4 shrink-0 border py-2">
            I like summer more than winter
          </p>
          <p className="px-4 shrink-0 border py-2">
            I'm still studing in school
          </p>
          <p className="px-4 shrink-0 border py-2">
            My favorite movie is Avenger End Game
          </p>
        </div>
        <div className="relative hidden flex-1">
          <div className="absolute bottom-28 right-48">
            <div className="relative">
              <div className="absolute w-24 h-36 border border-pink-500 flex items-center justify-end">
                <div className="absolute w-12 h-12 border-r-0 border border-pink-500"></div>
              </div>
            </div>
            <div className="relative bottom-12 left-24">
              <div className="absolute w-24 h-36 border border-pink-500 flex items-center">
                <div className="absolute w-12 h-12 border border-l-0 border-pink-500"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-8 left-56 flex space-x-3">
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-96 flex space-x-3">
            <div className="flex flex-col space-y-3">
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
