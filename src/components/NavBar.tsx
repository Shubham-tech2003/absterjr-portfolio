import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-primary-600 h-16 text-white">
      <div className="text-2xl font-bold">Aryaman</div>
      <div className="text-3xl flex">
        <BsLinkedin
          className="mr-2 cursor-pointer hover:text-white/90"
          onClick={() => window.open("https://www.linkedin.com/in/absterjr")}
        />
        <BsGithub
          className="cursor-pointer hover:text-white/90"
          onClick={() => window.open("https://github.com/absterjr")}
        />
      </div>
    </div>
  );
};

export default NavBar;
