import React from "react";
import HomeBottom from "../components/home/HomeBottom";
import HomeHero from "../components/home/HomeHero";
import Video from "../components/home/Video";
const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHero />
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;
