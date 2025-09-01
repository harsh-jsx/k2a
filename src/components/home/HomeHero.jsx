import React from "react";
import Video from "./Video";
const HomeHero = () => {
  return (
    <div className="font-[font300] pt-5 text-center ">
      <div className="text-[10vw] justify-center flex items-center uppercase text-white leading-[9.5vw]">
        L'étincelle
      </div>
      <div className="text-[10vw] justify-center flex items-start  uppercase text-white leading-[9.5vw]">
        qui{" "}
        <div className="h-[8vw] w-[16vw] rounded-full mt-2 overflow-hidden ">
          <Video />
        </div>{" "}
        génère
      </div>
      <div className="text-[10vw]  justify-center flex items-centeruppercase text-white leading-[9.5vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHero;
