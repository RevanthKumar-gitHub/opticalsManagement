import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="relative h-16 w-16 md:h-24 md:w-24  rounded-full flex items-center justify-center">
        <div className="relative h-full w-full rounded-full spinner z-10 border md:border-2 border-t-4 md:border-t-8 border-transparent border-t-primary border-s-4 md:border-s-8 border-s-primary"></div>
        <div className="absolute h-14 w-14 md:h-20 md:w-20 flex items-center justify-center  bg-secondary rounded-full shadow-md font-bold text-black">
          <span className="text-xl md:text-3xl">M</span>
          <span className="text-xl -rotate-45 md:text-3xl">O</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
