import React from "react";
import { FaBars, FaSignOutAlt, FaTimes } from "react-icons/fa";

const Navbar = ({onClickMenu,isSidebarOpen}) => {
  return (
    <div className=" bg-secondary h-fit rounded-3xl fixed top-2 left-2 right-2 z-30 flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex items-center gap-2 justify-between w-full md:w-fit">
        <div className="flex justify-center items-center">
          <span className="text-2xl font-bold text-primary">M</span>
          <span className="text-lg font-semibold pr-1">ahesh</span>
          <span className="text-2xl font-bold text-primary"> O</span>
          <span className="text-lg font-semibold">pticals</span>
        </div>
        <button  className="flex items-center cursor-pointer text-lg" onClick={onClickMenu}>
            {!isSidebarOpen ? <FaBars/> : <FaTimes/>}
        </button>
      </div>
      <div className="hidden md:full"></div>
      <div className="md:flex items-center hidden">
        <ul>
            <li className="cursor-pointer text-lg"><FaSignOutAlt/></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
