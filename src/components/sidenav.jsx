import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false );
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z[99] md:hidden"
      />
{
      nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 m-2 p-4 hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100  m-2 p-4 hover:scale-110 ease-in duration-200 "
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="Projects.jsx"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100  m-2 p-4 hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100  m-2 p-4 hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div className="div"></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <dir className="flex flex-col left-2">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-400 m-2 p-4 hover:scale-110 cursor-pointer ease-in duration-300"
          >
            <AiOutlineHome size={17} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-400 m-2 p-4 hover:scale-110 cursor-pointer ease-in duration-300"
          >
            <BsPerson size={17} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-400 m-2 p-4 hover:scale-110 cursor-pointer ease-in duration-300"
          >
            <AiOutlineProject size={17} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-400 m-2 p-4 hover:scale-110 cursor-pointer ease-in duration-300"
          >
            <AiOutlineMail size={17} />
          </a>
        </dir>
      </div>
    </div>
  );
};

export default Sidenav;
