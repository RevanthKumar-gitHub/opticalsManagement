import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col md:flex-row  h-screen justify-center items-center gap-2 bg-primary bg-opacity-5">
      <div className="bg-primary p-6 flex flex-col items-center justify-center basis-1/2 rounded-b-full md:rounded-e-full md:rounded-b-none shadow-lg md:w-full ">
        <div className="text-8xl md:text-9xl ">404</div>
        <div className="text-lg md:text-2xl bg-secondary px-4 rounded-xl">Page Not Found</div>
      </div>
      <div className="text-secondary w-full px-4 flex items-center justify-center basis-1/2 rounded-xl">
        <Link to={"/app/"}><button className="btn w-fit px-6 text-black text-xl">Home</button></Link>
      </div>
    </div>
  );
};

export default PageNotFound;
