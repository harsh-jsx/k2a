import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className=" font-[font500] text-white flex items-center gap-5 justify-center ">
      <div className=" border-3 justify-center hover:border-green-400 hover:text-green-400  flex items-center px-10 border-white rounded-full uppercase ">
        <Link
          className="leading-[6vw] text-[6vw] mt-6  pb-5  "
          to={"/projects"}
        >
          Projects
        </Link>
      </div>
      <div className="border-3 hover:border-green-400 hover:text-green-400  flex items-center px-10 border-white rounded-full uppercase">
        <Link to="/agents" className="leading-[6vw] text-[6vw] mt-6 pb-5">
          Agents
        </Link>
      </div>
    </div>
  );
};

export default HomeBottom;
