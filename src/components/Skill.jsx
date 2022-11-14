import React from "react";

const Skill = () => {
  return (
    <div className=" max-w-7xl px-6 xl:px-28 mx-auto flex flex-col items-center py-16">
      <div className="flex items-center justify-between w-full">
        <div className="relative flex w-full items-center space-x-6">
          <h1 className="sm:text-3xl inline-flex">
            <strong className=" text-pink-500">#</strong> Skills
          </h1>
          <div className="absoute hidden h-px w-full bg-pink-500 max-w-sm md:inline-flex"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full pt-8">
        <div className="relative hidden lg:block">
          <div className="absolute w-28 h-28 border right-12"></div>
          <div className="absolute w-16 h-16 border right-0 bottom-20"></div>
          <div className="absolute bottom-28">
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
          <div className="absolute top-12 flex space-x-3">
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
        </div>
        <div className=" lg:col-span-2 w-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 text-xl gap-4 w-full">
            <div className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
              </div>
            </div>
            <div className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">SQLite PostgreSQL</p>
                <p className="">Mongo</p>
              </div>
            </div>
            <div className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
                <p className="">Git Font Awesome</p>
              </div>
            </div>
            <div className=""></div>
            <div className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">SQLite PostgreSQL</p>
                <p className="">Mongo</p>
              </div>
            </div>
            <div className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
                <p className="">Git Font Awesome</p>
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className="border">
              <h1 className="border-b px-3 py-1 font-bold">Languages</h1>
              <div className="px-3 py-1 text-gray-400">
                <p className="">TypeScript Lua</p>
                <p className="">Python JavaScript</p>
                <p className="">Git Font Awesome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
