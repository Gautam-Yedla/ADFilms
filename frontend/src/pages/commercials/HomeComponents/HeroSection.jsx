import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full lg:w-[121%] h-screen  !text-white -mt-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="../../assets/BTS1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Crafting Commercials
          <br />
          That <span className="text-amber-400">Captivate</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          From script to screen — telling brand stories with cinematic
          excellence.
        </p>
        <Link
          to="/commercials/CommercialPlaceHolderPages"
          className="inline-block my-10 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          Explore Our Work
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
