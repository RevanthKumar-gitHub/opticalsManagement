import React from "react";
import LogoutBtn from "./LogoutBtn";

const Sidebar = ({ isSidebarOpen}) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }  bg-primary bg-opacity-80 w-fit  fixed left-0 top-16 bottom-6 shadow-md py-10 px-2  rounded-e-full transistion-all ease-in-out duration-300 flex flex-col justify-between items-center`}
    >
      <div>links</div>
      <div className="flex items-center md:hidden">
        <ul>
          <li className="cursor-pointer text-lg">
            <LogoutBtn/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
